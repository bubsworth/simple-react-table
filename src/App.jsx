import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { page: "Home", description: "This is the first page", status: "live" },
    { page: "Page 2", description: "This is the second page", status: "draft" },
    { page: "Page 3", description: "This is the third page", status: "error" },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((__, idx) => idx !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
