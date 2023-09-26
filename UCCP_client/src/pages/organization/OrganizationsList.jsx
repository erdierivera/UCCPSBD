import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding:125px 50px 50px 50px; 
    position: relative;
`

const GetOrgMembers = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class GetOrganizationMembers extends Component {
    getMembersByOrg = event => {
        event.preventDefault()

        window.location.href = `/member/orgmembers/${this.props.id}`
    }

    render() {
        return <GetOrgMembers onClick={this.getMembersByOrg}>{this.props.accessor}</GetOrgMembers>
    }
}

class OrganizationsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            organizations: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllOrganizations().then(organizations => {
            this.setState({
                organizations: organizations.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { organizations, isLoading } = this.state
        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Abbreviation',
                accessor: '',
                Cell: function(props){
                    return (
                        <span>
                            <GetOrganizationMembers id={props.original.organizationId} accessor={props.original.abbreviation}/>
                        </span>
                    )
                },
                headerStyle: {
                    },
                // filterable: true,
                width: '150'
            },
            {
                Header: 'Name',
                accessor: 'name',
                // filterable: true,
                width: '30%'
            },
        ]

        let showTable = true
        if (!organizations.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={organizations}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                        filterable={false}
                        showFilters={false}
                        className="table table-bordered"
                        getTheadProps={() => ({
                            className: 'rt-thead -header bg-dark text-light'
                            // className: 'rt-thead -header bg-secondary text-light'
                            })}
                        getTdProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '12px',
                            }
                            })}
                            
                        getTheadThProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '13px'
                            }
                            })}
                        getTheadFilterProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '12px',
                            }
                            })}
                        getPaginationProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '12px',
                            }
                            })}
                    />
                )}
            </Wrapper>
        )
    }
}

export default OrganizationsList