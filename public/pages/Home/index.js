import React from 'react';
import InstagramLink from '../../components/InstagramLink';
import './index.css';

export default (props) => {
    return(
        <div style={{backgroundImage: "url('./images/apple_tart.jpg')"}} className={'pageContainer'}>
            <div>
                <InstagramLink />
            </div>
        </div>
    );
}