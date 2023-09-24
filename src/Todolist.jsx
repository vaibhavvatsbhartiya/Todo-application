import React from "react";

function Todolist(props) {
  return (
    <>
      <div className="show-list">
        <button className="btn"
        onClick={()=>{
            props.onselect(props.id);
        }}
        >❌</button>
        <li>{props.text} </li>
      </div>
    </>
  );
}

export default Todolist;
