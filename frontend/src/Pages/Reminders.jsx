import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Reminders = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dose, setDose] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [isToggled, setToggled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const editing = location.state?.editIndex;

    const handleToggle = () => {
        setToggled(prev => !prev);
    };

    useEffect(() => {
        if (editing !== undefined) {
            const stored = JSON.parse(localStorage.getItem("medicines")) || [];
            const med = stored[editing];
            if (med) {
                setName(med.name);
                setType(med.type);
                setDose(med.dose);
                setAmount(med.amount);
                setDate(med.date);
                setDay(med.day || "");
                setToggled(med.reminder);
            }
        }
    }, [editing]);

    const handleAddOrUpdate = () => {
        const newMed = { name, type, dose, amount, date, day, reminder: isToggled };
        const existing = JSON.parse(localStorage.getItem("medicines")) || [];

        if (editing !== undefined) {
            existing[editing] = newMed;
        } else {
            existing.push(newMed);
        }

        localStorage.setItem("medicines", JSON.stringify(existing));
        navigate("/medtracker");
    };

    const goBack = () => {
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen p-6 pl-[159px] flex flex-col items-start">
            <div className="mb-10 mt-12 ml-28 flex items-center gap-4">
                <button onClick={goBack}>
                    <svg width="70" height="62" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="16" fill="white" />
                        <rect x="0.5" y="0.5" width="47" height="47" rx="15.5" stroke="black" strokeOpacity="0.35" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.9315 27.9596C27.1647 28.1969 27.1655 28.5824 26.9333 28.8207C26.7221 29.0374 26.391 29.0577 26.1573 28.8814L26.0904 28.8226L21.2824 23.9319C21.0697 23.7155 21.0504 23.3761 21.2244 23.1373L21.2824 23.069L26.0903 18.1775C26.3236 17.9402 26.701 17.941 26.9332 18.1792C27.1444 18.3959 27.1629 18.7342 26.9893 18.9722L26.9315 19.0403L22.5479 23.5006L26.9315 27.9596Z"
                            fill="#040415"
                        />
                    </svg>
                </button>
                <h2 className="text-black text-4xl font-bold">Add Medicine</h2>
            </div>

            {/* Inputs */}
            {[
                ["Name", name, setName],
                ["Type", type, setType],
                ["Dose", dose, setDose],
                ["Amount", amount, setAmount]
            ].map(([label, val, setter], i) => (
                <React.Fragment key={i}>
                    <h2 className="text-black text-xl font-bold mb-4 px-[120px]">{label}</h2>
                    <input
                        value={val}
                        onChange={(e) => setter(e.target.value)}
                        className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue focus:outline-none"
                    />
                </React.Fragment>
            ))}

            <h2 className="text-black text-xl font-bold mb-4 px-[120px]">Day</h2>
            <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-[800px] ml-28 text-black bg-white text-md p-4 mb-10 rounded-md border border-blue"
            >
                <option value="">Select a Day</option>
                <option value="Mon">Monday</option>
                <option value="Tues">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thur">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
                <option value="Sun">Sunday</option>
            </select>

            <label htmlFor="date" className="text-md font-bold ml-[115px] mb-2">Date</label>
            <input
                type="datetime-local"
                value={date}
                id="date"
                onChange={(e) => setDate(e.target.value)}
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

            <button
                onClick={handleAddOrUpdate}
                className="bg-black ml-28 text-white text-lg font-bold px-16 py-3 rounded-md mt-2"
            >
                {editing !== undefined ? "Update" : "Add"}
            </button>
        </div>
    );
};

export default Reminders;
