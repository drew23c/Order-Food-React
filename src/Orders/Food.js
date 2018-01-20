import React from 'react'
import Orders from './Orders'

const Food = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map( item => (
          <li>{item.food}</li>))}
      </ul>
    </div>
  )
}
class Cart extends React.Component {
  constructor() {
    super()
    this.items = []
    this.state = {
      SavedCart: [],
      orderVal:''
    }
  }
  render() {
    return (
      <Food items={this.state.SavedCart} 
      click={this.handleAdd} />
    )
  }
}
export default Cart