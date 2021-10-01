(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{175:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(10),i=a(11),c=a(1),l=a(241),o=a(244),u=a(38),j=a(239),d=a(16),h=a.n(d),b="/api/notes",p=null,O={getAll:function(){return h.a.get(b).then((function(e){return e.data}))},create:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:p}},e.next=3,h.a.post(b,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){p="bearer ".concat(e)},update:function(){var e=Object(s.a)(r.a.mark((function e(t,a){var n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,h.a.put("".concat(b,"/").concat(t),a,n);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteNote:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:p}},e.next=3,h.a.delete("".concat(b,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=a(26),v=a(32),f=a(54),m=(a(132),a(48)),k=a(49),g=a(2);a(168);var w=a(55),y=a(111),S=a(110),N=h.a.create({baseURL:"http://localhost:3003",headers:{"Content-type":"application/json"}}),C=new(function(){function e(){Object(m.a)(this,e)}return Object(k.a)(e,[{key:"upload",value:function(e,t,a){var n=new FormData;return n.append("file",e),n.append("user",t),N.post("https://aktiivinen-keppari.herokuapp.com/api/upload",n,{headers:{"Content-Type":"multipart/form-data"},UploadProgress:a})}}]),e}()),T=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).selectFile=n.selectFile.bind(Object(w.a)(n)),n.upload=n.upload.bind(Object(w.a)(n)),n.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:"Muista painaa Lataa nappia",fileInfos:[]},n}return Object(k.a)(a,[{key:"selectFile",value:function(e){this.setState({selectedFiles:e.target.files})}},{key:"upload",value:function(){var e=this,t=this.state.selectedFiles[0];this.setState({progress:0,currentFile:t}),C.upload(t,this.props.user,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){return e.setState({message:t.data.message}),C.getFiles()})).then((function(t){e.setState({fileInfos:t.data})})).catch((function(){e.setState({progress:0,message:"Lataus valmis",currentFile:void 0})})),this.setState({selectedFiles:void 0})}},{key:"render",value:function(){var e=this.state,t=e.selectedFiles,a=e.currentFile,n=e.progress,r=e.message;e.fileInfos;return Object(g.jsxs)("div",{children:[a&&Object(g.jsx)("div",{className:"progress",children:Object(g.jsxs)("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n+"%"},children:[n,"%"]})}),Object(g.jsx)("label",{className:"btn btn-default",children:Object(g.jsx)("input",{type:"file",onChange:this.selectFile})}),Object(g.jsx)("button",{className:"btn btn-success",disabled:!t,onClick:this.upload,children:"Lataa"}),Object(g.jsx)("div",{className:"alert alert-light",role:"alert",children:r})]})}}]),a}(c.Component);function F(e){e.taskId;var t=e.note,a=e.handleNoteChange,n=e.title,l=Object(c.useState)(!1),o=Object(i.a)(l,2),j=o[0],d=o[1],h=t[0],b=Object(c.useState)(h.url),p=Object(i.a)(b,2),m=p[0],k=p[1],w=function(){return d(!1)},y=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(a);case 3:return n=e.sent,O.setToken(n.token),e.next=7,O.update(h.id,{url:m});case 7:e.sent,w(),k("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(t);case 3:n=e.sent,O.setToken(n.token),O.deleteNote(h.id),a(),w();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{variant:"primary",onClick:function(){return d(!0)},children:"Muokkaa suoritusta"}),Object(g.jsxs)(x.a,{show:j,onHide:w,children:[Object(g.jsx)(x.a.Header,{closeButton:!0,children:Object(g.jsx)(x.a.Title,{children:n})}),Object(g.jsxs)(x.a.Body,{children:[Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(g.jsx)(v.a.Label,{children:"Linkki"}),Object(g.jsx)(v.a.Control,{as:"textarea",rows:2,onChange:function(e){return k(e.target.value)},value:m,placeholder:"linkki"})]})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{variant:"danger",onClick:S,children:"Poista suoritus"})})]}),Object(g.jsxs)(x.a.Footer,{children:[Object(g.jsx)(u.a,{variant:"secondary",onClick:w,children:"Peruuta"}),Object(g.jsx)(u.a,{variant:"primary",onClick:y,children:"Tallenna"})]})]})]})}function I(e){var t=e.taskId,a=e.handleNoteChange,n=e.user,l=e.title,o=Object(c.useState)(!1),j=Object(i.a)(o,2),d=j[0],h=j[1],b=Object(c.useState)(""),p=Object(i.a)(b,2),m=p[0],k=p[1],w=Object(c.useState)(!1),y=Object(i.a)(w,2),S=y[0],N=y[1],C=function(){return h(!1)},F=function(){var e=Object(s.a)(r.a.mark((function e(n){var s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=window.localStorage.getItem("loggedBlogappUser"),e.next=3,JSON.parse(s);case 3:return i=e.sent,O.setToken(i.token),e.next=7,O.create({task:t,user:i.username,url:m,allowedToPublish:S});case 7:e.sent,a(),N(!1),C();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{variant:"primary",onClick:function(){return h(!0)},children:"Lis\xe4\xe4 suoritus"}),Object(g.jsxs)(x.a,{show:d,onHide:C,children:[Object(g.jsx)(x.a.Header,{closeButton:!0,children:Object(g.jsx)(x.a.Title,{children:l})}),Object(g.jsx)(x.a.Body,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(v.a.Label,{children:"Lataa tiedosto tai lis\xe4\xe4 linkki"}),Object(g.jsx)("div",{className:"container",style:{width:"300"},children:Object(g.jsx)(T,{user:n})}),Object(g.jsx)(v.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(g.jsx)(v.a.Control,{as:"textarea",rows:2,onChange:function(e){return k(e.target.value)},value:m,placeholder:"linkki"})}),Object(g.jsx)(v.a.Group,{id:"formGridCheckbox",children:Object(g.jsx)(v.a.Check,{type:"checkbox",label:"kuvan/videon saa julkaista galleriassa",onChange:function(e){return N(e.target.checked)}})})]})}),Object(g.jsxs)(x.a.Footer,{children:[Object(g.jsx)(u.a,{variant:"secondary",onClick:C,children:"Peruuta"}),Object(g.jsx)(u.a,{variant:"primary",onClick:F,children:"Tallenna"})]})]})]})}function L(){return K.apply(this,arguments)}function K(){return(K=Object(s.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedBlogappUser"))){e.next=12;break}return e.next=4,JSON.parse(t);case 4:return a=e.sent,e.next=7,O.getAll();case 7:return n=e.sent,e.next=10,n.filter((function(e){return e.user.username===a.username}));case 10:return s=e.sent,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=a(71),E=a(33),U=a(59),A=(a(175),3600),D=86400,P={isPlaying:!0,size:120,strokeWidth:6},J=function(e,t){return Object(g.jsxs)("div",{className:"time-wrapper",children:[Object(g.jsx)("div",{className:"time",children:t}),Object(g.jsx)("div",{children:e})]})};function H(){var e=1627765199-Date.now()/1e3,t=Math.ceil(e/D)*D;return Object(g.jsxs)("div",{className:"Timer",children:[Object(g.jsx)(U.CountdownCircleTimer,Object(E.a)(Object(E.a)({},P),{},{colors:[["#7E2E84"]],duration:t,initialRemainingTime:e,children:function(e){var a=e.elapsedTime;return J("p\xe4iv\xe4\xe4",(t-a)/D|0)}})),Object(g.jsx)(U.CountdownCircleTimer,Object(E.a)(Object(E.a)({},P),{},{colors:[["#D14081"]],duration:D,initialRemainingTime:e%D,onComplete:function(t){return[e-t>A]},children:function(e){var t=e.elapsedTime;return J("tuntia",(D-t)%D/A|0)}})),Object(g.jsx)(U.CountdownCircleTimer,Object(E.a)(Object(E.a)({},P),{},{colors:[["#EF798A"]],duration:A,initialRemainingTime:e%A,onComplete:function(t){return[e-t>60]},children:function(e){var t=e.elapsedTime;return J("minuutia",(A-t)%A/60|0)}})),Object(g.jsx)("div",{className:"TimerSec",children:Object(g.jsx)(U.CountdownCircleTimer,Object(E.a)(Object(E.a)({},P),{},{colors:[["#218380"]],duration:60,initialRemainingTime:e%60,onComplete:function(t){return[e-t>0]},children:function(e){var t=e.elapsedTime;return J("sekuntia",60-t|0)}}))})]})}var R=function(e){var t=e.message;return null===t?null:Object(g.jsx)("div",{className:"error",children:t})},z=a(0),G=a(107),M=function(e){var t=e.tasks,a=e.notes,n=e.user,r=e.handleNoteChange,s=a.map((function(e){return e.task})),d=Object(c.useState)(null),h=Object(i.a)(d,2),b=h[0],p=(h[1],function(e){var t=e.title,a=e.description;return Object(g.jsx)(l.a,{trigger:"click",placement:"right",overlay:Object(g.jsxs)(o.a,{id:"popover-basic",children:[Object(g.jsx)(o.a.Title,{as:"h3",children:t}),Object(g.jsx)(o.a.Content,{children:a})]}),children:Object(g.jsx)(u.a,{variant:"link",children:Object(g.jsx)(z.b.Provider,{value:{style:{fontSize:"20px",color:"rgb(0, 0, 0)"}},children:Object(g.jsx)(G.a,{})})})})});return Object(g.jsxs)("div",{className:"Task",children:[Object(g.jsx)("h1",{children:"Teht\xe4v\xe4t"}),Object(g.jsx)(R,{message:b}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Aikaa j\xe4ljell\xe4"}),Object(g.jsx)(H,{}),Object(g.jsx)("br",{}),Object(g.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[n?Object(g.jsx)("th",{children:"Suoritukset"}):"",Object(g.jsx)("th",{children:"Teht\xe4v\xe4"}),n?Object(g.jsx)("th",{children:"Muokkaus"}):""]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{children:[n?Object(g.jsx)("td",{children:s.includes(e.id)?Object(g.jsx)(B.a,{pill:!0,variant:"success",children:"Suoritettu"}):Object(g.jsx)(B.a,{pill:!0,variant:"dark",children:"Ei suoritettu"})}):"",Object(g.jsxs)("td",{children:[Object(g.jsx)(p,{title:e.title,description:e.description}),e.title]}),n?Object(g.jsx)("td",{children:s.includes(e.id)?Object(g.jsx)(F,{taskId:e.id,handleNoteChange:r,title:e.title,note:a.filter((function(t){return t.task==e.id}))}):Object(g.jsx)(I,{taskId:e.id,handleNoteChange:r,user:n,title:e.title})}):""]},e.id)}))})]})]})},V=a(12),W={login:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){var t=Object(V.g)(),a=Object(c.useState)(""),n=Object(i.a)(a,2),l=n[0],o=n[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),d=j[0],h=j[1],b=Object(c.useState)(null),p=Object(i.a)(b,2),O=(p[0],p[1]),x=Object(c.useState)(null),v=Object(i.a)(x,2),f=v[0],m=v[1],k=function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,W.login({username:l,password:d});case 4:s=a.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(s)),O(s),o(""),h(""),e.onLogin(l),t.push("/"),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(1),m("V\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus tai salasana"),setTimeout((function(){m(null)}),5e3);case 17:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{message:f}),Object(g.jsxs)("form",{className:"px-4 py-3",onSubmit:k,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"K\xe4ytt\xe4j\xe4nimi"}),Object(g.jsx)("input",{type:"text",autoComplete:"username",className:"form-control",value:l,onChange:function(e){var t=e.target;return o(t.value)},placeholder:"K\xe4ytt\xe4j\xe4nimi"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Salasana"}),Object(g.jsx)("input",{type:"password",autoComplete:"current-password",className:"form-control",value:d,onChange:function(e){var t=e.target;return h(t.value)},placeholder:"Salasana"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Kirjaudu"})]}),Object(g.jsx)("div",{className:"dropdown-divider"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/register",children:Object(g.jsx)("b",{children:"Uusi k\xe4ytt\xe4j\xe4? Rekister\xf6idy"})})]})},_=a(240),q=function(){return Object(g.jsxs)("div",{className:"Home",children:[Object(g.jsx)(_.a,{variant:"danger",children:"Vuoden 2021 kilpailu on p\xe4\xe4ttynyt"}),Object(g.jsx)("h1",{children:"Aktiivinen keppari kilpailu jatkuu!"}),Object(g.jsx)("p",{children:"Kes\xe4n 2021 kilpailussa keppariharrastaja suorittaa teht\xe4v\xe4passin teht\xe4v\xe4t kilpailuaikana. Kaikkien osallistujien kesken arvotaan hyvi\xe4 esinepalkintoja."}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Kilpailuaika:"})," 5.7.\u201331.7.2021"]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Osallistumisoikeus:"})," Avoin kaikille"]}),Object(g.jsx)("h4",{children:"Palkinnot:"}),Object(g.jsxs)("ol",{children:[Object(g.jsx)("li",{children:"Kaikkien v\xe4hint\xe4\xe4n yhden teht\xe4v\xe4n suorittaneiden kesken arvotaan hyv\xe4t esinepalkinnot"}),Object(g.jsx)("li",{children:"Bonuspalkinnot arvotaan niiden kesken, jotka ovat suorittaneet kaikki teht\xe4v\xe4t kilpailuaikana"})]}),Object(g.jsx)("h4",{children:"Teht\xe4v\xe4t:"}),Object(g.jsx)("p",{children:"Kilpailussa on helppoja ja vaikeita teht\xe4vi\xe4. Osassa teht\xe4vi\xe4 osallistujan tulee l\xe4hett\xe4\xe4 kuva tai video, kun suoritus rekister\xf6id\xe4\xe4n kilpailusivuille."}),Object(g.jsx)("h4",{children:"S\xe4\xe4nn\xf6t:"}),Object(g.jsx)("p",{children:"Kilpailussa saa tehd\xe4 yhteisty\xf6t\xe4 teht\xe4vien suorittamisessa. Kilpailussa tulee noudattaa tekij\xe4noikeuksia, joten \xe4l\xe4 kopioi kuvia tai videoita joihin sinulla ei ole oikeuksia."}),Object(g.jsx)("b",{children:"Ohjeet osallistumiseen:"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Avaa kilpailusivut hewi.fi/aktiivinen-keppari/"}),Object(g.jsxs)("li",{children:["Luo k\xe4ytt\xe4j\xe4tunnus kilpailu sivulle ",Object(g.jsx)("a",{href:"https://aktiivinen-keppari.herokuapp.com/register",children:"t\xe4st\xe4"})]}),Object(g.jsxs)("li",{children:["Kun olet tehnyt teht\xe4v\xe4n, k\xe4y rekister\xf6im\xe4ss\xe4 suoritus ",Object(g.jsx)("a",{href:"https://aktiivinen-keppari.herokuapp.com/tasks",children:" Teht\xe4v\xe4t sivulle"})]}),Object(g.jsx)("li",{children:"Kun olet suorittanut kaikki teht\xe4v\xe4t, voit ladata todistuksen suorituksestasi pari p\xe4iv\xe4n sis\xe4ll\xe4 "})]}),Object(g.jsx)("h4",{children:"Galleria"}),Object(g.jsx)("p",{children:"Halutessasi voit lis\xe4t\xe4 kuvan suorituksestasi julkiseen galleriaan"}),Object(g.jsx)("h4",{children:"Yhteystiedot:"}),Object(g.jsxs)("p",{children:["Ongalma tilanteissa ota yhteytt\xe4 s\xe4hk\xf6postitse ",Object(g.jsx)("a",{href:"mailto:keppari@hewi.fi",children:"keppari@hewi.fi"})]})]})},Q=a(245),X="/api/users",Z={register:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(X,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userData:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(X);case 2:return a=e.sent,n=a.data.filter((function(e){return e.username===t.username})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$=function(e){var t=e.tasks,a=e.user,n=e.notes,l=e.handleNoteChange,o=Object(c.useState)([]),u=Object(i.a)(o,2),d=u[0],h=u[1],b=n.map((function(e){return e.task})),p=t.filter((function(e){return b.includes(e.id)})),O=t.length,x=p.length;function v(){return(v=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.userData({username:a});case 2:t=e.sent,h(t[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(g.jsxs)("div",{className:"UserPage",children:[Object(g.jsx)("h1",{children:"Omat sivut"}),Object(g.jsx)(Q.a,{now:x/O*100}),Object(g.jsxs)("p",{children:["suoritettu ",x,"/",O," teht\xe4v\xe4\xe4"]}),O==x?Object(g.jsx)("div",{children:""==d.diploma?Object(g.jsx)("div",{children:Object(g.jsxs)("p",{children:["Olet suorittanut kaikki teht\xe4v\xe4t ",Object(g.jsx)(B.a,{variant:"info",children:"Tarkistuksessa"})]})}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Olet suorittanut kaikki teht\xe4v\xe4t ",Object(g.jsx)(B.a,{variant:"success",children:"Tarkistettu"})]}),Object(g.jsxs)("p",{children:["Voit ladata diplomin t\xe4m\xe4n linkin kautta ",Object(g.jsx)("a",{className:"btn btn-success",href:d.diploma,target:"_blank",children:"Lataa diplomi"})]})]})}):"",x>=1?Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Suoritukset"}),Object(g.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Teht\xe4v\xe4"}),Object(g.jsx)("th",{children:"Muokkaus"})]})}),Object(g.jsx)("tbody",{children:p.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.title}),Object(g.jsx)("td",{children:b.includes(e.id)?Object(g.jsx)(F,{taskId:e.id,handleNoteChange:l,note:n.filter((function(t){return t.task==e.id}))}):""})]},e.id)}))})]})]}):Object(g.jsx)("p",{children:"ei suorituksia"})]})},ee=function(e){var t=Object(V.g)(),a=Object(c.useState)(""),n=Object(i.a)(a,2),l=n[0],o=n[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),d=j[0],h=j[1],b=Object(c.useState)(""),p=Object(i.a)(b,2),O=p[0],x=p[1],v=Object(c.useState)(""),f=Object(i.a)(v,2),m=f[0],k=f[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),S=y[0],N=y[1],C=Object(c.useState)(""),T=Object(i.a)(C,2),F=T[0],I=T[1],L=Object(c.useState)(null),K=Object(i.a)(L,2),B=K[0],E=K[1],U=function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),O!==m){e.next=15;break}return e.prev=2,e.next=5,Z.register({username:l,firstname:S,lastname:F,email:d,password:O});case 5:e.sent,t.push("/login"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),a.preventDefault(),E("Virhe");case 13:e.next=17;break;case 15:E("Salasanat eiv\xe4t t\xe4sm\xe4\xe4"),a.preventDefault();case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{message:B}),Object(g.jsxs)("form",{className:"px-4 py-3",onSubmit:U,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"K\xe4ytt\xe4j\xe4nimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:l,onChange:function(e){var t=e.target;return o(t.value)},placeholder:"K\xe4ytt\xe4j\xe4nimi"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Etunimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:S,onChange:function(e){var t=e.target;return N(t.value)},placeholder:"Etunimi"}),Object(g.jsx)("label",{children:"Sukunimi"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:F,onChange:function(e){var t=e.target;return I(t.value)},placeholder:"Sukunimi"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"S\xe4hk\xf6posti"}),Object(g.jsx)("input",{type:"email",className:"form-control",value:d,onChange:function(e){var t=e.target;return h(t.value)},placeholder:"S\xe4hk\xf6posti"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Salasana"}),Object(g.jsx)("input",{type:"password",autoComplete:"new-password",className:"form-control",value:O,onChange:function(e){var t=e.target;return x(t.value)},placeholder:"Salasana"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Vahvista Salasana"}),Object(g.jsx)("input",{type:"password",autoComplete:"new-password",className:"form-control",value:m,onChange:function(e){var t=e.target;return k(t.value)},placeholder:"Vahvista salasana"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Rekister\xf6idy"})]})]})},te=a(109),ae=a.n(te),ne=function(e){var t=e.images;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:{display:"block",minHeight:"1px",width:"100%",border:"1px solid #ddd",overflow:"auto"}}),Object(g.jsx)(ae.a,{images:t,enableImageSelection:!1,enableLightbox:!1})]})},re=function(){return h.a.get("/api/tasks").then((function(e){return e.data}))},se=function(){return h.a.get("/api/images").then((function(e){return e.data}))},ie=a(23),ce=a.n(ie),le=a(243),oe=a(242),ue=a(30),je=a(84),de=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(null),o=Object(i.a)(l,2),u=o[0],j=o[1],d=Object(c.useState)([]),h=Object(i.a)(d,2),b=h[0],p=h[1],O=Object(c.useState)([]),x=Object(i.a)(O,2),v=x[0],f=x[1];function m(){return(m=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedBlogappUser"))){e.next=10;break}return e.next=4,JSON.parse(t);case 4:return a=e.sent,j(a.username),e.next=8,L();case 8:n=e.sent,p(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){w()}),[]);var S=function(e){window.localStorage.removeItem("loggedBlogappUser"),j(null),p([])},N=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return je.a.initialize("UA-200757435-1"),je.a.pageview(window.location.pathname+window.location.search),Object(g.jsxs)("div",{children:[Object(g.jsxs)(le.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(g.jsx)(le.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(le.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(oe.a,{className:"mr-auto",children:[Object(g.jsx)(oe.a.Link,{href:"#",as:"span",children:Object(g.jsx)(ue.b,{to:"/",className:"link",children:"Etusivu"})}),Object(g.jsx)(oe.a.Link,{href:"#",as:"span",children:Object(g.jsx)(ue.b,{to:"/tasks",className:"link",children:"Teht\xe4v\xe4t"})}),Object(g.jsx)(oe.a.Link,{href:"#",as:"span",children:Object(g.jsx)(ue.b,{to:"/user",className:"link",children:"Oma sivu"})}),Object(g.jsx)(oe.a.Link,{href:"#",as:"span",children:Object(g.jsx)(ue.b,{to:"/gallery",className:"link",children:"Galleria"})}),Object(g.jsx)(oe.a.Link,{href:"/user",as:"span",children:u?Object(g.jsxs)("em",{children:[u," kirjautunut ",Object(g.jsx)("button",{onClick:S,children:"Kirjaudu ulos"})]}):Object(g.jsx)(ue.b,{to:"/login",className:"link",children:"Kirjaudu"})})]})})]}),Object(g.jsxs)(V.d,{children:[Object(g.jsx)(V.b,{path:"/tasks",children:Object(g.jsx)(M,{tasks:a,user:u,notes:b,handleNoteChange:N})}),Object(g.jsx)(V.b,{path:"/user",children:u?Object(g.jsx)($,{notes:b,handleNoteChange:N,user:u,tasks:a}):Object(g.jsx)(V.a,{to:"/login"})}),Object(g.jsx)(V.b,{path:"/login",children:Object(g.jsx)(Y,{onLogin:function(e){w(),j(e)}})}),Object(g.jsx)(V.b,{path:"/register",children:Object(g.jsx)(ee,{})}),Object(g.jsx)(V.b,{path:"/gallery",children:Object(g.jsx)(ne,{images:v})}),Object(g.jsx)(V.b,{path:"/",children:Object(g.jsx)(q,{})})]}),Object(g.jsx)("div",{children:Object(g.jsx)("br",{})})]})};ce.a.render(Object(g.jsx)(ue.a,{children:Object(g.jsx)(de,{})}),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.50bb2ef5.chunk.js.map