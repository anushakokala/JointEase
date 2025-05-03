from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity
from flask_cors import CORS  # Import CORS
import logging
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = "super-secret" 
jwt = JWTManager(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)  

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.username}>'

with app.app_context():
    db.create_all() # Ensure tables are created (run only once or with migrations)
    
@app.route('/')  # Add this route to handle GET requests to the root path
def index():
    return "Flask backend is running!"  # Or any other message/data you want to display


@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('email')  # Using email as username for simplicity
    email = data.get('email')
    password = data.get('password')

    if not username or not password or not email:
        return jsonify({'message': 'All fields are required'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'User with this email already exists'}), 409

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Registration successful'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        return jsonify({'message': f'Hello, {user.username}! This is a protected route.'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404
    
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

glove_state = {
    'ens_enabled': False,
    'heating_enabled': False,
    'voltage': 0
}

RASPBERRY_PI_URL = 'http://10.0.1.9:5011'
POTENTIOMETER_ON = '/potentiometer/1'
POTENTIOMETER_OFF = '/potentiometer/0'
HEATPAD_ON = '/heatpad/1'
HEATPAD_OFF = '/heatpad/0'
SET_POTENTIOMETER = '/setpotentiometer/'
GET_TEMP = '/gettemp'

@app.route('/api/glove-controls', methods=['POST'])
def update_glove_controls():
    data = request.get_json()

    if data is None:
        logger.warning("Received request with invalid JSON data")
        return jsonify({'error': 'Invalid JSON data'}), 400

    ens_enabled = data.get('ens_enabled')
    heating_enabled = data.get('heating_enabled')
    print(f'heating enabled = { heating_enabled} ')
    voltage = data.get('voltage')
    get_temp = data.get('gettemp')
    print(get_temp)
    url = RASPBERRY_PI_URL
    pi_response_data = None
    if ens_enabled is not None:
        glove_state['ens_enabled'] = bool(ens_enabled)
        logger.info(f"ENS Status Updated: {glove_state['ens_enabled']}")
        if bool(ens_enabled):
            url = url + POTENTIOMETER_ON
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            print(f"Raspberry Pi response: {pi_response_data}")
        else :
            url = url + POTENTIOMETER_OFF
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            print(f"Raspberry Pi response: {pi_response_data}")                
        #return jsonify({'message':pi_response_data.message}), 200
        return jsonify(pi_response_data), 200
    
    if heating_enabled is not None:
        glove_state['heating_enabled'] = bool(heating_enabled)
        logger.info(f"ENS Status Updated: {glove_state['ens_enabled']}")
        if bool(heating_enabled):
            url = url + HEATPAD_ON
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            print(f"Raspberry Pi response: {pi_response_data}")
        else :
            url = url + HEATPAD_OFF
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            print(f"Raspberry Pi response: {pi_response_data}")                
        #return jsonify({'message':pi_response_data.message}), 200
        return jsonify(pi_response_data), 200

    if get_temp is not None:
            url = url + GET_TEMP
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            print(f"Raspberry Pi response: {pi_response_data}")
            return jsonify(pi_response_data), 200
    if voltage is not None:
        try:
            parsed_voltage = int(voltage)
            glove_state['voltage'] = parsed_voltage
            logger.info(f"Voltage Set: {glove_state['voltage']}")
            url = url + SET_POTENTIOMETER + str(parsed_voltage)
            print('Calling URL = ' + url)
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            pi_response_data = response.json()
            return jsonify({'message': 'Voltage set successfully'}), 200
        except ValueError:
            logger.warning(f"Received invalid voltage value: {voltage}")
            #return jsonify({'error': 'Invalid voltage value'}), 400
            return jsonify(pi_response_data), 200

    logger.warning(f"Received request with invalid parameters: {data}")
    return jsonify({'error': 'Invalid request parameters'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)