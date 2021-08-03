import React from 'react';
import './banner.css';
import Container from "@material-ui/core/Container";

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <h2><span>Ara</span>bica - крепость и кислотность</h2>
                <h2>Ro<span>busta</span> - аромат и пенка</h2>
            </Container>
        </div>
    );
};

export default Banner;