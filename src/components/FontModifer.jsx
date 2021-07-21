import React from 'react'

function FontModifer() {
    return (
        <div>
            <h3>Font size modifier:</h3>
            <div>
              <label htmlFor="text" >Enter text:</label>
              <input type="text" value={text} onChange={e => setText(e.target.value)}/>
              <button onClick={increase}>+</button>
              <button onClick={decrease}>-</button>
              <div>
                <label htmlFor="">Your text: </label>
                <p ref={textRef} style={{fontSize: '20px'}}>{text}</p>  
              </div>
            </div>
        </div>
    )
}

export default FontModifer
