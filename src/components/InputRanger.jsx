export const InputRanger = ({ info, ranger, setRanger }) => {
  const { title, count, min, max, values, step } = info;

  const handleClikc = (e) => {};

  return (
    <>
      <div className="container-formula ">
        <form action="" className="">
          <div className="w-[280px]   grid h-14 mt-5 mb-[20px]     px-4 py-2 items-start justify-start rounded-[18px] bg-[#E8EEFF] shadow-inner shadow-[#4676C32C] ">
            <h4 className="text-[12px] w-[248px] text-left float-none text-[#506698]  font-normal">
              {title}
            </h4>
            <p className="w-[248px] font-semibold  text-[#363C52] text-start text-[16px]">
              {values}
            </p>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={ranger}
            onChange={(e) => setRanger(e.target.value)}
            className="ranger h-1  abolsute w-full appearance-none  -top-1   bg-emerald-500 block border-[#E8EEFF] border-4 rounded-lg py-3 px-4 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500   "
          />
        </form>
      </div>
    </>
  );
};
