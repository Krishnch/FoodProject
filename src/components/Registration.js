import React from 'react';
import '../Styles/Registration.css';

function Registration(props){
    function changePage(){
        props.setPage(2);
    }

    return(
        <>
        <div className='form'>
            <div>
            <h6> Signup</h6>
            </div>
            <label>Full Name : </label>
            <br></br>
            <input type="text" placeholder='ABCD'></input> 
            {/* <br></br>
            <br></br>
            <label>Phone Number : </label>
            <br></br>
            <input type="text" placeholder='999999999'></input> */}
            <br></br>
            <br></br>
            <label>Email Id : </label>
            <br></br>
            <input type="email" placeholder='abcd@abc.com'></input> 
            <br></br>
            <br></br>
            <label>Password : </label>
            <br></br>
            <input type="password" placeholder='Enter password'></input>
            <br></br>
            <br></br>
            {/* <label>Confirm Password : </label>
            <br></br>
            <input type="password" placeholder='confirm password'></input> 
            <br></br>
            <br></br> */}
            <button onClick={changePage}>Submit</button>
        </div>
        </>
    )
}

export default Registration;