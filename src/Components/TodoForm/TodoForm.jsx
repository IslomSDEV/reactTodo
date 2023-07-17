import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

function TodoForm() {
  const [inputValue, setInputVlaue] = useState("");
  const [todoObj, setTodoObj] = useState([
    { id: 1, text: "First text", complete: false },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setInputVlaue("");

    let todos = {
      id: new Date().getTime(),
      text: inputValue,
      complete: false,
    };

    setTodoObj([todos, ...todoObj]);
  }

  function delItem(id, index) {
    todoObj.map((del) => {
      if (id === del.id) {
        todoObj.slice(index, 1);
      }
    });
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          value={inputValue}
          onChange={(e) => setInputVlaue(e.target.value)}
          type="text"
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todoObj={todoObj} delItem={delItem} />
    </div>
  );
}

export default TodoForm;
