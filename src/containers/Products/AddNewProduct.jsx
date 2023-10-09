import React, { useState } from 'react'
import './AddNewProduct.css'
import { NavLink, Link } from 'react-router-dom'
import ProductSpecification from "./ProductItems/ProductSpecification"
import FileManager from "./ProductItems/FileManager"
import Assets from "./ProductItems/3DAssets"
import ProductHotspot from "./ProductItems/ProductHotspot"
function AddNewProduct() {
  const [currentTab, setCurrentTab] = useState(1);

  const ProdLinkStyles = () => {
    return {
      backgroundColor: " rgb(245, 216, 163)",
      borderRadius: "2px",

    }
  }


  return (
    <div className="AddNewProduct">
      <div className="addproduct-list d-flex justify-content-between">
        <h6>ADD NEW PRODUCT</h6>
        <p><a > Products </a>/ <span>Add new product</span></p>
      </div>
      <div className="prod-details">
        <div className="prod-hd"> <h5 >Enter product details</h5></div>

        <div className="covr">
          <div className="prod-links">
            <ul class="nav  nav-justified">
              <li class="nav-item">
                <NavLink className="nav-link" style={{"backgroundColor": `${currentTab == 1 ? "rgb(245, 216, 163)" : ""}`}} to="/Products/AddNewProduct" onClick={() => setCurrentTab(1)}> Product Info</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" style={{"backgroundColor": `${currentTab == 2 ? "rgb(245, 216, 163)" : ""}`}} onClick={() => setCurrentTab(2)}>Product Specification</NavLink>
              </li>
              <li class="nav-item">
        <NavLink className="nav-link" style={{"backgroundColor": `${currentTab == 3 ? "rgb(245, 216, 163)" : ""}`}} onClick={() => setCurrentTab(3)} >File Manager</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={{"backgroundColor": `${currentTab == 4 ? "rgb(245, 216, 163)" : ""}`}} onClick={() => setCurrentTab(4)} >3D Assets</NavLink>
    </li>
    <li class="nav-item">
        <NavLink className="nav-link" style={{"backgroundColor": `${currentTab == 5 ? "rgb(245, 216, 163)" : ""}`}} onClick={() => setCurrentTab(5)}>Product Hotspot</NavLink>
    </li>

            </ul>

          </div>
          <hr />
        </div>

        {currentTab === 1 && <div className="prod-form">
          <form className='prod-form-detail'>
            <div className="row prod-row">
              <div className="col-md ">
                <label >Product Name</label><br />
                <input type="text" name="" id="" placeholder=' EnterProduct Name' />
              </div>
              <div className="col-md ">
                <label >Product Description</label><br />
                <input type="text" name="" id="" placeholder='Enter Product Description' />
              </div>
            </div>

            <div className="row prod-row">
              <div className="col-md ">
                <label >Product SubCategory</label><br />
                <select  >
                  <option value="select category">Select category</option>
                  <option value="cat 1">cat 1</option>
                  <option value="cat 2">cat 2</option>
                  <option value="cat 3">cat 3</option>
                </select>
              </div>
              <div className="col-md ">
                <label >Product SubCategory</label><br />
                <select  >
                  <option value="select category">Select Subcategory</option>
                  <option value="cat 1">cat 1</option>
                  <option value="cat 2">cat 2</option>
                  <option value="cat 3">cat 3</option>
                </select>
              </div>
            </div>

            <div className="row prod-row">
              <div className="col-md ">
                <label >Product Price</label><br />
                <input type="text" name="" id="" placeholder='Product Price' />
              </div>
              <div className="col-md ">
                <label >Product Code</label><br />
                <input type="text" name="" id="" placeholder='Product Code' />
              </div>
            </div>

            <div className="row prod-row">
              <div className="col-md-6">

                <label >Product Icon</label><br />
                <select  >
                  <option value="select category">Select category</option>
                  <option value="cat 1">cat 1</option>
                  <option value="cat 2">cat 2</option>
                  <option value="cat 3">cat 3</option>
                </select>
              </div>

            </div>


            <div className="prod-btns d-flex justify-content-end">
              <Link to="/Products">
                <div className='d-flex justify-content-between'>
                  <button className='prod-edit'>Cancel</button>
                  <button className='prod-save'>Save</button>
                </div>
              </Link>
            </div>
          </form>
        </div>
        }

        {
          currentTab === 2 && <ProductSpecification />

        }

        {
          currentTab === 3 && <FileManager />

        }

        {
          currentTab === 4 && <Assets />
        }

        {
          currentTab === 5 && <ProductHotspot />
        }


      </div>
    </div>

  )
}

export default AddNewProduct