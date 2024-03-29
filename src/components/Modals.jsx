import { useState } from "react";

const Tarjeta = ({ id, titulo, contenido, onTarjetaClick }) => {
  return (
    <div className="tarjeta" onClick={() => onTarjetaClick(id)}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

const Modal = ({ titulo, contenido, onClose, onModalClick }) => {
  return (
    <div
      className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
      onClick={onModalClick}
    >
      <div className="modal-contenido bg-white p-8 rounded shadow-md w-1/2">
        <span className="cerrar absolute top-0 right-0 p-4" onClick={onClose}>
          &times;
        </span>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    titulo: "",
    contenido: "",
  });

  const tarjetas = [
    { id: 1, titulo: "Tarjeta 1", contenido: "Contenido de la tarjeta 1..." },
    { id: 2, titulo: "Tarjeta 2", contenido: "Contenido de la tarjeta 2..." },
    // Agrega más tarjetas si es necesario
  ];

  const abrirModal = (id) => {
    const tarjetaSeleccionada = tarjetas.find((tarjeta) => tarjeta.id === id);
    setModalContent({
      titulo: tarjetaSeleccionada.titulo,
      contenido: tarjetaSeleccionada.contenido,
    });
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const abrirSegundaModal = () => {
    setModalVisible(true); // Reutilizamos la misma modal
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {tarjetas.map((tarjeta) => (
        <Tarjeta
          key={tarjeta.id}
          id={tarjeta.id}
          titulo={tarjeta.titulo}
          contenido={tarjeta.contenido}
          onTarjetaClick={abrirModal}
        />
      ))}
      {modalVisible && (
        <Modal
          titulo={modalContent.titulo}
          contenido={modalContent.contenido}
          onClose={cerrarModal}
          onModalClick={cerrarModal}
        />
      )}
      {modalVisible && (
        <Modal
          titulo={modalContent.titulo}
          contenido={modalContent.contenido}
          onClose={cerrarModal}
          onModalClick={cerrarModal}
        />
      )}
    </div>
  );
};

export default App;
