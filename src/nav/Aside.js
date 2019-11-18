import React from 'react'
import Logo from "../components/aside/Logo";
import Menu from "../components/aside/Menu";
import MenuSmall from "../components/aside/MenuSmall";
import Loading from "../components/instruments/Loading";

const Aside = props => {

    return (

        <aside>

            <Logo/>

            <hr/>

            <Menu/>

            <hr/>

            <MenuSmall/>

            <hr/>

            <Loading/>

        </aside>

    )
}

export default Aside