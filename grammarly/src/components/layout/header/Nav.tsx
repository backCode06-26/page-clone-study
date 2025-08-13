import Logo from "@/components/common/Logo";
import NavBtn from "@/components/common/NavBtn";
import NavList from "@/components/common/NavList";

export default function Nav() {
  return (
    <nav className="flex w-full justify-between items-center">
      <div className="flex">
        <Logo></Logo>
        <NavList>
          <NavBtn name="Product" hasSubmenu={true}>
            <div>서브메뉴</div>
          </NavBtn>
          <NavBtn name="Work" hasSubmenu={true}>
            <div>서브메뉴</div>
          </NavBtn>
          <NavBtn name="Education" hasSubmenu={true}>
            <div>서브메뉴</div>
          </NavBtn>
          <NavBtn name="Pricing"></NavBtn>
          <NavBtn name="Resources" hasSubmenu={true}>
            <div>서브메뉴</div>
          </NavBtn>
        </NavList>
      </div>
      <div className="flex items-center py-5 gap-5">
        <a href="#" className="font-bold">Contact Sales</a>
        <a href="#" className="font-bold">Log in</a>
        <a href="#" className="p-2 text-white bg-green-600 rounded-md">
          <b>Get Grammarly</b> It's free
        </a>
      </div>
    </nav>
  );
}
