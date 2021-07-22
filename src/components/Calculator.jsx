import React, { useState } from 'react';

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
  
    return (
        <div className="title">
            <div className="jumbotron">
                <h2>A mini calculator</h2>
            </div>
            <form>
                <div className="form-group row">
                    <label for="num1" className="col-sm-2 col-form-label">Enter num 1</label>
                    <div className="col-sm-8">
                        <input 
                            type="number" 
                            className="form-control" 
                            value={num1} 
                            placeholder="Enter num1"
                            onChange={e => setNum1(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="num2" className="col-sm-2 col-form-label">Enter num 2</label>
                    <div className="col-sm-8">
                        <input 
                            type="number" 
                            className="form-control"
                            value={num2} 
                            placeholder="Enter num2"
                            onChange={e => setNum2(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="operation" className="col-sm-2 col-form-label">Enter operator</label>
                    <div className="col-sm-8">
                        <button 
                            type="button" 
                            className="btn btn-primary mx-2"
                            onClick={() => {calcHandler('+')}}
                        >Add</button>
                        <button 
                            type="button" 
                            className="btn btn-secondary mx-2"
                            onClick={() => calcHandler('-')}
                        >Subtract</button>
                        <button 
                            type="button" 
                            className="btn btn-success mx-2"
                            onClick={() => calcHandler('*')}
                        >Multiply</button>
                        <button 
                            type="button" 
                            className="btn btn-danger mx-2"
                            onClick={() => calcHandler('/')}
                        >Divide</button>
                         <button 
                            type="button" 
                            className="btn btn-primary mx-2"
                            onClick={() => {setNum1(''); setNum2(''); setResult('');}}
                        >Clear</button>
                    </div>
                </div>
                <div className="form-group row">
                     <label for="row" className="col-sm-2 col-form-label">Result</label>
                     <div className="col-sm-4 pt-1"><h4>{result && result}</h4></div>
                </div>
            </form>
        </div>
    )
}

export default Calculator;
