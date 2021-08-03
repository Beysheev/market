import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainMenu from "./main/firsrt/mainMenu";
import Header from "./main/firsrt/header";
import Blog from "./blog/blog";
import Footer from "./footer/footer";
import array from './catalog';
import FullCard from "./menu/fullCard";
import Cards from "./menu/cards";

const App = () => {
    return (
        <Router>
            <MainMenu/>
            <Switch>
                <Route exact path='/' component={() => <Header/>} />
                <Route path='/menu' component={() => <Cards array={array} />} />
                <Route path='/cards/:name' component={() => <FullCard array={array} />} />
                <Route path='/blog' component={() => <Blog/>} />
            </Switch>
            <Footer/>
        </Router>
    )
};

export default App;
