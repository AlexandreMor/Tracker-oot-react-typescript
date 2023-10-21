import { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { SettingsComp } from "./components/tracker-settings/SettingsComp";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { useDungeonsLogic } from "./hooks/dungeons/useDungeonsLogic";
import { useOverworldLogic } from "./hooks/overworld/useOverworldLogic";

export const App = () => {
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };
  useOverworldLogic();
  useDungeonsLogic();

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
              <Route path="/settings" element={<SettingsComp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
};
