import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useField } from '../../hook';
import userAction from '../../actions/user.action';
import Spinner from '../../components/Spinner';

const Login = ({ login, auth }) => {
    const username = useField('text');
    const password = useField('password');

    const handleOnClick = event => {
        event.preventDefault();

        if (username && password) {
            login(username.value, password.value);
        }
        if (auth.error) {
            username.reset();
            password.reset();
        }
    };
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    <h1 className="text-center mb-3">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </h1>
                    {auth.error && (
                        <div
                            className="alert alert-warning fade show"
                            role="alert"
                        >
                            Please provide valid username and password
                        </div>
                    )}
                    <form onSubmit={handleOnClick}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type={username.type}
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="Enter Username"
                                value={username.value}
                                onChange={username.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type={password.type}
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password.value}
                                onChange={password.onChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Login
                        </button>
                    </form>
                    {auth.loading && <Spinner />}
                    <p className="lead mt-4">
                        No Account? <Link to="/register">Register</Link>
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
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(userAction.login(username, password));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
