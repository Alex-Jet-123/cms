import React from 'react'
import {declension} from "../../functions/declension";
import {divideNumber} from "../../functions/divideNumber";

const WorksCount = props => {

    const {worksCount} = props

    return (

        <div className="instrument-element projects">

            <p>
                {divideNumber(worksCount || 0)} {declension(worksCount, ['проект', 'проекта', 'проектов'])}
            </p>

        </div>

    )
}

export default WorksCount