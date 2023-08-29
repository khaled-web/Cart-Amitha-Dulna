//........
//import
//........
import React, {useState} from 'react'
import '../assets/css/Home.css'
import {UseAppContext} from '../context/appContext'
import {Alert, AlertID} from '../components'


//........
//app
//........
const initialState = {
  name:'',
  Qty:'',
  id:''
}
const Home = () => {
const [values, setValues]=useState(initialState)
const {displayAlert, showAlert,createProduct,showAlertId,displayAlertId,deleteProduct,getAllProducts,products}=UseAppContext()
//handleChange
const handleChange = (e)=>{
  setValues({...values, [e.target.name]:e.target.value})
}
//onSubmitName
const onSubmit= (e)=>{
  e.preventDefault()
  const {name, Qty}=values
  if(!name || !Qty){
    displayAlert()
    return
  }
  const productInfo = {name, Qty}
  createProduct(productInfo)
  setValues({name:'', Qty:''})
}
//onSubmitId
const onSubmitID = (e)=>{
  e.preventDefault()
  const {id} = values
  if(!id){
    displayAlertId()
    return
  }
  console.log(id)
  deleteProduct(id)
  setValues({id:''})
}
  return (
   <main>
    {/* add item form */}
    <h1>Cart Form</h1>
    <h2>Add Item</h2>
    <form onSubmit={onSubmit}>
      {showAlert && <Alert/>}
      <input type="text" name='name' placeholder='item name' value={values.name} onChange={handleChange}/>
      <input type="text" name='Qty' placeholder='Qty' value={values.Qty} onChange={handleChange}/>
      <button type='submit'>add</button>
    </form>
    {/* remove Item form */}
    <h2>Remove Item</h2>
    <form onSubmit={onSubmitID}>
      {showAlertId && <AlertID/>}
      <input type="text" name='id' placeholder='item ID' value={values.id} onChange={handleChange}/>
      <button type='submit'>Remove</button>
    </form>
    {/* show items button */}
    <h2>Show Items</h2>
    <button id='showButton' onClick={getAllProducts}> Show Items</button>
    {/* Display Cart Items */}
    <h2>Cart Items</h2>
    <ul id='cartItems'>
      {products && products.map((product)=>{
        const {_id:id, name, inventory}=product
        return(
          <li key={id}>
            <p>Product:{name} - No.{inventory} </p>
          </li>
        )
        
      })}
      {/* <li>
        <p>#3 apple 4</p>
      </li> */}
    </ul>

   </main>
  )
}

//........
//export
//........
export default Home
