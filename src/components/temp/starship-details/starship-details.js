import React, {Component} from 'react';
import '../item-details.css';

export default class ItemD extends Component{

    render(){
        const {starship} = this.props.detail;

        if(!starship){
            return <h5>Select somebody to see him/her</h5>;
        } else {
            return(
                <div className="item jumbotron rounded">
                   <ItemView item={starship}/>
                </div>
            );
        }

    }
}

const ItemView = ({item}) => {

    const {id , name} = item;
    return(
        <React.Fragment>
            <div className="item-img">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="item"/>
            </div>

            <div>
                <h4>{name}</h4>
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="term">Gender:</span><span>{gender}</span></li>
                    <li className="list-group-item"><span className="term">Birth year:</span><span>{birthYear}</span></li>
                    <li className="list-group-item"><span className="term">Eye color:</span><span>{eyeColor}</span></li>
                </ul> */}
            </div>
        </React.Fragment>
    );
}