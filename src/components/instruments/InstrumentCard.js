import React from 'react'
import Title from "../instrumentCard/Title";
import Compare from "../instrumentCard/Compare";
import Rate from "../instrumentCard/Rate";
import WorksCount from "../instrumentCard/WorksCount";
import ProjectsCount from "../instrumentCard/ProjectsCount";

const InstrumentCard = props => {

    const {instrument} = props

    return (

        <div className="row instrument align-items-center">

            <Title {...instrument} />

            <WorksCount {...instrument}/>

            <ProjectsCount {...instrument}/>

            <Rate {...instrument}/>

            <Compare {...instrument}/>

        </div>

    )
}

export default InstrumentCard