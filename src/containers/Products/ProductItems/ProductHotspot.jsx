import React, { useState } from 'react'
import "./ProductSpecification.css"
import "./FileManager.css"
import "./ProductHotspot.css"
import { NavLink,Link} from 'react-router-dom'


function ProductHotspot() {
    const ProdLinkStyles = ({isActive}) => {
        return {
         backgroundColor: isActive ? " rgb(245, 216, 163)" : " ",
     borderRadius: isActive ? "2px" : " ",
           
        }
    }

      const[showDel,setShowDel] =useState(false);

      const[ShowAnother,setShowAnother] = useState(false);

       
       const setShow =(e) =>{
        e.preventDefault();
           setShowDel(true);
           setShowAnother(true);
           console.log("showDel",showDel);
       }

        const[inputName,setInputName]=useState("");
        const[inputDesc,setInputDesc]=useState("");
        const[inputCategories,setinputCategories] = useState("");
        const[inputCategories2,setinputCategories2]=useState("");
        const[allState,setAllState] =useState([]);

        const changeName =(e)=>{
              setInputName(e.target.value)
        }

        const changeDesc =(e)=>{
          setInputDesc(e.target.value)
    }
          const changeCategories =(e) =>{
             setinputCategories(e.target.value)
          }

          const changeCategories2=(e) =>{
            setinputCategories2(e.target.value)
         }

            const setHide =(e) =>{
                e.preventDefault();
                setShowDel(!showDel)
                setShowAnother(!ShowAnother)
            }

           const setMap =(e) =>{
                   e.preventDefault();
                   const newRow = {
                    id:Math.random(1000),
                    inputName,
                    inputDesc,
                    inputCategories,
                    inputCategories2
              }
                setAllState([...allState,newRow])
           }

            const removeItem =(id) =>{
                const filteredData =allState.filter((Rows) => Rows.id!==id);
                 setAllState(filteredData);
                 console.log(filteredData);
                 console.log(allState);
                 console.log(id);
            }

  return (
       <div className="ProductSpecification">
           {/* <div className="productspec-list d-flex justify-content-between">
            <h6>PRODUCTS LIST</h6>
            <p><a > Products </a>/ <span>Product list</span></p>
        </div> */}

        {/* <div className="addproduct-list d-flex justify-content-between">
            <h6>ADD NEW PRODUCT</h6>
            <p><a > Products </a>/ <span>Add new product</span></p>
        </div> */}
            
    
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
        

          <div className="spec-form file-manager-form hotspot-form" >


                    <form className='cat-form main d-flex align-items-center justify-content-between' >
                

                   <div>
                   <select  >
            <option value="select category">Select </option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
                   </div>

                   <div>
                 <input type="text" name="" id=""  placeholder='Name' />
                 </div>
                    
                    <div   className='adjust '><button onClick={setShow} type='submit' className='btn fnt btn-success'>+</button>
                    </div>
                    
            </form>

              <br />
             
             {showDel && 
              
                 
              <form className='cat-form inp-bg d-flex align-items-center justify-content-between' >
                

              <div>
              <select  >
       <option value="select category">select </option>
       <option value="cat 1">cat 1</option>
       <option value="cat 2">cat 2</option>
       <option value="cat 3">cat 3</option>
     </select>
              </div>

              <div>
            <input type="text" name="" id=""  placeholder='Name' />
            </div>
               
               <div   className='adjust '><button onClick={setHide} type='submit' className='btn fnt btn-danger'>-</button>
               </div>
               
       </form>
               
             }

             {
               ShowAnother && 
               
               <div className='below  justify-content-center'>
                 <div className="below-items d-flex align-items-center justify-content-center">
                        <div className="below-inputs">
                            <div className="column1">
                                <input type="text" name="" id="" placeholder='Name' value={inputName} onChange={changeName}/>
                                <input type="text" name="" id="" placeholder='Description' value={inputDesc} onChange={changeDesc}/>
                            </div>
                            <div className="column2">
                            <select value={inputCategories} onChange={changeCategories}>
       <option value="select category">ON </option>
       <option value="cat 1">on</option>
       <option value="cat 2">off</option>
      
     </select>
     <select  value={inputCategories2} onChange={changeCategories2}>
       <option value="select category">Gr12132.pdf</option>
       <option value="cat 1">Gr12132.pdf</option>
       <option value="cat 2">r12132.pdf</option>
       
     </select>
                            </div>
                        </div>
                         <div className="below-btn ">
                              <button onClick={setMap} className='btn-below btn btn-success'>+</button>
                         </div>
                </div>

                       {allState.map((Rows) =>(
                          <div className="below-items d-flex align-items-center justify-content-center" >
                          <div className="below-inputs">
                              <div className="column1">
                                  <input type="text" name="" id="" placeholder='Name' value={Rows.inputName} />
                                  <input type="text" name="" id="" placeholder='Description' value={Rows.inputDesc}/>
                              </div>
                              <div className="column2">
                              <select value={Rows.inputCategories} >
         <option value="select category">ON </option>
         <option value="cat 1">on</option>
         <option value="cat 2">off</option>
        
       </select>
       <select  value={Rows.inputCategories2} >
         <option value="select category">Gr12132.pdf</option>
         <option value="cat 1">Gr12132.pdf</option>
         <option value="cat 2">r12132.pdf</option>
         
       </select>
                              </div>
                          </div>
                           <div className="below-btn ">
                             <button  className='btn-below btn btn-danger' 
                             onClick={() => removeItem(Rows.id)}>-</button>
                           </div>
                  </div>
                       ))}
                </div>

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
  )
}

export default ProductHotspot