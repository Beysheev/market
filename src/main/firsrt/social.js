import React from 'react';
import telegram from '../../images/telegram.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import insta from '../../images/instagram.png';
import './social.css';
import Link from "@material-ui/core/Link";

const Social = () => {
    return (
        <div className='social'>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src={telegram} alt=""/></a>
            </div>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src={linkedin} alt=""/></a>
            </div>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src={twitter} alt=""/></a>
            </div>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src={insta} alt=""/></a>
            </div>
        </div>
    );
};

export default Social;