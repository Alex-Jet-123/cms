import React from 'react'
import '../../css/nav.css'
import {NavLink} from "react-router-dom";

const Menu = props => {

    return (

        <div className="menu">

            <div className="menu-element">
                <p>журнал</p>
            </div>

            <div className="menu-element">
                <p>агентства</p>
            </div>


            <div className="menu-element">
                <NavLink to={'/instruments'}><p>инструменты</p></NavLink>
            </div>


        </div>

    )
}

export default Menu