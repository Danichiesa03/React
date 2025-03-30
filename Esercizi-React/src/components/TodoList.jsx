import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    const value = event.target.elements.todo.value;
    setTodos((todos) => [...todos, value]);
    event.target.elements.todo.value = "";
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const removeTodo = (index) => {
    setTodos((todos) => todos.filter((x, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
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
