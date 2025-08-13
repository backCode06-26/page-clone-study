import { useState } from "react";
import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";

export default function IntroPrice() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="p-[50px]">
      <div className="m-10">
        <h3 className="py-10 text-[50px] font-black text-center">
          Choose the right Grammarly plan
        </h3>
        <div className="mb-[80px]">
          <div className="flex justify-center items-center gap-5">
            <p className={`text-[20px] ${enabled ? "text-gray-600" : ""}`}>
              Monthly
            </p>
            <button
              type="button"
              onClick={() => setEnabled(!enabled)}
              className={`relative inline-flex h-11 w-24 flex-shrink-0 cursor-pointer rounded-full border-2 border-gray-300 transition-colors duration-200 ease-in-out 
        ${enabled ? "bg-green-600" : "bg-gray-300"}`}
            >
              <span
                className={`pointer-events-none inline-block h-10 w-10 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
          ${enabled ? "translate-x-12" : "translate-x-0"}`}
              />
            </button>
            <p className={`text-[20px] ${!enabled ? "text-gray-600" : ""}`}>
              Yearly
            </p>
            <div className="px-1 rounded-2xl border border-black font-bold">
              Save up to 60%
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[33.3333%] h-[750px] p-10 border border-black rounded-tl-lg rounded-bl-lg">
            <p className="text-green-500 mb-5">For individuals</p>
            <div className="mb-10">
              <h3 className="text-[40px] font-bold">Free</h3>
              <p className="text-[18px] mb-5">
                Get peace of mind with writing that’s
                <br /> mistake-free.
              </p>
              <div className="h-[80px]">
                <p className="text-[35px] font-bold">
                  $0 <span className="text-[12px]">USD</span>
                </p>
                <p className="text-gray-400">/ month</p>
              </div>
            </div>

            <button className="w-full p-5 mb-5 rounded-md flex justify-center items-center gap-3 text-green-700 border border-green-400 hover:outline hover:outline-2 hover:outline-green-800 group">
              Create Account
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-2" />
            </button>

            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Write without
              mistakes
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> See your writing
              tone
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Generate text with
              100 AI prompts
            </p>
          </div>
          <div className="w-[33.3333%] h-[750px] p-10 border border-black">
            <p className="text-green-500 mb-5">For individuals or teams</p>
            <div className="mb-10">
              <h3 className="text-[40px] font-bold">Pro</h3>
              <p className="text-[18px] mb-5">
                Deliver impactful writing, whether working
                <br /> alone or as a team.
              </p>
              <div className="h-[80px]">
                {enabled ? (
                  <>
                    <p className="text-[35px] font-bold">
                      $12 <span className="text-[12px]">USD</span>
                    </p>
                    <p className="text-gray-400">
                      / member / month, billed annually
                    </p>
                    <p>
                      <b>$30</b> when billed monthly
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[35px] font-bold">
                      $30 <span className="text-[12px]">USD</span>
                    </p>
                    <p className="text-gray-400">/ when billed monthly</p>
                  </>
                )}
              </div>
              <div></div>
            </div>

            <button className="w-full p-5 mb-5 rounded-md flex justify-center items-center gap-3 text-white bg-green-700 hover:bg-green-800 group">
              Get started
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-2" />
            </button>

            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" />{" "}
              <b>Everything included in Free</b>
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Rewrite full
              sentences
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Adjust your writing
              tone
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Stay on-brand
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Generate text with
              2,000 AI prompts
            </p>
          </div>
          <div className="w-[33.3333%] h-[750px] p-10 border border-black rounded-tr-lg rounded-br-lg">
            <p className="text-green-500 mb-5">For larger organizations</p>
            <div className="mb-10">
              <h3 className="text-[40px] font-bold">Enterprise</h3>
              <p className="text-[18px] mb-5">
                Drive results across your entire
                <br /> organization with trusted AI.
              </p>

              <div className="h-[80px]"></div>
            </div>

            <button className="w-full p-5 mb-5 rounded-md flex justify-center items-center gap-3 text-green-700 border border-green-400 hover:outline hover:outline-2 hover:outline-green-800 group">
              Contact Sales
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-2" />
            </button>

            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> <b>Everything included in Pro</b>
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Unlimited members
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Dedicated support
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Confidential mode
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Granular roles and permissions
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Data loss prevention
            </p>
            <p className="flex gap-2 pb-5">
              <AiFillCheckCircle size={24} color="black" /> Unlimited generative AI prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
