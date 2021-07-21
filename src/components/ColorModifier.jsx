import React, {useState, useRef} from 'react'

function ColorModifier() {
    const [text, setText] = useState('');
    const textRef = useRef();

    const colorHandler = (color) => {
        textRef.current.style.color = color;
    }

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={() => colorHandler('red')}>red</button>
            <button onClick={() => colorHandler('green')}>green</button>
            <button onClick={() => colorHandler('blue')}>blue</button>
            <h3 ref={textRef}>{text}</h3>
        </div>
    )
}

export default ColorModifier
