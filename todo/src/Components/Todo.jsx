import React, { useState } from "react";
import './todo.css'
import ShowTodo from "./ShowTodo";
import { FaEdit, FaPlus } from 'react-icons/fa'

const Todo = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editId, setEditId] = useState(null);

  const submitHandler = (e) => {
    if (task && toggleBtn) {
      const allInputData = {
        id: new Date().getTime().toString(),
        task: task,
      };
      setData([...data, allInputData]);

      setTask("");
    } else if (task && !toggleBtn) {
      setData(
        data.map((elem) => {
          if (elem.id === editId) {
            return { ...elem, task };
          }
          return elem;
        })
      );
      setToggleBtn(true);
      setTask("");
    } else {
      alert("Add Some Task First");
    }
  };

  // Delete Function
  const deleteItem = (id) => {
    const finalData = data.filter((element) => {
      return element.id !== id;
    });
    setData(finalData);
  };

  // Edit Button
  const editBtn = (id) => {
    let newEditItem = data.find((elem) => {
      return elem.id === id;
    });
    // console.log(newEditItem);
    setTask(newEditItem.task);
    setToggleBtn(false);
    setEditId(id);
  };

  return (
    <section className="container">
      <div className="relative container ml-8 mt-8">

        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          style={{border:"3px solid gray"}}
          className="w-full rounded-md border-gray-800 p-5 py-2.5 pr-10 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          {toggleBtn ? (
            <button
              type="button"
              className="rounded-full bg-blue-600 p-0.5 text-white hover:bg-blue-700"
              onClick={() => submitHandler()}
            >
              <span className="sr-only">Submit</span>
              <FaPlus />
            </button>
          ) : (
            <button
              type="button"
              className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700"
              onClick={() => submitHandler()}
            >
              <span className="sr-only">Submit</span>
              <FaEdit />
            </button>
          )}
        </span>
      </div>

      <div className="todoList">
        {data.map((elem) => {
          return (
            <ShowTodo
              key={elem.id}
              id={elem.id}
              task={elem.task}
              deletBtn={deleteItem}
              editBtn={editBtn}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Todo;
