import React from "react";

const Landing = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto flex flex-col gap-8 justify-center items-center py-16">
      {/* Tag */}
      <div
        style={{
          background: "linear-gradient(90deg, #7565D9, #4D0ACD)",
        }}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-medium"
      >
        <span>✨</span>
        <span>Intervue Poll</span>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl font-semibold text-black">
          Welcome to the <span className="font-bold">Live Polling System</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-[500px]">
          Please select the role that best describes you to begin using the live
          polling system
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex flex-row gap-6">
        <div className="w-[343px] bg-white shadow-sm border border-[#7565D9] p-6 rounded-lg flex flex-col gap-2 cursor-pointer hover:shadow-md transition">
          <p className="text-lg font-bold text-black text-left">I’m a Student</p>
          <span className="text-sm text-gray-500 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </span>
        </div>
        <div className="w-[343px] bg-white shadow-sm border border-gray-300 p-6 rounded-lg flex flex-col gap-2 cursor-pointer hover:shadow-md transition">
          <p className="text-lg font-bold text-black text-left">I’m a Teacher</p>
          <span className="text-sm text-gray-500 text-left">
            Submit answers and view live poll results in real-time.
          </span>
        </div>
      </div>

      {/* Continue Button */}
      <button
        style={{
          background: "linear-gradient(90deg, #7565D9, #4D0ACD)",
        }}
        className="px-8 py-2 rounded-full text-white font-medium hover:opacity-90 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Landing;
