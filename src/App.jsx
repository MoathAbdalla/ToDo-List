import ToDoForm from "./Components/ToDoForm";
import "./App.css";
import { useState } from "react";
import ToDo from "./Components/ToDo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const updateTodoToShow = (state) => {
    setTodoToShow(state);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete : !(todo.isComplete),
          }
        } else {
          return todo;
        }
      })
    )
  };

  if (todoToShow === "active")  {
    todos = todos.filter((todo) => !todo.isComplete);
  }
  else if (todoToShow === "complete")  {
    todos = todos.filter((todo) => todo.isComplete);
  }

  return (
    <div className="container">
      <ToDoForm onSubmit={addTodo} />
      {
        todos.map((todo) => (
          <ToDo 
          key={todo.id} 
          todo={todo} 
          onDelete={() => handleDelete(todo.id)} 
          toggleComplete={() => toggleComplete(todo.id)}/>
        ))
      }
      <div className="update-btn-container">
        <div className="top-buttons">
          <button className="update-btn btn all" onClick={() => updateTodoToShow("all")}>All</button>
          <button className="update-btn btn active" onClick={() => updateTodoToShow("active")}>Active</button>
          <button className="update-btn btn complete" onClick={() => updateTodoToShow("complete")}>Complete</button>
        </div>
        {/*
        <div className="bottom-buttons">
          <button className="update-btn btn">Remove all complete todos</button>
          <button className="update-btn btn">Toggle all todos</button>
        </div>
        */}
      </div>

      <div style={{
        marginTop: "300px",
        textAlign: "center",
        padding: "20px",
        color: "#2c2c2cff",
        borderTop: "1px solid #ccc",
        fontSize: "16px"
      }}>
        &copy; 2025 Moath Alwahidi.<br />
        E-mail: <a href="mailto:moazalwahidi@gmail.com">moazalwhaidi@gmail.com</a> <br />
        <a href="https://www.linkedin.com/in/moath-alwahidi/" target="_blank" rel="noopener noreferrer" style={{ color: "#0b549cff", textDecoration: "none", marginLeft: "5px" }}>
          <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" style={{ verticalAlign: "middle", marginRight: "5px" }} />
          LinkedIn
        </a>
      </div>



    </div>
    

  );
}

export default App;
