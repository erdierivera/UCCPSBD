import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'
import ModalPopup from '../modal_popup';  
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import Checkbox from './checkbox'

const Title = styled.h1.attrs({
    className: 'h1',
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
    margin: 15px 30px;
`

const Label = styled.label`
    margin: 5px;
    width: 200px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin-right: 5px;
    width: 600px;
    display: inline-block;
    border-radius: 10px!important;
    ::placeholder {
        color: grey;
        font-style:italic;
        font-size: small;
      };
`

const ButtonWrapper = styled.div.attrs({
    className: ``,
})`
    float: right;
`

const Button = styled.button.attrs({
    className: `btn btn-success`,
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
            isActive: false,
            showModalPopup: false
        }
    }

    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
      };  

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

    handleIsActiveCheckboxChange = event => {
        const isActive = event.target.checked
        this.setState({ isActive: isActive | false })
    }

    handleIncludeMember = async () => {
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive } = this.state
        const payload = { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive  }

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
                isActive: false
            })
        })
    }

    render() {
        const { firstName, middleName, lastName, birthday, occupation, baptismDate, baptizedBy, organizationId, memberTypeId, isActive } = this.state
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
                        placeholder="Enter Birthday"
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