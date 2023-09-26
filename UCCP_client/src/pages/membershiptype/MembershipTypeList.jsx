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

        window.location.href = `/member/typemembers/${this.props.id}`
    }

    render() {
        return <GetOrgMembers onClick={this.getMembersByOrg}>{this.props.accessor}</GetOrgMembers>
    }
}

class MembershipTypeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            membershipTypes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMembershipTypes().then(membershipTypes => {
            this.setState({
                membershipTypes: membershipTypes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { membershipTypes, isLoading } = this.state
        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Name',
                accessor: '',
                Cell: function(props){
                    return (
                        <span>
                            <GetOrganizationMembers id={props.original.membershiptypeid} accessor={props.original.name}/>
                        </span>
                    )
                },
                // filterable: true,
                width: '150'
            },
            {
                Header: 'Description',
                accessor: 'description',
                // filterable: true,
                width: '90%'
            },
        ]

        let showTable = true
        if (!membershipTypes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={membershipTypes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={0}
                        className="table table-bordered"
                        getTheadProps={() => ({
                            className: 'rt-thead -header bg-dark text-light'
                            // className: 'rt-thead -header bg-secondary text-light'
                            })}
                        getTdProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '12px',
                            whiteSpace: 'unset'
                            }
                            })}
                            
                        getTheadThProps={() => ({
                            style: {
                            textAlign: 'center',
                            fontSize: '13px',
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

export default MembershipTypeList