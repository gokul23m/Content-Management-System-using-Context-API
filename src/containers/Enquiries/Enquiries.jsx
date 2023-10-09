import React, { useState } from 'react'
import './Enquiries.css'
import rst from '../../assets/rst.svg'

function Enquiries() {
 
         const[selectedUser,setSelectedUser]=useState();

         const changeUser =(e) =>{
               setSelectedUser(e.target.value)
               console.log(selectedUser);
         }
          
  

  return (
    <div className='enquiry'>
        <div className="enquiry-list d-flex justify-content-between">
            <h6>Enquiry LIST</h6>
            <p><a >Enquiry </a>/ <span> Enquiry list </span></p>
        </div>

        <div className="enq-btn-grps d-flex align-items-center justify-content-start">
        <div>Show</div>
       
        <div>
                   <select className='prod-10' >
            <option value="select category">10</option>
            <option value="cat 1">5</option>
            <option value="cat 2">15</option>
            <option value="cat 3">All</option>
          </select>
                   </div>
<div>Entries</div>
            
</div>
        
<div className="items d-flex justify-content-between align-items-center">
            <div className="left-items d-flex">
 
            <div>
                   <select value={selectedUser} onChange={changeUser} >
            <option value="select category">Select User</option>
            <option value="cat 1">Hendry Ford</option>
            <option value="cat 2">Hendry Mathew</option>
            <option value="cat 3">Jhonson</option>
          </select>
                   </div>


       <button className='rst'><img src={rst} alt="" /><b>Reset Filter</b></button>
        </div>

        <div className="right"><input className='hei' type="search" name="Search"  placeholder="Search." id="" /></div>
     </div>


     <div className="enq-table table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th>Enquiry ID</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                     <th>Mail ID</th>
                     <th>City</th>
                     <th>User</th>
                     <th>Raised By Kiosk</th>
                     <th>Raised on</th>
                </tr>
            </thead>
             <tbody>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>E1156</td>
                    <td>Hendry Ford</td>
                    <td>7810042165</td>
                    <td>hendryfd@gmail.com</td>
                    <td>chennai</td>
                    <td>Existing Customer</td>
                    <td><a>GM832</a></td>
                    <td>02 sep 2022</td>
                </tr>

                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>E1156</td>
                    <td>Hendry Ford</td>
                    <td>7810042165</td>
                    <td>hendryfd@gmail.com</td>
                    <td>chennai</td>
                    <td>Existing Customer</td>
                    <td><a>GM832</a></td>
                    <td>02 sep 2022</td>
                </tr>

                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>E1156</td>
                    <td>Hendry Ford</td>
                    <td>7810042165</td>
                    <td>hendryfd@gmail.com</td>
                    <td>chennai</td>
                    <td>Existing Customer</td>
                    <td><a>GM832</a></td>
                    <td>02 sep 2022</td>
                </tr>

                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>E1156</td>
                    <td>Hendry Ford</td>
                    <td>7810042165</td>
                    <td>hendryfd@gmail.com</td>
                    <td>chennai</td>
                    <td>Existing Customer</td>
                    <td><a>GM832</a></td>
                    <td>02 sep 2022</td>
                </tr>

                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>E1156</td>
                    <td>Hendry Ford</td>
                    <td>7810042165</td>
                    <td>hendryfd@gmail.com</td>
                    <td>chennai</td>
                    <td>Existing Customer</td>
                    <td><a>GM832</a></td>
                    <td>02 sep 2022</td>
                </tr>

             

             </tbody>
        </table>
     </div>

       <div className="enq-pagination d-flex justify-content-between align-items-center">
            <div className="enq-pagi-left">
               <p>Showing 1 to 10 of 1</p>
            </div>
           
            <div class="pagination d-flex align-items-center">
  <a href="#">&larr;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&rarr;</a>
</div>
            
       </div>


         </div>
  )
}

export default Enquiries