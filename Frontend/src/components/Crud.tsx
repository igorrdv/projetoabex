import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Crud.module.css";
import EditModal from "./EditModal";

const Crud = () => {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("2024-01-01");
  const [newLocal, setNewLocal] = useState("");
  const [newUser, setNewUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  interface evento {
    id: number;
    title: string;
    date: Date;
    local: string;
    user: string;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/event");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleAddItem = async (e: Event) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/event", {
        title: newTitle,
        date: newDate,
        local: newLocal,
        user: newUser,
      });

      fetchData();
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    }
  };

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/event/${id}`);
      fetchData();
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    }
  };

  const openModal = (id) => {
    setActiveId(id);
    setIsModalOpen(true);
  };

  const closeModal = async (id) => {
    setActiveId(null);
    setIsModalOpen(false);
    await fetchData();
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleAddItem} className={style.form}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Insira o título"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <input
          type="text"
          value={newLocal}
          onChange={(e) => setNewLocal(e.target.value)}
          placeholder="Insira o Local"
        />
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Insira o seu nome"
        />

        <button type="submit" className={style.add}>
          Adicionar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data</th>
            <th>Local</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: evento) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{formatDate(item.date)}</td>
              <td>{item.local}</td>
              <td>{item.user}</td>
              <td>
                <button
                  className={style.edit}
                  onClick={() => openModal(item.id)}
                >
                  Editar
                </button>

                <EditModal
                  isOpen={isModalOpen && item.id === activeId}
                  closeModal={closeModal}
                  id={item.id}
                />
                <button
                  className={style.delete}
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
