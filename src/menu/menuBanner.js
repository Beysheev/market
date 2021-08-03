import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
// import axios from "axios";
import {Grid} from "@material-ui/core";
import './menuBanner.css';
// import array from './../array';
// import catalog from '../catalog';
import axios from "axios";

const MenuBanner = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(product => {
                const data = product.data;
                setProducts(data)
            })
    },[]);

    // const url = 'https://restcountries.eu/rest/v2/all';
    //
    // const [countries, setCountries] = useState([]);
    //
    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             const response = res.data;
    //             setCountries(response)
    //         })
    // },[]);

    return (
            <Container>
                <Grid container spacing={12}>
                    {
                        products.map(pro => (
                            <Grid item lg={4}>
                                <img src={pro.image} alt=""/>
                                <h1>{pro.name}</h1>
                                <p>{pro.description}</p>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
    );
};

export default MenuBanner;

// const [product, setProduct] = useState([]);

// useEffect(() => {
//     axios.get('https://restcountries.eu/rest/v2/all')
//         .then(res => {
//             const pro = res.data;
//             setProduct(pro)
//         })
// }, []);

// return (
//     <div className='thirdCard'>
//         <Container>
//             <Grid container spacing={12}>
//                 {
//                     product.map(el => (
//                         <Grid item lg={2}>
//                             <Card>
//                                 <div className="image">
//                                     <img src={el.image} alt=""/>
//                                 </div>
//                                 <Typography>
//                                     <h2>{el.name}</h2>
//                                 </Typography>
//                                 <Typography>
//                                     <p>{el.description}</p>
//                                 </Typography>
//                                 <Button className='thirdPrice'>
//                                     <button>{el.price}</button>
//                                 </Button>
//                             </Card>
//                         </Grid>
//                     ))
//                 }
//             </Grid>
//         </Container>
//     </div>
// );
// };