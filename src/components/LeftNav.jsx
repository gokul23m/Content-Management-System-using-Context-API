import React from 'react'
import './leftNav.css'
import Icon from '@mui/material/Icon';
import WindowIcon from '@mui/icons-material/Window';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import dashlogo from '../assets/dash-logo.svg'
import user from'../assets/user.svg'
import {NavLink,Link} from "react-router-dom"
import { Routes,Route } from 'react-router-dom';
import Users from "../containers/Users/Users"
import Categories from '../containers/Category/Categories';
import Products from '../containers/Products/Products';
import AddNewProduct from "../containers/Products/AddNewProduct"
import EditProduct from '../containers/Products/EditProduct';
import Enquiries from '../containers/Enquiries/Enquiries';
import Media from '../containers/Media/Media';
import Dashboard from '../containers/Dashboard/Dashboard'
import Profile from '../containers/Profile/Profile'
import SubCategory from "../containers/Category/SubCategory/SubCategory"
import menu from "../assets/menu.svg"
import EditProfile from '../containers/Profile/EditProfile'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function LeftNav() {

   const NavLinkStyles = ({isActive}) => {
       return {
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.2) " : " ",
    borderRadius: isActive ? "8px" : " ",       
       }
   }
 
  return (
    <div className='leftNav'>
            
        <div className="row row-pad">
              
            <nav className="col-md-2 navbar navbar-expand-lg  nav-column ">

                   <button class="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img className='bg-white' src={menu} alt="" /> </span>
  
    </button>
                         
          
      <div className="list-group   collapse navbar-collapse" id="navbarTogglerDemo01">

         <div className="navi  ">
           <div >
          <Link to="/dashboard" > <img  className ="logo" src={dashlogo} alt="" /></Link>
           </div>
               
         
       <div className="hoving-elem"  >
       <div className="list-group-item navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between">
       <NavLink className="nav-width" style={NavLinkStyles} to="/Dashboard"> <i><HomeIcon/></i><span className='cont-left'>Dashboard</span></NavLink>
       </div>
       </div>
    

       <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="nav-width" style={NavLinkStyles} to="/Users"><i><PersonIcon/></i><span className='cont-left'>Users</span></NavLink>
       </div>
       </div>
    
       <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
       <NavLink className="nav-width" style={NavLinkStyles} to="/Categories"><i><WindowIcon/></i><span>Categories</span></NavLink>
       </div>
       </div>

       <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="nav-width" style={NavLinkStyles} to="/Products"><i><ProductionQuantityLimitsIcon/></i><span>Products</span></NavLink>
       </div>
       </div>

       <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className="nav-width" style={NavLinkStyles} to="/Enquiries"><i><AttachEmailIcon/></i><span>Enquiries</span></NavLink>
       </div>
        </div>

        <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
       <NavLink  className="nav-width" style={NavLinkStyles}  to="/Media"><i><FolderOpenIcon/></i><span>Media</span></NavLink>
       </div>
       </div>
 
       <div className="hoving-elem">
       <div href="#" className="list-group-item navbar-nav me-auto mb-2 mb-lg-0">
       <NavLink className="nav-width" style={NavLinkStyles} to="/Profile"><i><AdminPanelSettingsIcon/></i><span>Profile</span></NavLink>
       </div>
       </div>
       
       </div>
      </div>
  
  
  
         
            </nav>


{/* main-navBar */}
            <div className="col contnt">
                <div className="top-nav d-flex justify-content-end align-items-center">
                  
        <div className='d-flex align-items-center'>

        <div className="prof">
                      <img src={user} alt="" />
                      </div>
          
                      <div >
                   <select className='zandya' >
            <option value="select category">Zandya</option>
            <option  > <button>Logout</button></option>
            
           
          </select>
                   </div>

</div>

                </div>
            

         <Routes>
         
              <Route path='/Dashboard' element={<Dashboard/>}></Route>
              <Route path='/Users' element={<Users/>}></Route>
              <Route path='/Categories' element={<Categories/>}></Route>
              <Route path='/Products' element={<Products/>}></Route>
              <Route path='/Enquiries' element={<Enquiries/>}></Route>
              <Route path='/Media' element={<Media/>}></Route>
              <Route path="/Profile" element={<Profile></Profile>}></Route>
              <Route path="/Profile/editProfile/:id" element={<EditProfile/>}></Route>
              <Route path='/SubCategory' element={<SubCategory/>}></Route>
              <Route path='/Products/AddNewProduct' element={<AddNewProduct/>}></Route>
              <Route path="/Products/EditProduct/:id"  element={<EditProduct />}  />
             
          </Routes>
         
    
        </div>
        </div>

      
           </div>
           
  )
}

export default LeftNav;