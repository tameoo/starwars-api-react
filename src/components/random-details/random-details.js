import React,{Component}from 'react';
import swapiService from '../../service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import './random-details.css';

export default class RandomPlanet extends Component{
    
    service = new swapiService(); 

    state = {
        planet: null,
        loading: true,
        error: false
    }

    static defaultProps = {
        interval: 5000
    }
    
    static propTypes = {
        interval: PropTypes.number
    }

    componentDidMount(){
        const {interval} = this.props;
        setInterval(this.updetePlanet, interval);
    }
    
    updetePlanet = () =>{
        let id = Math.floor(Math.random() * 25) + 2; 
        this.service.getPlanetById(id).then((planet) => {
            this.setState({
                planet,
                loading: false,
                error: false
        });
        }).catch(err => this.setState({
            error: true,
            loading: false
        }));
    }

    render(){
        const {loading, error, planet} = this.state;
        const hasData = !(loading || error);

        const errorindicator = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet} service={this.service}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorindicator}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet,service}) => {

    const {id , name,population, rotationPeriod, diameter} = planet;
    
    return(
        <React.Fragment>
                <div className="planet-img">
                    <img src={service.getPlanetImage(id)} alt="planet"/>
                </div>

                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span className="term">Population:</span><span>{population}</span></li>
                        <li className="list-group-item"><span className="term">Rotation Period:</span><span>{rotationPeriod}</span></li>
                        <li className="list-group-item"><span className="term">Diameter:</span><span>{diameter}</span></li>
                    </ul>
                </div>
        </React.Fragment>
    );
}