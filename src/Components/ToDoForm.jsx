import React, { useState } from "react";
import shortid from "shortid";

const ToDoForm = ({onSubmit}) => {
  const [ text, setText ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === "")  {
      alert("Please enter a ToDo");
      return;
    }

    onSubmit({
      id : shortid.generate(),
      text : text,
      isComplete : false,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input-field" type="text" onChange={(e) => setText(e.target.value)} value={text}></input>
      <button className="btn" onClick={handleSubmit}>Add ToDo</button>
    </form>
  );
};

export default ToDoForm;
