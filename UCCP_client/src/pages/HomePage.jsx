import React, { Component } from 'react'
import styled from 'styled-components'

import homePhoto from '../homePhoto.png'


const Wrapper = styled.div`
    padding: 00px 30px 40px 0px;
`

class HomePage extends Component {
    render() {
        return (
            <Wrapper>
                <img src={homePhoto} width="2000" height="1000" alt="" />
            </Wrapper>
        )
    }
}

export default HomePage