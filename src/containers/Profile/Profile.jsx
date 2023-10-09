import React, { useContext, useState } from 'react'
import './Profile.css'
import { Link, Routes, Route } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import zan from "../../assets/Zendaya-2.jpg"
import { useEffect } from 'react'

function Profile() {

  const { profiles } = useContext(GlobalContext);
  const [profile, setProfile] = useState(profiles);

     console.log(profile);  

     useEffect(() =>{
      setProfile(profiles)
},[profiles])
 

  return (
    <div className="profile">
      <div className="profile-list d-flex justify-content-between">
        <h6>Profile </h6>
        <p><a>profile</a> / <span>My profile</span></p>

      </div>

      <div className=" row">
        <div className="col-md-10 profile-card">
          <div className="card-head d-flex align-items-center  justify-content-between ">
            <p>My Profile</p>
            <div className="zan-img">
              <img className="rounded-circle" src={profile[0].profileImage} alt="" />
            </div>
          </div>
          <div className="table-responsive prof-table">
              
                   <table className='table'>
                         <tr>
                           <td>Name:</td>
                           <td>{profile[0].ProfileName}  {profile[0].lastName}</td>
                         </tr>
                         <tr>
                           <td>ID:</td>
                           <td>{profile[0].ProfileId}</td>
                         </tr>
                         <tr>
                           <td>Phone no:</td>
                           <td>{profile[0].PhoneNO}</td>
                         </tr>
                         <tr>
                           <td>Mail ID:</td>
                           <td>{profile[0].emailID}</td>
                         </tr>
              </table>
            
          </div>

          <div className='edt-btn'>
            <Link to={`/Profile/editProfile/${profile[0].id}`}><button className='btn'>Edit Profile</button></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile