import React from 'react'
import {setSorting} from "../../store/actions/setSorting";
import {connect} from "react-redux";
import SortingDirection from "./SortingDirection";

const Header = props => {

    const {sorting} = props

    const {setSorting} = props

    const {header} = props

    const {field, name, isSorting, center} = header



    let clickHandler = () => {

        if (isSorting) {

            if (sorting.field === field && sorting.direction === 'desc') {

                setSorting(field, 'asc')

            } else {

                setSorting(field, 'desc')
            }

        }
    }

    let headerClass = sorting.field === field ? 'sorting' : ''

    return (

        <div
            className={`instrument-element row align-items-center ${center ? 'justify-content-center': ''}`}
            onClick={() => clickHandler()}
        >

            <p className={headerClass}>{name}</p>

            {sorting.field === field &&

                <SortingDirection
                    direction={sorting.direction}
                />

            }

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

export default connect(mapStateToProps, mapDispatchToProps) (Header)