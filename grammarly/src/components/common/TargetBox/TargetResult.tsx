import type { ReactNode } from "react";

interface TargetResultProps {
    children: ReactNode;
}

export default function TargetResult({ children }: TargetResultProps) {
    return (
        <h3 className=" text-black text-[55px] font-bold mb-3">{children}</h3>
    );
}