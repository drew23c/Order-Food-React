const orders=[
  { 
    id: '486', 
    food: 'Mac N Cheese', 
    price: '10.00', 
    img:'https://cdn.pinchofyum.com/wp-content/uploads/macaroni-highlight-lifted-3-185x185.jpg',
  },
  { 
    id: '784', 
    food: 'Lobster Bucket', 
    price: '30.00', 
    img:'http://rockinbaja.com/wp-content/uploads/2016/01/lobster-Buckets.png',
    
  },
  { 
    id: '692', 
    food: 'Salad', 
    price: '7.00', 
    img:'http://del.h-cdn.co/assets/15/33/980x490/landscape-1439478953-weeknight-dinner-black-bean-salad.jpg' 
  },
  { 
    id: '853', 
    food: 'Baked Chicken N Rice', 
    price: '10.00', 
    img:'http://www.recipetineats.com/wp-content/uploads/2017/03/Baked-Chicken-and-Rice-8.jpg' 
  },
  { 
    id: '183', 
    food: 'Steak N Fries',
    price: '15.00', 
    img:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Flickr_-_cyclonebill_-_B%C3%B8f_med_pommes_frites_%281%29.jpg' 
  },
  { 
    id: '946', 
    food: 'Salmon N Brocoli', 
    price: '20.00', 
    img:'http://cf.maebells.com/wp-content/uploads/2014/08/DSC0059-916x1024.jpg' 
  }
]

const getAll = () => orders
const getOne = (id) => orders.find(order => order.id === id)

export default{
  getAll,
  getOne
}