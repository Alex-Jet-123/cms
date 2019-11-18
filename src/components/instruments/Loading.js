import React from 'react'
import {getInstruments} from "../../store/actions/getInstruments";
import {connect} from "react-redux";


const Loading = props => {

    const {statusInstruments, loading, page} = props

    const {getInstruments} = props


    let clickHandler = () => {

        if (statusInstruments !== 'success') return null //если идет загрузка, кнопка не работает

        //выполняем загрузку с теми же даннымми, плюс 1 страница

        getInstruments({
            sort: loading.field,
            sort_direction: loading.direction,
            page: +page[loading.field + '_' + loading.direction] + 1
        })

    }

    let btnClass = statusInstruments === 'success'

        ? 'btn btn-pink mb-3'

        : 'btn btn-pink mb-3 disabled'

    return (

        <button className={btnClass} onClick={() => clickHandler()}>загрузить еще</button>
    )
}


function mapStateToProps (state) {

    return {
        statusInstruments: state.status.instruments,
        sorting: state.sorting,
        loading: state.loading,
        list: state.list,
        page: state.page
    }
}

function mapDispatchToProps (dispatch) {

    return {
        getInstruments: params => dispatch(getInstruments(params))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Loading)