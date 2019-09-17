import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLink from './components/InstagramLink';
import './index.css';

const title = 'Arguably Delicious';

const App = (props) => {
    return (<div className={'pageContainer'}>
                <div>{props.children}</div>
            </div>);
};

ReactDOM.render(<App>
                    <InstagramLink title={title} />
                </App>, document.getElementById('app'));

module.hot.accept();