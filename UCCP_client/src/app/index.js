import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MembersList, MemberInsert, MemberUpdate, OrgMembersList, TypeMembersList, HomePage, MemberInfo } from '../pages/member'
import { OrganizationsList } from '../pages/organization'
import { MembershipTypeList } from '../pages/membershiptype'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <Router>
          <NavBar />
          <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/members/list" exact component={MembersList} />
                <Route path="/member/create" exact component={MemberInsert} />
                <Route path="/organizations/list" exact component={OrganizationsList} />
                <Route path="/member/orgmembers/:id" exact component={OrgMembersList} />
                <Route path="/member/typemembers/:id" exact component={TypeMembersList} />
                <Route path="/membership/list" exact component={MembershipTypeList} />
                <Route path="/member/memberinfo/:id" exact component={MemberInfo} />
                <Route path="/member/update/:id" exact component={MemberUpdate}
                />
            </Switch>
      </Router>
  )
}

export default App
