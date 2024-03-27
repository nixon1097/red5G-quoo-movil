import "./App.css";
import Header from "./components/Header";
import Targets from "./components/Targets";

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto text-center mt-0">
        {/* logo  */}
        <div className=" text-4xl font-bold">
          <div
            className="mx-auto mb-[28px]  rounded-full  w-[144px] h-[144px] grid place-content-center justify-center items-center box-border gradient-bg-shadow
          shadow-[8px_8px_16px_6px] shadow-[#4676C31C]  bg-gradient-to-r from-[#EBF0FF]  via-[#FFFFFF]  to-[#FAFBFF] to-20% "
          >
            <img
              src="/public/logo.svg"
              alt="logo imagen"
              className="drop-shadow-md "
            />
          </div>
          <h3 className="w-[320px] h-[48px] mx-auto text-[#363C52] ">
            Tu crédito en
          </h3>

          <p className="text-[#05bbfd7a] drop-shadow-[0px_0px_6px] ">
            <span className="text-transparent bg-gradient-to-b from-[#1bc0fc] to-[#0599FB] bg-clip-text  mt-[4px]  ">
              3 pasos
            </span>
          </p>
        </div>

        <p className="w-[320px] h-[20px] text-center mx-auto text-[#363C52] my-10 text-lg">
          ¿Qué <span className="font-bold">crédito te interesa</span>?
        </p>
        <Targets />
      </main>
    </>
  );
}

export default App;
