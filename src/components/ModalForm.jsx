import { CardTarget } from "./CardTarget";

import ConctaForm from "./ConctaForm";

const ModalForm = ({ contenido, setModalVisible }) => {
  const info = contenido;
  // contenido.tarjetaSeleccionada;

  return (
    <>
      <section className="modal fixed animate-fade animate-delay-100 animate-ease-in  transform transition-transform duration-300 ease-in-out bg-slate-500/70  z-50  w-screen  h-screen top-0 left-0 flex items-center justify-center overflow-y-hiddend">
        <article
          className="my-4 w-[320px] h-auto  rounded-[40px]     gradient-text-shadow drop-shadow-[-8px_-8px_-16px_6px_rgba(255, 255, 255, 1)] px-5 pt-7 pb-5
         shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-[#F8F9FF] bg-opacity-[100%] box-border  flex-col justify-center text-center gap-[1px]  tracking-wide  gradient-bg-shadow leading-tight overflow-hidden relative animate-delay-100 animate-ease-in  transform transition-transform duration-300 ease-in-out   "
        >
          <CardTarget info={info} />
          <h2 className="text-md tracking-tight text-[#363C52]   mt-6 mb-0">
            Para comenzar unos{" "}
            <span className="font-bold">datos iniciales</span>
          </h2>
          <div className="container-ContaFrom mt-12">
            <ConctaForm />
          </div>
        </article>
      </section>
    </>
  );
};
//0.4% de interes a 48 semanas
//0.6% de interes por 84 semanas
export default ModalForm;
