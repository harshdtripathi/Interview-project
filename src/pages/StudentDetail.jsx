import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "../assets/Vector.png";

const StudentDetail = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim() !== "") {
      navigate("/questions");
    }
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

      {/* Heading + Subheading */}
      <div className="flex flex-col items-center text-center gap-[7px] w-full max-w-[737px]">
        <h1
          className="text-[40px] font-normal leading-[100%] text-black"
          style={{ letterSpacing: "0%" }}
        >
          Let&apos;s <span className="font-semibold">Get Started</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-[500px]">
          If you’re a student, you’ll be able to{" "}
          <span className="font-bold text-black">submit your answers</span>,
          participate in live polls, and see how your responses compare with
          your classmates
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full flex flex-col gap-2 items-start max-w-[507px]">
        <label
          htmlFor="studentName"
          className="text-[18px] font-normal text-black"
          style={{ lineHeight: "100%", letterSpacing: "0%" }}
        >
          Enter your Name
        </label>
        <input
          id="studentName"
          type="text"
          placeholder="Rahul Bajaj"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[60px] rounded-[2px] bg-[#F2F2F2] px-4 text-[18px] text-black placeholder:text-black focus:outline-none"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!name.trim()}
        style={{
          width: "233.93px",
          height: "57.58px",
          borderRadius: "34px",
          background:
            "linear-gradient(99.18deg, #8F64E1 -46.89%, #1D68BD 223.45%)",
        }}
        className="text-white font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
      >
        Continue
      </button>
    </div>
  );
};

export default StudentDetail;
