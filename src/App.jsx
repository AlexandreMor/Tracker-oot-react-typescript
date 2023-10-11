import { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { lazyLoad } from "./lazyLoad";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

export const App = () => {
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };

  const Settings = lazyLoad(
    "./components/tracker-settings/SettingsComp",
    "SettingsComp"
  );

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
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
};
