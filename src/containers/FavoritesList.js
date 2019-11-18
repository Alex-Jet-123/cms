import React from 'react'
import {connect} from "react-redux";
import {emptyObj} from "../functions/functions";
import InstrumentCard from "../components/instruments/InstrumentCard";


const FavoritesList = props => {

    const {instruments, favorites} = props

    if (emptyObj(instruments)) return null


    let html = [...favorites].map((id, index) => {

        let instrument = Object.values(instruments).find(elem => String(elem.id) === id)

        return (

            <InstrumentCard
                key = {index}
                instrument = {instrument}
            />
        )
    })


    return (

        <div className="row instruments flex-column">

            {html}

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

export default connect(mapStateToProps, null) (FavoritesList)