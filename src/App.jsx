import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const rows = [
    { page: "Home", description: "This is the first page", status: "live" },
    { page: "Page 2", description: "This is the second page", status: "draft" },
    { page: "Page 3", description: "This is the third page", status: "error" },
  ];
  return (
    <div className="App">
      <Table rows={rows} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
