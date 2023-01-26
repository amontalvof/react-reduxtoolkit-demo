import { useSelector, useDispatch } from 'react-redux';
import { cakeActions } from '../reduxToolkit/features/cake/cakeSlice';

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    const { ordered, restocked } = cakeActions;
    return (
        <div style={{ margin: '20px' }}>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button
                className="btn btn-info"
                onClick={() => dispatch(ordered())}
            >
                Order cake
            </button>
            &nbsp;&nbsp;
            <button
                className="btn btn-danger"
                onClick={() => dispatch(restocked(5))}
            >
                Restock cakes
            </button>
        </div>
    );
};

export default CakeView;
