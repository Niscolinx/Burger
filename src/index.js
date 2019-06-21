import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer'

const store = createStore(reducer)
const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    )

ReactDOM.render(<Provider store = {store}>{app}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
