import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer'

const logger = store => {
    return next => {
        return action =>{
            console.log('[MiddleWare]', action)
            const result = next(action)
            console.log('dispatching the action', store.getState())
            return result
        }
    }
}
const store = createStore(reducer, applyMiddleware(logger))
const app = (
    <Provider store = {store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
    )
=======
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import burgerBuilder from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'
import thunk from 'redux-thunk'

const rootReducer = {
    order: orderReducer,
    burger: burgerBuilder
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware(thunk)
))
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
