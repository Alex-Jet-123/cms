import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import FavoritesPage from "./routes/FavoritesPage";
import Instruments from "./routes/InstrumentsPage";
import Aside from "./nav/Aside";

import './css/main.css'
import './css/margins.css'
import './css/btn.css'

const App = props => {

    return (

        <BrowserRouter>

            <Aside/>

            <main>

                <Route exact path="/" component={Instruments} />
                <Route exact path="/instruments" component={Instruments} />
                <Route exact path="/instrument/:code" component={Instruments} />
                <Route exact path="/favorites" component={FavoritesPage} />

            </main>

        </BrowserRouter>

    )
}

export default App