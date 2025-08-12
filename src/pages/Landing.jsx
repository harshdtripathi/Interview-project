import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "../assets/Vector.png";

const Landing = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === "student") {
      navigate("/student");
    } else if (selectedRole === "teacher") {
      navigate("/teacher");
    }
  };

  const cardBaseClasses =
    "w-full sm:w-[343px] bg-white shadow-sm p-6 rounded-lg flex flex-col gap-2 cursor-pointer hover:shadow-md transition text-left";

  const inactiveBorder = "border border-[#D9D9D9]";
  const activeBorder =
    "border-[3px] rounded-[10px] border-transparent bg-clip-padding relative";
  const activeGradientBorder = {
    borderImage: "linear-gradient(90deg, #7765DA, #1D68BD) 1",
  };

  return (
    <div className="w-full max-w-[900px] mx-auto flex flex-col gap-8 justify-center items-center py-16 px-4">
      {/* Tag */}
      <div
        style={{
          background: "linear-gradient(90deg, #7565D9, #4D0ACD)",
        }}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-medium"
      >
        <img src={StarIcon} alt="Star" className="w-4 h-4" />
        <span>Intervue Poll</span>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl  text-black">
          Welcome to the <span className="font-bold">Live Polling System</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-[500px]">
          Please select the role that best describes you to begin using the live
          polling system
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
        {/* Student Card */}
        <div
          onClick={() => setSelectedRole("student")}
          className={`${cardBaseClasses} ${
            selectedRole === "student" ? activeBorder : inactiveBorder
          }`}
          style={
            selectedRole === "student" ? activeGradientBorder : undefined
          }
        >
          <p className="text-lg font-bold text-black">I’m a Student</p>
          <span className="text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </span>
        </div>

        {/* Teacher Card */}
        <div
          onClick={() => setSelectedRole("teacher")}
          className={`${cardBaseClasses} ${
            selectedRole === "teacher" ? activeBorder : inactiveBorder
          }`}
          style={
            selectedRole === "teacher" ? activeGradientBorder : undefined
          }
        >
          <p className="text-lg font-bold text-black">I’m a Teacher</p>
          <span className="text-sm text-gray-500">
            Submit answers and view live poll results in real-time.
          </span>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        style={{
          width: "233.93px",
          height: "57.58px",
          borderRadius: "34px",
          background:
            "linear-gradient(99.18deg, #8F64E1 -46.89%, #1D68BD 223.45%)",
          opacity: selectedRole ? 1 : 0.6,
        }}
        className="text-white font-medium hover:opacity-90 transition disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
};

export default Landing;
