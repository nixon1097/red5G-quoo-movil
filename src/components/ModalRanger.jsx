import { useState } from "react";
import { CardTarget } from "./CardTarget";
import { InputRanger } from "./InputRanger";

const ModalRanger = ({ contenido, onClose }) => {
  const info = contenido.tarjetaSeleccionada;
  console.log(info);

  const data = {
    cahs: {
      id: 1,
      title: "Monto",
      count: 20,
      min: 0,
      max: 100,
      step: 10,
    },
    months: {
      id: 2,
      title: "Plazo(meses)",
      count: 24,
      min: 24,
      max: 84,
      step: 12,
    },
  };
  const startCashcount = data.cahs.count;
  const startMonthscount = data.months.count;
  const [rangerCahs, setRangerCahs] = useState(startCashcount);
  const [rangerMonths, setRangerMonths] = useState(startMonthscount);
  let values = `$${rangerCahs}.000.000`;
  let dataRanger = { values, ...data.cahs };
  let datamonths = { values: `${rangerMonths}`, ...data.months };

  return (
    <>
      <section
        className="modal fixed  bg-slate-500/70  z-50  w-full h-full top-0 left-0 flex items-center justify-center"
        onClick={onClose}
      >
        <article
          className="my-4 w-[320px] h-[750px] rounded-[40px]     gradient-text-shadow drop-shadow-[-8px_-8px_-16px_6px_rgba(255, 255, 255, 1)] px-5 pt-7 pb-5
         shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-[#F8F9FF] bg-opacity-[100%] box-border  flex-col justify-center text-center gap-[1px]  tracking-wide  gradient-bg-shadow leading-tight overflow-hidden relative  "
        >
          <CardTarget info={info} />
          <div className="container-inputsR ">
            <InputRanger
              info={dataRanger}
              ranger={rangerCahs}
              setRanger={setRangerCahs}
            />
            <InputRanger
              info={datamonths}
              ranger={rangerMonths}
              setRanger={setRangerMonths}
            />
          </div>
        </article>
      </section>
    </>
  );
};
//0.39% de interes a 48 semanas
//0.58 % de interes por 84 semanas
export default ModalRanger;
