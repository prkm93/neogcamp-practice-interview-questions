import React, {useState, useRef} from 'react'

function ColorModifier() {
    const [text, setText] = useState('');
    const textRef = useRef();

    const colorHandler = (color) => {
        textRef.current.style.color = color;
    }

    return (
        <div className="title">
            <div className="jumbotron">
                <h2>Text Color Modifier</h2>
            </div>
            <div className="form-group row">
                <label htmlFor="" className="col-sm-2 col-form-label">Enter text:</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => colorHandler('red')}>red</button>
            <button type="button" className="btn btn-success mx-3" onClick={() => colorHandler('green')}>green</button>
            <button type="button" className="btn btn-primary" onClick={() => colorHandler('blue')}>blue</button>
            <div className="mt-4"><h3 ref={textRef}>{text}</h3></div>
        </div>
    )
}

export default ColorModifier
