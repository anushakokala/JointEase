import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PatientHistory = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


      /*useEffect(() => {
    const fetchPatientData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await fetch("/api/protected", {
            // Or a specific /api/patienthistory endpoint
            headers: {
              Authorization: Bearer ${token},
            },
          });
          if (!response.ok) {
            throw new Error(HTTP error! status: ${response.status});
          }
          const data = await response.json();
          setPatientData(data); // Assuming your protected route returns some user-specific data
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
          console.error("Error fetching patient data:", error);
        }
      } else {
        setError("Not authenticated");
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <div>Loading patient data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }*/

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-start min-h-screen p-6 w-3/4 ">
        <button onClick={goBack} className="-mb-[210px] mt-16 -ml-[15px] flex items-center gap-4">
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
        <h2 className="text-black text-4xl font-bold mb-14 ml-[76px] pt-40">Patient History</h2>
        <h2 className="text-black text-xl font-bold mb-4">Persistent Symptoms</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="w-28 h-10 rounded-xl bg-darkgray flex items-center justify-center">
            <button>Fatigue</button>
          </div>
          <div className="w-28 h-10 rounded-xl bg-darkgray flex items-center justify-center">
            <button>Joint pain</button>
          </div>
          <div className="w-28 h-10 rounded-xl bg-darkgray flex items-center justify-center">
            <button>Tenderness</button>
          </div>
        </div>
        <button className="w-28 h-10 rounded-xl bg-blue font-medium text-white text-lg flex items-center justify-center mb-6">
          Add
        </button>
        
        <h2 className="text-black text-xl font-bold mb-4">Type of Arthritis</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="w-40 h-10 rounded-xl bg-darkgray flex items-center justify-center">
            <button>Rheumatoid Arthritis</button>
          </div>
          <div className="w-40 h-10 rounded-xl bg-darkgray flex items-center justify-center">
            <button>Osteoarthritis</button>
          </div>
        </div>
        
        <div className="text-black text-xl font-bold mb-2">Name</div>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="text-black bg-white border border-black pt-2 pb-2 pl-5 pr-10 mb-6 w-[1000px] rounded-md focus:outline-none"
        />

        <div className="text-black text-xl font-bold mb-2">Age</div>
        <input
          placeholder="Enter your age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="text-black bg-white border border-black pt-2 pb-2 pl-5 pr-10 mb-6 w-[1000px] rounded-md focus:outline-none"
        />

        <div className="text-black text-xl font-bold mb-2">Gender</div>
        <input
          placeholder="Enter gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          className="text-black bg-white border border-black pt-2 pb-2 pl-5 pr-10 mb-12 w-[1000px] rounded-md focus:outline-none"
        />

        <button className="bg-black text-white text-lg font-bold px-16 py-3 rounded-md mt-6 ">
          Save
        </button>
      </div>
    </div>
  );
};

export default PatientHistory;
