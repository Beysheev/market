import React, {useEffect, useState} from 'react';
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const Rest = () => {

    const URI = 'https://restcountries.eu/rest/v2/all';

    const [country, setCountry] = useState([]);

    useEffect( () => {
        axios.get(URI)
            .then(res => {
                const data = res.data;
                setCountry(data)
            })
    });

    return (
        <div>
            <h2 style={{padding: '40px 0', 'text-align': 'center'}}>Where we buy coffee</h2>
            <Grid className='country' container spacing={12}>
                {
                    country.map(el => (
                        <Grid item lg={2}>
                            <h6>{el.name}</h6>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Rest;