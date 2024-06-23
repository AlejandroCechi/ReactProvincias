import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';



export const Navbar = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext)

    const onLogOut = () =>{
        navigate('login',{ replace:true});
        logout();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Ciudades
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active' : ''} `   }
                        to="/arg"
                    >
                        Argentina
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active' : ''} `   }
                        to="/bra"
                    >
                        Brasil
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active' : ''} `   }
                        to="/search"
                    >
                        Busqueda
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-primary'> 
                    {user.name}
                  </span>
                    <button className='nav-item nav-link btn' onClick={onLogOut}>
                        Logout 
                    </button>
                </ul>
            </div>
        </nav>
    ) 
}
