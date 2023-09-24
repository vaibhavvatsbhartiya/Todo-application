import React, { useState } from "react";
import Todolist from "./Todolist";

const Todoui = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    console.log("button clicked to add inputList");
    setInputList(event.target.value);
  };

  const ListofItems = () => {
    setItems((previousData) => {
      return [...previousData, inputList];
    });
    setInputList("");
  };

  const DeleteItem = (id) => {
    // console.log("Deleted");
    setItems((previousData)=>{
      console.log(previousData)
     return previousData.filter((arrElement, Index)=>{
        console.log(Index, id);
        return (Index !== id);
      })
    })
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Todo</h5>
          <div className="card-add-list">
            <div className="add-items">
              <input
                type="text"
                placeholder="Add Item Here"
                className="input"
                value={inputList}
                onChange={itemEvent}
              />
              <button onClick={ListofItems} className="btn">
                ➕
              </button>
            </div>

            <div className="added-items">
              {/* <button className="btn">❌</button> */}
              <ol className="listed-item">
                {/* <li>Items of Todo list </li> */}
                { items&&items.map((itemvalue, index) => {
                  return <Todolist key={index}
                   id={index} text={itemvalue} 
                   onselect = {DeleteItem} />;
                })}
              </ol>
            </div>
          </div>
          {/* <a href="#" class="btn btn-primary"></a> */}
        </div>
      </div>
    </>
  );
};

export default Todoui;
