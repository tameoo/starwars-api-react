import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-details';
import {BrowserRouter as Router, Route  } from 'react-router-dom';
import {PeoplePage,PlanetPage,StarshipPage,LoginPage,SecretPage} from '../items-ready';
import './app.css';

export default class App extends Component{

    state = {
        isLoginIn: false
    }

    loginIn = () => {
        this.setState({
            isLoginIn: true
        })
    }

    render(){
        const {isLoginIn} = this.state;

        return(
            <Router>
                <div className="app">
                    <Header/>
                    <RandomPlanet />    
                    <Route path="/" 
                        render={() => 
                            <div style={{textAlign: "center", color: "rgb(255, 227, 0)"}}>
                                <h2>Welcome to StarDB</h2>
                            </div>
                        } exact
                    />
                    <Route path="/secret" render={() => <SecretPage isLoginIn={isLoginIn}/>}/>
                    <Route path="/login" render={()=> <LoginPage isLoginIn={isLoginIn} loginIn={this.loginIn}/>}/>
                    <Route path="/people/:id?" component={PeoplePage}/>
                    <Route path="/planets/:id?" component={PlanetPage}/>
                    <Route path="/starships/:id?" component={StarshipPage}/>
                </div>
            </Router>
        );
    }    
    
}