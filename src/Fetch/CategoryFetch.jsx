import React ,{useEffect,useState,useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"


function CategoryFetch() {
    const {fetchCategory,categories} = useContext(GlobalContext);
        const [details,setDetails] =useState();
       useEffect(()=>{
          
          fetch("https://6475d03ee607ba4797dca820.mockapi.io/categories")
          .then(response => response.json())
          .then(data => { 
              // setDetails(data);
              console.log("value",data); 
               setDetails(data);             
               fetchCategory(data);
          })
          .catch( error => {
            console.log(error.message);
          })
         
       },[])
 
}

export default CategoryFetch