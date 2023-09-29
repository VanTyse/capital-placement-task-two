import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Components/General/Modal";
import PersonalNotes from "./Components/General/PersonalNotes";
import Sidebar from "./Layouts/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedNav, setSelectedNav] = useState<
    "1" | "2" | "3" | "4" | "5" | "6" | "7"
  >("5");

  const [hasSeenModal] = useState(() => {
    const h = localStorage.getItem("has_seen_modal");
    if (h === "true") return true;
    else return false;
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!hasSeenModal) {
      setTimeout(() => setShowModal(true), 1000);
    }
  }, [hasSeenModal]);

  useEffect(() => {
    if (showModal === false) localStorage.setItem("has_seen_modal", "true");
  }, [showModal]);

  return (
    <div className="h-[100dvh] flex ">
      <Sidebar selectedNav={selectedNav} changeNav={setSelectedNav} />
      <div className="w-full overflow-y-auto py-8 px-10">
        <Outlet />
      </div>
      <Modal show={showModal} onChange={(value) => setShowModal(value)}>
        <PersonalNotes setShowModal={setShowModal} />
      </Modal>
      <div className="bg-[#c4c4c4] animate-pulse">
        <button
          className="fixed bottom-7 right-9 bg-primary-blue text-[white] rounded-full p-3 px-6 text-xs"
          onClick={() => setShowModal(true)}
        >
          Show Personal Notes
        </button>
      </div>
    </div>
  );
}

export default App;
