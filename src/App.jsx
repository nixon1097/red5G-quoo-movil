import "./App.css";
import { useInfos } from "./hooks/useInfos";
import Header from "./components/Header";
import Targets from "./components/Targets";
import { CarFirts } from "./components/CarFirts";

function App() {
  const { infons, infos } = useInfos();

  return (
    <>
      <Header />

      <section className="mx-auto grid  grid-flow-row justify-center items-center text-center mt-0">
        {/* logo  */}
        <CarFirts />
        <Targets info={infons} infos={infos} />
      </section>
    </>
  );
}

export default App;
