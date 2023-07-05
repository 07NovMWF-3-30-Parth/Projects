import './logger.css'
import { useState } from 'react';
import Login from '../login';

function Logger() {
    const [greet, setGreet] = useState("")
    const [greets, setGreets] = useState([])

    function addGreet(e) {
        e.preventDefault()
        // e.stopPropagation()
        setGreets([{ id: greets.length, greet }, ...greets]);
        setGreet("");
    }

    function logout() {
        <Login />
    }

    return (
        <div className="container my-5 position-relative">
            <button onClick={logout} className='position-absolute top-0 end-0 btn btn-primary'>Logout</button>
            <h1>Hello, </h1>
            <h3 className="pb-3">Welcome to Greeter ! ! !</h3>
            <hr />
            <form>
                <div className="input-group mb-5">
                    <input type="text" value={greet} className="form-control py-3" onChange={(e) => setGreet(e.target.value)} placeholder="Write your Greet Here ! ! !" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input className="btn btn-light border border-black fw-bold" onClick={addGreet} type="submit" value="Add Greet !" id="button-addon2" />
                </div>
            </form>
            <div className="text-end pe-5" id='display'>
                {greets.map((item) => (
                    <span className="border d-block border-black fw-bold w-75 rounded m-3 p-2" key={item.id}>{item.greet}</span>
                ))}
            </div>
        </div>
    )
}

export default Logger; 