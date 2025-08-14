import type { ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface TargetBoxProps {
  children: ReactNode;
}

export default function TargetBox({children}: TargetBoxProps) {
  return (
    <div className="flex-none w-[400px] h-[500px] bg-white rounded-md py-5 px-10 transform transition-transform duration-200 hover:-translate-y-3 group">

      {children}

      <button className="flex justify-center items-center gap-2 text-[18px] text-green-800 bg-white">
        Learn more
        <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
