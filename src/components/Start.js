import React from 'react';
import '../Styles/Start.css';

function Start(props){
    function changePage(){
        props.setPage(4);
    }


    return(
        <div>
            <h2>Welcome to Food's Kitchen</h2>
            <button className='start' onClick={changePage}>Go To Menu</button>
        </div>
    )
}

export default Start;