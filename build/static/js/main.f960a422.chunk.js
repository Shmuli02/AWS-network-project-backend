(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{149:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),s=n(10),i=n(11),c=n(1),l=n(162),o=n(165),u=n(33),j=n(161),d=n(16),b=n.n(d),h="/api/notes",p=null,O={getAll:function(){return b.a.get(h).then((function(e){return e.data}))},create:function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,b.a.post(h,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){p="bearer ".concat(e)},update:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:p}},e.next=3,b.a.put("".concat(h,"/").concat(t),n,a);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteNote:function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,b.a.delete("".concat(h,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=n(24),v=n(38),f=n(48),m=(n(106),n(41)),k=n(42),g=n(2);n(142);var w=n(49),y=n(85),S=n(84),N=b.a.create({baseURL:"http://localhost:3003",headers:{"Content-type":"application/json"}}),C=new(function(){function e(){Object(m.a)(this,e)}return Object(k.a)(e,[{key:"upload",value:function(e,t){var n=new FormData;return n.append("file",e),N.post("/api/upload",n,{headers:{"Content-Type":"multipart/form-data"},UploadProgress:t})}}]),e}()),T=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).selectFile=a.selectFile.bind(Object(w.a)(a)),a.upload=a.upload.bind(Object(w.a)(a)),a.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:"",fileInfos:[]},a}return Object(k.a)(n,[{key:"selectFile",value:function(e){this.setState({selectedFiles:e.target.files})}},{key:"upload",value:function(){var e=this,t=this.state.selectedFiles[0];this.setState({progress:0,currentFile:t}),C.upload(t,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){return e.setState({message:t.data.message}),C.getFiles()})).then((function(t){e.setState({fileInfos:t.data})})).catch((function(){e.setState({progress:0,currentFile:void 0})})),this.setState({selectedFiles:void 0})}},{key:"render",value:function(){var e=this.state,t=e.selectedFiles,n=e.currentFile,a=e.progress,r=e.message;e.fileInfos;return Object(g.jsxs)("div",{children:[n&&Object(g.jsx)("div",{className:"progress",children:Object(g.jsxs)("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100",style:{width:a+"%"},children:[a,"%"]})}),Object(g.jsx)("label",{className:"btn btn-default",children:Object(g.jsx)("input",{type:"file",onChange:this.selectFile})}),Object(g.jsx)("button",{className:"btn btn-success",disabled:!t,onClick:this.upload,children:"Lataa"}),Object(g.jsx)("div",{className:"alert alert-light",role:"alert",children:r})]})}}]),n}(c.Component);function F(e){e.taskId;var t=e.note,n=e.handleNoteChange,a=Object(c.useState)(!1),l=Object(i.a)(a,2),o=l[0],j=l[1],d=t[0],b=Object(c.useState)(d.url),h=Object(i.a)(b,2),p=h[0],m=h[1],k=function(){return j(!1)},w=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(n);case 3:return a=e.sent,O.setToken(a.token),e.next=7,O.update(d.id,{url:p});case 7:e.sent,k(),m("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(t);case 3:a=e.sent,console.log(d),O.setToken(a.token),O.deleteNote(d.id),n(),k();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{variant:"primary",onClick:function(){return j(!0)},children:"Muokkaa suoritusta"}),Object(g.jsxs)(x.a,{show:o,onHide:k,children:[Object(g.jsx)(x.a.Header,{closeButton:!0,children:Object(g.jsx)(x.a.Title,{children:"Modal heading"})}),Object(g.jsxs)(x.a.Body,{children:[Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(g.jsx)(v.a.Label,{children:"Linkki"}),Object(g.jsx)(v.a.Control,{as:"textarea",rows:2,onChange:function(e){return m(e.target.value)},value:p})]})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{variant:"danger",onClick:y,children:"Poista suoritus"})})]}),Object(g.jsxs)(x.a.Footer,{children:[Object(g.jsx)(u.a,{variant:"secondary",onClick:k,children:"Peruuta"}),Object(g.jsx)(u.a,{variant:"primary",onClick:w,children:"Tallenna"})]})]})]})}function I(e){var t=e.taskId,n=e.handleNoteChange,a=Object(c.useState)(!1),l=Object(i.a)(a,2),o=l[0],j=l[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),h=b[0],p=b[1],m=function(){return j(!1)},k=function(){var e=Object(s.a)(r.a.mark((function e(a){var s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(s);case 3:return i=e.sent,O.setToken(i.token),e.next=7,O.create({task:t,user:i.username,url:h});case 7:e.sent,n(),m();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{variant:"primary",onClick:function(){return j(!0)},children:"Lis\xe4\xe4 suoritus"}),Object(g.jsxs)(x.a,{show:o,onHide:m,children:[Object(g.jsx)(x.a.Header,{closeButton:!0,children:Object(g.jsx)(x.a.Title,{children:"Modal heading"})}),Object(g.jsx)(x.a.Body,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(v.a.Label,{children:"Lataa tiedosto tai lis\xe4\xe4 linkki"}),Object(g.jsx)("div",{className:"container",style:{width:"300"},children:Object(g.jsx)(T,{})}),Object(g.jsx)(v.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(g.jsx)(v.a.Control,{as:"textarea",rows:2,onChange:function(e){return p(e.target.value)},value:h,placeholder:"linkki"})})]})}),Object(g.jsxs)(x.a.Footer,{children:[Object(g.jsx)(u.a,{variant:"secondary",onClick:m,children:"Peruuta"}),Object(g.jsx)(u.a,{variant:"primary",onClick:k,children:"Tallenna"})]})]})]})}function L(){return B.apply(this,arguments)}function B(){return(B=Object(s.a)(r.a.mark((function e(){var t,n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedBlogappUser"))){e.next=12;break}return e.next=4,JSON.parse(t);case 4:return n=e.sent,e.next=7,O.getAll();case 7:return a=e.sent,e.next=10,a.filter((function(e){return e.user.username===n.username}));case 10:return s=e.sent,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(61),K=n(29),A=n(53),P=(n(149),3600),E=86400,J={isPlaying:!0,size:120,strokeWidth:6},M=function(e,t){return Object(g.jsxs)("div",{className:"time-wrapper",children:[Object(g.jsx)("div",{className:"time",children:t}),Object(g.jsx)("div",{children:e})]})};function D(){var e=1627765199-Date.now()/1e3,t=Math.ceil(e/E)*E;return Object(g.jsxs)("div",{className:"Timer",children:[Object(g.jsx)(A.CountdownCircleTimer,Object(K.a)(Object(K.a)({},J),{},{colors:[["#7E2E84"]],duration:t,initialRemainingTime:e,children:function(e){var n=e.elapsedTime;return M("p\xe4iv\xe4\xe4",(t-n)/E|0)}})),Object(g.jsx)(A.CountdownCircleTimer,Object(K.a)(Object(K.a)({},J),{},{colors:[["#D14081"]],duration:E,initialRemainingTime:e%E,onComplete:function(t){return[e-t>P]},children:function(e){var t=e.elapsedTime;return M("tuntia",(E-t)%E/P|0)}})),Object(g.jsx)(A.CountdownCircleTimer,Object(K.a)(Object(K.a)({},J),{},{colors:[["#EF798A"]],duration:P,initialRemainingTime:e%P,onComplete:function(t){return[e-t>60]},children:function(e){var t=e.elapsedTime;return M("minuuttia",(P-t)%P/60|0)}})),Object(g.jsx)("div",{className:"TimerSec",children:Object(g.jsx)(A.CountdownCircleTimer,Object(K.a)(Object(K.a)({},J),{},{colors:[["#218380"]],duration:60,initialRemainingTime:e%60,onComplete:function(t){return[e-t>0]},children:function(e){var t=e.elapsedTime;return M("sekunttia",60-t|0)}}))})]})}var H=function(e){var t=e.message;return null===t?null:Object(g.jsx)("div",{className:"error",children:t})},R=n(0),z=n(82),V=function(e){var t=e.tasks,n=e.notes,a=e.user,r=e.handleNoteChange,s=n.map((function(e){return e.task})),d=Object(c.useState)(null),b=Object(i.a)(d,2),h=b[0],p=(b[1],function(e){var t=e.title,n=e.description;return Object(g.jsx)(l.a,{trigger:"click",placement:"right",overlay:Object(g.jsxs)(o.a,{id:"popover-basic",children:[Object(g.jsx)(o.a.Title,{as:"h3",children:t}),Object(g.jsx)(o.a.Content,{children:n})]}),children:Object(g.jsx)(u.a,{variant:"link",children:Object(g.jsx)(R.b.Provider,{value:{style:{fontSize:"20px",color:"rgb(0, 0, 0)"}},children:Object(g.jsx)(z.a,{})})})})});return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Teht\xe4v\xe4t"}),Object(g.jsx)(H,{message:h}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Aikaa j\xe4ljell\xe4"}),Object(g.jsx)(D,{}),Object(g.jsx)("br",{}),Object(g.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[a?Object(g.jsx)("th",{children:"Suoritukset"}):"",Object(g.jsx)("th",{children:"Teht\xe4v\xe4"}),Object(g.jsx)("th",{children:"Haastavuus"}),a?Object(g.jsx)("th",{children:"Muokkaus"}):""]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{children:[a?Object(g.jsx)("td",{children:s.includes(e.id)?Object(g.jsx)(U.a,{pill:!0,variant:"success",children:"Suoritettu"}):Object(g.jsx)(U.a,{pill:!0,variant:"dark",children:"Ei suoritettu"})}):"",Object(g.jsxs)("td",{children:[Object(g.jsx)(p,{title:e.title,description:e.description}),e.title]}),Object(g.jsx)("td",{children:e.difficulty}),a?Object(g.jsx)("td",{children:s.includes(e.id)?Object(g.jsx)(F,{taskId:e.id,handleNoteChange:r,note:n.filter((function(t){return t.task==e.id}))}):Object(g.jsx)(I,{taskId:e.id,handleNoteChange:r,user:a})}):""]},e.id)}))})]})]})},G=n(12),W={login:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(e){var t=Object(G.g)(),n=Object(c.useState)(""),a=Object(i.a)(n,2),l=a[0],o=a[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(c.useState)(null),p=Object(i.a)(h,2),O=(p[0],p[1]),x=Object(c.useState)(null),v=Object(i.a)(x,2),f=v[0],m=v[1],k=function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,W.login({username:l,password:d});case 4:s=n.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(s)),O(s),o(""),b(""),e.onLogin(l),t.push("/"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),m("V\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus tai salasana"),setTimeout((function(){m(null)}),5e3);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(H,{message:f}),Object(g.jsxs)("form",{className:"px-4 py-3",onSubmit:k,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Username"}),Object(g.jsx)("input",{type:"text",autoComplete:"username",className:"form-control",value:l,onChange:function(e){var t=e.target;return o(t.value)},placeholder:"Username"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Password"}),Object(g.jsx)("input",{type:"password",autoComplete:"current-password",className:"form-control",value:d,onChange:function(e){var t=e.target;return b(t.value)},placeholder:"Password"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]}),Object(g.jsx)("div",{className:"dropdown-divider"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/register",children:"New around here? Sign up"}),Object(g.jsx)("a",{className:"dropdown-item",href:"#",children:"Forgot password?"})]})},Q=function(){return Object(g.jsxs)("div",{className:"Home",children:[Object(g.jsx)("h1",{children:"Aktiivinen keppari kilpailu jatkuu!"}),Object(g.jsx)("p",{children:"Kes\xe4n 2021 kilpailuissa keppariharrastajan teht\xe4v\xe4n\xe4 on suorittaa teht\xe4v\xe4passin teht\xe4v\xe4t kilpailuaikana. Kaikkien osallistujien kesken arvotaan hyvi\xe4 esinepalkintoja."}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Kilpailuaika:"})," 1.7.\u201331.7.2021"]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Osallistumisoikeus:"})," Avoin kaikille"]}),Object(g.jsx)("h4",{children:"Palkinnot:"}),Object(g.jsxs)("ol",{children:[Object(g.jsx)("li",{children:"Kaikkien v\xe4hint\xe4\xe4n yhden teht\xe4v\xe4n suorittaneiden kesken arvotaan hyv\xe4t esinepalkinnot"}),Object(g.jsx)("li",{children:"Bonuspalkinnot arvotaan niiden kesken, jotka ovat suorittaneet kaikki teht\xe4v\xe4t kilpailuaikana"})]}),Object(g.jsx)("h4",{children:"Teht\xe4v\xe4t:"}),Object(g.jsx)("p",{children:"Kilpailussa on helppoja ja vaikeita teht\xe4vi\xe4. Osassa teht\xe4vi\xe4 osallistujan tulee l\xe4hett\xe4\xe4 kuva tai video, kun suoritus rekister\xf6id\xe4\xe4n kilpailusivuille."}),Object(g.jsx)("h4",{children:"S\xe4\xe4nn\xf6t:"}),Object(g.jsx)("p",{children:"Kilpailussa saa tehd\xe4 yhteisty\xf6t\xe4 teht\xe4vien suorittamisessa. Kilpailussa tulee noudattaa tekij\xe4noikeuksia, joten \xe4l\xe4 kopioi kuvia tai videoita joihin sinulla ei ole oikeuksia."}),Object(g.jsx)("b",{children:"Ohjeet osallistumiseen:"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Avaa kilpailusivut keppari.com"}),Object(g.jsx)("li",{children:"Rekister\xf6idy sivulle"}),Object(g.jsx)("li",{children:"Kun olet tehnyt teht\xe4v\xe4n, niin k\xe4y rekister\xf6im\xe4ss\xe4 suorituksesi"}),Object(g.jsx)("li",{children:"Kun olet suorittanut kaikki teht\xe4v\xe4t, niin paina nappia Tarkista. Saat todistuksen suorituksestasi pari p\xe4iv\xe4n sis\xe4ll\xe4 s\xe4hk\xf6postiisi"}),Object(g.jsx)("li",{children:"Voit tulostaa itsellesi pdf muodossa teht\xe4v\xe4passin"})]})]})},X=n(166),Y=function(e){var t=e.tasks,n=(e.user,e.notes),a=n.map((function(e){return e.task})),r=t.filter((function(e){return a.includes(e.id)})),s=t.length,i=r.length;return Object(g.jsxs)("div",{className:"UserPage",children:[Object(g.jsx)("h1",{children:"Omat sivut"}),Object(g.jsx)(X.a,{now:i/s*100}),Object(g.jsxs)("p",{children:["suoritettu ",i,"/",s," teht\xe4v\xe4\xe4"]}),s==i?Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Olet suorittanut kaikki teht\xe4v\xe4t ",Object(g.jsx)(U.a,{variant:"info",children:"Tarkistuksessa"})]}),Object(g.jsxs)("p",{children:["Voit ladata diplomin t\xe4m\xe4n linkin kautta",Object(g.jsx)(u.a,{variant:"primary",size:"sm",children:"Lataa diplomi"})," "]})]}):"",i>=1?Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Suoritukset"}),Object(g.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Teht\xe4v\xe4"}),Object(g.jsx)("th",{children:"Muokkaus"})]})}),Object(g.jsx)("tbody",{children:r.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.title}),Object(g.jsx)("td",{children:a.includes(e.id)?Object(g.jsx)(F,{taskId:e.id,note:n.filter((function(t){return t.task==e.id}))}):""})]},e.id)}))})]})]}):Object(g.jsx)("p",{children:"ei suoritukisa"})]})},Z={register:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var $=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],l=n[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),j=u[0],d=u[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),p=h[0],O=h[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),f=v[0],m=v[1],k=Object(c.useState)(""),w=Object(i.a)(k,2),y=w[0],S=w[1],N=Object(c.useState)(""),C=Object(i.a)(N,2),T=C[0],F=C[1],I=Object(c.useState)(null),L=Object(i.a)(I,2),B=L[0],U=L[1],K=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p!==f){e.next=15;break}return e.prev=2,e.next=5,Z.register({username:a,firstname:y,lastname:T,email:j,password:p});case 5:e.sent,U(null),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t.preventDefault(),U("Ongelma");case 13:e.next=17;break;case 15:U("Salasanat eiv\xe4t t\xe4sm\xe4\xe4"),t.preventDefault();case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(H,{message:B}),Object(g.jsxs)("form",{className:"px-4 py-3",onSubmit:K,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"K\xe4ytt\xe4j\xe4nimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){var t=e.target;return l(t.value)},placeholder:"K\xe4ytt\xe4j\xe4nimi"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Etunimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:y,onChange:function(e){var t=e.target;return S(t.value)},placeholder:"Etunimi"}),Object(g.jsx)("label",{children:"Sukunimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:T,onChange:function(e){var t=e.target;return F(t.value)},placeholder:"Sukunimi"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"S\xe4hk\xf6posti"}),Object(g.jsx)("input",{type:"email",className:"form-control",value:j,onChange:function(e){var t=e.target;return d(t.value)},placeholder:"S\xe4hk\xf6posti"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Salasana"}),Object(g.jsx)("input",{type:"password",autoComplete:"new-password",className:"form-control",value:p,onChange:function(e){var t=e.target;return O(t.value)},placeholder:"Salasana"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Vahvista Salasana"}),Object(g.jsx)("input",{type:"password",autoComplete:"new-password",className:"form-control",value:f,onChange:function(e){var t=e.target;return m(t.value)},placeholder:"Vahvista salasana"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Rekister\xf6idy"})]})]})},_=function(){return b.a.get("/api/tasks").then((function(e){return e.data}))},ee=n(21),te=n.n(ee),ne=n(164),ae=n(163),re=n(37),se=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(null),o=Object(i.a)(l,2),u=o[0],j=o[1],d=Object(c.useState)([]),b=Object(i.a)(d,2),h=b[0],p=b[1];function O(){return(O=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedBlogappUser"))){e.next=10;break}return e.next=4,JSON.parse(t);case 4:return n=e.sent,j(n.username),e.next=8,L();case 8:a=e.sent,p(a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){x()}),[]);var f=function(e){window.localStorage.removeItem("loggedBlogappUser"),j(null),p([])},m=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsxs)(ne.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(g.jsx)(ne.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(ne.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(ae.a,{className:"mr-auto",children:[Object(g.jsx)(ae.a.Link,{href:"#",as:"span",children:Object(g.jsx)(re.b,{to:"/",className:"link",children:"Home"})}),Object(g.jsx)(ae.a.Link,{href:"#",as:"span",children:Object(g.jsx)(re.b,{to:"/tasks",className:"link",children:"Teht\xe4v\xe4t"})}),Object(g.jsx)(ae.a.Link,{href:"#",as:"span",children:Object(g.jsx)(re.b,{to:"/user",className:"link",children:"Oma sivu"})}),Object(g.jsx)(ae.a.Link,{href:"/user",as:"span",children:u?Object(g.jsxs)("em",{children:[u," logged in ",Object(g.jsx)("button",{onClick:f,children:"Logout"})]}):Object(g.jsx)(re.b,{to:"/login",className:"link",children:"Login"})})]})})]}),Object(g.jsxs)(G.d,{children:[Object(g.jsx)(G.b,{path:"/tasks",children:Object(g.jsx)(V,{tasks:n,user:u,notes:h,handleNoteChange:m})}),Object(g.jsx)(G.b,{path:"/user",children:u?Object(g.jsx)(Y,{notes:h,user:u,tasks:n}):Object(g.jsx)(G.a,{to:"/login"})}),Object(g.jsx)(G.b,{path:"/login",children:Object(g.jsx)(q,{onLogin:function(e){j(e)}})}),Object(g.jsx)(G.b,{path:"/register",children:Object(g.jsx)($,{})}),Object(g.jsx)(G.b,{path:"/",children:Object(g.jsx)(Q,{})})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{}),Object(g.jsx)("br",{}),Object(g.jsx)("em",{children:"Sivujen toteutus: Mitavain"})]})]})};te.a.render(Object(g.jsx)(re.a,{children:Object(g.jsx)(se,{})}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.f960a422.chunk.js.map