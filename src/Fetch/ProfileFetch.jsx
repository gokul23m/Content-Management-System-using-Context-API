import  { useState,useEffect,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


function FetchProfile() {

  const {fetchProfile} = useContext(GlobalContext);
        const [details,setDetails] =useState()
       useEffect(()=>{
          
          fetch("https://64ad2ea6b470006a5ec57b75.mockapi.io/profile")
          .then(response => response.json())
          .then(data => { 
              console.log("profile value",data); 
              var loggedProfile = data.filter(function(x) {
                return x.emailID == "zandya@khojguru.com";
            });
               setDetails(loggedProfile);            
               fetchProfile(loggedProfile)
          })
          .catch( error => {
            console.log(error.message);
          })
         
       },[])
   }

export default FetchProfile;
