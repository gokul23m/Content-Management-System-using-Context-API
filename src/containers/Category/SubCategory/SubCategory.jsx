import React, { useState } from 'react'
import './SubCategories.css'


function Categories() {
       
        const dummy = [
                {
                    id :Math.random(1000),
                    inputName : "Test 1 ",
                    inputCategories :  "Sub-Cat 1",
                    inputCode : "ID01"
                },
                {
                    id :Math.random(1000),
                    inputName : "Test 1 ",
                    inputCategories :  "Sub-Cat 2 ",
                    inputCode : "02"
                },
               
              
        ]
      const [inputName,setInputName] = useState("");
      const [inputCategories,setInputCategories] =useState("")
      const [inputCode,setInputCode] = useState("");
      const [allState,setAllState] =useState(dummy);

      const nameChange= (e) =>{
         setInputName(e.target.value)
      }

      const categoriesChange =(e) =>{
          setInputCategories(e.target.value)
         
      }

       const codeChange = (e) => {
          setInputCode(e.target.value)
       }

       const changeHandler =(e) =>{
             e.preventDefault();
           const newRow = {
                 id:Math.random(1000),
                 inputName,
                 inputCategories,
                 inputCode
           }
             setAllState([...allState,newRow])
            console.log("newrow",newRow);
       }


  return (
    <div className="categories">
    <div className='categories-heading d-flex justify-content-between'>
            <h5>Manage Categories</h5>
            <p><a>Categories</a> / <span> Add new Categories </span></p>
    </div>
       <div className=" right-gap">
        <div className="col-md-10 cont bg-white">
            <h5 className="manage-bg">
                Category&gt;SubCategory
            </h5>
            <h5 className='add-cat'>
                Add Sub Category
            </h5>
            <div className=" table-responsive subcategories-table">
                
              
                <div className="form " >
                    <form onSubmit={changeHandler}className='cat-form d-flex align-items-center justify-content-around' >
                 <div>
                 <input type="text" name="" id="" required placeholder='Sub Category name' value={inputName} onChange={nameChange}/>
                 </div>
                   
                   <div>
                   <select value={inputCategories} onChange={categoriesChange} >
            <option value="select category">select </option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
                   </div>

                   <div>
                   <input className='width-adjust' type="text" name="" id="" placeholder='Code' value={inputCode}  onChange={codeChange} />
                   </div>
                    
                    <div   className='adjust '><button  type='submit' className='btn fnt btn-success'>+</button>
                    </div>
                    
            </form>
                </div>
              
 

            

                <div className='view '>

                    {  allState.map((newRows,key) => (   
    <div  className="d-flex justify-content-around subdata" key={newRows.id}>
         < input type='text' className='bg bg-1' value={newRows.inputName}/>
        < input type='text' className='bg bg-2' value={newRows.inputCategories}/>
        < input type='text' className='bg bg-3' value={newRows.inputCode}/>
         
    </div>         
                       ))  
                    } 
                </div>
              
            </div>
        </div>
       </div>
    </div>
  )
}

export default Categories