import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useField } from '../../hook';
import { connect } from 'react-redux';
import userAction from '../../actions/user.action';
import Spinner from '../../components/Spinner';

const Register = ({ auth, register }) => {
    const username = useField('name');
    const name = useField('name');
    const password = useField('password');
    const confirmedPassword = useField('password');
    const [isChecked, setIsChecked] = useState(false);
    const handleOnSubmit = event => {
        event.preventDefault();
        setIsChecked(true);
        register(username.value, name.value, password.value);
        setTimeout(() => {
            setIsChecked(false);
        }, 3000);
    };
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    <h1 className="text-center mb-3">
                        <i className="fas fa-user-plus"></i> Register
                    </h1>
                    {username.value.length < 3 && isChecked && (
                        <div
                            className="alert alert-warning fade show"
                            role="alert"
                        >
                            The length of username should be at least 3
                        </div>
                    )}
                    {name.value.length < 3 && isChecked && (
                        <div
                            className="alert alert-warning  fade show"
                            role="alert"
                        >
                            The length of name should be at least 3
                        </div>
                    )}
                    {password.value !== confirmedPassword.value && auth.error && (
                        <div
                            className="alert alert-warning  fade show"
                            role="alert"
                        >
                            Your password is not matched!!
                        </div>
                    )}
                    {auth.error && isChecked && (
                        <div
                            className="alert alert-warning  fade show"
                            role="alert"
                        >
                            Failed to register new user
                        </div>
                    )}
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type={username.type}
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="Enter username"
                                value={username.value}
                                onChange={username.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type={name.type}
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter Name"
                                value={name.value}
                                onChange={name.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type={password.type}
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Create Password"
                                value={password.value}
                                onChange={password.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                type={confirmedPassword.type}
                                id="password2"
                                name="password2"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={confirmedPassword.value}
                                onChange={confirmedPassword.onChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Register
                        </button>
                    </form>
                    {auth.loading && <Spinner />}
                    <p className="lead mt-4">
                        Have An Account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.authentication,
    };
};

const mapDispatchToPros = dispatch => {
    return {
        register: (username, name, password) => {
            dispatch(userAction.register(username, name, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Register);
