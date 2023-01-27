import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iceCreamActions } from '../reduxToolkit/features/iceCream/iceCreamSlice';

const IceCreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIceCreams = useSelector(
        (state) => state.iceCream.numOfIceCreams
    );
    const dispatch = useDispatch();
    const { ordered, restocked } = iceCreamActions;
    return (
        <div style={{ margin: '20px' }}>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button
                className="btn btn-info"
                onClick={() => dispatch(ordered())}
            >
                Order ice cream
            </button>
            <br />
            <label
                style={{ margin: '30px 10px 0', fontSize: '14px' }}
                htmlFor="restock-input"
            >
                Restock Amount
            </label>
            <input
                id="restock-input"
                style={{ margin: '0 0 5px' }}
                className="form-control"
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                className="btn btn-danger"
                onClick={() => dispatch(restocked(value))}
            >
                Restock ice creams
            </button>
        </div>
    );
};

export default IceCreamView;
