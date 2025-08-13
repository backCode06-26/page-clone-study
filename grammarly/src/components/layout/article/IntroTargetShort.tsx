import PlayBtn from "@/components/common/PlayBtn";

export default function IntroTargtetShort() {
  return (
    <div className="mx-[80px] pb-5 flex justify-center items-center">
      <div className="w-full mx-10 py-5">
        <div className="mb-5">
          <p className="text-[20px] text-gray-500 text-center">
            Trusted by 50,000 organizations and 40 million people
          </p>
        </div>
        <div className="relative w-full h-[200px] border border-black">
            <PlayBtn className="absolute left-0 bottom-0"></PlayBtn>
        </div>
      </div>
    </div>
  );
}
