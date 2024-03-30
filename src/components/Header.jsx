export default function Header() {
  return (
    <>
      <header className=" relative">
        <div className=" mb-5">
          <img
            src="./images/fondoheader.gif"
            alt="Imagen Superpuesta"
            className="w-full h-full object-cover -mt-4 drop-shadow-2xl opacity-90 "
          />
        </div>
        {/* lineas */}
        <div className="rotate-45 top-24 -left-12 w-[160px] h-[290px]  gap-3 flex flex-col justify-center items-start text-left absolute  drop-shadow-xl  overflow-hidden">
          {" "}
          <div
            className="line h-6  rounded-xl w-[100%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-6  rounded-xl w-[85%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-6  rounded-xl w-[75%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
        </div>
        <div className="-rotate-45 top-24 -right-12  h-[290px] w-[160px]    gap-3 flex flex-col justify-center items-end text-left drop-shadow-xl absolute">
          {" "}
          <div
            className="line h-6  rounded-xl w-[100%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-6  rounded-xl w-[85%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-6  rounded-xl w-[75%]   border-[#FAFBFF]
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
        </div>
      </header>
    </>
  );
}
