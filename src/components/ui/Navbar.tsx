import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { AuthActionTypes, LogoutAction } from '../../auth/authReducer';

export const Navbar: React.FC = () => {

    const history = useHistory();

    const {
        authState: { username },
        dispatch,
    } = useContext(AuthContext);

    const handleLogout = () => {
        const logoutAction: LogoutAction = {
            type: AuthActionTypes.LOGOUT,
        };

        dispatch(logoutAction);
        history?.replace('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Heroes
                </Link>

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
                            Marvel
                        </NavLink>

                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
                            DC
                        </NavLink>

                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
                            Search
                        </NavLink>
                    </div>

                    <div className="d-flex">
                        <span className="nav-item nav-link text-info">{username}</span>

                        <button className="btn me-2 nav-item nav-link" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
