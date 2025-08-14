interface NavBtnProps {
  name: string;
  id?: string;
  isOpen?: boolean;
  hasSubmenu?: boolean;
  onToggle?: (id: string) => void;
  children?: React.ReactNode;
}

export default function NavBtn({ name, id, isOpen, hasSubmenu, onToggle, children}: NavBtnProps) {

  const commonClass = "hover:border-b-2 border-b-green-600";

  return (
    <li className="relative flex gap-3 px-5">
      {hasSubmenu && onToggle && id ? (
        <>
          <button
            type="button"
            className={`${commonClass} flex items-center gap-1`}
            onClick={() => onToggle(id)}
            aria-haspopup="true"
          >
            {name}
          </button>
          <span>{isOpen ? "ᐯ" : "ᐱ"}</span>
        </>
      ) : (
        <a href="#" className={commonClass}>
          {name}
        </a>
      )}

      {hasSubmenu && children && (
        <ul
          className={`absolute top-full -left-10 mt-10 bg-white shadow-lg rounded border border-gray-200 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {children}
        </ul>
      )}
    </li>
  );
}
