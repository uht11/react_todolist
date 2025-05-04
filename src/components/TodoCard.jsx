import React from "react";

export default function TodoCard(props) {
  const { children, handleDelete, handleEdit, todoIndex } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
      <button onClick={()=>{
        handleEdit(todoIndex)
      }}>
          
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{handleDelete(todoIndex)}}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
