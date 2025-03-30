import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={resetTodos}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
