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

  const handleToggle = async (key) => {
    const newValue = !toggles[key];
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (key === "ENS") {
      try {
        const response = await fetch("/api/glove-controls", {
          // Replace with your actual backend API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ens_enabled: newValue ? 1 : 0 }),
        });

        if (!response.ok) {
          console.error("Failed to update ENS status on the backend.");
          // Optionally, revert the toggle state on error
          setToggles((prev) => ({ ...prev, ENS: !newValue }));
        } else {
          console.log("ENS status updated successfully on the backend.");
        }
      } catch (error) {
        console.error("Error communicating with the backend:", error);
        // Optionally, revert the toggle state on error
        setToggles((prev) => ({ ...prev, ENS: !newValue }));
      }
    } else if (key === "heating") {
      try {
        const response = await fetch("/api/glove-controls", {
          // Replace with your actual backend API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ heating_enabled: newValue ? 1 : 0 }),
        });

        if (!response.ok) {
          console.error("Failed to update heating status on the backend.");
          // Optionally, revert the toggle state on error
          setToggles((prev) => ({ ...prev, heating: !newValue }));
        } else {
          console.log("heating status updated successfully on the backend.");
        }
      } catch (error) {
        console.error("Error communicating with the backend:", error);
        // Optionally, revert the toggle state on error
        setToggles((prev) => ({ ...prev, heating: !newValue }));
      }
    }
  };

  const [tempC, setTempC] = useState("");
  const [tempF, setTempF] = useState("");
  const [humidity, setHumidity] = useState("");
  const [messageFromServer, setMessageFromServer] = useState("");
  const handleTemperature = async () => {
    const tmp1 = 1;
    try {
      const response = await fetch("/api/glove-controls", {
        // Replace with your actual backend API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gettemp: tmp1 }),
      });

      if (!response.ok) {
        console.error("Failed to set voltage on the backend.");
      } else {
        console.log("Got Temp  successfully on the backend.");
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          // Optionally, clear the input field
          setTempC(data.temperature_c);
          setTempF(data.temperature_f);
          setHumidity(data.humidity);
          setMessageFromServer(data.message);
        });
      }
    } catch (error) {
      console.error("Error communicating with the backend:", error);
    }
  };
  const [voltage, setVoltage] = useState("");

  const handleVoltageChange = (event) => {
    setVoltage(event.target.value);
  };

  const handleSetVoltage = async () => {
    try {
      console.log(voltage);
      const response = await fetch("/api/glove-controls", {
        // Replace with your actual backend API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voltage: parseInt(voltage, 10) }),
      });

      if (!response.ok) {
        console.error("Failed to set voltage on the backend.");
      } else {
        console.log("Voltage set successfully on the backend.");
        // Optionally, clear the input field
        setVoltage("");
      }
    } catch (error) {
      console.error("Error communicating with the backend:", error);
    }
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
          onClick={() => handleToggle("ENS")}
          className={`relative w-16 h-8 mr-4 rounded-full transition-colors focus:outline-none ${
            toggles.ENS ? "bg-blue" : "bg-gray"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
              toggles.ENS ? "translate-x-8" : ""
            }`}
          />
        </button>
      </div>
      <div className="w-[800px] h-[80px] ml-56 mt-14 p-2 pl-5 rounded-md border border-[#BBBBBB] flex items-center justify-between bg-[#ECF1FF]">
        <h2 className="text-md font-bold text-black mt-2">Heating</h2>
        <button
          onClick={() => handleToggle("heating")}
          className={`relative w-16 h-8 mr-4 rounded-full transition-colors focus:outline-none ${
            toggles.heating ? "bg-blue" : "bg-gray"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
              toggles.heating ? "translate-x-8" : ""
            }`}
          />
        </button>
      </div>
      <div className="ml-56 mt-200">
        <button
          onClick={handleTemperature}
          className="bg-black w-[250px] -ml mt-10 text-white text-lg font-bold px-16 py-3 rounded-md basis-128"
        >
          Check Temperature
        </button>
        <div className="w-[800px] h-[80px] rounded-md border border-[#BBBBBB] flex items-center gap-4 bg-[#ECF1FF] pl-5 pr-5 justify-between">
          <div className="basis-64">Temperature (C): {tempC} Celsius</div>
          <div className="basis-64">Temperature (F): {tempF} Fahrenheit</div>
          <div className="basis-64">Humidity: {humidity} %</div>
        </div>
      </div>
      <div className="w-[800px] h-[80px] ml-56 mt-14 pl-5 pr-5 rounded-md border border-[#BBBBBB] flex items-center bg-[#ECF1FF] gap-8">
        <h2 className="text-md font-bold text-black mt-2">Voltage</h2>
        <input
          type="number"
          placeholder="Enter voltage"
          className="w-[550px] h-[45px] ml-7 mt-2 px-3 py-2 text-black bg-white rounded-md border border-[#BBBBBB] focus:outline-none"
          value={voltage}
          onChange={(event) => setVoltage(event.target.value)}
        />
      </div>
      <div className="ml-56 mt-200">
        <button
          onClick={handleSetVoltage}
          className="bg-black w-[250px] -ml mt-10 text-white text-lg font-bold px-16 py-3 rounded-md "
        >
          Set Voltage
        </button>
      </div>
    </div>
  );
};

export default GloveControls;
