import React, { useState } from 'react';
import '../Styles/Food.css';
import burger from '../images/burger.jpeg';
import fries from '../images/fries.jpeg';
import coke from '../images/coke.jpeg';
import pepsi from '../images/pepsi.jpeg';
import PopUp from './PopUp';

function Food(props) {
    function changePage() {
        props.setPage(6);
    }
    const [quant1, setQuant1] = useState(0);
    const [quant2, setQuant2] = useState(0);
    const [quant3, setQuant3] = useState(0);
    const [quant4, setQuant4] = useState(0);

    let items = [
        {
            index : quant1,
            Name: "Hamburger",
            Url: burger,
            Price: "Price:  200",
            cost: 200
        },
        {
            index : quant2,
            Name: "Fries",
            Url: fries,
            Price: "Price: 100",
            cost: 100
        },
        {
            index : quant3,
            Name: "Coke",
            Url: coke,
            Price: "Price: 50",
            cost: 50
        },
        {
            index : quant4,
            Name: "Pepsi",
            Url: pepsi,
            Price: "Price: 50",
            cost: 50
        }

    ]

    function add(id) {
        let value = parseInt(document.getElementById(`${id}`).value)
        document.getElementById(`${id}`).value = value + 1;
        if(id === "Hamburger"){
            setQuant1(s=>s+1);
        }
        else if(id === "Fries"){
            setQuant2(s=>s+1);
        }
        else if(id === "Coke"){
            setQuant3(s=>s+1);
        }
        else if(id === "Pepsi"){
            setQuant4(s=>s+1);
        }

    }
    function subtract(id,index) {
        let value = parseInt(document.getElementById(`${id}`).value)
        document.getElementById(`${id}`).value = value - 1;
        if(id === "Hamburger"){
            setQuant1(s=>s-1);
        }
        else if(id === "Fries"){
            setQuant2(s=>s-1);
        }
        else if(id === "Coke"){
            setQuant3(s=>s-1);
        }
        else if(id === "Pepsi"){
            setQuant4(s=>s-1);
        }
    }

    function showAlert(){
        alert(
        items.map((item)=>
        `${item.Name} : ${item.cost} * ${item.index} = ${item.cost*item.index}` + "\n"
    ))
    props.setPage(6)
    }
    return (
        <div>
            {items.map((item) => (
                <div className='card'>
                    <img src={item.Url} alt={item.Name} className="image"></img>
                    <br></br>
                    <label>{item.Name}</label>
                    <br></br>
                    <label>{item.Price}</label>
                    <br></br>
                    <p>Cost(INR) : {item.cost*item.index}</p>
                    <button onClick={() => { subtract(item.Name) }} className="subtract">-</button>
                    <input id={item.Name} defaultValue="0" className="itemrange" type="text" Min="0"></input>
                    <button onClick={() => { add(item.Name) }} className="plus">+</button>
                </div>
            ))};
            <div className='cardb' >
                <button onClick={showAlert}>Add to Cart</button>
            </div>
        </div>
    )
 }
   
   

export default Food;