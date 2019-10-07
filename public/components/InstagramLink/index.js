import React, {Component} from 'react';
import './index.css';

const title = 'Arguably Delicious';
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
export default (props) => {
    return (<div className={'instagramContainer'}>
                <a href={'https://www.instagram.com/arguablydelicious/'}>
                    <img className={'instaIcon'} src={'http://arguablydelicious.s3.us-east-2.amazonaws.com/images/instagram.svg'}/>
                    <div className={'instaHandle'}>{title}</div>
                </a>
            </div>);
}