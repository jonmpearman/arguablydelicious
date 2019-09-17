import React, {Component} from 'react';
import './index.css';

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
export default (props) => {
    return (<div className={'instagramContainer'}>
                <a href={'https://www.instagram.com/arguablydelicious/'}><img className={'instaIcon'} src={'./images/instagram.svg'}/><div className={'instaHandle'}>{props.title}</div></a>
            </div>);
}