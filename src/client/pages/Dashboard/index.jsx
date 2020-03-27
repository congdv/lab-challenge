import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 class="mt-4">Dashboard</h1>
            <p class="lead mb-3">Welcome Dashboard</p>
            <a href="/users/logout" class="btn btn-secondary">
                Logout
            </a>
        </div>
    );
};

export default Dashboard;
