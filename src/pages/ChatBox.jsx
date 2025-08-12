import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatBox({
  role = "student",
  participants: initialParticipants = [],
  username,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [participants, setParticipants] = useState(initialParticipants);
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { sender: username, text: input }]);
    setInput("");
  };

  const handleKick = (name) => {
    // Remove participant from list
    setParticipants((prev) => prev.filter((p) => p !== name));

    // If the kicked participant is the current user, navigate to kick page
    if (name === username) {
      navigate("/kick");
    }

    // TODO: Send kick event to backend for real-time updates
    // socket.emit("kickOut", name);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition"
      >
        💬
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 shadow-xl border border-gray-300 flex flex-col overflow-hidden"
          style={{
            width: "429px",
            height: "477px",
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Header Tabs */}
          <div className="flex border-b" style={{ height: "35px" }}>
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 text-center`}
              style={{
                fontFamily: "Sora",
                fontSize: "14px",
                fontWeight: activeTab === "chat" ? 600 : 400,
                color: activeTab === "chat" ? "#000000" : "#292929",
                borderBottom:
                  activeTab === "chat"
                    ? "2px solid #A855F7"
                    : "2px solid transparent",
              }}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab("participants")}
              className={`flex-1 text-center`}
              style={{
                fontFamily: "Sora",
                fontSize: "14px",
                fontWeight: activeTab === "participants" ? 600 : 400,
                color: activeTab === "participants" ? "#000000" : "#292929",
                borderBottom:
                  activeTab === "participants"
                    ? "2px solid #A855F7"
                    : "2px solid transparent",
              }}
            >
              Participants
            </button>
          </div>

          {/* Chat Window */}
          {activeTab === "chat" ? (
            <div className="flex flex-col flex-1">
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-3 space-y-4"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className="flex flex-col max-w-[80%]">
                    <span
                      style={{
                        fontFamily: "Sora",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: msg.sender === username ? "#4F0BD3" : "#000",
                      }}
                    >
                      {msg.sender}
                    </span>
                    <div
                      className={`px-3 py-2 rounded-lg`}
                      style={{
                        backgroundColor:
                          msg.sender === username ? "#4F0BD3" : "#3A3A3B",
                        color: "#FFFFFF",
                        backdropFilter: "blur(200px)",
                        borderTopLeftRadius:
                          msg.sender === username ? "8px" : "1px",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                        borderBottomLeftRadius: "8px",
                        alignSelf:
                          msg.sender === username ? "flex-end" : "flex-start",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center border-t p-2 bg-white">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-full px-3 py-1 outline-none focus:ring-2 focus:ring-purple-400"
                  style={{ fontFamily: "Sora" }}
                />
                <button
                  onClick={handleSend}
                  className="ml-2 bg-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700"
                  style={{ fontFamily: "Sora" }}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            /* Participants Window */
            <div className="flex-1 overflow-y-auto p-4">
              {/* Table Header */}
              <div className="flex justify-between mb-4">
                <span
                  style={{
                    fontFamily: "Sora",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#726F6F",
                  }}
                >
                  Name
                </span>
                {role === "teacher" && (
                  <span
                    style={{
                      fontFamily: "Sora",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#726F6F",
                    }}
                  >
                    Action
                  </span>
                )}
              </div>

              {/* List */}
              <div className="space-y-5">
                {participants.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center"
                    style={{
                      fontFamily: "Sora",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#000000",
                    }}
                  >
                    <span>{p}</span>
                    {role === "teacher" && (
                      <button
                        onClick={() => handleKick(p)}
                        style={{
                          fontFamily: "Sora",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#1D68BD",
                          textDecoration: "underline",
                        }}
                      >
                        Kick out
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
