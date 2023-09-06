import { AsideLeft } from "./components/AsideLeft";
import { Footer } from "./components/Footer";
import { CentralContent } from "./components/CentralContent";
import { Navbar } from "./components/Navbar";
import { AsideRight } from "./components/AsideRight";

export const App = () => {
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
          <CentralContent />
          <AsideRight />
        </main>
        <Footer />
      </div>
    </>
  );
};
