import React from 'react';
import {Container, Grid} from "@material-ui/core";
import './secondCatalog';
import secondCard from "./secondCatalog";
import './secondCards.css';

const SecondCards = () => {
    return (
        <Container>
            <Grid container spacing={12}>
                {
                    secondCard.map(el => (
                        <Grid item lg={4} className='secondCards'>
                            <img src={el.img} alt=""/>
                            <h3>{el.title}</h3>
                            <p>{el.text}</p>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default SecondCards;