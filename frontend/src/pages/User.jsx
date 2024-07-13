import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminTable } from '../components/AdminTable';
import { ManagerTable } from '../components/ManagerTable';

export const User = () => {
    // Getting role from store using useSelector
    const role = useSelector(state => state.authReducer.role);
    const navigate = useNavigate();
    // console.log('role', role);

    return (
        <>
            <div>
                <div>Welcome {role}!!!</div>
                <div>
                    <h1>User Table</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>UserCol 1</th>
                                <th>UserCol 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>IJK</td>
                                <td>PQR</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {role === 'admin' && <AdminTable />}
                {role === 'manager' && <ManagerTable />}

                {role === 'admin' && <button onClick={() => navigate(`/admin`)}>Go to admin page</button>}
                {role === 'manager' && <button onClick={() => navigate(`/manager`)}>Go to manager page</button>}
            </div>
        </>
    );
};
