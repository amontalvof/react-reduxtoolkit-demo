import React from 'react';

const CakeView = () => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Number of cakes - </h2>
            <button className="btn btn-info">Order cake</button>
            &nbsp;&nbsp;
            <button className="btn btn-danger">Restock cakes</button>
        </div>
    );
};

export default CakeView;
