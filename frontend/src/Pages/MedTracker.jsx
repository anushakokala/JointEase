import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedTracker = () => {
    const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const [selectedDay, setSelectedDay] = useState(null);
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/dashboard");
    };

    const handleDayClick = (day) => {
        setSelectedDay(day === selectedDay ? null : day);
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
                                strokeOpacity="0.35"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M26.9315 27.9596C27.1647 28.1969 27.1655 28.5824 26.9333 28.8207C26.7221 29.0374 26.391 29.0577 26.1573 28.8814L26.0904 28.8226L21.2824 23.9319C21.0697 23.7155 21.0504 23.3761 21.2244 23.1373L21.2824 23.069L26.0903 18.1775C26.3236 17.9402 26.701 17.941 26.9332 18.1792C27.1444 18.3959 27.1629 18.7342 26.9893 18.9722L26.9315 19.0403L22.5479 23.5006L26.9315 27.9596Z"
                                fill="#040415"
                            />
                        </svg>
                    </div>
                </button>
                <h2 className="text-black text-4xl font-bold">Medication Tracker</h2>
            </div>

            <div className="ml-32 pb-4">
                <h2 className="text-black text-xl font-bold mt-2">Weekly View</h2>
            </div>

            <div className="ml-32 mt-4 flex gap-24">
                {days.map((day) => (
                    <button
                        key={day}
                        className="flex flex-col items-center text-lg font-semibold mb-24"
                        onClick={() => handleDayClick(day)}
                        style={{ color: "black" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="65"
                            viewBox="0 0 31 31"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_6_68)">
                                <path
                                    d="M5.81247 16.1458L16.1458 5.8125C17.3448 4.6135 18.971 3.93991 20.6666 3.93991C22.3623 3.93991 23.9885 4.6135 25.1875 5.8125C26.3865 7.0115 27.0601 8.63769 27.0601 10.3333C27.0601 12.029 26.3865 13.6552 25.1875 14.8542L14.8541 25.1875C13.6551 26.3865 12.0289 27.0601 10.3333 27.0601C8.63766 27.0601 7.01147 26.3865 5.81247 25.1875C4.61347 23.9885 3.93988 22.3623 3.93988 20.6667C3.93988 18.971 4.61347 17.3448 5.81247 16.1458"
                                    stroke={selectedDay === day ? "#407CE2" : "#D9D9D9"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.9792 10.9792L20.0209 20.0208"
                                    stroke={selectedDay === day ? "#407CE2" : "#D9D9D9"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                        {day}
                    </button>
                ))}
            </div>

            <div className="w-[550px] h-[250px] ml-40 mb-6 flex-shrink-0 rounded-[10px] border border-black/25 p-6">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-xl font-bold">Medicine Name</div>
                        <div className="w-[90px] h-[40px] pl-1 py-1 flex-shrink-0 rounded-[8px] bg-blue text-white font-bold text-lg flex items-center justify-center">
                            10:00am
                        </div>
                    </div>
                    <div className="flex  mb-[90px] w-[132px] h-[30px] flex-col justify-center flex-shrink-0 text-black font-roboto text-[15px] font-normal leading-[16px] tracking-[0.5px] mt-2">
                        Dosage + amount
                    </div>
                    <div className="w-[90px] h-[40px] pl-1 py-1 flex-shrink-0 rounded-[8px] bg-blue text-white font-bold text-lg flex items-center justify-center">
                       Take
                    </div>
                    <div className="w-[90px] h-[40px]  ml-[410px] -mt-10 pl-1 py-1 flex-shrink-0 rounded-[8px] bg-[#FF7F7F] text-white font-bold text-lg flex items-center justify-center">
                       Edit
                    </div>
                </div>
            </div>
            <div className="w-[550px] h-[250px] ml-40 mb-6 flex-shrink-0 rounded-[10px] border border-black/25 p-6">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-xl font-bold">Medicine Name</div>
                        <div className="w-[90px] h-[40px] pl-1 py-1 flex-shrink-0 rounded-[8px] bg-blue text-white font-bold text-lg flex items-center justify-center">
                            11:00am
                        </div>
                    </div>
                    <div className="flex w-[132px]  mb-[90px] h-[30px] flex-col justify-center flex-shrink-0 text-black font-roboto text-[15px] font-normal leading-[16px] tracking-[0.5px] mt-2">
                        Dosage + amount
                    </div>
                    <div className="w-[90px] h-[40px] pl-1 py-1 flex-shrink-0 rounded-[8px] bg-blue text-white font-bold text-lg flex items-center justify-center">
                       Take
                    </div>
                    <div className="w-[90px] h-[40px]  ml-[410px] -mt-10 pl-1 py-1 flex-shrink-0 rounded-[8px] bg-[#FF7F7F] text-white font-bold text-lg flex items-center justify-center">
                       Edit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedTracker;
