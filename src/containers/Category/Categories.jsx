import React, { useState,useContext,useEffect} from 'react'
import './Categories.css'
import { Link } from 'react-router-dom';
import SubCategory from "./SubCategory/SubCategory"
import { GlobalContext } from '../../context/GlobalState';


function Categories() {
       
              const{categories,fetchCategory}=useContext(GlobalContext);
        // const dummy = [
        //         {
        //             id :Math.random(1000),
        //             inputName : "Test 1 ",
        //             inputCategories :  "Cat 1",
        //             inputCode : "ID01"
        //         },
        //         {
        //             id :Math.random(1000),
        //             inputName : "Test 1 ",
        //             inputCategories :  "Cat 2 ",
        //             inputCode : "02"
        //         },
        //         {
        //             id :Math.random(1000),
        //             inputName : "Test 3 ",
        //             inputCategories :  "Cat 1 ",
        //             inputCode : "03"
        //         },
        //         {
        //             id :Math.random(1000),
        //             inputName : "Test 4 ",
        //             inputCategories :  "Cat 3 ",
        //             inputCode : "04"
        //         },
              
                

        // ]
      const [inputName,setInputName] = useState("");
      const [inputCategories,setInputCategories] =useState("")
      const [inputCode,setInputCode] = useState("");
      const [allState,setAllState] =useState(categories);

      const nameChange= (e) =>{
         setInputName(e.target.value)
      }

      const categoriesChange =(e) =>{
          setInputCategories(e.target.value);
          console.log(inputCategories);
         
      }

       const codeChange = (e) => {
          setInputCode(e.target.value)
       }

       const addPost = () =>{
        fetch('https://6475d03ee607ba4797dca820.mockapi.io/categories',{
            method: 'POST',
            body: JSON.stringify({
                inputName,
                inputCategories,
                inputCode 
                 }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
               setInputName("")
               setInputCategories("")
               setInputCode("")
            })
            .catch((err) => {
               console.log(err.message);
            });
       }

       const changeHandler =(e) =>{
            //  e.preventDefault();
             addPost();
            
              
                fetch("https://6475d03ee607ba4797dca820.mockapi.io/categories")
          .then(response => response.json())
          .then(data => { 
              // setDetails(data);
              console.log("value",data);              
               fetchCategory(data)
            
          })
          .catch( error => {
            console.log(error.message);
          })
                

            //  setAllState([...allState,newRow])
            // console.log("newrow",newRow);
       }

       useEffect(() =>{
        setAllState(categories)
  },[categories])

            
        

  return (
    <div className="categories">
    <div className='categories-heading d-flex justify-content-between'>
            <h5>Manage Categories</h5>
            <p><a>Categories</a> / <span> Add new Categories </span></p>
    </div>
       <div className=" right-gap">
        <div className="col-md-10 cont bg-white">
            <h5 className="manage-bg">
                Manage Category
            </h5>
            <h5 className='add-cat'>
                Add new Category
            </h5>
            <div className=" table-responsive categories-table">
                
              
                <div className="form " >
                    <form onSubmit={changeHandler} className='cat cat-form d-flex align-items-center justify-content-around' >
                 <div>
                 <input type="text" name="" id="" required placeholder='Category name' value={inputName} onChange={nameChange}/>
                 </div>
                   
                   <div>
                   <select value={inputCategories} onChange={categoriesChange} >
            <option value="select category">Category</option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
                   </div>

                   <div>
                   <input type="text" name="" id="" placeholder='Code' value={inputCode}  onChange={codeChange} />
                   </div>
                    
                    <div   className='adjust '><button  type='submit' className='btn fnt btn-success'>+</button>
                    </div>
                    
            </form>
                </div>

                <div className='view '>

                    {  allState.map((newRows,key) => (   
    <div  className="d-flex justify-content-around data" key={newRows.id}>
        < input type='text' className='bg' value={newRows.inputName}/>
        < input type='text' className='bg' value={newRows.inputCategories}/>
        < input type='text' className='bg' value={newRows.inputCode}/>
         <div className='bg-but'><Link to="/SubCategory" element ={<SubCategory/>}><button >+ Add SubCategory</button></Link></div>
    </div>         
                       ))  
                    } 
                </div>
                {/* <table className='table'>
                <thead>
                
                    <tr>
                        <th><input type="text" placeholder="Categories name"/></th>
                        <th><div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Categories
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#"> Cat 1</a></li>
    <li><a class="dropdown-item" href="#">Cat 2 </a></li>
    <li><a class="dropdown-item" href="#">Cat 3</a></li>
  </ul>
</div></th>
                        <th><input type="text" placeholder="Code"/></th>
                        <th><button className="btn btn-success add">+</button></th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>Cat 1 </td>
                         <td><img src={categories} alt="" /> Cat 1</td>
                         <td>001</td>
                         <td><button>+ Add SubCategory</button></td>
                     </tr>
                     <tr>
                        <td>Cat 1 </td>
                         <td><img src={categories} alt="" /> Cat 1</td>
                         <td>001</td>
                         <td><button>+ Add SubCategory</button></td>
                     </tr>
                     <tr>
                        <td>Cat 1 </td>
                         <td><img src={categories} alt="" /> Cat 1</td>
                         <td>001</td>
                         <td><button>+ Add SubCategory</button></td>
                     </tr>
                     <tr>
                        <td>Cat 1 </td>
                         <td><img src={categories} alt="" /> Cat 1</td>
                         <td>001</td>
                         <td><button>+ Add SubCategory</button></td>
                     </tr>
                     <tr>
                        <td>Cat 1 </td>
                         <td><img src={categories} alt="" /> Cat 1</td>
                         <td>001</td>
                         <td><button>+ Add SubCategory</button></td>
                     </tr>
                
                </tbody>
                </table> */}
            </div>
        </div>
       </div>
    </div>
  )
}

export default Categories