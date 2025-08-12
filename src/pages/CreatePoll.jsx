import { useState } from "react";
import StarIcon from "../assets/Vector.png";
import { Navigate } from "react-router-dom";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { text: "", correct: null },
    { text: "", correct: null },
  ]);
  const [timeLimit, setTimeLimit] = useState("60");

  const handleAddOption = () => {
    setOptions([...options, { text: "", correct: null }]);
  };

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index].text = value;
    setOptions(updated);
  };

  const handleCorrectChange = (index, value) => {
    const updated = [...options];
    updated[index].correct = value;
    setOptions(updated);
  };

  const handleRemoveOption = (index) => {
    const updated = options.filter((_, i) => i !== index);
    setOptions(updated);
  };

  const canAskQuestion = true;

  return (
    <div className="px-6 py-10 max-w-[1440px] mx-auto">
      {/* Tag */}
      <div
        style={{
          background: "linear-gradient(90deg, #7565D9, #4D0ACD)",
        }}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-medium w-fit mb-6"
      >
        <img src={StarIcon} alt="Star" className="w-4 h-4" />
        <span>Intervue Poll</span>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-start text-left gap-[7px] max-w-[737px] mb-10">
        <h1 className="text-[40px] font-normal leading-[100%] text-black">
          Let&apos;s <span className="font-semibold">Get Started</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-[500px]">
          You’ll have the ability to{" "}
          <span className="font-bold text-black">create and manage polls</span>,
          ask questions, and monitor your students' responses in real-time.
        </p>
      </div>

      {/* Question + Dropdown */}
      <div className="flex justify-between items-center w-full max-w-[865px] mb-4">
        <label className="text-[20px] font-semibold text-black">Enter your question</label>
        <div className="relative">
          <select
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="appearance-none bg-[#F1F1F1] text-black text-[18px] font-normal px-4 py-2 rounded-[7px] w-[170px] h-[43px] focus:outline-none transition-all duration-300"
          >
            <option value="15">15 seconds</option>
            <option value="30">30 seconds</option>
            <option value="45">45 seconds</option>
            <option value="60">60 seconds</option>
          </select>
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "18px",
              height: "18px",
              backgroundColor: "#480FB3",
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            }}
          />
        </div>
      </div>

      {/* Question Input */}
      <div className="relative w-full max-w-[865px] mb-10">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={100}
          className="w-full h-[174px] rounded-[2px] bg-[#F2F2F2] p-4 resize-none focus:outline-none"
        />
        <span className="absolute bottom-4 right-6 text-sm text-gray-500">
          {question.length}/100
        </span>
      </div>

      {/* Column Headers */}
      <div className="w-full max-w-[865px] mb-2 text-sm font-semibold text-gray-700 flex items-center gap-4">
        <div className="w-6" />
        <div className="flex-1 text-left">Edit Option</div>
        <div className="w-[139px] text-left">Is it correct?</div>
        <div className="w-10 text-center">Delete</div>
      </div>

      {/* Options List */}
      <div className="flex flex-col gap-4 max-w-[865px]">
        {options.map((opt, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Numbered Circle */}
            <div className="w-6 h-6 rounded-full bg-[#7451B6] text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>

            {/* Option Input */}
            <input
              type="text"
              value={opt.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="flex-1 h-[60px] rounded bg-[#F2F2F2] px-4 focus:outline-none"
            />

            {/* Yes/No */}
            <div className="flex gap-4 items-center w-[139px]">
              <label className="flex items-center gap-2">
                <div
                  className={`w-[22px] h-[22px] rounded-full flex items-center justify-center ${
                    opt.correct === true
                      ? "bg-white border-2 border-[#8F64E1]"
                      : "bg-[#D9D9D9] border border-[#B4B4B4]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`correct-${index}`}
                    checked={opt.correct === true}
                    onChange={() => handleCorrectChange(index, true)}
                    className="opacity-0 w-full h-full cursor-pointer"
                  />
                </div>
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <div
                  className={`w-[22px] h-[22px] rounded-full flex items-center justify-center ${
                    opt.correct === false
                      ? "bg-white border-2 border-[#8F64E1]"
                      : "bg-[#D9D9D9] border border-[#B4B4B4]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`correct-${index}`}
                    checked={opt.correct === false}
                    onChange={() => handleCorrectChange(index, false)}
                    className="opacity-0 w-full h-full cursor-pointer"
                  />
                </div>
                <span className="text-sm">No</span>
              </label>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemoveOption(index)}
              className="text-[#7451B6] font-semibold text-[16px] px-[10px] py-[6px] border border-[#7451B6] rounded-[8px]"
              title="Remove option"
            >
              −
            </button>
          </div>
        ))}
      </div>

      {/* Add More Option Button */}
      <div className="mt-6 max-w-[865px] flex justify-start">
        <button
          onClick={handleAddOption}
          className="w-[199px] h-[45px] border border-[#7451B6] rounded-[11px] px-[10px] py-[10px] text-[#7451B6] font-[600] text-[14px] font-sora text-left"
        >
          + Add More option
        </button>
      </div>

      {/* Divider */}
      <hr className="border border-[#B6B6B6] w-full my-8" />

      {/* Ask Question Button */}
      <div className="flex justify-end">
        <button
          onClick={Navigate("/question")}
          disabled={!canAskQuestion}
          className="w-[234px] h-[58px] rounded-[34px] text-white font-semibold"
          style={{
            background: "linear-gradient(99.18deg, #8F64E1 -46.89%, #1D68BD 223.45%)",
            opacity: canAskQuestion ? 1 : 0.5,
          }}
        >
          Ask Question
        </button>
      </div>
    </div>
  );
}
