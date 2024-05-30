import logo from './logo.svg';
import './App.css';
import Usersdata from './Pages/Usersdata';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchusers } from './Redux/Action/usersAction';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    callforfirst()
  },[])

  const callforfirst = async ()=>{
   await dispatch(fetchusers())
    
  }

  return (
    <div className="App">
      <Usersdata/>
    </div>
  );
}

export default App;
