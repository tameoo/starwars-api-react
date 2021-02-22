import React, {Component} from 'react';
import '../item-details.css';

export default class ItemD extends Component{

    render(){
        const {planet} = this.props.detail;

        if(!planet){
            return <h5>Select somebody to see him/her</h5>;
        } else {
            return(
                <div className="item jumbotron rounded">
                   <ItemView item={planet}/>
                </div>
            );
        }

    }
}

const ItemView = ({item}) => {

    const {id , name,population, rotationPeriod, diameter} = item;
    return(
        <React.Fragment>
                <div className="planet-img">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
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