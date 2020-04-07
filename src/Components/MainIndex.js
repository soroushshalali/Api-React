import React, { Component } from 'react';
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Deutschland from './Deutschland';
import Fr from './Fr';
import Br from './Br';
import News from './News'

class MainIndex extends Component {
    state = {}
    render() {
        return (
            <main>
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/Deutschland">DE</Link>
                    <Link to="/Fr">FR</Link>
                    <Link to="/Br">BR</Link>
                </nav>
                <Switch>
                    <Route path='/deutschland'>
                        <Deutschland />
                    </Route>
                    <Route path='/fr'>
                        <Fr />
                    </Route>

                    <Route path='/Br'>
                        <Br />
                    </Route>
                </Switch>
                <News fetch="https://newsapi.org/v2/top-headlines?country=de&apiKey=fa168a8960ee4bf0911fbf6759ae54c7" />
            </main>
        );
    }
}
export default MainIndex;