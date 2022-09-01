import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../uccp_logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
padding:15px;
`

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} width="75" height="75" alt="" />
            </Wrapper>
        )
    }
}

export default Logo