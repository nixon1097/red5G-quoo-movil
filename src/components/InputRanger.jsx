export const InputRanger = ({ info, ranger, setRanger }) => {
  const { title, count, min, max, values, step } = info;

  return (
    <>
      <div className="container-formula ">
        <div className="w-[280px]   grid h-14 mt-5 mb-[20px]     px-4 py-2 items-start justify-start rounded-[18px] bg-[#E8EEFF] shadow-inner shadow-[#4676C32C] ">
          <h4 className="text-[12px] w-[248px] text-left float-none text-[#506698]  font-normal">
            {title}
          </h4>
          <p className="w-[248px] font-semibold  text-[#363C52] text-start text-[16px] aanimate-fade-right animate-duration-[600ms] animate-delay-[1200ms] animate-ease-intransform transition-transform duration-300 ease-in-out ">
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
          className="w-[90%] animate-fade-right animate-duration-[600ms] animate-delay-[1200ms] animate-ease-in "
        />
      </div>
    </>
  );
};
