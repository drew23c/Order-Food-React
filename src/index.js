import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import './Style.css'

const Background = props =>(
  <div className="bg">{props.children}</div>
)

render(
    <BrowserRouter>
    <Background>
      <App/>
    </Background>
    </BrowserRouter>,
    document.getElementById('root')
  )
