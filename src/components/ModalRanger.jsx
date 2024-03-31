import { useEffect, useState } from "react";
import { CardTarget } from "./CardTarget";
import { InputRanger } from "./InputRanger";
import CardButtons from "./CardButtons";

const ModalRanger = ({
  contenido,
  setModalVisible,
  setOpenModalForm,
  setModalContent,
}) => {
  const info = contenido.tarjetaSeleccionada;

  const data = {
    cahs: {
      id: 1,
      title: "Monto",
      count: 20,
      min: 20,
      max: 100,
      step: 10,
    },
    months: {
      id: 2,
      title: "Plazo(meses)",
      count: 48,
      min: 48,
      max: 84,
      step: 12,
    },
  };
  const startCashcount = data.cahs.count;
  const startMonthscount = data.months.count;
  const [rangerCahs, setRangerCahs] = useState(startCashcount);
  const [rangerMonths, setRangerMonths] = useState(startMonthscount);
  const [pagomensual, setPagoMesual] = useState("588.775");

  let values = `$${rangerCahs}.000.000`;
  let dataRanger = { values, ...data.cahs };
  let datamonths = { values: `${rangerMonths}`, ...data.months };

  const cuotas = (rangerCahs, rangerMonths) => {
    if (rangerMonths < 60 && rangerCahs < 50) {
      setPagoMesual("588.775");
    } else if (rangerMonths < 60 && rangerCahs > 50) {
      setPagoMesual("2.743.774");
    } else if (rangerMonths > 60 && rangerCahs < 50) {
      setPagoMesual("765.7000");
    } else if (rangerMonths > 60 && rangerCahs > 50) {
      setPagoMesual("3.743.774");
    } else {
      return <h1>error </h1>;
    }
  };

  const handleButtonClick = () => {
    // console.log(
    //   "Rango de efectivo:",
    //   parseInt(rangerCahs.toFixed(0) + "000000")
    // );
    // console.log("Rango de meses:", rangerMonths);
    // console.log("Rango de pagoMensual:", pagomensual);
    setModalContent(info);
    setOpenModalForm(true);
  };
  useEffect(() => {
    cuotas(rangerCahs, rangerMonths);
  }, [rangerCahs, rangerMonths]);

  return (
    <>
      <section className="modal fixed  bg-slate-500/70  z-50  w-screen  h-screen top-0 left-0 flex items-center justify-center animate-fade animate-delay-100 animate-ease-in  transform transition-transform duration-300 ease-in-out">
        <article
          className="my-4 w-[320px] h-auto  rounded-[40px]     gradient-text-shadow drop-shadow-[-8px_-8px_-16px_6px_rgba(255, 255, 255, 1)] px-5 pt-7 pb-5
         shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-[#F8F9FF] bg-opacity-[100%] box-border  flex-col justify-center text-center gap-[1px]  tracking-wide  gradient-bg-shadow leading-tight overflow-hidden relative  nimate-fade animate-delay-100 animate-ease-in  transform transition-transform duration-300 ease-in-out  "
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

          <div className="w-full flex flex-wrap items-center justify-center mt-8 text-center container-static-data gap-2">
            <h2 className="font-bold h-full text-[40px] tracking-tight ">
              ${pagomensual},<span className="text-[18px]">00</span>
            </h2>
            <h4 className="text-[#00B0F4] text-[16px] tracking-tighterx  font-semibold text-center">
              Cuota mensual aproximada
            </h4>
            <p className="h-[68px]  px-7 w-[280px]  mb-6 font-semibold tracking-tighter text-[#818CB4] text-center leading-relaxed ">
              Esta simulación es un aproximado calculado con una tasa del{" "}
              <span className="font-bold">00.00% E.A</span>
            </p>
          </div>

          <div className="container-button grid gap-4">
            <CardButtons
              colorText={"white"}
              bgfrom={"[#05BCFD]"}
              bgto={"[#0599FB]"}
              title={"¡Lo quiero! "}
              setOpenModalForm={setOpenModalForm}
              setModalVisible={setModalVisible}
              onClick={handleButtonClick}
            />
            <CardButtons
              colorText={"[#0599FB]"}
              bgfrom={"[#FFFFFF]"}
              bgto={"[#F8F9FF]"}
              title={" Simular otro producto "}
              setModalVisible={setModalVisible}
            />
          </div>
        </article>
      </section>
    </>
  );
};
//0.4% de interes a 48 semanas
//0.6% de interes por 84 semanas
export default ModalRanger;
