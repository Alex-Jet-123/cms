import React from 'react'

const SortingDirection = props => {

    const {direction} = props

    return direction === 'desc'

        ? <img src={'/img/drop-down.svg'} alt={'desc'}/>

        : <img src={'/img/drop-up.svg'} alt={'asc'}/>
}

export default SortingDirection