import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    console.log("Logged out");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className=" ml-[-150px] w-full max-w-2xl rounded-3xl p-10 space-y-14">
        <div className="flex items-center space-x-4 ">
          <button onClick={goBack} className="focus:outline-none">
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
          </button>
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>

        {/* Sections */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-600">Update your personal information</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Account</h2>
          <p className="text-black">Change your password and manage sessions</p>
        </section>

        <div className="pt-6">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full text-red-600 border border-red-500 hover:bg-red-500 hover:text-white font-semibold py-2.5 px-5 rounded-xl transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
