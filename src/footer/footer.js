import React from 'react';
import Container from "@material-ui/core/Container";
import Numbers from "./numbers";
import SocialIcons from "./socialIcons";
import './footer.css';
import Company from "./company";
import Help from "./help";

const Footer = () => {
    return (
        <div className='back'>
            <Container>
                <div className='footer'>
                    <Company/>
                    <Help/>
                    <SocialIcons/>
                    <Numbers/>
                </div>
            </Container>
        </div>
    );
};

export default Footer;