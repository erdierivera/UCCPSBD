import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding:5px 50px 50px 50px;    
    position: relative;
    td{font-size:30px}
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const GetMemberData = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class GetMemberInfo extends Component {
    getMemberInfo = event => {
        event.preventDefault()

        window.location.href = `/member/memberinfo/${this.props.id}`
    }

    render() {        
        return <GetMemberData onClick={this.getMemberInfo}>View</GetMemberData>
    }
}

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
            window.confirm(`Do you want to remove ${this.props.value} permanently?`,)
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

class MembersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMembers().then(members => {
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
                Header: 'Last Name',
                accessor: 'lastName',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
                filterable: true,
            },
            {
                id: 'col_middleName',
                Header: 'Middle Name',
                accessor:  data => data.middleName || 'N/A',
                filterable: true,
            },
            {
                id: 'isActive',
                Header: 'Status',
                accessor: d => { return d.isActive ? 'Active' : 'Inactive' },
                filterable: true,
            },
            // {
            //     Header: 'Date of Baptism',
            //     accessor: 'baptismDate',
            //     filterable: true,
            //     width: '30%'
            // },
            // {
            //     Header: 'Baptized By',
            //     accessor: 'baptizedBy',
            //     filterable: true,
            //     width: '30%'
            // },
            {
                id: 'col_organization',
                Header: 'Organization',
                accessor:  data => data.organizationId || 'N/A',
                filterable: true,
            },
            {
                id: 'col_membership',
                Header: 'Membership Type',
                accessor:  data => data.memberTypeId || 'N/A',
                filterable: true,
                width: 115
            },
            {
                id: 'col_occupation',
                Header: 'Occupation',
                accessor:  data => data.occupation || 'N/A',
                filterable: true,
                width: 175
            },
            {
                id: 'col_civil',
                Header: 'Civil Status',
                accessor:  data => data.civilStatus || 'N/A',
                filterable: true,
            },
            {
                id: 'col_weddingDate',
                Header: 'Wedding Date',
                accessor: data => data.weddingDate || 'N/A',
                filterable: true,
            },
            {
                id: 'col_birthday',
                Header: 'Birthday',
                accessor: 'birthday',
                filterable: true,
                // accessor: row => JSON.stringify(new Date(row.birthday)),
                // sortType: 'datetime',
                // cell: ({ cell: { value }}) => value.toLocaleDateString(),
            },
            {
                id: 'col_age',
                Header: 'Age',
                // accessor: 'age',
                // filterable: true,
                accessor: d => Number(Number(d.age).toFixed(2)) || 'N/A',
                width: 50
            },
            {
                Header: '',
                accessor: '',
                width: 50,
                Cell: function(props){
                    return (
                        <span>
                            <GetMemberInfo id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                width: 50,
                Cell: function(props){
                    return (
                        <span>
                            <UpdateMember id={props.original._id} />
                        </span>
                    )
                },
                headerStyle: {
                    },
                sortable:false
            },
            {
                Header: '',
                accessor: '',
                width: 50,
                Cell: function(props){
                    return (
                        <span>
                            <DeleteMember id={props.original._id} value={props.original.firstName}/>
                        </span>
                    )
                },
                headerStyle: {
                    },
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
                        defaultSorted={[
                            {
                            id: "lastName",
                            desc: false
                            }
                        ]}
                        showPageSizeOptions={true}
                        minRows={0}
                        className="table table-bordered"
                        getTheadProps={() => ({
                            className: 'rt-thead -header bg-dark text-light'
                            // className: 'rt-thead -header bg-secondary text-light'
                            })}
                        getTbodyProps={() => ({
                            // class: 'table table-hover'
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
                            fontSize: '13px',
                            },
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
                
                
                {!showTable && (
                    <h2>No data found.</h2>
                )}
            </Wrapper>
        )
    }
}

export default MembersList