import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    UCCP SBD Membership
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/members/list" className="nav-link">
                                Members
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/organizations/list" className="nav-link">
                                Organizations
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/membership/list" className="nav-link">
                                Types of Membership
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/member/create" className="nav-link">
                                Add a Member
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links