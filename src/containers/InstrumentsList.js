import React from 'react'
import {connect} from "react-redux";
import InstrumentCard from "../components/instruments/InstrumentCard";

const InstrumentsList = props => {

    const {statusInstruments, list, loading, sorting} = props

    let paramsLoading = loading.field + '_' + loading.direction

    let paramsSorting = sorting.field + '_' + sorting.direction


    if (statusInstruments === 'start' && !list[paramsSorting]) {

        return <p className={'mb-3'}>Идет загрузка...</p>

    } else if (statusInstruments === 'error') {

        return <p className={'mb-3'}>При загрузке списка CMS возникла ошибка. Перезагрузите страницу</p>

    }


    let dataToHandler = list[paramsLoading] && Object.values(list[paramsLoading]).sort((a, b) => {

        let sort

        if (loading.field === 'works_count') sort = 'worksCount'

        else if (loading.field === 'partners_count') sort = 'partnersCount'

        else if (loading.field === 'rate') sort = 'rate'

        return loading.direction === 'desc'

            ? +b[sort] - +a[sort]

            : +a[sort] - +b[sort]
    })


    let html = dataToHandler && dataToHandler.map((instrument, index) => {

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
        statusInstruments: state.status.instruments,
        list: state.list,
        loading: state.loading,
        sorting: state.sorting
    }
}

export default connect(mapStateToProps, null) (InstrumentsList)