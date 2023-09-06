
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { lazyLoad } from "./lazyLoad";

export const App = () => {
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };

  const AsideLeft = lazyLoad("./components/AsideLeft", "AsideLeft")
  const AsideRight = lazyLoad("./components/AsideRight", "AsideRight")
  const CentralContent = lazyLoad("./components/CentralContent", "CentralContent")

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
