import React, {Component} from 'react';
import './index.css';

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
export default (props) => {
    return (<div className={'instagramContainer'}>
                <a href={'https://www.instagram.com/arguablydelicious/'}>
                    <img className={'instaIcon'} src={'https://drive.google.com/uc?id=1ID2JLo0oUJxzo42yUIyG-ItBVuB4wkhQ'}/>
                    <div className={'instaHandle'}>{props.title}</div>
                </a>
            </div>);
}