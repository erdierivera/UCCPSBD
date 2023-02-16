import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'
import ModalPopup from '../modal_popup';  
import Checkbox from './checkbox'
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const Title = styled.h1.attrs({
    className: 'h4',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    padding:130px 50px 50px 50px; 
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

class MembersUpdate extends Component {
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

    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
      };  

    handleChangeInputWeddedBy = async event => {
        const weddedBy = event.target.value
        this.setState({ weddedBy })
    }  

    handleChangeInputBirthPlace = async event => {
        const birthPlace = event.target.value
        this.setState({ birthPlace })
    }  

    handleChangeInputNameOfFather = async event => {
        const nameOfFather = event.target.value
        this.setState({ nameOfFather })
    }  

    handleChangeInputMaidenNameOfMother = async event => {
        const maidenNameOfMother = event.target.value
        this.setState({ maidenNameOfMother })
    }  

    handleChangeInputConfirmationDate = async event => {
        const confirmationDate = event.target.value
        this.setState({ confirmationDate })
    }  

    handleChangeInputConfirmedBy = async event => {
        const confirmedBy = event.target.value
        this.setState({ confirmedBy })
    }

    handleChangeInputIsRemoved = async event => {
        const isRemoved = event.target.checked
        
        if (isRemoved) {
            document.getElementById("removalWrapper").style.display = 'block';
            this.setState({ isActive: false })
        }
        else {
            document.getElementById("removalWrapper").style.display = 'none';
            this.setState({ removalDate: '' })
            this.setState({ reasonOfRemoval: '' })
            this.setState({ isActive: true })
        }
        this.setState({ isRemoved: isRemoved || false })
    }

    handleChangeInputReasonOfRemoval = async event => {
        const reasonOfRemoval = event.target.value
        this.setState({ reasonOfRemoval })
    }

    handleChangeInputFirstname = async event => {
        const firstName = event.target.value
        this.setState({ firstName })
    }

    handleChangeInputMiddlename = async event => {
        const middleName = event.target.value
        this.setState({ middleName })
    }

    handleChangeInputLastname = async event => {
        const lastName = event.target.value
        this.setState({ lastName })
    }

    handleChangeInputOccupation = async event => {
        const occupation = event.target.value
        this.setState({ occupation })
    }

    handleChangeInputOrganization = async event => {
        const organizationId = event.target.value
        this.setState({ organizationId: organizationId || '' })
    }

    handleChangeInputMembershipType = async event => {
        const memberTypeId = event.target.value
        this.setState({ memberTypeId: memberTypeId || '' })
    }

    handleChangeInputBaptismDate = async event => {
        const baptismDate = event.target.value
        this.setState({ baptismDate })
    }

    handleChangeInputBirthday = async event => {
        const birthday = event.target.value
        this.setState({ birthday })
    }

    handleChangeInputUpdateAge = async event => {
        const birthday = event.target.value
        
        if (birthday === '') {            
            this.setState({ age: '' })
        }
        else {
            var today = new Date();
            var birthDate = new Date(birthday);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
            {
                age--;
            }
            this.setState({ age: age })
        }
    }

    handleChangeInputBaptizedBy = async event => {
        const baptizedBy = event.target.value
        this.setState({ baptizedBy })
    }

    handleChangeInputCivilStatus = async event => {
        const civilStatus = event.target.value
        if(civilStatus.toLowerCase() === 'married')
        {
            document.getElementById("marriageWrapper").style.display = 'block';
        }
        else        
        {
            document.getElementById("marriageWrapper").style.display = 'none';
            this.setState({ weddingDate: '' })
            this.setState({ spouse: '' })
        }
        this.setState({ civilStatus: civilStatus || '' })
    }

    handleChangeInputweddingDate = event => {
        const weddingDate = event.target.value
        this.setState({ weddingDate: weddingDate })
    }

    handleChangeInputSpouse = event => {
        const spouse = event.target.value
        this.setState({ spouse: spouse })
    }

    handleIsActiveCheckboxChange = event => {
        const isActive = event.target.checked
        
        if(isActive)
        {
            this.setState({ isRemoved: false })
        }

        this.setState({ isActive: isActive | false })
    }

    handleUpdateMember = async () => {
        const { id, firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval } = this.state
        const payload = { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval  }

        await api.updateMemberById(id, payload).then(res => {
            //window.alert(`Member updated successfully`)
            this.state.showModalPopup = true
            this.setState({
                id: id,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                birthday: birthday,
                occupation: occupation,
                baptismDate: baptismDate,
                baptizedBy: baptizedBy,
                organizationId: organizationId,
                memberTypeId: memberTypeId,
                isActive: isActive,
                civilStatus: civilStatus,
                weddingDate: weddingDate,
                weddedBy: weddedBy,
                spouse: spouse,
                age: age,
                birthPlace: birthPlace,
                nameOfFather: nameOfFather,
                maidenNameOfMother: maidenNameOfMother,
                confirmationDate: confirmationDate,
                confirmedBy: confirmedBy,
                isRemoved: isRemoved,
                removalDate: removalDate,
                reasonOfRemoval: reasonOfRemoval,
            })
        })
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

        if(this.state.civilStatus.toLowerCase() === 'married')
            {
                document.getElementById("marriageWrapper").style.display = 'block';
            }
            else        
            {
                document.getElementById("marriageWrapper").style.display = 'none';
                this.setState({ weddingDate: '' })
                this.setState({ spouse: '' })
            }
    }

    render() {
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval } = this.state
        return (
            <Wrapper>                
                <ModalPopup  
                    showModalPopup={this.state.showModalPopup}  
                    onPopupClose={this.isShowPopup}  
                >
                </ModalPopup>
                <Title>Update Member</Title>

                <div style={{ fontFamily: 'system-ui' }}>
                    <label>
                        <Checkbox
                            checked={isActive}
                            onChange={this.handleIsActiveCheckboxChange}
                        />
                        <span style={{ marginLeft: 8 }}>Is Active?</span>
                    </label>
                    <label>
                        <Checkbox
                            checked={isRemoved}
                            onChange={this.handleChangeInputIsRemoved}
                        />
                        <span style={{ marginLeft: 8 }}>Is Removed?</span>
                    </label>
                </div>

                <InputWrapper>
                    <Label>First Name: </Label>
                    <InputText
                        type="text"
                        value={firstName}
                        onChange={this.handleChangeInputFirstname}
                        placeholder="Enter First Name"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Middle Name: </Label>
                    <InputText
                        type="text"
                        value={middleName}
                        onChange={this.handleChangeInputMiddlename}
                        placeholder="Enter Middle Name"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Last Name: </Label>
                    <InputText
                        type="text"
                        value={lastName}
                        onChange={this.handleChangeInputLastname}
                        placeholder="Enter Last Name"
                    />
                </InputWrapper>
                
                <InputWrapper>
                <Label>Birthday: </Label>
                    <InputText
                        type="text"
                        value={birthday}
                        onChange={this.handleChangeInputBirthday}
                        onBlurCapture={this.handleChangeInputUpdateAge}
                        placeholder="Enter Birthday"
                    />
                </InputWrapper>
                
                <InputWrapper>
                <Label>Age: </Label>
                    <InputText
                        type="text"
                        value={age}
                        // onChange={this.handleChangeInputBirthday}
                        readOnly={true}
                    />
                </InputWrapper>
                
                <InputWrapper>
                <Label>Place of Birth: </Label>
                    <InputText
                        type="text"
                        value={birthPlace}
                        onChange={this.handleChangeInputBirthPlace}
                        placeholder="Enter Place of Birth"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Father's Name: </Label>
                    <InputText
                        type="text"
                        value={nameOfFather}
                        onChange={this.handleChangeInputNameOfFather}
                        placeholder="Enter Father's Name"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Mother's Maiden Name: </Label>
                    <InputText
                        type="text"
                        value={maidenNameOfMother}
                        onChange={this.handleChangeInputMaidenNameOfMother}
                        placeholder="Enter Mother's Maiden Name"
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Label>Membership Type: </Label>
                    <InputText
                        type="text"
                        value={memberTypeId}
                        onChange={this.handleChangeInputMembershipType}
                        placeholder="Enter Membership Type"
                        Required
                    />
                </InputWrapper>                

                <InputWrapper>
                <Label>Date of Baptism: </Label>
                    <InputText
                        type="text"
                        value={baptismDate}
                        onChange={this.handleChangeInputBaptismDate}
                        placeholder="Enter Date of Baptism"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Baptized By: </Label>
                    <InputText
                        type="text"
                        value={baptizedBy}
                        onChange={this.handleChangeInputBaptizedBy}
                        placeholder="Enter Baptized By"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Date of Confirmation: </Label>
                    <InputText
                        type="text"
                        value={confirmationDate}
                        onChange={this.handleChangeInputConfirmationDate}
                        placeholder="Enter Date of Confirmation"
                    />
                </InputWrapper>

                <InputWrapper>
                <Label>Confirmed By: </Label>
                    <InputText
                        type="text"
                        value={confirmedBy}
                        onChange={this.handleChangeInputConfirmedBy}
                        placeholder="Enter Confirmed By"
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Civil Status: </Label>
                    <InputText
                        type="text"
                        value={civilStatus}
                        onChange={this.handleChangeInputCivilStatus}
                        placeholder="Enter Civil Status"
                        Required
                    />
                </InputWrapper>
                <MarriageWrapper>
                    <InputWrapper>
                        <Label>Wedding Date: </Label>
                        <InputText
                            type="text"
                            value={weddingDate}
                            onChange={this.handleChangeInputweddingDate}
                            placeholder="Enter Wedding Date"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Spouse: </Label>
                        <InputText
                            type="text"
                            value={spouse}
                            onChange={this.handleChangeInputSpouse}
                            placeholder="Enter Spouse"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Officiating Minister: </Label>
                        <InputText
                            type="text"
                            value={weddedBy}
                            onChange={this.handleChangeInputWeddedBy}
                            placeholder="Enter Officiating Minister"
                        />
                    </InputWrapper>
                </MarriageWrapper>

                <InputWrapper>
                    <Label>Occupation: </Label>
                    <InputText
                        type="text"
                        value={occupation}
                        onChange={this.handleChangeInputOccupation}
                        placeholder="Enter Occupation"
                        Required
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Organization: </Label>
                    <InputText
                        type="text"
                        value={organizationId}
                        onChange={this.handleChangeInputOrganization}
                        placeholder="Enter Organization"
                        Required
                    />
                </InputWrapper>
                
                <RemovalWrapper>
                    <InputWrapper>
                        <Label>Date of Removal: </Label>
                        <InputText
                            type="text"
                            value={removalDate}
                            onChange={this.handleChangeInputRemovalDate}
                            placeholder="Enter Date if Removal"
                            Required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Reason of Removal: </Label>
                        <InputText
                            type="text"
                            value={reasonOfRemoval}
                            onChange={this.handleChangeInputReasonOfRemoval}
                            placeholder="Enter Reason of Removal"
                            Required
                        />
                    </InputWrapper>
                </RemovalWrapper>                    
                
                <ButtonWrapper>
                    <Button onClick={this.handleUpdateMember}>Update Member</Button>
                    <CancelButton href={'/members/list'}>Cancel</CancelButton>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

export default MembersUpdate