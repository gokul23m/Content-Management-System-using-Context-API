import React from 'react'
import "./ProductSpecification.css"
import "./FileManager.css"
import ProductSpecification from './ProductSpecification'
import Assets from './3DAssets'
import ProductHotspot from './ProductHotspot'
import { NavLink,Link } from 'react-router-dom'
import AddNewProduct from '../../AddNewProduct'

function FileManager() {
    const ProdLinkStyles = ({isActive}) => {
        return {
         backgroundColor: isActive ? " rgb(245, 216, 163)" : " ",
     borderRadius: isActive ? "2px" : " ",
           
        }
    }
  return (
       <div className="ProductSpecification">
           

        {/* <div className="addproduct-list d-flex justify-content-between">
            <h6>ADD NEW PRODUCT</h6>
            <p><a > Products </a>/ <span>Add new product</span></p>
        </div> */}
          {/* <div className="specification">
          <div className="prod-details"> */}
           {/* <div className="prod-hd"> <h5 >Enter product details</h5></div> */}

{/* 
           <div className="covr">
            <div className="prod-links">
            <ul class="nav  nav-justified">
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/AddNewProduct"> Product Info</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={ProdLinkStyles} to="/ProductSpecification"  > Product Specification</NavLink>
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
        

          <div className="spec-form file-manager-form row " >
                    <form className='cat-form d-flex align-items-center justify-content-between ' >
                 <div>
                 <input type="text" name="" id="" required placeholder='Name' />
                 </div>

                   <div>
                   <select  >
            <option value="select category">Select </option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
                   </div>
                    
                    <div   className='adjust '><button  type='submit' className='btn fnt btn-success'>+</button>
                    </div>
                    
            </form>
                </div>

                <div className="prod-btns d-flex justify-content-end">
                       <Link to="/Products">
                       <div className='d-flex justify-content-between'>
                      <button className='prod-edit'>Back</button>
                      <button className='prod-save'>Save</button>
                      </div>
                       </Link>
                    </div>
                {/* </div>
          </div> */}

       </div>
  )
}

export default FileManager