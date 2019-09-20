import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InstagramLink from './components/InstagramLink';
import './index.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{backgroundImage: "url('./images/apple_tart.jpg')"}} className={'pageContainer'}>
                <div>{this.props.children}</div>
            </div>);
    }
}


ReactDOM.render(<App>
                    <InstagramLink />
                </App>, document.getElementById('app'));

module.hot.accept();