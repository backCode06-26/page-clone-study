import { AiOutlineArrowRight } from "react-icons/ai";

export default function IntroLastShort() {
  return (
    <div className="flex mx-[120px] py-20">
      <div className="w-[1200px]">
        <div className="mb-8">
          <h1 className="text-[60px] font-bold leading-[1.15]">
            Great writing gets
            <br />
            work done
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-[20px]">
            Work smarter with the AI writing leader for more than a
            <br />
            decade.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="p-5 bg-green-900 rounded-md text-white flex items-center gap-2 group hover:bg-green-950">
            <b>Sign up</b> It's free
            <AiOutlineArrowRight className="text-sm transform transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button>
            <div
              className="p-5 border border-black rounded-md 
                    hover:outline hover:outline-2 hover:outline-green-800
                    flex gap-2"
            >
              <img
                src="public\assets\icons8-google.svg"
                alt="google icon"
                className="w-6"
              />
              <span className="text-[14px]">Sign up with Google</span>
            </div>
          </button>
        </div>

        <p className="my-3">
          By signing up, you agree to the{" "}
          <span className="text-green-700 hover:text-green-800 hover:border-b hover:border-b-green-700 ">
            Terms and
          </span>
          <br />
          <span className="text-green-700 hover:text-green-800 hover:border-b hover:border-b-green-700 ">
            Conditions
          </span>{" "}
          and{" "}
          <span className="text-green-700 hover:text-green-800 hover:border-b hover:border-b-green-700 ">
            Privacy Policy.
          </span>
          <br />
          California residents, see our{" "}
          <span className="text-green-700 hover:text-green-800 hover:border-b hover:border-b-green-700 ">
            CA Notice at Collection.
          </span>
        </p>
      </div>
      <div className="w-full relative flex justify-center items-center">
        <div className="w-[500px] h-[400px] border border-black"></div>
      </div>
    </div>
  );
}
