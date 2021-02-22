import React, {useState,useEffect,useCallback} from 'react';
import './item-details.css';

const ItemD = ({image,data,service,id}) =>{
    const item = useItemInfo(service,id);   
    
    if(!item){
        return <h5>Select something</h5>;
    } else {
        return(
            <div className="item jumbotron rounded">
                <div className="item-img">
                    <img src={image(id)} alt="item"/>
                </div>
                
                <div>
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        <Record item={item} data={data}/>
                    </ul>
                </div>
            </div>
        );
    }
}

const Record = ({item, data}) => {
    return data.map((record) => {
        return(
            <li key={record.key} className="list-group-item">
                <span className="term">
                    {record.label}:
                </span>
                <span>
                    {item[record.key]}
                </span>
            </li> 
        );
    })
}


const getItem = (service,id) => {
    return service(id)
    .then((item) => item);
}

const useRequest = (request) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        request().then(item => setItem(item))
        .catch(e => e);
    }, [request]);
    
    return item;
}

const useItemInfo = (service,id) => {
    const request = useCallback(() => getItem(service,id), [service,id]);
    return useRequest(request);
}

export default ItemD;