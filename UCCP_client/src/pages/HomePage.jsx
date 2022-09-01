import React, { Component } from 'react'
import styled from 'styled-components'

import homePhoto from '../homePhoto.png'


const Wrapper = styled.div`
    height: 700px;
`

class HomePage extends Component {
    render() {
        return (
            <Wrapper>
                <img src={homePhoto} width="auto" height="100%" alt="" style={{marginLeft: '150px'}} />
            </Wrapper>
        )
    }
}

export default HomePage