import React, { useState } from "react";
import ChatBox from "./ChatBox";

const Pollresults = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { qno: 1, text: "Mars" },
    { qno: 2, text: "Venus" },
    { qno: 3, text: "Jupiter" },
    { qno: 4, text: "Saturn" },
  ];

  const handleSubmit = () => {
    if (selectedOption !== null) {
      console.log("Voted for option:", selectedOption);
    }
  };

  const participants = [
    "Rahul Arora",
    "Pushpender Rautela",
    "Rijul Zalpuri",
    "Nadeem N",
    "Ashwin Sharma",
  ];

  return (
    <div className="w-[727px] h-auto mt-[10%] p-4 mx-auto rounded-md bg-white ">
      {/* Header with Question No. and Timer */}
      <div className="flex gap-5 items-center mb-2">
        <span className="font-semibold text-black text-lg">Question </span>
        <span className="text-red-500 font-semibold text-lg">⏱ 00:15</span>
      </div>

      {/* Question */}
      <div className="w-full bg-[#343434] rounded-lg shadow-md text-white font-semibold text-lg p-3">
        Which planet is known as the Red Planet?
      </div>

      {/* Options */}
      <div className="mt-4 space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(index)}
            className={`flex items-center p-3 bg-gray-400 rounded-lg border cursor-pointer transition 
              ${
                selectedOption === index
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-300 bg-white"
              }`}
          >
            {/* Circle number */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-semibold 
                ${
                  selectedOption === index
                    ? "bg-purple-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
            >
              {option.qno}
            </div>
            {/* Option text */}
            <span>{option.text}</span>
          </div>
        ))}
      </div>

      {/* Submit Button */}
     {/* Submit Button aligned right */}
<div className="flex justify-end">
  <button
    onClick={handleSubmit}
    className="mt-5 w-[120px] py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
  >
    Submit
  </button>
</div>
{/* Floating ChatBox */}
      <ChatBox
        role="teacher" // change to "student" when needed
        participants={participants}
        username="Teacher Me"
      />
    </div>
  );
};

export default Pollresults;
