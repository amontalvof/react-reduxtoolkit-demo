import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../reduxToolkit/features/user/userSlice';

const UserView = () => {
    const dispatch = useDispatch();
    const { loading, error, users } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div style={{ margin: '20px' }}>
            <h2 style={{ textDecoration: 'underline' }}>List of Users</h2>
            {loading && <p style={{ fontSize: '20px' }}>Loading...</p>}
            {!loading && error && (
                <p style={{ fontSize: '20px' }}>Error: {error}</p>
            )}
            {!loading && !error && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} style={{ fontSize: '16px' }}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserView;
