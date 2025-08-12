import React from "react";

export default function KickPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">You have been removed</h1>
        <p className="mt-2 text-gray-700">Please contact the host for more details.</p>
      </div>
    </div>
  );
}
