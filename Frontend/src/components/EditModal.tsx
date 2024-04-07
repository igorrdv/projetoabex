import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import styles from "./Register.module.css";

const EditModal = ({ isOpen, closeModal, id }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "2024-01-01",
    local: "",
    user: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/event/${id}`, formData);

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Editar Item"
    >
      <h2 style={{ marginLeft: "45%" }}>Editar Item</h2>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Insira o título"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="text"
          value={formData.local}
          onChange={(e) => setFormData({ ...formData, local: e.target.value })}
          placeholder="Insira o Local"
        />
        <input
          type="text"
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
          placeholder="Insira o seu nome"
        />

        <button type="submit">Atualizar</button>
      </form>
    </Modal>
  );
};

export default EditModal;
