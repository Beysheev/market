import React from 'react';
import telegram from '../images/telegram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import insta from '../images/instagram.png';
import './socialIcons.css';

const SocialIcons = () => {
    return (
        <div className='socialIcons'>
            <div className='icons'>
                <div className='socialItem'><img src={telegram} alt=""/>@telegram</div>
                <div className='socialItem'><img src={linkedin} alt=""/>@link</div>
                <div className='socialItem'><img src={twitter} alt=""/>@twitter</div>
                <div className='socialItem'><img src={insta} alt=""/>@insta</div>
            </div>
            <div className='icons'>
            </div>
        </div>
    );
};

export default SocialIcons;