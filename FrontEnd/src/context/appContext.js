//.............
//importing
//.............

import React, {
 useState,
 useReducer,
 useContext,
 useEffect
} from 'react';
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 SETUP_USER_BEGIN,
 SETUP_USER_SUCCESS,
 SETUP_USER_ERROR,
 TOGGLE_SIDEBAR,
 LOGOUT_USER,
 UPDATE_USER_BEGIN,
 UPDATE_USER_SUCCESS,
 UPDATE_USER_ERROR,
 HANDLE_CHANGE,
 CLEAR_VALUES,

} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 user:user ? JSON.parse(user) : null,
 token:token,
 showSidebar:false,
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);

 //displayAlert-Function
 const displayAlert = ()=>{
  dispatch({type:DISPLAY_ALERT})
  clearAlert()
 }

 //clearAlert
 const clearAlert = ()=>{
  setTimeout(()=>{
   dispatch({type:CLEAR_ALERT})
  },3000)
 }

 //localStorage
 const addUserToLocalStorage =({user, token, location})=>{
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('location', location)
 }

 const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('location')
 }

 //registerUser
 const registerUser = async (currentUser)=>{}

 //loginUser
 const loginUser = async(currentUser)=>{}

  //setupUser
 const setupUser = async({currentUser, endPoint, alertText})=>{}

  //Toggle-sidebar
  const toggleSidebar = ()=>{}

  //logout_user
  const logoutUser = ()=>{}

  //update_user
  const updateUser = async(currentUser)=>{}

  //handleChange
  const handleChange = ({name, value})=>{}

  //clearValue
  const clearValue = ()=>{}

  return <AppContext.Provider value={{
  ...state, 
  displayAlert, 
  registerUser,
  loginUser,
  setupUser, 
  toggleSidebar, 
  logoutUser,
  updateUser,
  handleChange,
  clearValue, 
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