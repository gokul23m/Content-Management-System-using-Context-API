import Users from "./containers/Users"
import Categories from './containers/Categories';
import Products from './containers/Products';
import Enquiries from './containers/Enquiries';
import Media from './containers/Media';
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import LeftNav from "./components/LeftNav";
import { Routes,Route } from 'react-router-dom';


function AppRoutes() {
  return (
       <div>
         <LeftNav/>
       </div>
  )
}

export default AppRoutes