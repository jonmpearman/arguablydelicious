import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './index.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route path='/create-post' component={CreatePost} />
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();