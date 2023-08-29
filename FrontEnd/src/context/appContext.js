//.............
//importing
//.............

import React, {
 useReducer,
 useContext
} from 'react';
import {
 DISPLAY_ALERT,
 DISPLAY_ALERT_ID,
 CLEAR_ALERT,
 CREATE_PRODUCT_BEGIN,
 CREATE_PRODUCT_SUCCESS,
 CREATE_PRODUCT_ERROR,
 DELETE_PRODUCT_BEGIN,
 DELETE_PRODUCT_SUCCESS,
 DELETE_PRODUCT_ERROR,
 GET_PRODUCT_BEGIN,
 GET_PRODUCT_SUCCESS,
 GET_PRODUCT_ERROR
} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

const token = localStorage.getItem('token')
const product = localStorage.getItem('product')
const id = localStorage.getItem('id')


//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 showAlertId:false,
 showAlertProduct:false,
 alertText: '',
 alertType: '',
 token:token,
 product:product,
 id:id,
 products:[]
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);

 //displayAlert
 const displayAlert = ()=>{
  dispatch({type:DISPLAY_ALERT})
  clearAlert()
 }
 //displayAlertId
 const displayAlertId = ()=>{
  dispatch({type:DISPLAY_ALERT_ID})
  clearAlert()
 }

 //clearAlert
 const clearAlert = ()=>{
  setTimeout(()=>{
   dispatch({type:CLEAR_ALERT})
  },3000)
 }
  //addProductToLocalStorage
  const addProductToLocalStorage = ({product, token, id})=>{
    localStorage.setItem('token', token)
    localStorage.setItem('product', product)
    localStorage.setItem('id', id)
  }

  //CreateProduct
  const createProduct = async(productInfo)=>{
    dispatch({type:CREATE_PRODUCT_BEGIN})
    try {      
      const response = await axios.post('http://localhost:5000/api/v1',productInfo)
      const {token, product} = response.data
      dispatch({
        type:CREATE_PRODUCT_SUCCESS,
        payload:{token,product}
      })
      addProductToLocalStorage({
        token:token,
        product:product.name,
        id:product._id
      })
    } catch (error) {
      dispatch({
        type:CREATE_PRODUCT_ERROR,
        payload:{
          msg:error.response.data.msg
        }
      })
    }
    clearAlert()
  }
  //deleteProduct
  const deleteProduct = async(id)=>{
    dispatch({type:DELETE_PRODUCT_BEGIN})
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/${id}`)
      console.log(response)
      dispatch({type:DELETE_PRODUCT_SUCCESS})
    } catch (error) {
      dispatch({type:DELETE_PRODUCT_ERROR,payload:error.response.data})
    }
    clearAlert()
  }
  //getAllProducts
  const getAllProducts = async()=>{
    dispatch({type:GET_PRODUCT_BEGIN})
    try {
      const response = await axios.get('http://localhost:5000/api/v1')
      // console.log(response)
      const{products} = response.data
      dispatch({
        type:GET_PRODUCT_SUCCESS,
        payload:{products}
      })
      
    } catch (error) {
      dispatch({type:GET_PRODUCT_ERROR})
    }
  }
 

  return <AppContext.Provider value={{
  ...state, 
  displayAlert, 
  displayAlertId,
  createProduct,
  deleteProduct,
  getAllProducts
  }}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}

//.............
//exporting.
//.............
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}