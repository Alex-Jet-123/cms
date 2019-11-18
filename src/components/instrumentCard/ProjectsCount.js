import React from 'react'
import {declension} from "../../functions/declension";
import {divideNumber} from "../../functions/divideNumber";

const ProjectsCount = props => {

    const {partnersCount} = props

    return (

        <div className="instrument-element partners">

            <p>
                {divideNumber(partnersCount || 0)} {declension(partnersCount, ['партнер', 'партнера', 'партнеров'])}
            </p>

        </div>

    )
}

export default ProjectsCount