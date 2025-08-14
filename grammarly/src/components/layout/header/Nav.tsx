import Logo from "@/components/common/Logo";
import NavBtn from "@/components/common/NavBtn";
import NavList from "@/components/common/NavList";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<String | null>(null);

  const handleToggle = (id: string) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };
  return (
    <nav className="flex w-full justify-between items-center">
      <div className="flex">
        <Logo></Logo>
        <NavList>
          <NavBtn
            id="product"
            name="Product"
            hasSubmenu={true}
            isOpen={openMenu === "product"}
            onToggle={handleToggle}
          >
            <div className="mx-10 py-10">
              <div className="flex">
                <div className="w-[300px] border-r border-r-black">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">Learn</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Features
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Product Demo
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      AI at Grammarly
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Trust & Security
                    </p>
                    <div className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      <h3 className="text-[20px] text-orange-500">coda</h3>
                      <div className="text-[12px]">
                        <p>Grammarly has acquired Coda—</p>
                        <div className="inline-flex gap-2 items-center">
                          <p>learn about the product </p>
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[300px]">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">Download</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Desktop
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Mobile
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Browser
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavBtn>
          <NavBtn
            id="work"
            name="Work"
            hasSubmenu={true}
            isOpen={openMenu === "work"}
            onToggle={handleToggle}
          >
            <div className="mx-10 py-10">
              <div className="flex">
                <div className="w-[300px] border-r border-r-black">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">By Team Size</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Enterprise
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Teams & Businesses
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Individuals
                    </p>
                  </div>
                </div>
                <div className="w-[300px]">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">By Team Function</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Customer Support
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Marketing
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      IT
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Sales
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      HR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavBtn>
          <NavBtn
            id="education"
            name="Education"
            hasSubmenu={true}
            isOpen={openMenu === "education"}
            onToggle={handleToggle}
          >
            <div className="mx-10 py-10">
              <div className="flex">
                <div className="w-[300px]">
                  <div className="mx-5">
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Students
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavBtn>
          <NavBtn name="Pricing"></NavBtn>
          <NavBtn
            id="resources"
            name="Resources"
            hasSubmenu={true}
            isOpen={openMenu === "resources"}
            onToggle={handleToggle}
          >
            <div className="mx-10 py-10">
              <div className="flex">
                <div className="w-[300px] border-r border-r-black">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">Learn</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Blog
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Customer Stories
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Business Events & Resources
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Education Events & Resources
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Grammar Guide
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Essay Writing
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Career Guides
                    </p>
                  </div>
                </div>
                <div className="w-[300px]">
                  <div className="mx-5">
                    <h3 className="p-3 font-bold mb-5">Tools</h3>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      AI Writing Tools
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Grammar Checker
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Plagiarism Checker
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      AI Detector
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      AI Humanizer
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Paraphrasing Tool
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Citation Generator
                    </p>
                    <p className="p-3 mb-5 border border-transparent rounded-md hover:border-black">
                      Word Counter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavBtn>
        </NavList>
      </div>
      <div className="flex items-center py-5 gap-5">
        <a href="#" className="font-bold">
          Contact Sales
        </a>
        <a href="#" className="font-bold">
          Log in
        </a>
        <a href="#" className="p-2 text-white bg-green-600 rounded-md">
          <b>Get Grammarly</b> It's free
        </a>
      </div>
    </nav>
  );
}
