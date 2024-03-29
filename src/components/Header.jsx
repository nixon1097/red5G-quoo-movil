export default function Header() {
  return (
    <>
      <header className=" relative overflow-hidden h-[305px] items-end  box-border">
        <div className="continer-image flex justify-center  items-center -mt-10 w-full  h-full   rounded-[64px] border-2">
          <img
            src="/public/images/shutterstock_2138770023@2x.png"
            alt="images claendario 
            "
            className="w-full h-full object-cover  "
          />
        </div>

        {/* lineas */}
        <div className="rotate-45 top-20 -left-10 w-36 h-72  gap-3 flex flex-col justify-center items-start text-left absolute transform matrix-[0,-1,1,0,0,0] drop-shadow-xl ">
          {" "}
          <div
            className="line h-4  rounded-xl w-[100%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-4  rounded-xl w-[85%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-4  rounded-xl w-[75%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
        </div>
        <div className="-rotate-45 top-20 -right-10 w-36 h-72    gap-2 flex flex-col justify-center items-end text-left absolute">
          {" "}
          <div
            className="line h-4  rounded-xl w-[100%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-4  rounded-xl w-[85%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
          <div
            className="line h-4  rounded-xl w-[75%]   border-[#FAFBFF]
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% opacity-75"
          ></div>{" "}
        </div>
      </header>
    </>
  );
}
