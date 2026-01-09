import { useState } from "react";



export default function ToDoList(){
    
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
  <h2>Todo List</h2>

  <div className="input-group">
    <input
      type="text"
      value={task}
      placeholder="Enter task"
      onChange={(e) => setTask(e.target.value)}
    />
    <button onClick={addTodo}>Add</button>
  </div>

  <ul>
    {todos.map((todo, index) => (
      <li key={index} className="listColor">
        {todo}
        <button onClick={() => deleteTodo(index)}>❌</button>
      </li>
    ))}
  </ul>
</div>

  );
}

