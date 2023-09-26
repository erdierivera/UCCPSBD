import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'
import ModalPopup from '../modal_popup';  
import Checkbox from './checkbox'
const Title = styled.h1.attrs({
    className: 'h4',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    padding:125px 50px 50px 50px; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.div.attrs({
    className: 'form-group form-inline'
})`
    margin: 5px 20px;
    font-size: 13px;
`

const MarriageWrapper = styled.div.attrs({
    id: 'marriageWrapper'
})`
    display: none;
`

const RemovalWrapper = styled.div.attrs({
    id: 'removalWrapper'
})`
    display: none;
`

const Label = styled.label`
    margin: 5px;
    width: 150px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin-right: 5px;
    width: 300px;
    display: inline-block;
    border-radius: 10px!important;
    ::placeholder {
        color: grey;
        font-style:italic;
        font-size: small;
      };
      
    font-size: 13px;
`

const ButtonWrapper = styled.div.attrs({
    className: ``,
})`
    float: right;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MemberInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            middleName: '',
            lastName: '',
            birthday: '',
            occupation: '',
            baptismDate: '',
            baptizedBy: '',
            organizationId: '',
            memberTypeId: '',
            isActive: false,
            civilStatus: '',
            weddingDate: '',
            weddedBy: '',
            spouse: '',
            age: '',
            birthPlace: '',
            nameOfFather: '',
            maidenNameOfMother: '',
            confirmationDate: '',
            confirmedBy: '',
            isRemoved: false,
            removalDate: '',
            reasonOfRemoval: '',
            showModalPopup: false
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const member = await api.getMemberById(id)
        
        this.setState({
            firstName: member.data.data.firstName,
            middleName: member.data.data.middleName,
            lastName: member.data.data.lastName,
            birthday: member.data.data.birthday,
            occupation: member.data.data.occupation,
            baptismDate: member.data.data.baptismDate,
            baptizedBy: member.data.data.baptizedBy,
            organizationId: member.data.data.organizationId || '',
            memberTypeId: member.data.data.memberTypeId || '',
            isActive: member.data.data.isActive || false,
            civilStatus: member.data.data.civilStatus || '',
            weddingDate: member.data.data.weddingDate || '',
            weddedBy: member.data.data.weddedBy || '',
            spouse: member.data.data.spouse || '',
            age: member.data.data.age,
            birthPlace: member.data.data.birthPlace || '',
            nameOfFather: member.data.data.nameOfFather || '',
            maidenNameOfMother: member.data.data.maidenNameOfMother || '',
            confirmationDate: member.data.data.confirmationDate || '',
            confirmedBy: member.data.data.confirmedBy || '',
            isRemoved: member.data.data.isRemoved || false,
            removalDate: member.data.data.removalDate || '',
            reasonOfRemoval: member.data.data.reasonOfRemoval || '',
        })

        if (this.state.civilStatus.toLowerCase() === 'married') {
                document.getElementById("marriageWrapper").style.display = 'block';
            }
        else        
        {
            document.getElementById("marriageWrapper").style.display = 'none';
            this.setState({ weddingDate: '' })
            this.setState({ spouse: '' })
        }
        
        if (this.state.isRemoved) {
            document.getElementById("removalWrapper").style.display = 'block';
        }
        else {
            document.getElementById("removalWrapper").style.display = 'none';
            this.setState({ removalDate: '' })
            this.setState({ reasonOfRemoval: '' })
        }
    }

    render() {        
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval } = this.state
        return(
            <Wrapper>                
                <ModalPopup  
                    showModalPopup={this.state.showModalPopup}  
                    onPopupClose={this.isShowPopup}  
                >
                </ModalPopup>
                <Title>Member Details</Title>

                <div style={{ fontFamily: 'system-ui' }}>
                    <label>
                        <Checkbox
                            checked={isActive}
                            readOnly={true}
                        />
                        <span style={{ marginLeft: 8 }}>Is Active?</span>
                    </label>
                    <label>
                        <Checkbox
                            checked={isRemoved}
                            readOnly={true}
                        />
                        <span style={{ marginLeft: 8 }}>Is Removed?</span>
                    </label>
                </div>

                <InputWrapper>
                    <Label>First Name: </Label>
                    <InputText
                        type="text"
                        value={firstName}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Middle Name: </Label> 
                    <InputText
                        type="text"
                        value={middleName}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Last Name: </Label>
                    <InputText
                        type="text"
                        value={lastName}
                        readOnly={true}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Birthday: </Label>
                    <InputText
                        type="text"
                        value={birthday}
                        readOnly={true}
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Label>Age: </Label>
                    <InputText
                        type="text"
                        value={age}
                        readOnly={true}
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Label>Place of Birth: </Label>
                    <InputText
                        type="text"
                        value={birthPlace}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Father's Name: </Label>
                    <InputText
                        type="text"
                        value={nameOfFather}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Mother's Maiden Name: </Label>
                    <InputText
                        type="text"
                        value={maidenNameOfMother}
                        readOnly={true}
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Label>Membership Type: </Label>
                    <InputText
                        type="text"
                        value={memberTypeId}
                        readOnly={true}
                        Required
                    />
                </InputWrapper>  

                <InputWrapper>
                    <Label>Date of Baptism: </Label>
                    <InputText
                        type="text"
                        value={baptismDate}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Baptized By: </Label>
                    <InputText
                        type="text"
                        value={baptizedBy}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Date of Confirmation: </Label>
                    <InputText
                        type="text"
                        value={confirmationDate}
                        readOnly={true}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Confirmed By: </Label>
                    <InputText
                        type="text"
                        value={confirmedBy}
                        readOnly={true}
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Label>Civil Status: </Label>
                    <InputText
                        type="text"
                        value={civilStatus}
                        readOnly={true}
                    />
                </InputWrapper>
                <MarriageWrapper>
                    <InputWrapper>
                        <Label>Wedding Date: </Label>
                        <InputText
                            type="text"
                            value={weddingDate}
                            readOnly={true}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Spouse: </Label>
                        <InputText
                            type="text"
                            value={spouse}
                            readOnly={true}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Officiating Minister: </Label>
                        <InputText
                            type="text"
                            value={weddedBy}
                            readOnly={true}
                        />
                    </InputWrapper>
                </MarriageWrapper>

                <InputWrapper>
                    <Label>Occupation: </Label>
                    <InputText
                        type="text"
                        value={occupation}
                        readOnly={true}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Organization: </Label>
                    <InputText
                        type="text"
                        value={organizationId}
                        readOnly={true}
                    />
                </InputWrapper>                
                
                <RemovalWrapper>
                    <InputWrapper>
                        <Label>Date of Removal: </Label>
                        <InputText
                            type="text"
                            value={removalDate}
                            readOnly={true}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Reason of Removal: </Label>
                        <InputText
                            type="text"
                            value={reasonOfRemoval}
                            readOnly={true}
                        />
                    </InputWrapper>
                </RemovalWrapper>
                <ButtonWrapper>
                    {/* <Button onClick={this.handleUpdateMember}>Update Member</Button> */}
                    <CancelButton href={'/members/list'}>Back</CancelButton>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

export default MemberInfo