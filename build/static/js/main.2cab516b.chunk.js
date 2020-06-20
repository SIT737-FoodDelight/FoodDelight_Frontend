(this.webpackJsonpFoodDelight_Frontend=this.webpackJsonpFoodDelight_Frontend||[]).push([[0],{117:function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(9),o=_.n(r),l=(_(92),_(6)),s=(_(93),_(42)),c=_.n(s),i=_(43),u=_.n(i),E=_(44),m=_.n(E),d=(_(32),_(12)),p=_.n(d),O=_(13),D=function(e){var t=Object(a.useState)(""),_=Object(l.a)(t,2),r=_[0],o=_[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),E=i[0],d=i[1],D=Object(a.useState)(""),P=Object(l.a)(D,2),b=P[0],M=P[1];return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"head-container"},n.a.createElement("h1",{className:"title-container"},"Food Delight"))),n.a.createElement("main",null,n.a.createElement("div",{className:"main-container"},n.a.createElement("div",{className:"social-btn"},n.a.createElement("form",{action:"/auth/google",method:"GET"},n.a.createElement("button",{type:"submit",className:"google-btn"},n.a.createElement("div",{className:"btn-container"},n.a.createElement("img",{src:u.a,alt:"google icon",width:"30",height:"30"})),n.a.createElement("span",{className:"google-btn-text"},"Sign up via Google"))),n.a.createElement("form",{action:"/auth/facebook",method:"GET"},n.a.createElement("button",{type:"submit",className:"facebook-btn"},n.a.createElement("div",{className:"btn-container"},n.a.createElement("img",{src:c.a,alt:"facebookicon",width:"30",height:"30"})),n.a.createElement("span",{className:"facebook-btn-text"},"Sign up via Facebook")))),n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",{className:"form-title"},"Sign up via Email"),n.a.createElement("input",{type:"text",className:"form-input user-input",name:"username",placeholder:"Username",onChange:function(e){return o(e.target.value)},required:!0}),n.a.createElement("input",{type:"password",className:"form-input pass-input",id:"password",name:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)},required:!0}),n.a.createElement("input",{type:"password",className:"form-input conf-input",id:"confirm_password",placeholder:"Confirm Password",required:!0}),n.a.createElement("input",{type:"text",className:"form-input mob-input",placeholder:"Mobile Number",onChange:function(e){return M(e.target.value)},required:!0}),n.a.createElement("button",{className:"signup-btn",onClick:function(){p()({method:"POST",url:O.a+"register/",headers:{"Content-Type":"application/json"},data:{username:r,password:E,mobileNumber:b}}).then((function(t){"registered"==t.data?(alert("Registration Successful"),e.setIsRegister(!1)):alert("login failed")})).catch((function(e){return alert("login failed"+e)}))}},"Register"),n.a.createElement("button",{className:"signin-btn",onClick:function(){return e.setIsRegister(!1)}},"Sign in")))),n.a.createElement("img",{className:"food-image",src:m.a,alt:"signup-image"}))},P=_(45),b=function(e){console.log(e);var t=function(t){console.log(t);var _=t.profileObj.email;p()({method:"POST",url:O.a+"google",headers:{"Content-Type":"application/json",tokenId:t.tokenId}}).then((function(t){console.warn(t.data),"login_Success"==t.data.message?(e.setIsUserLoggedIn(!0),e.setUsername(_),e.setUserType("google"),e.setAuthToken(t.data.authToken)):alert("login failed")})).catch((function(e){return alert("login failed"+e)}))};return n.a.createElement("div",null,n.a.createElement(P.GoogleLogin,{clientId:"165578072854-9fm3ip67busp7im0c2chqefn8vg69ls1.apps.googleusercontent.com",isSignedIn:!1,buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin",render:function(e){return n.a.createElement("button",{className:"google-btn",onClick:e.onClick,disabled:e.disabled},n.a.createElement("div",{className:"btn-container"},n.a.createElement("img",{src:u.a,alt:"google icon",width:"30",height:"30"})),n.a.createElement("span",{className:"google-btn-text"},"Sign in via Google"))}}))},M=function(e){console.log(e);var t=function(t){console.log(t),p()({method:"POST",url:O.a+"facebook",headers:{"Content-Type":"application/json",accessToken:t.authResponse.accessToken}}).then((function(t){console.warn(t.data),"login_Success"==t.data.message?(e.setIsUserLoggedIn(!0),e.setUsername(t.data.username),e.setUserType("facebook"),e.setAuthToken(t.data.authToken)):alert("login failed")})).catch((function(e){return alert("login failed"+e)}))};return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return window.FB.login((function(e){console.log(e),e.authResponse?t(e):alert("You have cancelled login or fully authorize.")}),{scope:"public_profile,email"})},className:"facebook-btn"},n.a.createElement("div",{className:"btn-container"},n.a.createElement("img",{src:c.a,alt:"facebookicon",width:"30",height:"30"})),n.a.createElement("span",{className:"facebook-btn-text"},"Sign in via Facebook")))},f=function(e){var t=Object(a.useState)(""),_=Object(l.a)(t,2),r=_[0],o=_[1],s=Object(a.useState)(""),c=Object(l.a)(s,2),i=c[0],u=c[1];return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"head-container"},n.a.createElement("h1",{className:"title-container"},"Food Delight"))),n.a.createElement("main",null,n.a.createElement("div",{className:"main-container"},n.a.createElement("div",{className:"social-btn"},n.a.createElement(b,e),n.a.createElement(M,e)),n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",{className:"form-title"},"Sign in with Email"),n.a.createElement("input",{type:"text",className:"form-input user-input",name:"username",placeholder:"Username",onChange:function(e){return o(e.target.value)},required:!0}),n.a.createElement("input",{type:"password",className:"form-input pass-input",id:"password",name:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)},required:!0}),n.a.createElement("button",{className:"signup-btn",onClick:function(){p()({method:"POST",url:O.a+"login/",headers:{"Content-Type":"application/json"},data:{username:r,password:i}}).then((function(t){console.warn(t.data),"login_Success"==t.data.message?(e.setIsUserLoggedIn(!0),e.setUsername(r),e.setAuthToken(t.data.authToken)):alert("login failed")})).catch((function(e){return alert("login failed"+e)}))}},"Login"),n.a.createElement("button",{className:"signup-btn",type:"button",onClick:function(){return e.setIsRegister(!0)}},"Register")))),n.a.createElement("img",{className:"food-image",src:m.a,alt:"signup-image"}))},g=_(31),T=_(11),h=(_(53),_(46)),C=function(e){var t=Object(a.useState)(""),_=Object(l.a)(t,2),r=_[0],o=_[1],s=Object(a.useState)(""),c=Object(l.a)(s,2),i=c[0],u=c[1],E=Object(a.useState)("hideOrders"),m=Object(l.a)(E,2),d=m[0],D=m[1],P=Object(a.useState)(""),b=Object(l.a)(P,2),M=b[0],f=b[1],g=Object(a.useState)(!1),T=Object(l.a)(g,2),C=T[0],A=T[1];Object(a.useEffect)((function(){p()({method:"POST",url:O.a+"checklicense/",headers:{"Content-Type":"application/json",authToken:e.authToken}}).then((function(e){console.log(e.data),"cook profile exists"==e.data?D("showOrders"):D("hideOrders")})).catch((function(e){return alert("Error displaying screen"+e)}))}),[C]);return n.a.createElement("div",{className:"main-container-cookfood"},"showOrders"==d&&n.a.createElement(h.a,{authToken:e.authToken,route:"orders/"}),"hideOrders"==d&&n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",{className:"form-title"},"Wanna Start Cooking?"),n.a.createElement("input",{type:"text",className:"form-input-text-input",name:"tfn",placeholder:"Enter Tax File Number(TFN)",onChange:function(e){return o(e.target.value)},required:!0}),n.a.createElement("input",{type:"text",className:"form-input-text-input",name:"abn",placeholder:"Enter ABN",onChange:function(e){return u(e.target.value)},required:!0}),n.a.createElement("input",{type:"text",className:"form-input-text-input",name:"licenseNum",placeholder:"Cooking License Number",onChange:function(e){return f(e.target.value)},required:!0}),n.a.createElement("button",{className:"signup-btn",type:"button",onClick:function(){p()({method:"POST",url:O.a+"cookfood/",headers:{"Content-Type":"application/json",authToken:e.authToken},data:{tfn:r,abn:i,licenseNum:M}}).then((function(e){"cook profile saved"==e.data?(alert("Your details saved successfully"),A(!C)):alert("Details not saved. Please enter again")}))}},"Save")),n.a.createElement("label",{hidden:!0},d))},A=_(70),I=_.n(A),R=function(){return n.a.createElement("div",{className:"main-container"},n.a.createElement("img",{className:"orderfood-image",src:I.a,alt:"aboutus-image"}),n.a.createElement("div",{className:"form-contain"},"We provide a service to customers where they",n.a.createElement("br",null),"can order recipe of their choice instead ",n.a.createElement("br",null),"of picking from restaurant menu and chefs/home ",n.a.createElement("br",null),"makers who are willing to cook that recipe ",n.a.createElement("br",null),"can take the order. Initially, after successful",n.a.createElement("br",null),"login the application customers can add item",n.a.createElement("br",null),"of their wish to their order and describe how",n.a.createElement("br",null),"they want it to be cooked. Chefs and home makers",n.a.createElement("br",null),"with cooking licence who want to make some extra",n.a.createElement("br",null),"income can signup as a chef. For the users who",n.a.createElement("br",null),"are also the chefs, there will be two views:",n.a.createElement("br",null),"as a customer or as a chef. Upon selecting,",n.a.createElement("br",null),"the respective rendering is done."))},U=_(71),B=_(75),L=_.n(B),W=function(e){var t=Object(a.useState)(""),_=Object(l.a)(t,2),r=_[0],o=_[1],s=Object(a.useState)(""),c=Object(l.a)(s,2),i=c[0],u=c[1],E=Object(a.useState)(""),m=Object(l.a)(E,2),d=m[0],D=m[1],P=Object(a.useState)(""),b=Object(l.a)(P,2),M=b[0],f=b[1];return n.a.createElement("div",{className:"main-container"},n.a.createElement("img",{className:"orderfood-image",src:L.a,alt:"orderFood-image"}),n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",{className:"form-title"},"Enter order details"),n.a.createElement("input",{type:"text",className:"form-input-text-input",name:"item",placeholder:"Item name",onChange:function(e){return o(e.target.value)},required:!0}),n.a.createElement("input",{type:"datetime-local",className:"form-input-text-input",name:"dueDate",placeholder:"Due Date",onChange:function(e){return u(e.target.value)},required:!0}),n.a.createElement("input",{type:"text",className:"form-input-text-input",name:"price",placeholder:"Price",onChange:function(e){return D(e.target.value)},required:!0}),n.a.createElement("textarea",{id:"description",name:"description",className:"form-input-text-area",rows:"4",cols:"50",placeholder:"Item Description",onChange:function(e){return f(e.target.value)},required:!0}),n.a.createElement("button",{className:"signup-btn",type:"submit",onClick:function(){p()({method:"POST",url:O.a+"dashboard/",headers:{"Content-Type":"application/json",authToken:e.authToken},data:{username:e.username,itemName:r,dueDate:i,itemPrice:d,itemDescription:M}}).then((function(e){"Please add address in manage account before placing order"==e.data?alert(e.data):alert("Order details saved successfully")}))}},"Save")))},K=function(e){if("google"===e.userType)return n.a.createElement(P.GoogleLogout,{clientId:"165578072854-9fm3ip67busp7im0c2chqefn8vg69ls1.apps.googleusercontent.com",buttonText:"Logout",render:function(e){return n.a.createElement("button",{onClick:e.onClick,disabled:e.disabled},"Logout")},onLogoutSuccess:function(){return window.location.replace("/")}});if("facebook"===e.userType){return n.a.createElement("button",{onClick:function(){window.FB.logout(),window.location.replace("/")}},"Logout")}return n.a.createElement("button",{onClick:function(){return window.location.replace("/")}},"Logout")},k=function(e){return n.a.createElement("div",{className:"main-container-cookfood"},n.a.createElement(h.a,{authToken:e.authToken,route:"myorders/"}))},w=function(e){return n.a.createElement("div",null,n.a.createElement(g.a,null,n.a.createElement("div",{className:"fixed-header"},n.a.createElement("nav",null,n.a.createElement(g.b,{to:"/OrderFood"},n.a.createElement("button",null,"Order Food")),n.a.createElement(g.b,{to:"/CookFood"},n.a.createElement("button",null,"Cook Food")),n.a.createElement(g.b,{to:"/MyOrders"},n.a.createElement("button",null,"MyOrders")),n.a.createElement(g.b,{to:"/ManageAccount"},n.a.createElement("button",null,"Manage Account")),n.a.createElement(g.b,{to:"/AboutUs"},n.a.createElement("button",null,"About us")),n.a.createElement(g.b,{to:"/logout"},n.a.createElement(K,e)))),n.a.createElement("div",null,n.a.createElement(T.d,null,n.a.createElement(T.b,{exact:!0,path:"/"},n.a.createElement(T.a,{to:"/OrderFood"})),n.a.createElement(T.b,{exact:!0,path:"/OrderFood"},n.a.createElement(W,{username:e.username,authToken:e.authToken})),n.a.createElement(T.b,{path:"/CookFood"},n.a.createElement(C,{username:e.username,authToken:e.authToken})),n.a.createElement(T.b,{path:"/ManageAccount"},n.a.createElement(U.a,{username:e.username,authToken:e.authToken})),n.a.createElement(T.b,{path:"/AboutUs"},n.a.createElement(R,null)),n.a.createElement(T.b,{path:"/MyOrders"},n.a.createElement(k,{username:e.username,authToken:e.authToken}))))))},v=function(e){return n.a.createElement("div",null,n.a.createElement(w,{username:e.username,authToken:e.authToken,userType:e.userType}))},S=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),_=t[0],r=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),c=s[0],i=s[1],u=Object(a.useState)(!1),E=Object(l.a)(u,2),m=E[0],d=E[1],p=Object(a.useState)(!1),O=Object(l.a)(p,2),P=O[0],b=O[1],M=Object(a.useState)(""),g=Object(l.a)(M,2),T=g[0],h=g[1];return n.a.createElement("div",{className:"App"},!_&&!m&&n.a.createElement(f,{setIsUserLoggedIn:r,setIsRegister:d,setUsername:b,setAuthToken:h,setUserType:i}),!_&&m&&n.a.createElement(D,{setIsRegister:d}),_&&n.a.createElement(v,{authToken:T,username:P,userType:c}))};o.a.render(n.a.createElement(S,null),document.getElementById("root"))},13:function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));var a="https://project-backend-app-friendly-squirrel-qb.mybluemix.net/"},32:function(e,t,_){},42:function(e,t,_){e.exports=_.p+"static/media/facebook.f61c4b86.svg"},43:function(e,t,_){e.exports=_.p+"static/media/google-icon.bbd72a78.svg"},44:function(e,t,_){e.exports=_.p+"static/media/signup.57730fb3.jpg"},46:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),_Constants_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_assets_images_cookfood_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(53),_assets_images_cookfood_jpg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_images_cookfood_jpg__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(118),_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(126),_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(120),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(57),_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(77),_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(78),_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(16),_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(122),_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(123),_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(52),_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(124),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(121),useRowStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a)({root:{"& > *":{borderBottom:"unset"}}});function createData(e,t,_,a,n,r){return{name:e,orderId:t,dueDate:_,price:a,itemDesc:n,isAccepted:r}}function Row(e){var t=e.row,_=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),a=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_,2),n=a[0],r=a[1],o=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),l=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(o,2),s=l[0],c=l[1],i=useRowStyles();return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__.a,{className:i.root},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{component:"th",scope:"row"},t.name),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},t.price),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},t.dueDate),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},t.isAccepted),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.a,{variant:"outlined",size:"small",onClick:function(){return r(!n)}},n?"Read Less":"Read More"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__.a,{in:n,timeout:"auto",unmountOnExit:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.a,{margin:0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__.a,{size:"small","aria-label":"purchases"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__.a,{key:t.orderId},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right",component:"th",scope:"row"},t.itemDesc),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right",component:"th",scope:"row"},"myorders/"==e.route?"":react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.a,{color:"primary",variant:"outlined",onClick:function(t){return e.handleAcceptOrder(t)}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{id:t.orderId},"Accept"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.a,{id:"outlined-multiline-static",label:"Message",multiline:!0,rows:4,placeholder:"What's my order status?",onChange:function(e){return c(e.target.value)},variant:"outlined"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.a,{color:"primary",variant:"outlined",id:t.orderId,onClick:function(){console.warn(e.authToken),axios__WEBPACK_IMPORTED_MODULE_3___default()({method:"POST",url:_Constants_constants__WEBPACK_IMPORTED_MODULE_4__.a+"sms/",headers:{"Content-Type":"application/json",authToken:e.authToken},data:{message:s}}).then((function(e){console.log(e),"Message Sent"==e.data?alert("Message sent to user/cook."):alert("Message sending failed. Please try again")})).catch((function(e){return alert("Message sent failed "+e)}))}},"Send SMS"))))))))))}__webpack_exports__.a=function(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState2=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),reloadData=_useState2[0],setReloadData=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState4=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),rows=_useState4[0],setRows=_useState4[1],handleAcceptOrder=function(e){axios__WEBPACK_IMPORTED_MODULE_3___default()({method:"POST",url:_Constants_constants__WEBPACK_IMPORTED_MODULE_4__.a+"accept/",headers:{"Content-Type":"application/json",authToken:props.authToken},data:{order_id:e.target.id}}).then((function(e){console.log(e),"order accepted"==e.data?(alert("Order accepted. You can check it in my orders"),setReloadData(!reloadData)):alert("order not accepted. Please try again")})).catch((function(e){return alert("accept failed "+e)}))};return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_3___default()({method:"POST",url:_Constants_constants__WEBPACK_IMPORTED_MODULE_4__.a+props.route,headers:{"Content-Type":"application/json",authToken:props.authToken},data:{username:props.username}}).then((function(response){if(console.log(response),"your orders are not accepted"===response.data)setRows([{name:"No orders are present currently.",id:""}]);else{var res=eval(response.data);setRows(res.map((function(e){return createData(e.item_name,e._id,e.due_date,e.item_price,e.item_description,e.order_status?"Yes":"No")})))}})).catch((function(e){return alert("Failed to receive content"+e)}))}),[reloadData]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__.a,{component:_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__.a},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__.a,{"aria-label":"collapsible table"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,null,"Food item"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},"Price"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},"Due Date"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},"IsAccepted"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,{align:"right"},"More Details"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__.a,null))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__.a,null,rows.map((function(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row,{key:e.orderId,row:e,handleAcceptOrder:handleAcceptOrder,route:props.route,authToken:props.authToken})})))))}},53:function(e,t,_){e.exports=_.p+"static/media/cookfood.2f667694.jpg"},70:function(e,t,_){e.exports=_.p+"static/media/aboutus.db0c2b6c.jpg"},71:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),_Constants_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_assets_images_manageAccount_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(72),_assets_images_manageAccount_jpg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_images_manageAccount_jpg__WEBPACK_IMPORTED_MODULE_5__),_autoFillAddress__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(73);__webpack_exports__.a=function(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),mobile=_useState2[0],setMobile=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),address=_useState4[0],setAddress=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),password=_useState6[0],setPassword=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState8=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),existingPhone=_useState8[0],setExistingPhone=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState10=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),existingAddress=_useState10[0],setExistingAddress=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState12=Object(D_Comp_Web_Development_FoodDelight_Frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState11,2),reloadData=_useState12[0],setReloadData=_useState12[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_3___default()({method:"POST",url:_Constants_constants__WEBPACK_IMPORTED_MODULE_4__.a+"userdetails/",headers:{"Content-Type":"application/json",authToken:props.authToken}}).then((function(response){console.log(response.data);var jsonData=eval(response.data);setExistingPhone(jsonData.mobile_number),setMobile(jsonData.mobile_number),setAddress(jsonData.user_address),setExistingAddress(jsonData.user_address)})).catch((function(e){return alert("Failed with error "+e)}))}),[reloadData]);var saveUserDetails=function(){console.info(props.username),axios__WEBPACK_IMPORTED_MODULE_3___default()({method:"POST",url:_Constants_constants__WEBPACK_IMPORTED_MODULE_4__.a+"profile/",headers:{"Content-Type":"application/json",authToken:props.authToken},data:{username:props.username,password:password,mobileNumber:mobile,address:address}}).then((function(e){"account details saved"==e.data?alert("Your account details saved successfully"):alert("Details not saved. Please enter again")})).catch((function(e){return alert("Failed with error "+e)}))};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"main-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"orderfood-image",src:_assets_images_manageAccount_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"orderFood-image"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"form-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",{className:"form-title"},"Manage Account"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",className:"form-input-text-input",name:"username",value:props.username,readOnly:"readOnly"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",className:"form-input-text-input",name:"password",placeholder:"Enter Password",onChange:function(e){return setPassword(e.target.value)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",className:"form-input-text-input",name:"phone",placeholder:"Enter Phone Number",onChange:function(e){return setMobile(e.target.value)},defaultValue:existingPhone}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_autoFillAddress__WEBPACK_IMPORTED_MODULE_6__.a,{existingAddress:existingAddress,setAddress:setAddress}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"signup-btn",type:"button",onClick:saveUserDetails},"Save")))}},72:function(e,t,_){e.exports=_.p+"static/media/manageAccount.6661cf86.jpg"},73:function(e,t,_){"use strict";var a,n=_(54),r=_.n(n),o=_(6),l=_(74),s=_(0),c=_.n(s);function i(e,t,_){(a=new window.google.maps.places.Autocomplete(t.current,{types:["geocode"],componentRestrictions:{country:"aus"}})).setFields(["address_components","formatted_address"]),a.addListener("place_changed",(function(){return function(e,t){return u.apply(this,arguments)}(e,_)}))}function u(){return(u=Object(l.a)(r.a.mark((function e(t,_){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.getPlace(),o=n.formatted_address,t(o),console.log(n),_.setAddress(n.formatted_address);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){var t=Object(s.useState)(""),_=Object(o.a)(t,2),a=(_[0],_[1]),n=Object(s.useRef)(null);return Object(s.useEffect)((function(){!function(e,t){var _=document.createElement("script");_.type="text/javascript",_.readyState?_.onreadystatechange=function(){"loaded"!==_.readyState&&"complete"!==_.readyState||(_.onreadystatechange=null,t())}:_.onload=function(){return t()},_.src=e,document.getElementsByTagName("head")[0].appendChild(_)}("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDEMA5V4qPkmFadVwjFPN5EHO4uJo2M02c","&libraries=places"),(function(){return i(a,n,e)}))}),[]),c.a.createElement("div",{className:"search-location-input"},c.a.createElement("input",{ref:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter a Address",defaultValue:e.existingAddress}))}},75:function(e,t,_){e.exports=_.p+"static/media/orderFood.d19966f5.jpg"},87:function(e,t,_){e.exports=_(117)},92:function(e,t,_){},93:function(e,t,_){}},[[87,1,2]]]);
//# sourceMappingURL=main.2cab516b.chunk.js.map