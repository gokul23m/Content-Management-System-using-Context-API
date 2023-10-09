import React from 'react'
import  ReactDOM  from 'react'
import "./Modal.css"

  const Access =()=>{
      return(
         <div className="modal">
            <div className="content">
             <div className="header d-flex justify-content-between">
                 <h6>User Access</h6>
                 <p>X</p>
             </div>
             <div className="option">
                <input type="radio" name="" id="" /><label>Temporary User</label>
                <input type="radio" name="" id="" /><label>Permanant User</label>
             </div>
             <div className="date">
                <input type="date" name="" id="" />
             </div>
             <div>
                <button>Cancel</button>
                <button>Save</button>
                
             </div>
       </div>
       </div>
      )
  }
function Modal() {
    const ModalElement = document.getElementById("overlay")
  return (
    <React.Fragment>
              {ReactDOM.createPortal( <Access/>,document.getElementById('overlays'),ModalElement)}
        </React.Fragment>
  )
}

export default Modal