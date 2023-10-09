import React, { createContext, useReducer,useEffect,useState } from 'react';

import appReducer from './AppReducer';
import ProfileFetch from "../Fetch/ProfileFetch"
import Fetch from  "../Fetch/Fetch"
import CategoryFetch from '../Fetch/CategoryFetch';

const initialState = {
  users:[],
  products: [],
  categories :[],
  profiles:[],
  email:[],
  isLoggedIn:false
}
  

console.log(initialState);

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
 

  function editProduct(product) {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: product
    });
  }

  function removeProduct(id) {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id
    });
  }

  function fetchProduct(product){
       dispatch({
        type:"FETCH_PRODUCT",
        payload:product
       })
  }

  function fetchCategory(category){
       dispatch({
         type:"FETCH_CATEGORY",
         payload:category
       })
  }

  function fetchProfile(profile){
    dispatch({
      type:"FETCH_PROFILE",
      payload:profile
    })
}

  function editProfile(profile) {
    dispatch({
      type: "EDIT_PROFILE",
      payload: profile
    });
  }

  function LoggedIn(login){
       dispatch({
         type:"LOGGEDIN",
         payload :login
       })
        }
    function Email(email){
        dispatch({
          type:"EMAIL",
          payload : email
        })
    }

  
 

  return (
    <GlobalContext.Provider
      value={{
         products: state.products,
         categories : state.categories,
         profiles:state.profiles,
         isLoggedIn:state.isLoggedIn,
         email:state.email,
         editProduct,
         removeProduct,
         fetchProduct,
         fetchCategory,
         fetchProfile,
         editProfile,
         LoggedIn,
         Email
      }}
    >
      <Fetch/>
      <CategoryFetch/>
      <ProfileFetch/>
       {children}
    </GlobalContext.Provider>
  );
};