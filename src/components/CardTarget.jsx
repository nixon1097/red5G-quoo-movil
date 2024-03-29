export const CardTarget = ({ info }) => {
  return (
    <>
      <article className="mx-auto px-3 ">
        <div className="flex items-center justify-center  box-border overflow-hidden ">
          <img
            src={info.iconUrl}
            alt="icons images "
            className="w-[76px] h-auto object-cover  "
          />
          <h3 className=" tracking-tight text-start text-[20px] font-bold  ">
            {info.title}
          </h3>
        </div>
        <p className=" text-[#818CB4]  col-span-2   text-[16px] text-start ml-1">
          {info.messag}
        </p>
      </article>
    </>
  );
};
