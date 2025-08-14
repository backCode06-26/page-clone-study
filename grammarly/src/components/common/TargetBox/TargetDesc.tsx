import type { ReactNode } from "react";

interface TargetDescProps {
    children: ReactNode;
}

export default function TargetDesc({ children }: TargetDescProps) {
    return (
        <p className="text-black text-[23px] h-10 mb-10">{children}</p>
    );
}