import React from 'react'
import {NavLink} from "react-router-dom";

const Title = props => {

    const {image, title, code, shortUrl, url, isSponsor, firstLettersOfName} = props

    return (

        <div className={'instrument-element row align-items-center title'}>

            <div
                className="img row align-items-center justify-content-center"
                style={{marginRight: '20px', width: '40px', height: '40px'}}
            >

                {image

                    ? <img src={image} alt={`${title}_image`} style={{maxHeight: '100%', maxWidth: '100%'}}/>

                    : <p className={'first-letter'}>{firstLettersOfName}</p>
                }

            </div>

            <div className="text">

                <NavLink to={`/instrument/${code}`}><p className="text">{title}</p></NavLink>

                {title === 'Shop-Script' &&

                    <a href={url}><p className="link-sponsor">{shortUrl}</p></a>

                }

            </div>
            
        </div>

    )
}

export default Title