import './App.css';
import Login from './components/Login';
import LeftNav from './components/LeftNav';
import Fetch from "./Fetch/Fetch"
import CategoryFetch from './Fetch/CategoryFetch';
import { GlobalProvider } from './context/GlobalState';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { useState } from 'react';



function App() {
  const { isLoggedIn } = useContext(GlobalContext);
  console.log(isLoggedIn);
   const [login]=useState(isLoggedIn);
    
  return (
    <GlobalProvider>
      <div className="App">
     {login ?<Login/>: <LeftNav/>}
        <Fetch />
        <CategoryFetch />
      </div>
    </GlobalProvider>
  );
}

export default App;
