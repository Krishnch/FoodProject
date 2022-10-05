import React from 'react';
import '../Styles/Login.css';

function Login(props){
    function changePage(){
        props.setPage(3);
    }

    return(
        <div className='form'>
            <div>
            <h5> Login</h5>
            </div>
            <label>Email Id : </label>
            <br></br>
            <input type="email" placeholder='xyz@abc.com'></input> 
            <br></br>
            <br></br>
            <label>Password : </label>
            <br></br>
            <input type="password" placeholder='type password'></input>
            <br></br>
            <br></br>
            <button onClick={changePage}>Submit</button>
        </div>
    )
}

export default Login;