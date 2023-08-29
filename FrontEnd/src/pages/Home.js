import React from 'react'
import '../assets/css/Home.css'

const Home = () => {
  return (
   <main>
    {/* add item form */}
    <h1>Cart Form</h1>
    <h2>Add Item</h2>
    <form>
      <input type="text" name='cartItem' placeholder='item name' value='' required/>
      <input type="text" name='itemQty' placeholder='Qty' value='' required/>
      <button type='submit'>add</button>
    </form>
    {/* remove Item form */}
    <h2>Remove Item</h2>
    <form>
      <input type="text" name='id' placeholder='item ID' value='' required/>
      <button type='submit'>Remove</button>
    </form>
    {/* show items button */}
    <h2>Show Items</h2>
    <button id='showButton'> Show Items</button>
    {/* Display Cart Items */}
    <h2>Cart Items</h2>
    <ul id='cartItems'>
      <li>
        <p>#3 apple 4</p>
      </li>
    </ul>

   </main>
  )
}

export default Home
