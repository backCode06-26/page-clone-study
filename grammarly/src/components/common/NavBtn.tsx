import { useState, type ReactNode } from "react";

interface NavBtnProps {
  name: string;
  children?: ReactNode;
  hasSubmenu?: boolean;
}

export default function NavBtn({ name, children, hasSubmenu }: NavBtnProps) {
  const [isClick, setIsClick] = useState(false);

  const toggleClick = () => {
    setIsClick((prev) => !prev);
  };

  const commonClass = "hover:border-b-2 border-b-green-600";

  return (
    <li className="relative flex gap-3 px-5">
      {hasSubmenu ? (
        <>
          <button
            type="button"
            className={`${commonClass} flex items-center gap-1`}
            onClick={toggleClick}
            aria-haspopup="true"
            aria-expanded={isClick}
          >
            {name}
          </button>
          <span>{isClick ? "ᐯ" : "ᐱ"}</span>
        </>
      ) : (
        <a href="#" className={commonClass}>
          {name}
        </a>
      )}

      {hasSubmenu && children && (
        <ul
          className={`absolute top-full left-0 mt-1 bg-white shadow-lg rounded border border-gray-200 min-w-[150px] z-10 ${
            isClick ? "block" : "hidden"
          }`}
        >
          {children}
        </ul>
      )}
    </li>
  );
}
