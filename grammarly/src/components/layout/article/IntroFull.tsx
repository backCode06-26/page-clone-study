import { AiOutlineArrowRight } from "react-icons/ai";

export default function IntroFull() {
  return (
    <div className="px-[80px] py-[50px]">
      <div className="mx-10 flex">
        <div className="w-[50%]">
          <div className="h-[640px] pt-[150px]">
            <h3 className="text-[50px] font-bold leading-[1.15] mb-10">
              Better writing,
              <br />
              better results
            </h3>
            <p className="text-[20px]">
              Be perfectly professional, clear, and convincing in a few
              <br /> clicks, not a few hours.
            </p>
          </div>

          <div className="h-[640px] pt-[150px]">
            <h3 className="text-[50px] font-bold leading-[1.15] mb-10">
              The right text
              <br />
              for the context
            </h3>
            <p className="text-[20px]">
              Get personalized suggestions based on what you’re
              <br /> writing and who will read it.
            </p>
          </div>

          <div className="h-[640px] pt-[150px]">
            <h3 className="text-[50px] font-bold leading-[1.15] mb-10">
              Works where
              <br />
              you work
            </h3>
            <p className="text-[20px]">
              Grammarly works across all the apps and sites you use.
              <br /> No copying, no pasting, no context switching.
            </p>
          </div>

          <div className="h-[640px] pt-[150px]">
            <h3 className="text-[50px] font-bold leading-[1.15] mb-10">
              Never go out of style
            </h3>
            <p className="text-[20px]">
              Grammarly understands both your personal style and
              <br /> your brand style guide to help you find your voice.
            </p>
          </div>

          <div className="h-[640px] pt-[150px]">
            <h3 className="text-[50px] font-bold leading-[1.15] mb-10">
              This is responsible AI
            </h3>
            <p className="text-[20px] mb-5">
              Don’t compromise on security. We never sell your data,
              <br /> provide it for advertising purposes, or allow third parties
              <br /> to use it to train their models.
            </p>

            <div className="flex gap-2 items-center group">
              <a
                href="#"
                className="text-[20px] text-green-700 border-b border-b-transparent hover:border-b-green-700"
              >
                Learn more{" "}
              </a>
              <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
        <div className="w-[50%] relative pt-[150px]">
          <div className="sticky top-[150px]">
            <div className="w-[500px] h-[400px] border border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
