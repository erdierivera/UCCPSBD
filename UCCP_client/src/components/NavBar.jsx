import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

// const Container = styled.div.attrs({
//     className: 'container',
// })``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 100px;
    position: fixed;
    display: flex;
    z-index: 2;
    width: 100%;
`

class NavBar extends Component {
    render() {
        return (
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
        )
    }
}

export default NavBar