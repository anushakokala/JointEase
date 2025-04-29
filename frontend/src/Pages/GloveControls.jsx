import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GloveControls = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/dashboard");
    };

    const [toggles, setToggles] = useState({
        ENS: false,
        heating: false,
    });

    const handleToggle = (key) => {
        setToggles(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="min-h-screen p-6 flex flex-col items-start">
            <div className="mb-10 mt-12 ml-56 flex items-center gap-4">
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
                <h2 className="text-black text-4xl font-bold ">Glove Controls</h2>
            </div>
            <div className="w-[800px] h-[80px] ml-56 mt-14 p-2 pl-5 rounded-md border border-[#BBBBBB] flex items-center justify-between bg-[#ECF1FF]">
                <h2 className="text-md font-bold text-black mt-2">
                    Electric Nerve Stimulation
                </h2>
                <button
                    onClick={() => handleToggle('ENS')}
                    className={`relative w-16 h-8 mr-4 rounded-full transition-colors focus:outline-none ${toggles.ENS ? 'bg-blue' : 'bg-gray'}`}
                >
                    <span
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${toggles.ENS ? 'translate-x-8' : ''}`}
                    />
                </button>
            </div>
            <div className="w-[800px] h-[80px] ml-56 mt-14 p-2 pl-5 rounded-md border border-[#BBBBBB] flex items-center justify-between bg-[#ECF1FF]">
                <h2 className="text-md font-bold text-black mt-2">
                    Heating
                </h2>
                <button
                    onClick={() => handleToggle('heating')}
                    className={`relative w-16 h-8 mr-4 rounded-full transition-colors focus:outline-none ${toggles.heating ? 'bg-blue' : 'bg-gray'}`}
                >
                    <span
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${toggles.heating ? 'translate-x-8' : ''}`}
                    />
                </button>
            </div>
            <div className="w-[800px] h-[80px] ml-56 mt-14 pl-5 pr-5 rounded-md border border-[#BBBBBB] flex items-center bg-[#ECF1FF] gap-8">
                <h2 className="text-md font-bold text-black mt-2">
                    Voltage
                </h2>
                <input
                    type="number"
                    placeholder="Enter voltage"
                    className="w-[550px] h-[45px] ml-7 mt-2 px-3 py-2 text-black bg-white rounded-md border border-[#BBBBBB] focus:outline-none"
                />
            </div>
        </div>
    );
};

export default GloveControls;
