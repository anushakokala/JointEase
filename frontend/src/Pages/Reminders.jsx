import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reminders = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dose, setDose] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState("");
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/dashboard");
    };
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(prev => !prev);
    };
    return (
        <div className="min-h-screen p-6 flex flex-col items-start">
            <div className="mb-10 mt-12 ml-28 flex items-center gap-4">
                <button onClick={goBack}>
                    <div>
                        <svg
                            width="70"
                            height="62"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="48" height="48" rx="16" fill="white" />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="47"
                                height="47"
                                rx="15.5"
                                stroke="black"
                                stroke-opacity="0.35"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M26.9315 27.9596C27.1647 28.1969 27.1655 28.5824 26.9333 28.8207C26.7221 29.0374 26.391 29.0577 26.1573 28.8814L26.0904 28.8226L21.2824 23.9319C21.0697 23.7155 21.0504 23.3761 21.2244 23.1373L21.2824 23.069L26.0903 18.1775C26.3236 17.9402 26.701 17.941 26.9332 18.1792C27.1444 18.3959 27.1629 18.7342 26.9893 18.9722L26.9315 19.0403L22.5479 23.5006L26.9315 27.9596Z"
                                fill="#040415"
                            />
                        </svg>
                    </div>
                </button>
                <h2 className="text-black text-4xl font-bold">Add Medicine </h2>
            </div>
            <h2 className="flex flex-col items-center text-black text-xl font-bold mb-4 px-[120px]">Name</h2>
            <input
                placeholder="Vitamin C"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
            />
            <h2 className="flex flex-col items-center text-black text-xl font-bold mb-4 px-[120px]">Type</h2>
            <input
                placeholder="Capsule"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
            />
            <h2 className="flex flex-col items-center text-black text-xl font-bold mb-4 px-[120px]">Dose</h2>
            <input
                placeholder="Dose"
                value={dose}
                onChange={(event) => setDose(event.target.value)}
                className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
            />
            <h2 className="flex flex-col items-center text-black text-xl font-bold mb-4 px-[120px]">Amount</h2>
            <input
                placeholder="2"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
            />
            <h2 className="flex flex-col items-center text-black text-xl font-bold mb-6 px-[120px]">Reminders</h2>
            <label htmlFor="date" className="text-md font-bold ml-[115px] mb-2">
                Date
            </label>
            <input
                type="datetime-local"
                value={date}
                id="date"
                onChange={(event) => setDate(event.target.value)}
                className="w-[800px] h-[50px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
            />
            <h2 className="w-[800px] h-[50px] px-3 py-2.5 ml-28 text-black bg-rgba(0, 0, 0, 0.25); text-md p-4 mb-12 rounded-md border border-[#BBBBBB]">
                Turn on Reminder
                <div className="flex items-center">
                    <button
                        onClick={handleToggle}
                        className={`relative w-16 h-8 rounded-full ml-[700px] -mt-6 transition-colors  focus:outline-none ${isToggled ? 'bg-blue' : 'bg-gray'
                            }`}
                    >
                        <span
                            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isToggled ? 'translate-x-8' : ''
                                }`}
                        />
                    </button>
                </div>
            </h2>
            <button className="bg-blue ml-[380px] text-white text-lg font-bold px-16 py-2 rounded-md mt-2">
                Add
            </button>
        </div>
    );
};

export default Reminders;




