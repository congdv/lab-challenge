import React from 'react';
import Map from '../../components/Map';
import LabSidebar from '../../components/LabSidebar';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <LabSidebar />
            <div className="main-dashboard">
                <h1 className="mt-4">Dashboard</h1>
                <p className="lead mb-3">Welcome Dashboard</p>
                <Map />
                {/* <a href="/users/logout" className="btn btn-secondary">
                    Logout
                </a> */}
            </div>
        </div>
    );
};

export default Dashboard;
