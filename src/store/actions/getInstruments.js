import axios from 'axios'

export const getInstruments = (params) => async dispatch => {



    try {

        dispatch({ type: 'GET_INSTRUMENTS_START'})

        const {instrument_type_code = 'cms', page = '1', sort, sort_direction} = params || {}

        console.log('getInstruments', sort, sort_direction, page)

        let response = await axios.get(`https://api.cmsmagazine.ru/v1/instrumentsList`, {
            params: {
                instrument_type_code,
                page,
                sort,
                sort_direction
            }
        })

        console.log('getInstruments response', response)

        let instruments = response && response.data && response.data.data

        let instrumentsObj = {}

        for (let key in instruments) {

            let instrument = instruments[key]

            instrumentsObj[instrument.id] = instrument

        }

        dispatch({
            type: 'SET_PAGE',
            field: sort,
            direction: sort_direction,
            page: page
        })

        dispatch({
            type: 'SET_LOADING',
            field: sort,
            direction: sort_direction
        })

        dispatch({
            type: 'GET_INSTRUMENTS_LIST',
            instruments: instrumentsObj,
            field: sort,
            direction: sort_direction
        })

        dispatch({
            type: 'GET_INSTRUMENTS_SUCCESS',
            instruments: instrumentsObj,
        })




    } catch (e) {

        console.log('getInstruments ERROR', e)

        dispatch({ type: 'GET_INSTRUMENTS_ERROR'})

    }



}