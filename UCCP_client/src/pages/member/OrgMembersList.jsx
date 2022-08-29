import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding:130px 50px 50px 50px;    
    position: relative;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateMember extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/member/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMember extends Component {
    deleteUser = event => {
        event.preventDefault()

        if(
            window.confirm(`Do you want to delete the member ${this.props.id} permanently?`,)
        )
        {
            api.deleteMemberById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class OrgMembersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            members: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        const { id } = this.state
        await api.getMembersByOrg(id).then(members => {
            this.setState({
                members: members.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { members, isLoading } = this.state
        const columns = [
            {
                Header: 'First Name',
                accessor: 'firstName',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Middle Name',
                accessor: 'middleName',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Birthday',
                accessor: 'birthday',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Date of Baptism',
                accessor: 'baptismDate',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Baptized By',
                accessor: 'baptizedBy',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Occupation',
                accessor: 'occupation',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Organization',
                accessor: 'organizationId',
                filterable: true,
                width: '30%'
            },
            {
                Header: 'Membership Type',
                accessor: 'memberTypeId',
                filterable: true,
                width: '30%'
            },
            {
                id: 'isActive',
                Header: 'Status',
                accessor: d => { return d.isActive ? 'Active' : 'Inactive' },
                filterable: true,
                width: '30%'
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props){
                    return (
                        <span>
                            <UpdateMember id={props.original._id} />
                        </span>
                    )
                },
                headerStyle: {
                    },
                width: '100',
                sortable:false
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props){
                    return (
                        <span>
                            <DeleteMember id={props.original._id} />
                        </span>
                    )
                },
                headerStyle: {
                    },
                width: '100',
                sortable:false
            }
        ]

        let showTable = true
        if (!members.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={members}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={50}
                        showPageSizeOptions={true}
                        minRows={0}
                        className="-highlight -striped"
                        getTdProps={() => ({
                            style: {
                            textAlign: 'center'
                            }
                            })}
                    />
                )}
            </Wrapper>
        )
    }
}

export default OrgMembersList