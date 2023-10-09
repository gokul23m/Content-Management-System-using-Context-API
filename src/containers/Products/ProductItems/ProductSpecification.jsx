import React, { useState } from 'react'
import "./ProductSpecification.css"
import {Link} from "react-router-dom"

import FileManager from './FileManager'
import Assets from './3DAssets'
import ProductHotspot from './ProductHotspot'
import { NavLink } from 'react-router-dom'
import AddNewProduct from '../AddNewProduct'

function ProductSpecification() {
    const ProdLinkStyles = ({isActive}) => {
        return {
         backgroundColor: isActive ? " rgb(245, 216, 163)" : " ",
     borderRadius: isActive ? "2px" : " ",
           
        }
    }

    const [inputName,setInputName] = useState("");
    const [inputCategories,setInputCategories] =useState("")
    const [inputDesc,setInputDesc] = useState("");
    const [allState,setAllState] =useState([]);

      const changeName = (e) =>{
             setInputName(e.target.value)
      }

      const categoriesChange =(e) =>{
        setInputCategories(e.target.value)
       
    }

      const changeDesc =(e)=>{
        setInputDesc(e.target.value)
      }

      const setRow =(e) =>{
          e.preventDefault();
          const newRow = {
            id:Math.random(1000),
            inputName,
            inputDesc,
            inputCategories,
          
      }
        setAllState([...allState,newRow])
       console.log("newrow",newRow);
      }

     

  return (
       <div className="ProductSpecification">
          

        {/* <div className="addproduct-list d-flex justify-content-between">
            <h6>ADD NEW PRODUCT</h6>
            <p><a > Products </a>/ <span>Add new product</span></p>
        </div> */}
          <div className="specification">
          
           {/* <div className="prod-hd"> <h5 >Enter product details</h5></div> */}

           {/* <div className="covr">
            <div className="prod-links">
            <ul class="nav  nav-justified">
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/AddNewProduct"> Product Info</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/ProductSpecification"  >Product Specification</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/FileManager"  >File Manager</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/Assets"  >3D Assets</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/ProductHotspot"  >Product Hotspot</NavLink>
    </li>
    
    </ul>
       
            </div>
            <hr/>
            </div> */}
        

          <div className="spec-form  row" >
                    <form className='cat-form d-flex align-items-center justify-content-between ' onSubmit={setRow}>
                 <div>
                 <input type="text" name="" id=""  value={inputName} onChange={changeName} required placeholder='Name' />
                 </div>
                   
                

                   <div>
                   <input className='width-adjust' value={inputDesc} onChange={changeDesc} type="text" name="" id="" placeholder='Description'  />
                   </div>

                   <div>
                   <select  >
            <option  value={inputCategories} onChange={categoriesChange}>Select </option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
                   </div>
                    
                    <div   className='adjust '><button  type='submit' className='btn fnt btn-success'>+</button>
                    </div>
                    
            </form>
                </div>

                <div className='view '>

                    {  allState.map((newRows,key) => (   
    <div  className="d-flex justify-content-around subdata" key={newRows.id}>
        <div className='bg bg-11'>{newRows.inputName}</div>
        <div className='bg bg-22'>{newRows.inputDesc}</div>
        <div className='bg bg-33'>{newRows.inputCategories}</div>
         
    </div>         
                       ))  
                    } 
                </div>

                <div className="prod-btns d-flex justify-content-end">
                       <Link to="/Products">
                       <div className='d-flex justify-content-between'>
                      <button className='prod-edit'>Back</button>
                      <button className='prod-save'>Save</button>
                      </div>
                       </Link>
                    </div>

                </div>
         

       </div>
  )
}

export default ProductSpecification