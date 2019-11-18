import React from 'react'
import {connect} from "react-redux";
import {addFavorites, removeFavorites} from "../../store/actions/addFavorites";

const Compare = props => {

    const {favorites} = props

    const {addFavorites, removeFavorites} = props

    const {id} = props


    let isFavorit = favorites.has(String(id))

    let on = <img src={'/img/checkbox-on.svg'} alt={'compare-on'} onClick={() => removeFavorites(id)}/>

    let off = <img src={'/img/checkbox-off.svg'} alt={'compare-off'} onClick={() => addFavorites(id)} />


    return (

        <div className="instrument-element compare row justify-content-center">
            {isFavorit ? on : off}
        </div>

    )
}

function mapStateToProps (state) {

    return {
        instruments: state.instruments,
        favorites: state.favorites,
        statusInstruments: state.status.instruments
    }
}

function mapDispatchToProps (dispatch) {

    return {
        addFavorites: id => dispatch(addFavorites(id)),
        removeFavorites: id => dispatch(removeFavorites(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Compare)