import React ,{useState}from 'react'
import { UserList } from './UserList';
import ReactPaginate from 'react-paginate';
import ReactModal from "react-modal"
import './Users.css'
import  "./Modal.css"
import { CSVLink } from 'react-csv';

function Users() {

 const [count,setCount]=useState(5);
  const[allUser,setAllUser]=useState(UserList);
  const[searchUser,setSearchUser]=useState("");

    const handleUserSearch =(event) =>{
          setSearchUser(event.target.value);
           const filter =UserList.map((item) =>{ 
                       return item.startsWith(searchUser)
           })
           console.log(filter);
           setAllUser(filter)

    }

  

  const[currentPage,setCurrentPage]=useState(1)
  const npage =Math.ceil(allUser.length/count)
  const pageVisited = currentPage * count;
  const records = allUser.slice(pageVisited, pageVisited + count);
  const changePage =({selected})=>{
           setCurrentPage(selected)
  }

  //Modal

  const[modal,ShowModal]=useState(false);

  const openModal =()=>{
    ShowModal(!modal)
  }

  const closeModal =()=>{
    ShowModal(!modal)
  }


  //export

     
  return (
    <div className='users'>
      <div className="user-pad">
        <div className="user-heading d-flex justify-content-between align-items-center">
            <div className="left " >
                <h6>USER LIST</h6>
                 <CSVLink filename='user' data={allUser}><button className='export' >Export</button></CSVLink>
            </div>

            <div className="right d-flex-column justify-content-center align-items-center">
               <p> <a >users</a> /  <span>user List</span> </p>
               <input type='text' value={searchUser}  onChange={handleUserSearch} placeholder='Search '/>
            </div>
        </div>

        <div className="table-container user-table">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail Id</th>
                    <th>Mobile Number</th>
                    <th>Rated on</th>
                    <th>User Access</th>
                </tr>
            </thead>
              <tbody className='align-self-center'>
                 
                 {
                    records.map((user) =>(
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.Name}</td>
                            <td>{user.MailID}</td>
                            <td>{user.MobileNumber}</td>
                            <td>{user.RatedOn}</td>
                            <td>{user.UserAccess === "-" ? "-" : <button className='btn btn-primary' onClick={openModal}>Access</button>}</td>
                        </tr>
                    ))  
                 }

       

                 
              </tbody>
            </table>
        </div>
        <div className="user-footer d-flex justify-content-between">
            <div className="user-footer-left">
                
            <div>
                   <select className='btn btn-secondary user-drpdown' value={count} onChange={(e)=>setCount(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value={allUser.length}>All</option>
          </select>
                   </div>
            </div>

            <div className="user-footer-right">
               <div >   <ReactPaginate
                  previousLabel={"⬅"}
                  nextLabel={"➡"}
                  pageCount={npage}
                  onPageChange={changePage}
                  containerClassName={"containerClass"}
                  previousLinkClassName={"prevClass"}
                  nextLinkClassName={"nextClass"}
                  activeClassName={"activeClass"}
                 /> </div>
            </div>

           
        </div>

        </div>

        <ReactModal 
              isOpen={modal}
              shouldCloseOnOverlayClick={true}
              onRequestClose={closeModal}
                style={{
                    overlay:{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100vh",
                      zIndex: 20,
                      backgroundColor: "rgba(0, 0, 0, 0.75)"
                    },
                    content:{
                      position: "fixed",
                      top: "40%",
                      left:"40%",
                      height:"30%",
                      width: "25%",
                      backgroundColor: "white",
                      padding:"1rem",
                      borderRadius:"14px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                      zIndex: 30,
                      animation: "slide-down 300ms ease-out forwards"
                    }
                }}
        >
            
             <div className="header d-flex justify-content-between ">
                 <h6>User Access</h6>
                 <p onClick={closeModal}>close</p>
             </div>
             <div className="option d-flex justify-content-around">
               <div>
               <input type="radio" name="" id="" /><label>Temporary User</label>
               </div>
               <div>
                <input type="radio" name="" id="" /><label>Permanant User</label>
               </div>
             </div>
             <div className="date my-3">
                <input type="date" name="" id="" />
             </div>
           
             <div className='d-flex justify-content-end '>
                <button className=' btn btn-primary mx-2' onClick={closeModal}>Cancel</button>
                <button className=' btn btn-primary mx-2' onClick={closeModal}>Save</button>
                
             </div>

             
       
        
         </ReactModal>

    </div>
    
  )
}

export default Users