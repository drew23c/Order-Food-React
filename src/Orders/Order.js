import React from 'react';
import {Link} from 'react-router-dom'
import '../Style.css'
import Food from './Food'


const orderStyle ={
  padding:{paddingLeft:'20%'},
  img: {borderRadius: '30%'},
  p:{
    marginRight:'20%'
  }
}
const Order = ({food,price,handleAdd, img,orders}) =>(
  <div style={orderStyle.padding}>
  <Food/>
    <h1 id="title">{food}</h1>
    <img style={orderStyle.img} src={img} alt={food} /><br/>
    <h2>price: {price}</h2>
    <button onClick={handleAdd}>Add {food}</button><br/>
    <Link to={'/orders'}>Back</Link>
  </div>
)
export default Order;