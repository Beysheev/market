import React from 'react';
import Container from "@material-ui/core/Container";
// import FullCard from "./fullCard";
import Card from "./card";
// import array from './../array';

const Cards = ({array}) => {
    return (
        <Container>
            <Card array={array} />
        </Container>
    );
};

export default Cards;