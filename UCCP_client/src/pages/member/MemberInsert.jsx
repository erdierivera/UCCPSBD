import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'
import ModalPopup from '../modal_popup';  
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import Checkbox from './checkbox'

const Title = styled.h1.attrs({
    className: 'h4',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
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

class MembersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            birthday: '',
            occupation: '',
            baptismDate: '',
            baptizedBy: '',
            organizationId: '',
            memberTypeId: '',
            isActive: true,
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
        
        if(isRemoved)
        {
            document.getElementById("removalWrapper").style.display = 'block';
            this.setState({ isActive: false })
        }
        else        
        {
            document.getElementById("removalWrapper").style.display = 'none';
            this.setState({ removalDate: '' })
            this.setState({ reasonOfRemoval: '' })
            this.setState({ isActive: true })
        }
        this.setState({ isRemoved: isRemoved || false })
    }  

    handleChangeInputRemovalDate = async event => {
        const removalDate = event.target.value
        this.setState({ removalDate })
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

    handleChangeInputBaptizedBy = async event => {
        const baptizedBy = event.target.value
        this.setState({ baptizedBy })
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

    handleIsActiveCheckboxChange = event => {
        const isActive = event.target.checked
        
        if(isActive)
        {
            this.setState({ isRemoved: false })
        }
        
        this.setState({ isActive: isActive || false })

        if (isActive) {
            this.setState({ isRemoved : false })
        }
    }

    handleChangeInputCivilStatus = event => {
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
        this.setState({ civilStatus: civilStatus })
    }

    handleChangeInputweddingDate = event => {
        const weddingDate = event.target.value
        this.setState({ weddingDate: weddingDate })
    }

    handleChangeInputSpouse = event => {
        const spouse = event.target.value
        this.setState({ spouse: spouse })
    }

    // validateInput(payload) {
    //     var response = true;
    //     if (payload.firstName === '') {
    //         response = false
    //     }
    //     if (payload.lastName === '') {
    //         response = false
    //     }
    //     if (payload.middleName === '') {
    //         response = false
    //     }
    //     if (payload.birthday === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.baptismDate === '') {
    //         response = false
    //     }
    //     if (payload.baptizedBy === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    //     if (payload.occupation === '') {
    //         response = false
    //     }
    // }

    handleIncludeMember = async () => {
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval } = this.state
        const payload = { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval  }

        await api.insertMember(payload).then(res => {
            //window.alert(`Member inserted successfully`)
            this.state.showModalPopup = true
            this.setState({
                firstName: '',
                middleName: '',
                lastName: '',
                birthday: '',
                occupation: '',
                baptismDate: '',
                baptizedBy: '',
                memberTypeId: '',
                organizationId: '',
                isActive: true,
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
            })
        })
    }

    render() {
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive, civilStatus, weddingDate, spouse, age, weddedBy, nameOfFather, maidenNameOfMother, birthPlace, confirmationDate, confirmedBy, isRemoved, removalDate, reasonOfRemoval } = this.state
        return (
            <Wrapper>
                <Title>Add Member</Title>

                {/* <InputWrapper>
                    <Label>First Name: </Label>
                    <Textbox
                        attributesInput={{ // Optional.
                            id: 'Name',
                            name: 'Name',
                            type: 'text',
                            className: 'form-control',
                            placeholder: 'Enter First Name',
                          }}
                          value={firstName} // Optional.[String].Default: "".
                          onChange={(firstName, e) => {
                            this.setState({ firstName });
                            console.log(e);
                          }} // Required.[Func].Default: () => {}. Will return the value.
                          onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                          validationOption={{
                            name: 'First Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                            check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                            required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                            showMsg: true,
                            msgOnError: "First name is required, please enter."
                          }}
                          customStyleInput={{
                            borderRadius: '10px'
                          }}
                          customStyleWrapper={{
                            width: '600px',
                            display: 'inline-block',
                          }}
                    />
                </InputWrapper> */}
                {/* <InputWrapper>
                    <CheckBox class="js-form-call-check1" id="check1" name="check1" type="checkbox" /><Label>Is Active?</Label>
                </InputWrapper> */}
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

                {/* <Label>Birthday: </Label>
                <DatePicker 
                    placeholderText="Select Date"
                    selected={birthday}
                    onChange={birthday => setDate(birthday)}
                    showMonthDropdown
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={120}
                    maxDate={new Date()}
                    className="form-group"
                    width="500px"
                    margin="5px"
                /> */}

                <InputWrapper>
                <Label>Birthday: </Label>
                    <InputText
                        type="text"
                        value={birthday}
                        onChange={this.handleChangeInputBirthday}
                        onBlurCapture={this.handleChangeInputUpdateAge}
                        onLeave
                        placeholder="Enter Birthday (MM/dd/yyyy)"
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
                            Required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Spouse: </Label>
                        <InputText
                            type="text"
                            value={spouse}
                            onChange={this.handleChangeInputSpouse}
                            placeholder="Enter Spouse"
                            Required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Officiating Minister: </Label>
                        <InputText
                            type="text"
                            value={weddedBy}
                            onChange={this.handleChangeInputWeddedBy}
                            placeholder="Enter Officiating Minister"
                            Required
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
                    <Button onClick={this.handleIncludeMember}>Add Member</Button>
                    <CancelButton href={'/members/list'}>Cancel</CancelButton>
                </ButtonWrapper>

                <ModalPopup  
                    showModalPopup={this.state.showModalPopup}  
                    onPopupClose={this.isShowPopup}>
                </ModalPopup>
            </Wrapper>
        )
    }
}

export default MembersInsert