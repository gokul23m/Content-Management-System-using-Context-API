
function AppReducer(state,action) {
  console.log("payload",action.payload) 
  console.log("login",action.payload);
    switch(action.type){
      
     
      case "EDIT_PRODUCT" : 
       const updatedProduct = action.payload;
       console.log("updatedProduct",updatedProduct);
       
      //  console.log("prod",state.products);
       const updatedProducts = state.products.map((prod)=>{
        
          if(prod.id == updatedProduct.id){
           
              return updatedProduct 
              
           }
           else{
            console.log("check",prod.id == updatedProduct.id);
           return prod
           }
       })
       setTimeout(() => {
        console.log("result",updatedProducts);
       }, 3000)
      return {
          ...state,
          products : updatedProducts
      }
    

    case "REMOVE_PRODUCT" : 
    return {
         ...state,
          products: state.products.filter(
          (product) => product.id !== action.payload
        )
    }

     case "FETCH_PRODUCT" :
      console.log("globalState",state);
      return {
          ...state,
          products :[...action.payload]
      }

      case "FETCH_CATEGORY" :
           return{
             ...state,
            categories : [...action.payload]
           }
      
           case "EDIT_PROFILE" : 
       const updatedProfile = action.payload;
       console.log("updatedProduct",updatedProduct);
       const updatedProfiles = state.products.map((prod)=>{
        
          if(prod.id == updatedProfile.id){
           
              return updatedProfile
              
           }
           else{
            console.log("check",prod.id == updatedProfiles.id);
           return prod
           }
       })
       setTimeout(() => {
        console.log("result",updatedProfile);
       }, 3000)
      return {
          ...state,
          products : updatedProfile
      }

      case "FETCH_PROFILE" : 
      return{
        ...state,
       profiles: [...action.payload]
      }

      case "LOGGEDIN" :
         return{
            ...state,
            isLoggedIn:action.payload
         }

         case "Email" :
         return{
            ...state,
            email:action.payload
         }
        

    default :
      return state
  }
  

  
}

export default AppReducer