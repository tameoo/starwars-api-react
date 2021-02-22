import React from 'react';
import ItemPage from '../item-page';
import swapiService from '../../service';
import { Redirect } from 'react-router-dom';

const service = new swapiService();

const person = [{label: "Gender", key: "gender"},
                {label: "Birth year", key: "birthYear"},
                {label: "Eye color", key: "eyeColor"}];

const planet = [{label: "Population", key: "population"},
                {label: "Rotation Period", key: "rotationPeriod"},
                {label: "Diameter", key: "diameter"}];

const starship = [{label: "Model", key: "model"},
                  {label: "Manufactured", key: "manufacturer"},
                  {label: "Crew", key: "crew"},
                  {label: "Capacity", key: "cargoCapacity"}];


const PeoplePage = () => {
    return (
        <ItemPage
            service={service.getPeopleById} 
            list={service.getAllpeople} 
            image={service.getPersonImage} 
            data={person}
        />
    );
};

const PlanetPage = () => {
    return (
        <ItemPage 
            service={service.getPlanetById}
            list={service.getAllplanets} 
            image={service.getPlanetImage}
            data={planet}
        />
    );
};

const StarshipPage = () => {
    return (
        <ItemPage 
            service={service.getStarshipById}
            list={service.getAllstarships} 
            image={service.getStarshipImage}
            data={starship}
        />
    );
};

const SecretPage = ({isLoginIn}) => {
    
    if(isLoginIn){
        return(
            <h3 className="text-center">The closest star, Proxima Centauri, is 4.24 light-years away. ... A light-year is 9.44 trillion km, or 5.88 trillion miles. That is an incredibly large distance. Walking to Proxima Centauri would take 215 million years.</h3>
        );
    }

    return <Redirect to="/login"/>;
}

const LoginPage = ({isLoginIn, loginIn}) => {
    let login = <p>Login plese</p>;
    
    if(isLoginIn){
        return <Redirect to="/"/>
    }

    return(
        <div className="jumbotron rounded">
            {login}
            <button className="btn btn-primary"
                    onClick={loginIn}>
                    Login
            </button>
        </div>
    );
}

export {PeoplePage, PlanetPage, StarshipPage,SecretPage,LoginPage};