import AsideLeft from "./components/AsideLeft";
import Footer from "./components/Footer";
import MainContent from "./components/CentralContent";
import Navbar from "./components/Navbar";
import AsideRight from "./components/AsideRight";

function App() {
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };

  return (
    <>
      <div
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={() => {
          return false;
        }}
        ref={bodyEl}
        className="flex flex-col"
      >
        <Navbar />
        <main className="flex justify-between mt-2">
          <AsideLeft />
          <MainContent />
          <AsideRight />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
