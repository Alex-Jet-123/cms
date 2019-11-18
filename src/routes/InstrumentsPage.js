import React from 'react'
import Thead from "../components/instruments/Thead";
import {connect} from "react-redux";
import {getInstruments} from "../store/actions/getInstruments";
import InstrumentsList from "../containers/InstrumentsList";
import '../css/instruments.css'
import '../css/instruments-width.css'
import Loading from "../components/instruments/Loading";
import {setLoading} from "../store/actions/setLoading";
import {setStatus} from "../store/actions/setStatus";

const InstrumentsPage = props => {

    const {statusInstruments, sorting, loading, page, list} = props

    const {getInstruments, setLoading, setStatus} = props

    console.log({sorting, loading, page, list, statusInstruments})

    let params = {
        page: '1',
        sort: sorting.field,
        sort_direction: sorting.direction
    }

    if (!statusInstruments && !list[sorting.field + '_' + sorting.direction]) {

        console.log('Первая загрузка записей', params, list)

        getInstruments(params)
    }



    if (statusInstruments === 'success' || list[sorting.field + '_' + sorting.direction]) {

        //если записи загружены и изменилась сортировка относительно загруженной,
        // то проверяем, есть ли записи с такими параметрами загрузки в list

        //если записи с заданной сортировкой уже есть, то выводим их и меняем loading

        if (JSON.stringify(sorting) !== JSON.stringify(loading)) {

            console.log('Изменилась сортировка', params)

            if (!list[sorting.field + '_' + sorting.direction]) {

                console.log('Повторная загрузка записей', params)

                getInstruments(params)

            } else {

                console.log('Повтоно загружать не нужно, данные уже есть', list)

                console.log('Изменим loading')

                setLoading(sorting.field, sorting.direction)

                setStatus('success')
            }

        }
    }

    return (

        <div style={{maxWidth: '1140px'}}>

            <h1 className={'mb-2'}>Каталог CMS</h1>

            <Thead/>

            <InstrumentsList/>

            <Loading/>

        </div>

    )
}

function mapStateToProps (state) {

    return {
        statusInstruments: state.status.instruments,
        list: state.list,
        sorting: state.sorting,
        loading: state.loading,
        page: state.page
    }
}

function mapDispatchToProps (dispatch) {

    return {
        getInstruments: params => dispatch(getInstruments(params)),
        setLoading: (field, direction) => dispatch(setLoading(field, direction)),
        setStatus: (status) => dispatch(setStatus(status))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (InstrumentsPage)