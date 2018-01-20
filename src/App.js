import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Orders from './Orders/Orders';

const App = () =>(
<div>
  <nav>
    <Link to="/">Home</Link>
    {"  "}
    <Link to="/orders">Order</Link>
    {" "}
  </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/orders" component={Orders} />
    </Switch>
</div>
)
export default App