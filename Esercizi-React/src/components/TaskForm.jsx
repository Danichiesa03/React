import { useState } from "react";
export default function TaskForm() {
  const [newTask, setNewTask] = useState({
    id: "",
    titolo: "",
    completato: "",
  });
  const [task, setTask] = useState(() => {});
  return (
    <>
      <form>
        <h5>Inserisci Task</h5>
        <label>Numero Task</label>
        <input
          type="number"
          name="numero"
          placeholder="inserici in numero della tua task"
        />
        <label>Nome Task</label>
        <input
          type="text"
          name="nome"
          placeholder="inserisci in nome della tua task"
        />
        <input type="checkbox" name="completato" />
        <label>Completato</label>
        <input type="submit" name="aggiungi" />
      </form>
    </>
  );
}
