import React from 'react';
import Banner from "./banner";
import SecondMain from "../second/secondMain";
import Third from "../third/third";

const Header = () => {
    return (
        <div>
            <Banner/>
            <SecondMain/>
            <Third/>
        </div>
    );
};

export default Header;