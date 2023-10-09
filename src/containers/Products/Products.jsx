import React, { useState,useContext,useEffect} from 'react'
import './Products.css'
import rst from '../../assets/rst.svg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddNewProduct from "./AddNewProduct"
import crane from "../../assets/crane-icon.png"
import { GlobalContext } from '../../context/GlobalState';
import Fetch from '../../Fetch/Fetch';
import ReactPaginate from 'react-paginate';


function Products() {
  const {fetchProduct,products} = useContext(GlobalContext);
  const [details,setDetails] =useState()
  const[count,setCount]=useState(5);
  const [allProducts,setAllProducts] =useState(products);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchItem,setSearchItem]=useState();

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
       console.log(selectedCategory);
       getFilteredList();
       console.log(allProducts);
  }

    const handleSearch =(event) =>{
         setSearchItem(event.target.value);
         console.log(searchItem);
         searchList();
    }

     function searchList (){
          const searchedList =products.filter((item) => {
            return(       
              item.ProductID.toLowerCase().includes(searchItem.toLowerCase()) ||
              item.Product.toLowerCase().includes(searchItem.toLowerCase()) ||
              item.Category.toLowerCase().includes(searchItem.toLowerCase()) ||
              item.SubCategory.toLowerCase().includes(searchItem.toLowerCase()) ||
              item.Enquiries.toLowerCase().includes(searchItem.toLowerCase()) 
            )
          }
          )
          setSearchItem(searchedList)
     }

  function getFilteredList() {
    // // Avoid filter when selectedCategory is null
    // if (!selectedCategory ) {
    //   return ProductList;
    // }
    // else 
    const filteredList = allProducts.filter((item) => item.Category === selectedCategory);
        setAllProducts(filteredList);

  }

  const handleReset=()=>{
        setAllProducts(products);
  }

  const deletePost = async(id) =>{
    let res = await fetch (`https://6475d03ee607ba4797dca820.mockapi.io/react/${id}`,{
                   method : 'DELETE'
              }).then(res => {
                if (res.ok) {
                    return res.json();
                }
              
          })
          alert({message:"success",type:"success"});
          
            fetch("https://6475d03ee607ba4797dca820.mockapi.io/react")
            .then(response => response.json())
            .then(data => { 
                
                console.log("details value",data); 
                 setDetails(data);
                 fetchProduct(data);
              
            })
            .catch( error => {
              console.log(error.message);
            })
        }
           console.log("changing Products",products);

   useEffect(() =>{
         setAllProducts(products)
   },[products])

    const countData = (e) =>{
         setCount(e.target.value)
         console.log(count);
    }

    const[currentPage,setCurrentPage]=useState(0);
       const npage = Math.ceil(allProducts.length/count);
       const pageVisited = currentPage * count;
       const records = allProducts.slice(pageVisited, pageVisited + count);

        const changePage=({selected})=>{
               setCurrentPage(selected);
        }

  return (
        <React.Fragment>
          {/* <Fetch/> */}
    <div className="products">
        <div className="products-list d-flex justify-content-between">
            <h6>PRODUCTS LIST</h6>
            <p><a> Products </a>/ <span>Product list</span></p>
        </div>

        <div className="prod-btn-grps row d-flex align-items-center justify-content-start">
        <div className="col-md-12 inside d-flex align-items-center justify-content-start">
             <div>Show</div>
             <div>
          <select className='prod-10' value={count} onChange={countData}>
            <option value="5 "> 5 </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value={allProducts.length}>All</option>
          </select>
                   </div>
                   
<div>Entries</div>
            
            
            <Link to="/Products/AddNewProduct" ><button className='clr'>Add new product</button></Link>
         <button className='clr'>View analysis</button>
         <button className='clr'>Manage categories</button>
         </div>
            </div>
            
        <div className="items d-flex justify-content-between align-items-center">
            <div className="left-items d-flex">
            <div>
            <select value={selectedCategory} onChange={handleCategoryChange} >
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            </select>
                   </div>

       <button className='rst' onClick={handleReset}><img src={rst} alt=""  /><b>Reset Filter</b></button>
        </div>

        <div className="right-search"><input type="search" name="Search"  placeholder="Search." id="" onChange={handleSearch} value={searchItem}/></div>
     </div>

    <div className="prod-table table-responsive table-container">
        <table className='table'>
            <thead>
                <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th>Product ID</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th> Enquiries</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >

            {console.log( allProducts)}

                          { 
                                records.map((product,key) => (
                               <tr key={product.id}>
                                  <td><input type="checkbox" name="" id="" /></td>
                                  <td>{product.ProductID}</td>
                                  <td><img src={crane} alt=' /'></img></td>
                                    <td>{product.Product}</td>
                                    <td>{product.Category}</td>
                                    <td>{product.SubCategory}</td>
                                    <td><a >102 Enquiries</a></td>
                                  <td><div className='d-flex ico-out '>
                                    <div className='ico'><Link to={`/Products/EditProduct/${product.id}`}><i><EditIcon/></i></Link></div>
                                <div className='ico' ><button onClick={() =>deletePost(product.id)}><i><DeleteIcon/></i></button></div> 
                                   </div></td>
                               </tr>
      
                            ))
                          }       
                     
            </tbody>
        </table>
    
    </div>

     <div className="enq-pagination d-flex justify-content-between align-items-center">
            <div className="enq-pagi-left">
               <p>Showing {currentPage * count +1} to {(currentPage+1)* count} of {allProducts.length}</p>
            </div>
           
            <div class="d-flex align-items-center">
                
                <ReactPaginate
                  previousLabel={"⬅"}
                  nextLabel={"➡"}
                  pageCount={npage}
                  onPageChange={changePage}
                  containerClassName={"containerClass"}
                  previousLinkClassName={"prevClass"}
                  nextLinkClassName={"nextClass"}
                  activeClassName={"activeClass"}
                  renderOnZeroPageCount={null}
                 />
</div>
            
       </div>
    </div>
    </React.Fragment>
  )
}

export default Products