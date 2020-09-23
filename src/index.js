import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './webpage/Home'
import Search from './webpage/Search'
import './css/index.css'
import {store} from './redux/store'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)
