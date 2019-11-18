import React from 'react'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const MenuSmall = props => {

    const {favorites} = props


    return (

        <div className="menu-small">

            <div className="menu-element">
                <NavLink to={'/favorites'}><p>Избранное {!!favorites.size && favorites.size}</p></NavLink>
            </div>

            <div className="menu-element">
                <p>Поиск</p>
            </div>

            <div className="menu-element">
                <p>Кабинет агентства</p>
            </div>

        </div>

    )
}


function mapStateToProps (state) {

    return {
        favorites: state.favorites,
    }
}

export default connect(mapStateToProps, null) (MenuSmall)