import React, {useState, useRef} from 'react'

function HeadingModifier() {

    const [text, setText] = useState('');
    const textRef = useRef();

    const textHandler = (tag) => {
        console.log("textRef",textRef);
        textRef.current.innerHTML = `<${tag}>${text}</${tag}>`
    }

    return (
        <div>
              <input type="text" value={text} onChange={e => setText(e.target.value)}/>  
              <button onClick={() => textHandler('h1')}>h1</button>
              <button onClick={() => textHandler('h2')}>h2</button>
              <button onClick={() => textHandler('h3')}>h3</button>
              <p ref={textRef}>{text}</p>
        </div>
    )
}

export default HeadingModifier
