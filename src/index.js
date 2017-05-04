import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Container from "./components/container";
import About from "./components/about";
import Updates from "./components/updates";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/updates" component={Updates}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Container}/>
                </Switch>
            </div>
        </BrowserRouter>

    </Provider>
    , document.querySelector('.hook'));


