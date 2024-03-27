export const CardTarget = () => {
  return (
    <>
      <section
        className="mb-10 w-[320px] h-[172px] rounded-[40px]    mx-auto    gradient-text-shadow
            shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-tl from-[#fafbff] from-40%  via-[#FFFFFF]   to-[#ebf0ffa5]   box-borderlex flex-col justify-between text-center gap-[1px]  p-8 tracking-wide  gradient-bg-shadow"
      >
        <div className="flex items-center justify-end box-border ">
          <img
            src="/public/icons/iconos_quuo_Credito_Hipotecario_N@2x.png"
            alt="icons images "
            className="w-[72px] h-auto object-cover  "
          />
          <h3 className=" text-start text-lg font-bold  leading-tight">
            Crédito hipotecario Mi techo yá
          </h3>
        </div>

        <p className=" text-[#818CB4]  col-span-2 pl-3 pr-2 text-[15px] text-left  ">
          ¡Para familias jóvenes que aspiran a su primer hogar!
        </p>
      </section>
    </>
  );
};
