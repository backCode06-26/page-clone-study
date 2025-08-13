import { useState } from "react";

interface PlayBtnProps {
  className?: string;
}

export default function PlayBtn({className}: PlayBtnProps) {
  const [isClick, setIsClick] = useState(false);
  const toggleClick = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <button
      onClick={toggleClick}
      className={`flex justify-center items-center w-8 h-8 rounded-full border border-black text-gray-500 ${className}`}
    >
      {isClick ? "❚❚" : "▶"}
    </button>
  );
}
