import React, {useState, useRef} from 'react'

function FontModifer() {

    const [text,setText] = useState('');
    const [result, setResult] = useState('');
    const textRef = useRef();

    const fontManager = () => {
        setResult(text);
        let font = textRef.current.style.fontSize;
        let fontNum = font.toString().substr(0, font.toString().length-2);
        let numFont = +fontNum;
        return numFont;
    }

    const increaseFont = () => {
      textRef.current.style.fontSize = `${fontManager()+2}px`;
    }

    const decreaseFont =() => {
        textRef.current.style.fontSize = `${fontManager()-2}px`;
    }

    return (
        <div className="title">
            <div className="jumbotron">
                <h2>Font Size Modifier</h2>
            </div>
            <form>
                <div className="form-group row">
                    <label htmlFor="text"className="col-sm-2 col-form-label">Enter text:</label>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={text} 
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                </div>
            </form>
              <div>
                <button type="button" class="btn btn-success mx-3" onClick={increaseFont}>+</button>
                <button type="button" class="btn btn-danger" onClick={decreaseFont}>-</button>
              </div>
              <div>
              <div className="form-group row">
                    <label htmlFor="text"className="col-sm-2 col-form-label">Your text:</label>
                    <div className="col-sm-8">
                        <p ref={textRef} style={{fontSize: '20px'}}>{text ? text: result}</p>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default FontModifer
