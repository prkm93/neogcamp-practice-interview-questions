import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

function Calculator() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const calcHandler = (operation) => {
      const tempNum1 = +num1;
      const tempNum2 = +num2;
    //   console.log("tempnum", typeof tempNum1, tempNum1);
      if (operation === '+') {
        setResult(tempNum1 + tempNum2);
      } else if(operation === '-') {
        setResult(tempNum1 - tempNum2);
      } else if(operation === '*') {
        setResult(tempNum1 * tempNum2);
      } else if (operation === '/') {
        setResult(Math.floor(tempNum1 / tempNum2));
      }
    }
  
    // const increase = () => {
    //   let font = textRef.current.style.fontSize;
    //   let fontNum = font.toString().substr(0, font.toString().length-2);
    //   let numFont = +fontNum;
    //   console.log("font", font);
    //   font = `${numFont+2}px`;
    //   // textRef.current.style.fontSize = `${}`
    //   console.log("font after", font);
    //   setText(textRef.current.style.fontSize=`${numFont+2}px`);
    // }
  
    return (
        <div className="title">
            <div className="jumbotron">
                <h2>A mini calculator</h2>
            </div>
            <form>
                <div class="form-group row">
                    <label for="num1" class="col-sm-2 col-form-label">Enter num 1</label>
                    <div class="col-sm-8">
                        <input 
                            type="number" 
                            class="form-control" 
                            value={num1} 
                            placeholder="Enter num1"
                            onChange={e => setNum1(e.target.value)}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="num2" class="col-sm-2 col-form-label">Enter num 2</label>
                    <div class="col-sm-8">
                        <input 
                            type="number" 
                            class="form-control"
                            value={num2} 
                            placeholder="Enter num2"
                            onChange={e => setNum2(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="operation" class="col-sm-2 col-form-label">Enter operator</label>
                    <div class="col-sm-8">
                        <button 
                            type="button" 
                            class="btn btn-primary mx-2"
                            onClick={() => {calcHandler('+')}}
                        >Add</button>
                        <button 
                            type="button" 
                            class="btn btn-secondary mx-2"
                            onClick={() => calcHandler('-')}
                        >Subtract</button>
                        <button 
                            type="button" 
                            class="btn btn-success mx-2"
                            onClick={() => calcHandler('*')}
                        >Multiply</button>
                        <button 
                            type="button" 
                            class="btn btn-danger mx-2"
                            onClick={() => calcHandler('/')}
                        >Divide</button>
                    </div>
                </div>
                <div className="form-group row">
                     <label for="row" class="col-sm-2 col-form-label">Result</label>
                     <div class="col-sm-4 pt-1"><h4>{result && result}</h4></div>
                </div>
            </form>




            
            {/* <div className="num1">
              <label htmlFor="num1"> enter 1st no.</label>
              <input type="text" onChange={(e) => setNum1(e.target.value)}/>
            </div>
            <div className="num2">
              <label htmlFor="num2">enter 2nd no.</label>
              <input type="text" onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="operation">Enter operation:</label>
                <select name="operation" id="operation" onChange={e => setOperation(e.target.value)}>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                </select>
            </div>
            <div className="button">
              <button onClick={calcHandler}>Calculate</button>
            </div>
            <div>
              your output is: {result ? result : null}
            </div> */}
        </div>
    )
}

export default Calculator;
