import React from 'react';
import {Link} from 'react-router-dom'

const OrderList = ({orders}) =>(
  <div>
    {orders.map(order => (<h1 key={order.id}><Link to={`/orders/${order.id}`} >{order.food}</Link></h1>))}
  </div>
)
export default OrderList;