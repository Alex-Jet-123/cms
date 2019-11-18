import React from 'react'
import '../../css/logo.css'
import {NavLink} from "react-router-dom";

const Logo = props => {

    return (

        <NavLink to={'/'}>

            <div className="logo row">

                <div className="picture"><p>cms</p></div>

                <div className="text">

                    <div className="head"><p>magazine</p></div>

                    <div className="subhead"><p>все о digital</p></div>

                </div>

            </div>

        </NavLink>

    )
}

export default Logo