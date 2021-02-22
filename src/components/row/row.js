import React from 'react';

const Row = ({leftSide,rightside}) => {
    return(<div className="row">
                {leftSide}  
                {rightside}
            </div>);
}

export default Row;