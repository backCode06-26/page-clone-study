import type { ReactNode } from "react";

interface NavListProps {
  children: ReactNode;
}

export default function NavList(props : NavListProps) {
  return (
    <div className="flex items-center">
      <ul className="flex pl-10 py-5">
        {props.children}
      </ul>
    </div>
  );
}
