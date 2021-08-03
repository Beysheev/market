import React from 'react';
import './menu.css';
import Logo from "./logo";
import Nav from "./nav";
import Container from "@material-ui/core/Container";
import Social from "./social";

const MainMenu = () => {
    return (
        <div>
            <Container>
                <div className='menu'>
                    <Logo/>
                    <Nav/>
                    <Social/>
                </div>
            </Container>
        </div>

    );
};

export default MainMenu;