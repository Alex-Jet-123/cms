import React from 'react'
import Thead from "../components/instruments/Thead";
import FavoritesList from "../containers/FavoritesList";


const FavoritesPage = props => {



    return (

        <>

            <h1 className={'mb-2'}>Выбранные компании</h1>

            <Thead/>

            <FavoritesList/>

        </>

    )
}

export default FavoritesPage