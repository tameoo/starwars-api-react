import React , { Component }from 'react';
import Spinner from '../spinner';
import './item-list.css';   

export default class ItemList extends Component{

    state = {
        itemList: null
    };

    componentDidMount(){
        this.props.list()
        .then((allItem) => {
            this.setState({
                    itemList: allItem
                });
            }
        );
    }

    renderItems(arr) {
        return arr.map((obj) => {
            const {id, name} = obj;
            return (
                <li key={id} 
                    className="list-group-item"
                    onClick={() =>this.props.onClickItem(id)}>
                    {name}
                </li>
            );
        });
    }

    render(){
        const {itemList} = this.state;
        
        if(!itemList){
            return (
                <div className="jumbotron rounded">
                    <Spinner/>
                </div>
            );
        }

        const listItem = this.renderItems(itemList);
        return(
            <ul className="list-group item-list">
                {listItem}
            </ul>
        );
    }
}