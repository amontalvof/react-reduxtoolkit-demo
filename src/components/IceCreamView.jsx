import React from 'react';

const IceCreamView = () => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Number of ice creams - </h2>
            <button className="btn btn-info">Order ice cream</button>
            &nbsp;&nbsp;
            <button className="btn btn-danger">Restock ice creams</button>
        </div>
    );
};

export default IceCreamView;
