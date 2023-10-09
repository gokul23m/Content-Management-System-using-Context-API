import React,{useState,useEffect,useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import './EditProfile.css'
import { GlobalContext } from '../../context/GlobalState';
function EditProfile() {
  let history = useNavigate();
  let params = useParams();

           const{fetchProfile}=useContext(GlobalContext)
            const [details,setDetails] =useState();

            const[firstName,setFirstName]=useState("");
            const[lastName,setLastName]=useState("")
            const[email,setEmail]=useState("");
            const[PhoneNO,setPhoneNo]=useState("");
            const[id,setId]=useState("");
            

            const editHandler =(e)=>{
                 e.preventDefault();
                      
                  fetch(`https://64ad2ea6b470006a5ec57b75.mockapi.io/profile/${params.id}`,
                  {
                    method:"PUT",
                    body:JSON.stringify({ 
                      ProfileName:firstName,
                      lastName:lastName,
                      ProfileID:id,
                      PhoneNO:PhoneNO,
                      emailID:email
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => {
                    return response.json()
            }).then(json => {
              console.log(json)              
            })


            fetch("https://64ad2ea6b470006a5ec57b75.mockapi.io/profile")
            .then(response => response.json())
            .then(data => { 
                console.log("profile value",data); 
                 setDetails(data);            
                 fetchProfile(data)
            })
            .catch( error => {
              console.log(error.message);
            })

              history("/Profile")
            }
  return (
    <div className="EditProfile">
           <div className="profile-list d-flex justify-content-between">
            <h6>PROFILE LIST</h6>
            <p>profile / My profile</p>
        </div>
        <div className=" row">
            <div className="col-md-10 profile-card">
              <div className="card-head d-flex align-items-center  ">
                 <h5>My Profile</h5>
              </div>

             <form action="">
                 <div className="edit-form ">
                    <div className="row d-flex ">
                        <div className="fname col-md-4">
                                <label >First Name</label><br></br>
                                <input type='text' placeholder='First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>
                        <div className="lname col-md-4">
                                <label >Last Name</label><br></br>
                                <input type='text' placeholder='Last Name' value ={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className=" row d-flex ">
                        <div className="fname col-md-4">
                                <label >Email Id</label><br></br>
                                <input type='text' placeholder='Email Id' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="lname col-md-4">
                                <label >Phone Number</label><br></br>
                                <input type='number' placeholder='Phone number' value={PhoneNO} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="fname col-md-4">
                                <label >Id</label><br></br>
                                <input type='text' placeholder=' Id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
                        </div>
                        
                    </div>
                     
                 </div>
             </form>

              <div className='edt-btn'>
                <button className='btn btn-warning float-end' onClick={editHandler}>save</button>
              </div>
        </div>
    </div>
    </div>
  )
}

export default EditProfile