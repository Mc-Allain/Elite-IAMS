(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(23),r=n.n(c),l=(n(30),n(18)),o=n(6),d=(n(31),n(2)),m=n(3),u=n(5),j=n(4),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.getItemClasses=function(e){var t="nav-item ";return t+="Sign up"===e?"d-xl-none":e.startsWith("Profile")||"Sign out"===e||"Top"===e?"":"d-lg-none"},e.getLinkClasses=function(e){var t="nav-link ";return t+="Sign out"===e?"text-danger":e.startsWith("Profile")?"text-info":"Top"===e?"text-warning":"text-light"},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.navs;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-primary fixed-top",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#attendance",children:"Elite IAMS"}),Object(a.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#navbars","aria-controls":"navbars","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbars",children:Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:t.map((function(t){return Object(a.jsx)("li",{className:e.getItemClasses(t.text),children:Object(a.jsx)("a",{className:e.getLinkClasses(t.text),href:t.link,children:t.text})},t.id)}))})})]})})}}]),n}(s.Component),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={attendees:[{idNo:12345678,lName:"Casindad",fName:"Mc Allain",mName:"Sanchez"},{idNo:87654321,lName:"Casindad",fName:"Rhian Kisses",mName:"Sanchez"},{idNo:13572468,lName:"Casindad",fName:"Marilou",mName:"Sanchez"},{idNo:24681357,lName:"Casindad",fName:"Rio",mName:"Sanchez"},{idNo:13245768,lName:"Casindad",fName:"Remelinda",mName:"Sanchez"}]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("table",{className:"table table-bordered table-light max-w-95 mx-auto mt-5","data-toggle":"table","data-pagination":"true","data-search":"true",children:[Object(a.jsx)("thead",{className:"thead-dark",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID Number"}),Object(a.jsx)("th",{children:"Last Name"}),Object(a.jsx)("th",{children:"First Name"}),Object(a.jsx)("th",{children:"Middle Name"})]})}),Object(a.jsx)("tbody",{children:this.state.attendees.map((function(e){return Object(a.jsx)("tr",{children:Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("td",{children:e.idNo}),Object(a.jsx)("td",{children:e.lName}),Object(a.jsx)("td",{children:e.fName}),Object(a.jsx)("td",{children:e.mName})]})},e.idNo)}))})]})}}]),n}(s.Component),h=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"col-lg-6 min-height-90 mt-5",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"display-4",children:"Attendance"}),Object(a.jsx)("div",{className:"title-underline bg-primary"})]}),Object(a.jsx)(p,{})]})}}]),n}(s.Component),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"col-xl-6 col-lg-9 col-md-6 col-sm-6",children:Object(a.jsxs)("div",{className:"card card-body bg-transparent border-0",children:[Object(a.jsxs)("div",{className:"card-title text-center",children:[Object(a.jsx)("h2",{children:"Member Sign in"}),Object(a.jsx)("p",{children:"Please input your credentials."})]}),Object(a.jsxs)("form",{action:"Elite-IAMS-Member",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"ID Number"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"8"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",maxLength:"16"})]}),Object(a.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-dark font-weight-bold w-90 mx-auto",children:"Sign in"})})]})]})})}}]),n}(s.Component),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"col-xl-6 col-lg-9 col-md-6 col-sm-6",children:Object(a.jsxs)("div",{className:"card card-body bg-transparent border-0",children:[Object(a.jsxs)("div",{className:"card-title text-center",children:[Object(a.jsx)("h2",{children:"Admin Sign in"}),Object(a.jsx)("p",{children:"Please input your credentials."})]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"ID Number"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"8"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",maxLength:"16"})]}),Object(a.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-dark font-weight-bold w-90 mx-auto",children:"Sign in"})})]})]})})}}]),n}(s.Component),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"col-xl-6 col-lg-9 col-sm-6",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"ID Number"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"8"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Last Name"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"30"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"First Name"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"30"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Middle Name"})}),Object(a.jsx)("input",{type:"text",className:"form-control",maxLength:"30"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Civil Status"})}),Object(a.jsxs)("select",{className:"form-control",children:[Object(a.jsx)("option",{value:"M",children:"Male"}),Object(a.jsx)("option",{value:"F",children:"Female"})]})]})]})}}]),n}(s.Component),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"col-xl-6 col-lg-9 col-sm-6",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Date of Birth"})}),Object(a.jsx)("input",{type:"date",className:"form-control",maxLength:"10"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Civil Status"})}),Object(a.jsxs)("select",{className:"form-control",children:[Object(a.jsx)("option",{value:"S",children:"Single"}),Object(a.jsx)("option",{value:"M",children:"Married"}),Object(a.jsx)("option",{value:"W",children:"Widower/Widowed"})]})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",maxLength:"16"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Confirm Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",maxLength:"16"})]}),Object(a.jsxs)("div",{className:"input-group my-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text bg-primary text-light",children:"Mobile Number"})}),Object(a.jsx)("input",{type:"tel",className:"form-control",maxLength:"11"})]})]})}}]),n}(s.Component),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"sign-up",className:"col pt-5",children:Object(a.jsxs)("div",{className:"card card-body bg-transparent border-0",children:[Object(a.jsxs)("div",{className:"card-title text-center",children:[Object(a.jsx)("h2",{children:"Sign up"}),Object(a.jsx)("p",{children:"Please input your credentials."})]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"row justify-content-center",children:[Object(a.jsx)(g,{}),Object(a.jsx)(v,{})]}),Object(a.jsxs)("div",{className:"w-100 d-flex justify-content-between",children:[Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-dark font-weight-bold w-45 mx-auto",children:"Submit"}),Object(a.jsx)("button",{type:"reset",className:"btn btn-outline-dark font-weight-bold w-45 mx-auto",children:"Reset"})]})]})]})})}}]),n}(s.Component),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{id:"attendance",className:"row full-min-height bg-warning pt-4",children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{id:"sign-in",className:"col-lg-6 min-height-45 pt-5",children:Object(a.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(a.jsx)(x,{}),Object(a.jsx)(O,{}),Object(a.jsx)(N,{})]})})]})})}}]),n}(s.Component),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row bg-dark text-light min-height-30px fixed-bottom justify-content-end align-items-center",children:Object(a.jsx)("div",{className:"col text-right pt-2 px-5",children:Object(a.jsx)("small",{children:"Copyright 2020 | Casindad"})})})}}]),n}(s.Component),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={navs:[{id:1,text:"Attendance",link:"#attendance"},{id:2,text:"Sign in",link:"#sign-in"},{id:3,text:"Sign up",link:"#sign-up"}]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(b,{navs:this.state.navs}),Object(a.jsx)(f,{}),Object(a.jsx)(y,{})]})}}]),n}(s.Component),w=n(12),C=n(15),L=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.source;return Object(a.jsxs)("div",{className:"d-flex align-items-center border-lightgray rounded-pill py-2",children:[Object(a.jsx)("i",{className:"fas fa-user text-primary ml-4"}),Object(a.jsx)("h6",{className:"my-auto ml-4",children:"From: "+e.userId+" | "+e.userName})]})}}]),n}(s.Component),I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.getLikesCountClasses=function(e){var t=" ml-5 mr-1 ";return t+=e>0?"text-primary":"text-black-50"},e.getCommentsCountClasses=function(e){var t="ml-4 mr-1 ";return t+=e>0?"text-info":"text-black-50"},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.newsItem;return Object(a.jsxs)("div",{className:"row border-top-lightgray min-height-30px align-items-center",children:[Object(a.jsx)("span",{className:this.getLikesCountClasses(e.likes),children:Object(a.jsx)("i",{className:"fas fa-thumbs-up fa-sm"})}),Object(a.jsx)("small",{children:e.likes}),Object(a.jsx)("span",{className:this.getCommentsCountClasses(e.comments.length),children:Object(a.jsx)("i",{className:"fas fa-comment fa-sm"})}),Object(a.jsx)("small",{children:e.comments.length}),Object(a.jsx)("i",{className:"fas fa-clock fa-sm text-black-50 ml-auto mr-1"}),Object(a.jsx)("small",{className:"mr-4",children:e.dateTimePosted})]})}}]),n}(s.Component),S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.getLikeButtonClasses=function(e){var t="btn btn-block btn-light ";return t+=!0===e?"text-primary":"text-black-50"},e.getLikeTextClasses=function(e){var t="ml-3 ";return t+=!0===e?"text-primary":"text-dark"},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.source,n=e.handleLike;return Object(a.jsx)("div",{className:"col-6 px-0 border-right-lightgray",children:Object(a.jsxs)("button",{className:this.getLikeButtonClasses(t.liked),onClick:n.bind(this,t),children:[Object(a.jsx)("i",{className:"fas fa-thumbs-up"}),Object(a.jsx)("span",{className:this.getLikeTextClasses(t.liked),children:"Like"})]})})}}]),n}(s.Component),A=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.getLikesCountClasses=function(e){var t=" ml-2 mr-1 ";return t+=e>0?"text-primary":"text-black-50"},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comment,n=e.handleCommentLike;return Object(a.jsxs)("div",{className:"mb-3 border-lightgray",children:[Object(a.jsxs)("div",{className:"px-2 pt-2",children:[Object(a.jsx)(L,{source:t}),Object(a.jsx)("div",{className:"mt-2 mx-auto w-90",children:Object(a.jsx)("p",{children:t.content})})]}),Object(a.jsxs)("div",{className:"row border-top-lightgray min-height-30px align-items-center mx-auto",children:[Object(a.jsx)(S,{source:t,handleLike:n}),Object(a.jsx)("span",{className:this.getLikesCountClasses(t.likes),children:Object(a.jsx)("i",{className:"fas fa-thumbs-up fa-sm"})}),Object(a.jsx)("small",{children:t.likes}),Object(a.jsx)("i",{className:"fas fa-clock fa-sm text-black-50 ml-auto mr-1"}),Object(a.jsx)("small",{className:"mr-4",children:t.dateTimePosted})]})]})}}]),n}(s.Component),M=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comment,n=e.onSubmit,s=e.onChange;return Object(a.jsx)("form",{onSubmit:n,children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"pl-3 w-75 border-lightgray",placeholder:"Please input your comment here...",value:t.content,onChange:s}),Object(a.jsx)("div",{className:"input-group-append w-25",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-dark btn-block",children:"Submit"})})]})})}}]),n}(s.Component),D=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).state={comment:{id:0,newsId:0,userId:12345678,userName:"Casindad, Mc Allain",content:"",likes:0,dateTimePosted:"",liked:!1}},a.onSubmit=function(e){var t=a.props.addComment,n=a.props.newsItem,s=Object(w.a)({},a.state.comment);s.dateTimePosted=a.getDateTime(),n.comments.push(s),t(n),(s=a.state.comment).id++,s.content="",e.preventDefault()},a.onChange=function(e){var t=Object(w.a)({},a.state.comment);t.content=e.target.value,a.setState({comment:t})},a.getDateTime=function(){var e=(new Date).getFullYear(),t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][(new Date).getMonth()],n=(new Date).getDate(),a=(new Date).getHours(),s=e+"-"+t+"-"+n+" ";return s+=a+":"+(new Date).getMinutes(),s+=a<12?"am":"pm"};var s=a.props.newsItem,i=a.state.comment;return i.id=s.comments.length,i.newsId=s.id,a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.newsItem,n=e.handleCommentLike;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{className:"col-6 px-0",children:Object(a.jsxs)("button",{className:"btn btn-block btn-light","data-toggle":"collapse","data-target":"#comments"+t.id,"aria-controls":"comments"+t.id,"aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(a.jsx)("i",{className:"fas fa-comment text-black-50"}),Object(a.jsx)("span",{className:"ml-3 text-dark",children:"Comments"})]})}),Object(a.jsxs)("div",{className:"col collapse border-top-lightgray p-3",id:"comments"+t.id,children:[t.comments.map((function(e){return Object(a.jsx)(A,{comment:e,handleCommentLike:n},e.id)})),Object(a.jsx)(M,{comment:this.state.comment,onSubmit:this.onSubmit,onChange:this.onChange})]})]})}}]),n}(s.Component),P=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.newsItem,n=e.handleNewsLike,s=e.addComment,i=e.handleCommentLike;return Object(a.jsxs)("div",{className:"col bg-light min-height-10 my-2 pt-2",children:[Object(a.jsx)(L,{source:t}),Object(a.jsx)("div",{className:"my-3 mx-auto w-90",children:Object(a.jsx)("p",{children:t.content})}),Object(a.jsx)(I,{newsItem:t}),Object(a.jsxs)("div",{className:"row border-top-lightgray min-height-30px",children:[Object(a.jsx)(S,{source:t,handleLike:n}),Object(a.jsx)(D,{newsItem:t,addComment:s,handleCommentLike:i})]})]})}}]),n}(s.Component),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={news:[{id:0,userId:12345678,userName:"Casindad, Mc Allain",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                        Reiciendis eum repellendus dolores quasi error?\n                        Magnam in aspernatur sapiente accusantium minima obcaecati\n                        incidunt deleniti atque nemo laudantium velit,\n                        iure delectus libero!",likes:5e3,comments:[{id:0,newsId:0,userId:12345678,userName:"Casindad, Mc Allain",content:"Reiciendis eum repellendus dolores quasi error?",likes:2e3,dateTimePosted:"2020-Dec-6 8:00am",liked:!1},{id:1,newsId:0,userId:13572468,userName:"Casindad, Marilou",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",likes:1e3,dateTimePosted:"2020-Dec-6 9:45am",liked:!1},{id:2,newsId:0,userId:24681357,userName:"Casindad, Rio",content:"Magnam in aspernatur sapiente accusantium minima obcaecati\n                        incidunt deleniti atque nemo laudantium velit,\n                        iure delectus libero!",likes:1e3,dateTimePosted:"2020-Dec-6 12:00pm",liked:!1}],dateTimePosted:"2020-Dec-6 7:30am",liked:!1},{id:1,userId:13572468,userName:"Casindad, Marilou",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Reiciendis eum repellendus dolores quasi error?\n                Magnam in aspernatur sapiente accusantium minima obcaecati\n                incidunt deleniti atque nemo laudantium velit,\n                iure delectus libero!",likes:1e3,comments:[{id:0,newsId:1,userId:13572468,userName:"Casindad, Marilou",content:"Reiciendis eum repellendus dolores quasi error?",likes:2e3,dateTimePosted:"2020-Dec-6 11:57am",liked:!1},{id:1,newsId:1,userId:87654321,userName:"Casindad, Rhian Kisses",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",likes:1e3,dateTimePosted:"2020-Dec-6 12:00pm",liked:!1}],dateTimePosted:"2020-Dec-6 11:56am",liked:!1},{id:2,userId:87654321,userName:"Casindad, Rhian Kisses",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Reiciendis eum repellendus dolores quasi error?\n                Magnam in aspernatur sapiente accusantium minima obcaecati\n                incidunt deleniti atque nemo laudantium velit,\n                iure delectus libero!",likes:2e3,comments:[],dateTimePosted:"2020-Dec-6 4:01pm",liked:!1},{id:3,userId:24681357,userName:"Casindad, Rio",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Reiciendis eum repellendus dolores quasi error?\n                Magnam in aspernatur sapiente accusantium minima obcaecati\n                incidunt deleniti atque nemo laudantium velit,\n                iure delectus libero!",likes:1e3,comments:[],dateTimePosted:"2020-Dec-6 8:37pm",liked:!1},{id:4,userId:13245768,userName:"Casindad, Remelinda",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Reiciendis eum repellendus dolores quasi error?\n                Magnam in aspernatur sapiente accusantium minima obcaecati\n                incidunt deleniti atque nemo laudantium velit,\n                iure delectus libero!",likes:100,comments:[{id:0,newsId:4,userId:24681357,userName:"Casindad, Rio",content:"Reiciendis eum repellendus dolores quasi error?",likes:2e3,dateTimePosted:"2020-Dec-6 10:47pm",liked:!1},{id:1,newsId:4,userId:87654321,userName:"Casindad, Rhian Kisses",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",likes:1e3,dateTimePosted:"2020-Dec-6 10:51pm",liked:!1}],dateTimePosted:"2020-Dec-6 10:45pm",liked:!1}]},e.handleNewsLike=function(t){var n=Object(C.a)(e.state.news),a=n.indexOf(t);n[a]=Object(w.a)({},t),n[a].liked=!n[a].liked,!0===n[a].liked?n[a].likes++:n[a].likes--,e.setState({news:n})},e.addComment=function(t){var n=Object(C.a)(e.state.news),a=n.indexOf(t);n[a]=Object(w.a)({},t),e.setState({news:n})},e.handleCommentLike=function(t){var n=Object(C.a)(e.state.news),a=n.filter((function(e){return e.id===t.newsId})),s=n.indexOf(a[0]),i=n[s].comments.indexOf(t);n[s].comments[i].liked=!n[s].comments[i].liked,!0===n[s].comments[i].liked?n[s].comments[i].likes++:n[s].comments[i].likes--,e.setState({news:n})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"mt-5 px-3 pb-5",children:this.state.news.map((function(t){return Object(a.jsx)(P,{newsItem:t,handleNewsLike:e.handleNewsLike,addComment:e.addComment,handleCommentLike:e.handleCommentLike},t.id)}))})}}]),n}(s.Component),R=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"top",className:"container-fluid",children:Object(a.jsxs)("div",{id:"attendance",className:"row full-min-height bg-warning pt-4",children:[Object(a.jsx)(h,{}),Object(a.jsxs)("div",{id:"news",className:"col-lg-6 min-height-90 mt-5",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"display-4",children:"News"}),Object(a.jsx)("div",{className:"title-underline bg-primary"})]}),Object(a.jsx)(T,{})]})]})})}}]),n}(s.Component),q=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={navs:[{id:1,text:"Top",link:"#top"},{id:2,text:"Attendance",link:"#attendance"},{id:3,text:"News",link:"#news"},{id:4,text:"Profile: Casindad, Mc Allain",link:""},{id:5,text:"Sign out",link:"Elite-IAMS"}]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(b,{navs:this.state.navs}),Object(a.jsx)(R,{}),Object(a.jsx)(y,{})]})}}]),n}(s.Component);var F=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(o.a,{path:"/Elite-IAMS",render:function(e){return Object(a.jsx)(k,{})}}),Object(a.jsx)(o.a,{path:"/Elite-IAMS-Member",render:function(e){return Object(a.jsx)(q,{})}})]})};n(36),n(37),n(22),n(38),n(39);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.bfd310f4.chunk.js.map