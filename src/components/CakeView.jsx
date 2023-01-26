import React from 'react';
import { useSelector } from 'react-redux';

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    return (
        <div style={{ margin: '20px' }}>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button className="btn btn-info">Order cake</button>
            &nbsp;&nbsp;
            <button className="btn btn-danger">Restock cakes</button>
        </div>
    );
};

export default CakeView;
