import React ,{useContext, useState,useEffect} from 'react'
import {Link,useNavigate,useParams} from "react-router-dom"
import "./EditProduct.css"
import crane from '../../assets/crane-icon.png'
import { GlobalContext } from '../../context/GlobalState';


function EditProduct() {
    let history = useNavigate();
    let params  = useParams();
    
    const {products,fetchProduct} = useContext(GlobalContext);
    const [details,setDetails] =useState();
    const [selectedProduct, setSelectedProduct] = useState([]);
    
    const currentProductId = params.id;
       console.log("currentProductId",currentProductId);

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (currentProductTraversal) => currentProductTraversal.id === productId
    );
    console.log("selectedProduct",selectedProduct);
    setSelectedProduct(selectedProduct);
    console.log("prodId",productId);
    console.log("products",products);
        
  }, []);
  
   

     const[name,setName]=useState("")
     const[productId,setProductId]=useState("");
     const[category,setCategory]=useState("")
     const[subCategory,setSubCategory]=useState("")
     const[enquiries,setEnquiries]=useState("")

     const handleProductEdit = (e) =>{
          e.preventDefault();
          fetch(`https://6475d03ee607ba4797dca820.mockapi.io/react/${currentProductId}`, {
			method: 'PUT',
			body: JSON.stringify({
				    id : currentProductId,
            Image:<img src={crane} alt=' /'></img>,
            Product: name,
            ProductId: productId,
            Category: category,
            SubCategory : subCategory,
            Enquiries:enquiries
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			
		})

    fetch("https://6475d03ee607ba4797dca820.mockapi.io/react")
    .then(response => response.json())
    .then(data => { 
        console.log("details value",data); 
         setDetails(data);
         fetchProduct(data)
    })
    .catch( error => {
      console.log(error.message);
    })
          history("/Products");
     }
  return (
       <div className="EditProduct ">
         <h3>Product Edit</h3>
           <div className="editForm">
           <form className='prod-form-detail' onSubmit={handleProductEdit}>
            <div className="row prod-row">
              <div className="col-md ">
                <label >Product Name</label><br />
                <input type="text" name="" id="" placeholder=' EnterProduct Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="col-md ">
                <label >Product ID</label><br />
                <input type="text" name="" id="" placeholder='Enter Product ID' 
                  value={productId}
                  onChange={(e) => setProductId( e.target.value)}/>
              </div>
            </div>

            <div className="row prod-row">
              <div className="col-md ">
                <label >Product Category</label><br />
                <select  value={category}
                  onChange={(e) => setCategory( e.target.value)}>
                  <option value="select category">Select category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
              </div>
              <div className="col-md ">
                <label >Product SubCategory</label><br />
                <select value={subCategory}
                  onChange={(e) => setSubCategory( e.target.value)} >
                  <option value="select category">Select Subcategory</option>
                  <option value="Irrigation">Irrigation</option>
                  <option value="Other Works">Other Works</option>
                </select>
              </div>
            </div>

           

            <div className="row prod-row">
              <div className="col-md-6">

                <label >Product Enquiries</label><br />
                  <input type="text" name="" id="" 
                  value={enquiries}
                  onChange={(e) => setEnquiries( e.target.value)}/>
              </div>

            </div>


            <div className="prod-btns d-flex justify-content-end">
             
                <div className='d-flex justify-content-between'>
                  <Link to="/Products"><button className='prod-edit'>Cancel</button></Link>
                  <button type='submit' className='prod-save'>Save</button>
                </div>
              
            </div>
          </form>
           </div>
       </div>
  )
}

export default EditProduct