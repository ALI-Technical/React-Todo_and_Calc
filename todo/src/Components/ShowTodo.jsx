import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {MdDeleteSweep} from 'react-icons/md'
import './todo.css'

const ShowTodo = (props) => {
  const [checked, setChecked] = useState(false);

  const listCheck = e => {
    if(checked){
      e.className += "listItem bg-slate-700 checked"
    }
    else{
      e.className+= "listItem bg-slate-700"
    }
    setChecked(!checked)
  }
  
  return (
    <li onClick={(e)=>{listCheck(e.target)}} className="listItem bg-slate-700">
      <p className="text-xl text-white overflow-auto break-words">{props.task}</p>
      <div className="btnDiv">
        <button className="bg-rose-600 text-white p-3 font-semibold"><MdDeleteSweep size={20} /></button>
        <button className="bg-sky-700 text-white p-3 font-semibold"><FaEdit size={20} /></button>
      </div>
    </li>
  );
};

export default ShowTodo;
