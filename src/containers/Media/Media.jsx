import React, { useState } from 'react'
import './Media.css'
import cloud from '../../assets/cloud.svg'
import { Link } from 'react-router-dom'
import MediaList from './MediaList'
import app from "../../firebase"
import { storage } from "../../firebase"
import { ref } from "firebase/database"
// import FireBase from "../../firebase";
// import {v4 as uuid} from "uuid/"

function Media() {

       const[currentTab,setCurrentTab]=useState(1)
           console.log("lnl",currentTab);

      

     const[file,setFile]=useState("");
           const Push = () => {
               if(file==null){
                    return;
               }
               else{
                  const fileRef= storage.ref(`/files ${file.name}`).put(file).on("state_changed",alert("success"),alert)
               }
              
           }
        
       
  return (
    <div className="media">
         <div className="media-list d-flex justify-content-between">
            <h6>ADD NEW MEDIA</h6>
            <p><a > Media </a>/ <span>Add new Media</span></p>
        </div>

        <div className="file-uploader">
            <div className="cover">
            <div className='options'>
            <ul className="nav  nav-justified">
    <li className="nav-item">
         <Link className="nav-link" style={{"backgroundColor": `${currentTab === 1 ? "rgba(42, 131, 194, 0.1)" : ""}`}} onClick={() =>setCurrentTab(1)} >Add Media Files</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={{"backgroundColor": `${currentTab === 2 ? "rgba(42, 131, 194, 0.1)" : " "}`}} onClick={() =>setCurrentTab(2)} >Media List</Link>
    </li>
    </ul>
       
            </div>
            <hr></hr>
            </div>
       
         {currentTab ===1 && 
              <div>
                
            <div className="upload d-flex-column ">
                 <div>
                 <img src={cloud} alt="" />
                 </div>
                 
                 <div>
  <input id="files" className='hidden-input' type="file" onChange={(e) =>setFile(e.target.files[0])}/>
  <label for="files" className="btn btn-primary" >Upload Files</label>
</div>
 
            </div>

            <div className="save">
            <button className='btn  d-flex justify-content-center' onClick={Push} >Save</button>
        </div>
                </div>
         }

         {
          currentTab===2 && 
           <MediaList/>
         }

    </div>
        </div>

        
  )
}

export default Media