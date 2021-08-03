import React from 'react';
import SecondTitle from "./secondTitle";
import Container from "@material-ui/core/Container";
import SecondCards from "./secondCards";
import './secondMain.css';

const SecondMain = () => {
    return (
        <Container className='secondMain'>
            <SecondTitle/>
            <SecondCards/>
        </Container>
    );
};

export default SecondMain;