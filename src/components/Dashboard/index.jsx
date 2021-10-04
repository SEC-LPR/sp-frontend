import React from 'react';
import Shop from '../Dashboard/components/Shop';
import Copyright from 'src/components/Copyright';

const Dashboard = () => {
    return (
        <div>
            <Shop />
            <Copyright sx={{ mt: 10 }} />
        </div>
    )
};

export default Dashboard;