import React from "react";
import { useState } from "react";
import "./calc.css";

const Calc = () => {
  const [calculation, setCalculation] = useState("");
  const actions = ["/", "*", "+", "-"]

//   Update Calculation
  const updateValue = (value) => {
    
    setCalculation(calculation + value);
  };

  //   Creating Digits
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="btn col-4 digitBtn" onClick={() => updateValue(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  //   Calculate
  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };

//   Clear
  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  //   All Clear
  const allClear = () => {
    setCalculation("")
  };


  return (
    <section className="container mainBox">
      <div className="inputBox p-2">
        <h3>{calculation || "0"}</h3>
      </div>
      
        <div className="btnsBox row justify-content-center">
            {createDigits()}

            <button className="btn col-4 digitBtn" onClick={()=>{updateValue('.')}}>.</button>
            <button className="btn col-4 digitBtn" onClick={()=>{updateValue('0')}}>0</button>
            <button className="btn col-4 optBtns" onClick={calculate}>=</button>

                {actions.map( (val,index) => {
                    return(
                    <button key={index} className="btn col-4 optBtns" onClick={()=>{updateValue(val)}}>{val}</button>
                    )
                })}
                <button className="btn col-4 optBtns" onClick={()=>{allClear()}}>AC</button>
                <button className="btn col-4 optBtns" onClick={clear}> <img  width={20} height={20} src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
        </div>


    </section>
  );
};

export default Calc;
