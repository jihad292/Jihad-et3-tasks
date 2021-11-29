import React from 'react'
import '../css/Navbar.css';
import Logo from '../images/reactLogo.png';
import { Link } from 'react-router-dom';

export const Navbar : React.FC = () => {
    return (
        <div className="containerNavbar">
            <div className="leftSide">
                <Link to='/'><img  src={Logo} alt="React Logo" /></Link>
            </div>

            <div className="rightSide">
                <Link className="link" to='/Prs'>Go To Prs</Link>
            </div>
        </div>
    )
}    