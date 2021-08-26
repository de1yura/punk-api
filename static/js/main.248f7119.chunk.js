(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],{15:function(e,a,t){e.exports={container:"Navbar_container__Stw5O",darkContainer:"Navbar_darkContainer__LPP9w",nav:"Navbar_nav__3cHYR",logo:"Navbar_logo__46AHD",dark:"Navbar_dark__1DsTf"}},18:function(e,a,t){e.exports={filters:"Filters_filters__2vYGo",filter:"Filters_filter__P8bsE",abv:"Filters_abv__48HWC",dark:"Filters_dark__2F0Z_"}},20:function(e,a,t){e.exports={login:"Login_login__1HlTk",loginContainer:"Login_loginContainer__1Gid4",btnContainer:"Login_btnContainer__2aRpN",errorMsg:"Login_errorMsg__3CRgo"}},22:function(e,a,t){e.exports={cont:"Card_cont__2d_xH",heading:"Card_heading__v1LXH",description:"Card_description__3SKeX",dark:"Card_dark__3FP5Q"}},23:function(e,a,t){e.exports={dashboard:"Main_dashboard__1ZCFX",dark:"Main_dark__785pK",searchbar:"Main_searchbar__3O_NU",darkSearch:"Main_darkSearch__1xO-d"}},26:function(e,a,t){e.exports={container:"CardList_container__2tcYg",darkContainer:"CardList_darkContainer__2zSVt"}},35:function(e,a,t){e.exports=t.p+"static/media/brewdog.8484de1b.jpeg"},37:function(e,a,t){e.exports=t(53)},42:function(e,a,t){},43:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(34),i=t.n(c),s=(t(42),t(11)),l=(t(43),t(22)),o=t.n(l),u=function(e){var a=e.beer,t=Object(n.useContext)(I);return r.a.createElement("div",{className:t.isDarkTheme?o.a.dark:o.a.cont},r.a.createElement("img",{src:a.image_url,alt:"beer picture"}),r.a.createElement("div",{className:o.a.description},r.a.createElement("div",{className:o.a.heading},r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.tagline)),r.a.createElement("p",null,a.description),r.a.createElement("h4",null,"First Brewed"),r.a.createElement("p",null,a.first_brewed)))},d=t(26),m=t.n(d),h=function(e){e.beers;var a=e.filteredBeers,t=Object(n.useContext)(I),c=a.map((function(e){return r.a.createElement(u,{beer:e})}));return r.a.createElement("div",{className:t.isDarkTheme?m.a.darkContainer:m.a.container},c)},p=t(15),b=t.n(p),E=t(35),g=t.n(E),_=t(19),f=function(e){var a=e.user,t=e.handleSignout,c=e.email,i=e.toggleTheme,s=Object(n.useContext)(I);return r.a.createElement("div",{className:s.isDarkTheme?b.a.darkContainer:b.a.container},r.a.createElement("nav",{className:s.isDarkTheme?b.a.dark:b.a.nav},r.a.createElement("section",{className:b.a.logo},r.a.createElement("img",{src:g.a,alt:"logo"})),r.a.createElement("label",{className:b.a.switch},"Toggle theme",r.a.createElement("input",{type:"checkbox",onClick:i}),r.a.createElement("span",{className:b.a.slider&b.a.round})),c?r.a.createElement("p",null,"user: ",c):r.a.createElement("p",null),r.a.createElement("section",{className:b.a.signIn},a?r.a.createElement("p",{onClick:t},"Sign Out"):r.a.createElement(_.b,{to:"/login"},r.a.createElement("p",null,"Sign In")))))},k=t(18),v=t.n(k),C=function(e){e.filteredBeers;var a=e.isChecked,t=e.setIsChecked,c=e.isPhChecked,i=e.setIsPhChecked,s=e.dateFilter,l=e.setDateFilter,o=Object(n.useContext)(I);return r.a.createElement("div",{className:o.isDarkTheme?v.a.dark:v.a.filters},r.a.createElement("div",{className:v.a.filter},r.a.createElement("h2",null,"Filters")),r.a.createElement("div",{className:v.a.abv},r.a.createElement("label",{htmlFor:"abv"}," ABV greater than 6%"),r.a.createElement("input",{id:"check6",type:"checkbox",onChange:function(){t(!a)}})),r.a.createElement("div",{className:v.a.abv},r.a.createElement("label",{htmlFor:"abv"}," Ph less than 4"),r.a.createElement("input",{id:"checkPh",type:"checkbox",onChange:function(){i(!c)}})),r.a.createElement("div",{className:v.a.abv},r.a.createElement("label",null," Brewed before 2010"),r.a.createElement("input",{id:"checkPh",type:"checkbox",onChange:function(){l(!s)}})))},O=t(23),j=t.n(O),w=t(30),S=(w.a.initializeApp({apiKey:"AIzaSyBsDlfqaGMX7NBXqTGhbRCZul4i3KTVH90",authDomain:"punk-api-80e68.firebaseapp.com",projectId:"punk-api-80e68",storageBucket:"punk-api-80e68.appspot.com",messagingSenderId:"683675382968",appId:"1:683675382968:web:98090c5ef60d1f7511b04d"}),w.a),N=t(20),x=t.n(N),F=t(8),P=function(e){var a=e.email,t=e.setEmail,n=e.password,c=e.setPassword,i=e.handleLogin,s=e.handleSignup,l=e.hasAccount,o=e.setHasAccount,u=e.emailError,d=e.passwordError,m=Object(F.f)();return r.a.createElement("section",{className:x.a.login},r.a.createElement("div",{className:x.a.loginContainer},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return t(e.target.value)}}),r.a.createElement("p",{className:x.a.errorMsg},u),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("p",{className:x.a.errorMsg},d),r.a.createElement("div",{className:x.a.btnContainer},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){i(),m.push("/")}},"Sign in"),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement("span",{onClick:function(){return o(!l)}},"Sign up"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:s},"Sign up"),r.a.createElement("p",null,"Have an account? ",r.a.createElement("span",{onClick:function(){return o(!l)}},"Sign in"))))))},I=Object(n.createContext)({}),D=function(e){var a=e.beers,t=e.filteredBeers,c=e.searchHandler,i=e.isChecked,l=e.setIsChecked,o=e.isPhChecked,u=e.setIsPhChecked,d=e.dateFilter,m=e.setDateFilter,p=Object(n.useState)(""),b=Object(s.a)(p,2),E=b[0],g=b[1],k=Object(n.useState)(""),v=Object(s.a)(k,2),O=v[0],w=v[1],N=Object(n.useState)(""),x=Object(s.a)(N,2),D=x[0],B=x[1],T=Object(n.useState)("test"),H=Object(s.a)(T,2),L=(H[0],H[1]),y=Object(n.useState)(""),A=Object(s.a)(y,2),M=(A[0],A[1]),W=Object(n.useState)(!1),X=Object(s.a)(W,2),G=X[0],K=X[1],R=function(){L(""),M("")},z=function(){S.auth().onAuthStateChanged((function(e){e?(B(""),g(e)):g("")}))};Object(n.useEffect)((function(){z()}),[]);var V=Object(n.useState)(!1),Y=Object(s.a)(V,2),Z=Y[0],q=Y[1],J=function(){q(!Z)},U={isDarkTheme:Z,toggleTheme:J};return r.a.createElement(I.Provider,{value:U},r.a.createElement(_.a,null,r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/login"},r.a.createElement(P,{email:O,setEmail:w,password:D,setPassword:B,handleLogin:function(){R(),S.auth().signInWithEmailAndPassword(O,D).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-not-found":L(e.message);break;case"auth/wrong-password":M(e.message)}}))},handleSignup:function(){R(),S.auth().createUserWithEmailAndPassword(O,D).catch((function(e){switch(e.code){case"auth/email-in-use":case"auth/invalid-email":L(e.message)}}))},hasAccount:G,setHasAccount:K,emailError:L,passwordError:M})),r.a.createElement(F.a,{path:"/"},r.a.createElement(f,{user:E,handleSignout:function(){S.auth().signOut().then(window.location.reload())},email:O,toggleTheme:J}),r.a.createElement("div",{className:Z?j.a.darkSearch:j.a.searchbar},r.a.createElement("input",{type:"text",placeholder:"search...",onChange:c})),r.a.createElement("div",{className:Z?j.a.dark:j.a.dashboard},r.a.createElement(C,{beers:a,filteredBeers:t,isChecked:i,setIsChecked:l,isPhChecked:o,setIsPhChecked:u,dateFilter:d,setDateFilter:m}),r.a.createElement(h,{beers:a,filteredBeers:t,searchHandler:c,isChecked:i,setIsChecked:l}))))))},B=function(){var e=Object(n.useState)("https://api.punkapi.com/v2/beers"),a=Object(s.a)(e,2),t=a[0],c=(a[1],Object(n.useState)([])),i=Object(s.a)(c,2),l=i[0],o=i[1];Object(n.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]);var u=Object(n.useState)(""),d=Object(s.a)(u,2),m=d[0],h=d[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),E=b[0],g=b[1],_=Object(n.useState)(!1),f=Object(s.a)(_,2),k=f[0],v=f[1],C=Object(n.useState)(!1),O=Object(s.a)(C,2),j=O[0],w=O[1],S=l.filter((function(e){return E?e.abv>6:k?e.ph<=4:j?e.first_brewed.split("/")[1]<=2010:e.name.toLowerCase().includes(m.toLowerCase().trim())}));return r.a.createElement("div",null,l&&r.a.createElement(D,{beers:l,filteredBeers:S,searchHandler:function(e){h(e.target.value)},isChecked:E,setIsChecked:g,isPhChecked:k,setIsPhChecked:v,dateFilter:j,setDateFilter:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.248f7119.chunk.js.map