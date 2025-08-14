import type { ReactNode } from "react";

interface FooterMenuProps {
  children: ReactNode;
}

function FooterMenuForm({ children }: FooterMenuProps) {
  return <div className="mx-10 pt-20">{children}</div>;
}

function Title({ children }: FooterMenuProps) {
  return <h3 className="mb-1 font-bold">{children}</h3>;
}

function SubMenu({ children }: FooterMenuProps) {
  return (
    <div className="py-1 text-gray-600 hover:text-gray-700">
      <p className="inline-flex items-center text-[14px] gap-2 border-b border-transparent hover:border-b-gray-700 ">{children}</p>
    </div>
  );
}

FooterMenuForm.Title = Title;
FooterMenuForm.SubMenu = SubMenu;

export default FooterMenuForm;
