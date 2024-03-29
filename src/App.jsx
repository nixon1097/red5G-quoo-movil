import "./App.css";
import { useInfos } from "./hooks/useInfos";
import Header from "./components/Header";
import Targets from "./components/Targets";
import { CarFirts } from "./components/CarFirts";
// import Modal from "./components/Modal";
import Modals from "./components/Modals";
// import { CardTarget } from "./components/CardTarget";

function App() {
  const { infons, infos } = useInfos();

  return (
    <>
      <Header />

      <main className="mx-auto grid  grid-flow-row justify-center items-center text-center mt-0">
        {/* logo  */}
        <CarFirts />
        <Targets info={infons} infos={infos} />
        {/* <Modal info={infons[0]} /> */}
        <Modals />
      </main>
    </>
  );
}

export default App;
