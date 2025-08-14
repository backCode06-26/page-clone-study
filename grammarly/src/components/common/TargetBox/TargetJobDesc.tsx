import type { ReactNode } from "react";

interface TargetJobDescProps {
  children: ReactNode;
}

export default function TargetJobDesc({ children }: TargetJobDescProps) {
  return (
    <p className="text-black mb-1">
      {children}
    </p>
  );
}
