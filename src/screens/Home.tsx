import React from 'react'
import {Navbar} from '../components/Navbar'
import '../css/Home.css';
import  Logo  from '../images/reactNativeGig.gif';

export const  Home : React.FC = () => {
    return (
        <div className="homeMain">
            <Navbar />
            <div className="body">
                <div className="ReactNativePart">
                    <img src={Logo} alt="ReactNativeGif"/>
                    <p>Soon Mobile app...</p>
                </div>
            </div>
        </div>
    )
}    