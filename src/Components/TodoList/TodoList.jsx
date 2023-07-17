import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./TodoList.css";

function TodoList({ todoObj, delItem }) {
 
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  let isChecked = (item) =>
    checked.includes(item) ? "complete" : "not-complete";

  let styleItem = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 0",
    background: "rgba(186, 186, 199, 0.871)",
    color: "rgb(0, 0, 0)",
  };

  return (
    <div>
      <ul className="list">
        {todoObj.map((item) => {
          return (
            <li style={styleItem} key={item.id}>
              <span className={`${isChecked(item)} 'flexSpan`}>
                <input value={item} type="checkbox" onChange={handleCheck}/>
                {item.text}
              </span>
              <button onClick={() => delItem(item.id)} className="dlBtn">
                <AiFillDelete />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
