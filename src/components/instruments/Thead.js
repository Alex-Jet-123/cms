import React from 'react'
import {theadArr} from "../../data/theadArr";
import '../../css/thead.css'
import {connect} from "react-redux";
import {setSorting} from "../../store/actions/setSorting";
import Header from "../thead/Header";

const Thead = props => {

    const {sorting} = props

    const {setSorting} = props


    let html = theadArr.map((header, index) => {

        return (

            <Header
                key={index}
                header={header}
            />

        )

    })

    return (

        <div className="row instruments flex-column thead">

            <div className="row instrument">

                {html}

            </div>

        </div>

    )
}

function mapStateToProps (state) {

    return {
        instruments: state.instruments,
        favorites: state.favorites,
        statusInstruments: state.status.instruments,
        sorting: state.sorting
    }
}

function mapDispatchToProps (dispatch) {

    return {
        setSorting: (field, direction) => dispatch(setSorting(field, direction))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Thead)