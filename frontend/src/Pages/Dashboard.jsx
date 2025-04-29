import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const goToSymptom = () => {
    navigate("/symptomtracker");
  };

  const goToHistory = () => {
    navigate("/patienthistory");
  };

  const goToReminders = () => {
    navigate("/reminders");
  };

  const goToMeds = () => {
    navigate("/medtracker");
  };
  const goToControls = () => {
    navigate("/glovecontrols");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col self-stretch min-h-screen">
        <div>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            className="w-[1200px] bg-[#FAFAFAED] pt-2 pb-2 pl-2 pr-2 mt-10 mb-20 ml-10 mr-10 rounded-xl border-[0.3px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="text-[30px] font-bold mb-10 ml-10 mr-10">
          <div>Welcome User!</div>
        </div>
        <div className="flex justify-center mb-10 space-x-10">
          <div className="flex flex-col items-center">
            <button
              className="w-20 h-20 bg-blue rounded-full flex items-center justify-center"
              onClick={goToSymptom}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="50"
                viewBox="0 0 31 31"
                fill="none"
              >
                <g clip-path="url(#clip0_6_57)">
                  <path
                    d="M7.75 5.16667H6.45833C5.77319 5.16667 5.11611 5.43884 4.63164 5.92331C4.14717 6.40778 3.875 7.06486 3.875 7.75V12.2708C3.875 14.155 4.62347 15.9619 5.95576 17.2942C7.28805 18.6265 9.09502 19.375 10.9792 19.375C12.8633 19.375 14.6703 18.6265 16.0026 17.2942C17.3349 15.9619 18.0833 14.155 18.0833 12.2708V7.75C18.0833 7.06486 17.8112 6.40778 17.3267 5.92331C16.8422 5.43884 16.1851 5.16667 15.5 5.16667H14.2083"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3333 19.375C10.3333 20.3927 10.5338 21.4005 10.9232 22.3408C11.3127 23.2811 11.8836 24.1354 12.6032 24.8551C13.3229 25.5747 14.1772 26.1456 15.1175 26.5351C16.0578 26.9245 17.0656 27.125 18.0833 27.125C19.1011 27.125 20.1088 26.9245 21.0491 26.5351C21.9894 26.1456 22.8437 25.5747 23.5634 24.8551C24.283 24.1354 24.8539 23.2811 25.2434 22.3408C25.6329 21.4005 25.8333 20.3927 25.8333 19.375V15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.2083 3.875V6.45833"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75 3.875V6.45833"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.8333 15.5C27.2601 15.5 28.4167 14.3434 28.4167 12.9167C28.4167 11.4899 27.2601 10.3333 25.8333 10.3333C24.4066 10.3333 23.25 11.4899 23.25 12.9167C23.25 14.3434 24.4066 15.5 25.8333 15.5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <div className="text-lg text-center mt-4">Symptom Tracker</div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 bg-blue rounded-full flex items-center justify-center"
             onClick={goToMeds}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="50"
                viewBox="0 0 31 31"
                fill="none"
              >
                <g clip-path="url(#clip0_6_68)">
                  <path
                    d="M5.81247 16.1458L16.1458 5.8125C17.3448 4.6135 18.971 3.93991 20.6666 3.93991C22.3623 3.93991 23.9885 4.6135 25.1875 5.8125C26.3865 7.0115 27.0601 8.63769 27.0601 10.3333C27.0601 12.029 26.3865 13.6552 25.1875 14.8542L14.8541 25.1875C13.6551 26.3865 12.0289 27.0601 10.3333 27.0601C8.63766 27.0601 7.01147 26.3865 5.81247 25.1875C4.61347 23.9885 3.93988 22.3623 3.93988 20.6667C3.93988 18.971 4.61347 17.3448 5.81247 16.1458"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9792 10.9792L20.0209 20.0208"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <div className="text-lg text-center mt-4">Meds Tracker</div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 bg-blue rounded-full flex items-center justify-center"
             onClick={goToControls}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="32"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 4H1C0.447715 4 0 4.44772 0 5V15C0 15.5523 0.447715 16 1 16H3C3.55228 16 4 15.5523 4 15V5C4 4.44772 3.55228 4 3 4Z"
                  fill="white"
                />
                <path
                  d="M9 6H7C6.44772 6 6 6.44772 6 7V15C6 15.5523 6.44772 16 7 16H9C9.55228 16 10 15.5523 10 15V7C10 6.44772 9.55228 6 9 6Z"
                  fill="white"
                />
                <path
                  d="M15 0H13C12.4477 0 12 0.447715 12 1V15C12 15.5523 12.4477 16 13 16H15C15.5523 16 16 15.5523 16 15V1C16 0.447715 15.5523 0 15 0Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="text-lg text-center mt-4">Glove Controls</div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 bg-blue rounded-full flex items-center justify-center"
              onClick={goToHistory}>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 16 21" fill="none">
                <path d="M12 3H13C14.1046 3 15 3.89543 15 5V18C15 19.1046 14.1046 20 13 20H3C1.89543 20 1 19.1046 1 18V5C1 3.89543 1.89543 3 3 3H4M12 3C12 4.10457 11.1046 5 10 5H6C4.89543 5 4 4.10457 4 3M12 3C12 1.89543 11.1046 1 10 1H6C4.89543 1 4 1.89543 4 3M4.00004 12H5.50004L7.00004 14.5L9.00004 9.5L10.5 12.5H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <div className="text-lg text-center mt-4">History</div>
          </div>
        </div>
        <div className="flex items-start mb-6 mx-10 space-x-6">
          <div className="flex-1 bg-blue rounded-xl px-4 py-6 h-[200px] flex flex-col justify-between">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 4H1C0.447715 4 0 4.44772 0 5V15C0 15.5523 0.447715 16 1 16H3C3.55228 16 4 15.5523 4 15V5C4 4.44772 3.55228 4 3 4Z"
                  fill="white"
                />
                <path
                  d="M9 6H7C6.44772 6 6 6.44772 6 7V15C6 15.5523 6.44772 16 7 16H9C9.55228 16 10 15.5523 10 15V7C10 6.44772 9.55228 6 9 6Z"
                  fill="white"
                />
                <path
                  d="M15 0H13C12.4477 0 12 0.447715 12 1V15C12 15.5523 12.4477 16 13 16H15C15.5523 16 16 15.5523 16 15V1C16 0.447715 15.5523 0 15 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white text-lg font-bold self-start">
              View Stats
            </div>
          </div>
          <button className="flex-1 bg-blue rounded-xl px-4 py-6 h-[200px] flex flex-col justify-between"
            onClick={goToReminders}>
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.144 3.63479C6.478 4.07463 6.3922 4.70196 5.95236 5.03596C4.89303 5.84038 4.00483 6.84806 3.33976 7.99999C3.06362 8.47828 2.45203 8.64216 1.97374 8.36602C1.49545 8.08987 1.33157 7.47828 1.60771 6.99999C2.4058 5.61767 3.47164 4.40846 4.74283 3.44315C5.18267 3.10915 5.80999 3.19495 6.144 3.63479ZM17.856 3.63479C18.19 3.19495 18.8174 3.10915 19.2572 3.44315C20.5284 4.40846 21.5942 5.61767 22.3923 6.99999C22.6685 7.47828 22.5046 8.08987 22.0263 8.36602C21.548 8.64216 20.9364 8.47828 20.6603 7.99999C19.9952 6.84806 19.107 5.84038 18.0477 5.03596C17.6078 4.70196 17.522 4.07463 17.856 3.63479ZM12 6.00002C8.13402 6.00002 5.00002 9.13403 5.00002 13C5.00002 16.866 8.13402 20 12 20C15.866 20 19 16.866 19 13C19 9.13403 15.866 6.00002 12 6.00002ZM3.00002 13C3.00002 8.02946 7.02945 4.00002 12 4.00002C16.9706 4.00002 21 8.02946 21 13C21 17.9706 16.9706 22 12 22C7.02945 22 3.00002 17.9706 3.00002 13ZM12 8.00002C12.5523 8.00002 13 8.44774 13 9.00002V12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H12C11.4477 14 11 13.5523 11 13V9.00002C11 8.44774 11.4477 8.00002 12 8.00002Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white text-lg font-bold self-start">
              Reminders
            </div>
          </button>
        </div>
        <div className="flex justify-between items-center ml-12 mb-16 mr-[40px]">
          <div className="flex-1 text-md font-bold">
            Recommendation Articles
          </div>
          <button className="flex-1 text-blue text-sm text-right mr-4">
            See all
          </button>
        </div>
        <button className="flex items-start pt-[13px] pb-4 pl-4 -mt-10 mb-10 mx-10 rounded-xl border border-[#00000080]">
          <div className="flex flex-col items-start bg-blue text-left p-3 mr-5 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.5 14H9C10 14 11 15.5 12 15.5C12.8643 15.5 14.4757 14.7529 15.2199 16.1645C15.4551 16.6106 15.141 17.1203 14.6751 17.3135C13.596 17.7609 12.3941 18.3686 12 18.5L9 17.5M15.5 16.5L20.076 14.6696C20.3538 14.5585 20.6559 14.5223 20.9521 14.5646C21.9989 14.7141 22.2946 16.0853 21.4025 16.653L13.7586 21.5173C13.2761 21.8243 12.6853 21.9101 12.1354 21.753L2.5 19M12 12C10.075 11.3223 6.5 8.4091 6.5 5.20455C6.5 3.43474 7.85434 2 9.525 2C10.5481 2 11.4526 2.53804 12 3.36158C12.5474 2.53804 13.4519 2 14.475 2C16.1457 2 17.5 3.43474 17.5 5.20455C17.5 8.4091 13.925 11.3223 12 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-md font-bold py-3">Ways to manage Arthritis Pain</div>
        </button>

        <button className="flex items-start pt-[13px] pb-4 pl-4 -mt-4 mx-10 mb-10 rounded-xl border border-[#00000080]">
          <div className="flex flex-col items-start bg-blue text-left p-3 mr-5 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 14.5H12M12 14.5H15M12 14.5V11.5M12 14.5V17.5M3 8V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V8M3 8H21M3 8C3 5.79086 4.79086 4 7 4M21 8C21 5.79086 19.2091 4 17 4M7 2V4M7 4H17M17 2V4"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-md font-bold py-3">
            Improve your Joint Pain & Stiffness
          </div>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;