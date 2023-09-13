import { Suspense } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { lazyLoad } from "./lazyLoad";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };

  const Home = lazyLoad("./components/Home", "Home");
  const Settings = lazyLoad("./components/tracker-settings/SettingsComp", "SettingsComp");

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
        <main className="mt-2">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};
