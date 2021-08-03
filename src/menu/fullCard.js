import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Container, Grid} from "@material-ui/core";
import './fullcard.css';


const FullCard = ({array}) => {

    const { name } = useParams();
    const arr = array.find(card => card.name === name);

    const [card, setCard] = useState([]);

    const addCard = (arr) => {
        setCard([...card, arr])
    } ;


    return (
        <Container>
            {/*<div className="basket">*/}
            {/*    <button>Basket {card.length}</button>*/}
            {/*</div>*/}
            <Grid className='fullCard' container spacing={12}>
                <Grid item lg={6}>
                    <div className='image'>
                        <img src={arr.image} alt=""/>
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <div className='right'>
                        <h1>{arr.name}</h1>
                        <p>{arr.description}</p>
                        <div className="span">
                            <span>{arr.price} сомов</span>
                        </div>
                    </div>
                    <div className="button">
                        <button onClick={addCard}>Add to Card</button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FullCard;