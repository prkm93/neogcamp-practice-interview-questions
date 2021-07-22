import React, {useState, useRef} from 'react'

function HeadingModifier() {

    const [text, setText] = useState('');
    const textRef = useRef();

    const textHandler = (tag) => {
        console.log("textRef",textRef);
        textRef.current.innerHTML = `<${tag}>${text}</${tag}>`
    }

    return (
        <div className="title">
            <div className="jumbotron">
                <h2>Heading Modifier</h2>
            </div>
            <form>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">Enter text:</div>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={text} 
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <button type="button" className="btn btn-primary" onClick={() => textHandler('h1')}>h1</button>
                        <button type="button" className="btn btn-success mx-4" onClick={() => textHandler('h2')}>h2</button>
                        <button type="button" className="btn btn-danger" onClick={() => textHandler('h3')}>h3</button>
                    </div>
                    <div className="mt-2">
                        <p ref={textRef}>{text}</p>
                    </div>
                </div>
            </form>   
        </div>
    )
}

export default HeadingModifier
