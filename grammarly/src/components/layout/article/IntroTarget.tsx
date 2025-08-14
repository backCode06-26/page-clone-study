import TargetBox from "@/components/common/TargetBox/TargetBox";
import TargetDesc from "@/components/common/TargetBox/TargetDesc";
import TargetJobDesc from "@/components/common/TargetBox/TargetJobDesc";
import TargetLogo from "@/components/common/TargetBox/TargetLogo";
import TargetResult from "@/components/common/TargetBox/TargetResult";
import TargetUser from "@/components/common/TargetBox/TargetUser";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

export default function IntroTarget() {
    const [pageCnt, setPageCnt] = useState(0);

    function nextPage() {
        setPageCnt(prev => {
            if (prev < 4) {
                return prev + 1;
            }
            return prev;
        })
    }

    function prevPage() {
        setPageCnt(prev => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        })
    }
  return (
    <div className="bg-green-900 overflow-hidden">
      <div className="mx-10 py-10">
        <div className="text-white mx-10 py-10">
          <p className="text-center mb-5">For Enterprise</p>
          <h3 className="text-[50px] text-center font-bold mb-10">
            What’s the ROI on better writing?
          </h3>
          <p className="text-[20px] text-center mb-10">
            17x. Organizations that deploy Grammarly save an average of $5,000
            per employee per year. Data stays
            <br />
            private, productivity rises, inbox numbers drop, and teams can focus
            on what they should do, not on how
            <br />
            they should say it.
          </p>

          <div className="flex justify-center gap-2 mb-10">
            <button className="flex justify-center items-center gap-2 p-5 text-black bg-white font-bold rounded-md group">
              Explore Enterprise
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button className="flex justify-center items-center gap-2 p-5 border border-while rounded-md hover:outline group">
              Contact Sales
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mx-10 py-10">
            <div className={`flex gap-4 mb-5`} style={{marginLeft: `${-416 * pageCnt}px`}}>
              
              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>20 days</TargetResult>
                <TargetDesc>saved annually per user</TargetDesc>
                <TargetJobDesc>Mihal Fonoage<br />Vp of Engineering</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>50%</TargetResult>
                <TargetDesc>fewer writing and deiting<br />hours</TargetDesc>
                <TargetJobDesc>Jenna Kozel-King<br/>VP of Corporate marketing</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>$210K</TargetResult>
                <TargetDesc>saved in the first nine months</TargetDesc>
                <TargetJobDesc>Lauren Reed<br />Content Startegist</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>3x</TargetResult>
                <TargetDesc>faster editing process</TargetDesc>
                <TargetJobDesc>Tonya<br />Global Research VP & Practice Leader</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>66%</TargetResult>
                <TargetDesc>improvement of writing<br/>quality</TargetDesc>
                <TargetJobDesc>Debbie Cotton<br />Sr. Manager. Culture and Communications</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>92%</TargetResult>
                <TargetDesc>style-guide feature adoption</TargetDesc>
                <TargetJobDesc>Janine Anderson<br />Managing Editor</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>

              <TargetBox>
                <TargetLogo></TargetLogo>
                <TargetResult>4.9/5</TargetResult>
                <TargetDesc>customer satisfaction rating</TargetDesc>
                <TargetJobDesc>Jimmy Snyder<br />Associate Director of Platform Support</TargetJobDesc>
                <TargetUser></TargetUser>
              </TargetBox>
            </div>
            <div className="flex justify-end gap-2">
              <button className="border border-white rounded-full p-5 text-[26px] font-bold hover:outline" onClick={prevPage}>
                <AiOutlineLeft />
              </button>
              <button className="border border-white rounded-full p-5 text-[26px] font-bold hover:outline" onClick={nextPage}>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
