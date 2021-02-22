import React , {Component} from 'react';
import ItemList from '../item-list';
import ItemD from '../item-details';
import {withRouter} from 'react-router-dom';

class ItemPage extends Component{

    onClickItem = (id) => {
        this.props.history.push(id);
    }
    
    render(){
        const {service, list , image, data} = this.props;
        return ( 
            <div className="row">
                <div className="col-md-6">
                    <ItemList 
                        onClickItem={this.onClickItem} 
                        list={list}
                    />
                </div>
                <div className="col-md-6">
                    <ItemD 
                        image={image} 
                        data={data}
                        service={service} 
                        id={this.props.match.params.id}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(ItemPage);
