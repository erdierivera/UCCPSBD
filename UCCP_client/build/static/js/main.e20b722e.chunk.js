(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i,o,b,l,j,d=n(0),u=n.n(d),m=n(35),p=n.n(m),O=n(17),h=n(4),f=n(6),v=n(7),x=n(9),g=n(8),y=n(12),C=n(13),k=n(2),w=C.a.div.attrs({className:"collpase navbar-collapse"})(a||(a=Object(y.a)([""]))),M=C.a.div.attrs({className:"navbar-nav mr-auto"})(r||(r=Object(y.a)([""]))),N=C.a.div.attrs({className:"collpase navbar-collapse"})(c||(c=Object(y.a)([""]))),L=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(u.a.Fragment,{children:[Object(k.jsx)(O.b,{to:"/",className:"navbar-brand",children:"UCCP SBD Membership"}),Object(k.jsx)(w,{children:Object(k.jsxs)(M,{children:[Object(k.jsx)(N,{children:Object(k.jsx)(O.b,{to:"/members/list",className:"nav-link",children:"List of Members"})}),Object(k.jsx)(N,{children:Object(k.jsx)(O.b,{to:"/members/create",className:"nav-link",children:"Create Member"})})]})})]})}}]),n}(d.Component),D=n.p+"static/media/logo.6ce24c58.svg",U=C.a.a.attrs({className:"navbar-brand"})(s||(s=Object(y.a)([""]))),B=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)(U,{href:"",children:Object(k.jsx)("img",{src:D,width:"50",height:"50",alt:""})})}}]),n}(d.Component),H=C.a.div.attrs({className:"container"})(i||(i=Object(y.a)([""]))),I=C.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-dark"})(o||(o=Object(y.a)(["\n    margin-bottom: 20 px;\n"]))),F=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)(H,{children:Object(k.jsxs)(I,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(L,{})]})})}}]),n}(d.Component),P=n(24),S=n.n(P),A=n(40),T=n(42),_=n(41),z=n.n(_).a.create({baseURL:"http://localhost:3000/api"}),J={insertMember:function(e){return z.post("/member",e)},getAllMembers:function(){return z.get("/members")},updateMemberById:function(e,t){return z.put("/member/".concat(e),t)},deleteMemberById:function(e){return z.delete("/member/".concat(e))},getMemberById:function(e){return z.get("/member/".concat(e))}},R=(n(72),C.a.div(b||(b=Object(y.a)(["\n    padding: 40px 40px 40px 40px;\n"])))),E=C.a.div(l||(l=Object(y.a)(["\n    color: #ef9b0f;\n    cursor: pointer;\n"]))),q=C.a.div(j||(j=Object(y.a)(["\n    color: #ff0000;\n    cursor: pointer;\n"]))),G=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).updateUser=function(t){t.preventDefault(),window.location.href="/members/update/".concat(e.props.id)},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)(E,{onClick:this.updateUser,children:"Update"})}}]),n}(d.Component),K=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).deleteUser=function(t){t.preventDefault(),window.confirm("Do you want to delete the member ".concat(e.prop.id," permanently?"))&&(J.deleteMemberById(e.props.id),window.location.reload())},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)(q,{onclick:this.deleteUser,children:"Delete"})}}]),n}(d.Component),Q=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(A.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,J.getAllMembers().then((function(e){a.setState({members:e.data.data,isLoading:!1})}));case 3:case"end":return e.stop()}}),e)}))),a.state={members:[],columns:[],isLoading:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state,t=e.members,n=e.isLoading;console.log("TCL: MembersList -> render -> members",t);var a=[{Header:"ID",accessor:"_id",filterable:!0},{Header:"Firstname",accessor:"firstName",filterable:!0},{Header:"Middlename",accessor:"middleName",filterable:!0},{Header:"Lastname",accessor:"lastName",filterable:!0},{Header:"",accessor:"",Cell:function(e){return Object(k.jsx)("span",{children:Object(k.jsx)(K,{id:e.original._id})})}},{Header:"",accessor:"",Cell:function(e){return Object(k.jsx)("span",{children:Object(k.jsx)(G,{id:e.origina._id})})}}],r=!0;return t.length||(r=!1),Object(k.jsx)(R,{children:r&&Object(k.jsx)(T.a,{data:t,columns:a,loading:n,defaultPageSize:10,showPageSizeOptions:!0,minRows:0})})}}]),n}(d.Component),V=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"Add Member Here"})})}}]),n}(d.Component),W=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"Update Member Page"})})}}]),n}(d.Component);n(73);var X=function(){return Object(k.jsxs)(O.a,{children:[Object(k.jsx)(F,{}),Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/movies/list",exact:!0,component:Q}),Object(k.jsx)(h.a,{path:"/movies/create",exact:!0,component:V}),Object(k.jsx)(h.a,{path:"/movies/update/:id",exact:!0,component:W})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};p.a.render(Object(k.jsx)(X,{}),document.getElementById("root")),Y()}},[[74,1,2]]]);
//# sourceMappingURL=main.e20b722e.chunk.js.map