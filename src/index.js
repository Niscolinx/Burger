import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
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

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
