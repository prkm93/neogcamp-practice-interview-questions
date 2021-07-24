import React, {useState} from 'react'

function PasswordChecker() {

    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const passwordValidator = () => {
        let error = {};
        if (password.length < 10) {
            error.message = "error - Password should be minimum 10 char";
        } else {
            error.message = "success";
        }
        console.log("error", error);
        setError(error);
    }

    return (
        <div className="title">
            <div className="jumbotron">
                <h2>Password Validator</h2>
            </div>
            <form>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Enter passsword:</label>
                    <div className="col-sm-8">
                        <input 
                            type="password" 
                            className="form-control"
                            value={password}
                            placeholder="Enter password"
                            style={ error.message ? (error.message==="success") ? {border: '1px solid #198754'}:{border: '1px solid #dc3545'}: null}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                <p className={error.message !== "success" ? "text-danger": "text-success"}>{error && error.message}</p>
                <button type="button" className="btn btn-primary" onClick={passwordValidator}>Submit</button>
            </form>
        </div>
    )
}

export default PasswordChecker;
