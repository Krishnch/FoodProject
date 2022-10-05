import React from 'react';
import '../Styles/Home.css';

function Home(props) {
    function changePage() {
        props.setPage(1);
    }
    // function changePage1() {
    //     props.setPage(2);
    // }


    return (
        <div className='home'>
            <h4> Welcome to food's Restaurant</h4>
            <p>New User Registration</p>
            <button onClick={changePage}>Signup</button>
            <br></br>
            {/* <br></br>
            <p>Login</p>
            <button onClick={changePage1}>Login</button> */}

        </div>

    )
}

export default Home;