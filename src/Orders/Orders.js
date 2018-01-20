import React from 'react';
import {Route, Switch} from 'react-router-dom'
import orderAPI from './orderAPI';
import Order from './Order';
import OrderList from './OrderList';

class Orders extends React.Component{
  constructor(){
    super()
    this.items=[]
    this.state={
      SavedCart:[]
    }
  }
  renderOrder = props =>{
    const {id} = props.match.params
    const orders = orderAPI.getAll();
    const order = orderAPI.getOne(id)
    if(!order){
      return <div>No order listed by this id</div>
    }else{
      return <Order food={order.food} 
      price={order.price}
      handleAdd={this.handleAdd}
      img={order.img}
      orders={orders}/>
    }
  }
  renderOrderList = () =>{
    const orders = orderAPI.getAll();
    return <OrderList orders={orders} />
  }
  handleAdd = () => {
    const item = orderAPI.getAll()

    this.items.push(item)
    this.setState({
      SavedCart: [...this.items]
    })
  }
  render(){
    return(
    <div>
      <Switch>
        <Route exact path="/orders" render={this.renderOrderList}/>
        <Route path="/orders/:id" render={this.renderOrder} />
      </Switch>
    </div>
    )
  }
}
export default Orders;