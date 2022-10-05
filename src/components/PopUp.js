import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Food from './Food';

function PopUp(props) {
    const [popup,setPage]=useState(false);

    const closePopUp=()=>{
        hasSelectionSupport(false)
    }
    function changePage(){
        props.setPage(7);
    }
  return (
    <div className='main'>
        <div className='popup'>
        <div className='PopUp-header'>
            <h1>Order Summary</h1>
            <h1 className='closePoUp'>X</h1>
            <button className='SUBMIT' onClick={changePage}>SAVE AND CHECKOUT</button>
            <button className='close-btn'> CANCLE</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp