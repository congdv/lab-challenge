import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../utils';

const Navbar = ({ user }) => {
    const logOut = () => {
        window.localStorage.removeItem('user');
        history.push('/');
    };
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Labs challenge
                </a>
                {/* <a className="navbar-brand my-2 my-lg-0" href="#">
                    Your profile
                </a> */}
                <div className="navbar-brand dropdown mr-5 my-lg-0 logout">
                    <a
                        className="btn dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {user.name}
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a className="dropdown-item" onClick={logOut}>
                            Log out
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
const mapStateToProps = state => {
    return {
        user: state.authentication.user,
    };
};

export default connect(mapStateToProps)(Navbar);
