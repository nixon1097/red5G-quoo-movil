export const CarFirts = () => {
  return (
    <>
      <div className=" text-4xl font-bold mt-[26px]">
        <div
          className="mx-auto mb-[28px]  rounded-full  w-[144px] h-[144px] grid place-content-center justify-center items-center box-border gradient-bg-shadow drop-shadow-[-8px_-8px_-16px_6px_rgba(255, 255, 255, 1)]
  shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-[#FAFBFF] to-20% bg-opacity-100 animate-fade-left animate-once animate-duration-2000 animate-delay-[1000ms] "
        >
          <img
            src="./logo.svg"
            alt="logo imagen"
            className=" drop-shadow-md  "
          />
        </div>
        <h3 className="w-[320px] h-[48px] mx-auto text-[#363C52] animate-fade animate-once animate-duration-1000 animate-delay-[2000ms] ">
          Tu crédito en
        </h3>

        <p className="text-[#05bbfd7a] drop-shadow-[0px_0px_6px] animate-fade animate-once animate-duration-1000 animate-delay-[2000ms] ">
          <span className="text-transparent bg-gradient-to-b from-[#1bc0fc] to-[#0599FB] bg-clip-text  mt-[4px]  ">
            3 pasos
          </span>
        </p>
      </div>
      <p className="w-[320px] h-[20px] text-center mx-auto text-[#363C52] my-10 text-lg animate-fade animate-once animate-duration-1000 animate-delay-[2000ms] ">
        ¿Qué <span className="font-bold">crédito te interesa</span>?
      </p>
    </>
  );
};
