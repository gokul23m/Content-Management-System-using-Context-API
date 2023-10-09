import React ,{useContext} from "react"
import crane from '../assets/crane-icon.png'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"
import { GlobalContext } from '../context/GlobalState';


// const{removeProduct}=useContext(GlobalContext);
export const ProductList = [
    {
        id:Math.random(10000),
        ProductID:32003,
        Image:<img src={crane} alt=' /'></img>,
        Product:"Hydralic Elevator",
        Category:"cat 1",
        SubCategory : "Irrigation",
        Enquiries : <a>102 Enquiries</a>,
        
    },
    // onClick={() => removeProduct(product.id)}
  {
    id:Math.random(10000),
    ProductID:32003,
    Image:<img src={crane} alt=' /'></img>,
    Product:"Hydralic Elevator",
    Category:"cat 2",
    SubCategory : "Irrigation",
    Enquiries : <a>102 Enquiries</a>,
    Action : <div className='d-flex ico-out '><div className='ico'><i><EditIcon/></i></div> <div className='ico'><i><DeleteIcon/></i></div> </div>
  },
  {
  id:Math.random(10000),
  ProductID:32003,
  Image:<img src={crane} alt=' /'></img>,
  Product:"Hydralic Elevator",
  Category:"cat 3",
  SubCategory : "Irrigation",
  Enquiries : <a>102 Enquiries</a>,
  Action : <div className='d-flex ico-out '><div className='ico'><i><EditIcon/></i></div> <div className='ico'><i><DeleteIcon/></i></div> </div>
  },
  {
  id:Math.random(10000),
  ProductID:32003,
  Image:<img src={crane} alt=' /'></img>,
  Product:"Hydralic Elevator",
  Category:"cat 1",
  SubCategory : "Irrigation",
  Enquiries : <a>102 Enquiries</a>,
  Action : <div className='d-flex ico-out '><div className='ico'><i><EditIcon/></i></div> <div className='ico'><i><DeleteIcon/></i></div> </div>
  }
   ]