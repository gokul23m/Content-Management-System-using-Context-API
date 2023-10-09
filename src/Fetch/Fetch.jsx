import  { useState,useEffect,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


function Fetch() {

  const {fetchProduct,products} = useContext(GlobalContext);
        const [details,setDetails] =useState()
       useEffect(()=>{
          
          fetch("https://6475d03ee607ba4797dca820.mockapi.io/react")
          .then(response => response.json())
          .then(data => { 
              console.log("details value",data); 
               setDetails(data);            
               fetchProduct(data)
          })
          .catch( error => {
            console.log(error.message);
          })
         
       },[])
   }

export default Fetch;
