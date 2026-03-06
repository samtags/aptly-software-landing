"use client";

import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function QnA({ question, answer, showLine = true }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer((prev) => !prev)}
      className={`flex flex-col gap-2 border-[#e5eaf0] py-8 cursor-pointer ${showLine && "border-b"}`}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold lg:font-medium lg:text-lg">{question}</div>
        {showAnswer ? <BiMinus /> : <BiPlus />}
      </div>
      {showAnswer && (
        <div className="text-[#50576b] text-sm font-medium">{answer}</div>
      )}
    </div>
  );
}
