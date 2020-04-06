import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-4 m-auto">
                <div className="card card-body text-center">
                    <h1>
                        <i className="fab fa-node-js fa-3x"></i>
                    </h1>
                    <p>Create an account or login</p>
                    <Link
                        to="/register"
                        className="btn btn-primary btn-block mb-2"
                    >
                        Register
                    </Link>
                    <Link to="/login" className="btn btn-secondary btn-block">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
