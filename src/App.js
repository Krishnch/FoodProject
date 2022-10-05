import Checkout from './components/Checkout';
import Login from './components/Login';
import Registration from './components/Registration';
import Start from './components/Start';
import Food from './components/Food';
import Home from './components/Home';
// import Cart from './components/cart';
// import restorent from '../images/restorent.png';
import './App.css';
import { useState } from 'react';
import PopUp from './components/PopUp';

function App() {
  const [page, setPage] = useState(1);
  let item = null;
  if(page === 0){
    item = <Home setPage = {setPage}/>
  }
  else if(page === 1){
    item = <Registration setPage = {setPage}/>
  }
  else if(page === 2){
    item = <Login setPage = {setPage}/>
  }
  else if(page === 3){
    item = <Start setPage = {setPage}/>
  }
  else if(page === 4){
    item = <Food setPage = {setPage}/>
  }
  else if(page === 5){
      item = <Food setPage = {setPage}/>
    }
    else if(page === 6){
      item = <PopUp setPage = {setPage}/>
    }
    else{
    item = <Checkout setPage = {setPage}/>
  }
  return (
    <div className="App">
      <div className='Top'>
      <h1 onClick={()=>{setPage(0)}} className="logo">Food's Restaurant</h1>
      </div>
      {item}
    </div>
  );

}

export default App;