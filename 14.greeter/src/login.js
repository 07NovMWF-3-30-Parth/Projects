import Logger from './components/Logger';
import './login.css'
import { useState } from 'react';


function Login() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function log_in() {
        if (email.indexOf('@') >= 0 && pass.length >= 8) {
            <Logger />
        } else {
            alert("Email should include @ and password length must be 8 character")
        }
    }

    return (
        <>
            <div className="container login mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-5 mb-5 title">
                        <h1 className='fs-1'>Greeter ! ! !</h1>
                        <h3>MEMORIES are past,<br />but we can make PRESENT for you.</h3>
                    </div>
                    <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-7 text-center'>
                        <form className='shadow'>
                            <div>
                                <input type='email' id='email' className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email here' />
                                <div className='text-start form-text mb-4'>We'll never share your email with anyone else.</div>
                            </div>
                            <div>
                                <input type='password' id='password' className='form-control' onChange={(e) => setPass(e.target.value)} placeholder='Enter your Password here' />
                            </div>
                            <div>
                                <button type="button" className="btn text-white mt-4 mb-2 w-75 bg-primary" onClick={log_in}>Login</button>
                            </div>
                            <div>
                                <a href='#' className='link'>Forgotten password?</a>
                            </div>
                            <hr />
                            <div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <div class="modal fade shadow-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" a ria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-info-subtle">

                        <div class="modal-header">
                            <h2>Sign Up</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='signup'>
                                <div className='row'>
                                    <div className='col'><input type='text' id='firstName' onChange={(e) => setFName(e.target.value)} className='form-control' placeholder='First name'></input></div>
                                    <div className='col'><input type='text' id='surname' onChange={(e) => setLName(e.target.value)} className='form-control' placeholder='Surname'></input>
                                    </div>
                                </div>
                                <div>
                                    <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Enter New Email here' />
                                </div>
                                <div>
                                    <input type='password' id='password' onChange={(e) => setPass(e.target.value)} className='form-control'
                                        placeholder='New password'></input>
                                </div>
                                <div className='row'>
                                    <div className='col'><label className='align-middle' htmlFor='dob'>Date of Birth :- </label>
                                    </div>
                                    <div className='col'><input type='date' className='form-control' id='dob'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col-5'><label htmlFor='gender'>Gender :- </label></div>
                                    <div className='col-7'>
                                        <input type='radio' name='gender' id='Male'></input>&nbsp;
                                        <label htmlFor='Male'> Male</label>&nbsp; &nbsp;
                                        <input type='radio' name='gender' id='Female'></input>&nbsp;
                                        <label htmlFor='Female'> Female</label>
                                    </div>
                                </div>
                                <div>
                                    <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login;