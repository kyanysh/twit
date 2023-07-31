import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import MainPage from './MainPage';

const App = () => {
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/registration"
        component = { RegistrationForm }
        /> <
        Route exact path = "/main"
        component = { MainPage }
        /> <
        Redirect to = "/registration" / >
        <
        /Switch> <
        /Router>
    );
};

export default App;