import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const Navbar: React.FC = () => {
    const {
        authState: { username },
    } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Asociaciones
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

                        <NavLink activeClassName="active me-2" className="nav-item nav-link" exact to="/login">
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
