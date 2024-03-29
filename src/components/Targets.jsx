import { useRef, useState } from "react";
import { CardTarget } from "./CardTarget";
import ModalRanger from "./ModalRanger";

export default function Targets({ info, infos }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const hasInfo = info.length > 0;
  const inputRef = useRef();

  const abrirModal = (id) => {
    const tarjetaSeleccionada = info.find((tarjeta) => tarjeta.id === id);
    setModalContent({ tarjetaSeleccionada });
    setModalVisible(true);
  };
  const cerrarModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      {hasInfo ? (
        info.map((info) => (
          <article
            className="mb-8 w-[320px] h-[172px] rounded-[40px]    mx-auto    gradient-text-shadow
 shadow-[8px_8px_16px_6px] shadow-[#4676C31C] drop-shadow-[-8px_-8px_-16px_6px_rgba(255, 255, 255, 1)]
 shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-[#F8F9FF] bg-opacity-[100%]  box-borderlex flex-col justify-between text-center gap-[1px]  p-5 tracking-wide  gradient-bg-shadow leading-tight "
            key={info.id}
            onClick={() => abrirModal(info.id)}
            ref={inputRef}
          >
            <CardTarget info={info} />
          </article>
        ))
      ) : (
        <section
          className="mb-8 w-[320px] h-[172px] rounded-[40px]    mx-auto    gradient-text-shadow
shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-tl from-[#fafbff] from-40%  via-[#FFFFFF]   to-[#ebf0ffa5]   box-borderlex flex-col justify-between text-center gap-[1px]  p-8 tracking-wide  gradient-bg-shadow leading-tight"
        >
          <p>no encontrado info </p>
        </section>
      )}
      {modalVisible && (
        <ModalRanger contenido={modalContent} onClose={cerrarModal} />
      )}
    </>
  );
}
