import{S as Ve,i as ye,s as Le,k as R,q as H,a as F,l as V,m as L,r as Q,h as p,c as G,n as y,b as N,G as h,u as ue,v as ie,d as S,f as fe,g as M,o as Me,y as ee,z as te,A as se,H as z,B as re,e as ce,W as Se,t as Pe,w as oe,N as ne,Q as ae,a8 as me,Z as he,R as Ce,U as ge,$ as Be}from"../chunks/index.fdf84907.js";import{B as Ne,C as We,D as Te,v as Oe,e as ve,E as je,G as Fe}from"../chunks/dataFetching.f2a9713f.js";import{c as Ge,a as He,I as Qe}from"../chunks/Input.78a87232.js";import{B as Ae}from"../chunks/Button.80ee52cd.js";import{L as ze}from"../chunks/Loading.56028b8e.js";import{W as Ke}from"../chunks/WebauthnRequest.4fa59eab.js";import{d as we}from"../chunks/Loading.a4841b1e.js";import{P as Ue}from"../chunks/PasswordInput.969a95d0.js";import{B as Je}from"../chunks/BrowserCheck.ea95e5bb.js";function Ze(r){let e,t;return e=new ze({props:{background:!1,offset:"170"}}),{c(){ee(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,l){se(e,s,l),t=!0},p:z,i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Xe(r){let e,t;return{c(){e=R("div"),t=H(r[1]),this.h()},l(s){e=V(s,"DIV",{class:!0});var l=L(e);t=Q(l,r[1]),l.forEach(p),this.h()},h(){y(e,"class","err svelte-1lxqxrg")},m(s,l){N(s,e,l),h(e,t)},p(s,l){l&2&&ue(t,s[1])},i:z,o:z,d(s){s&&p(e)}}}function Ye(r){let e,t;return{c(){e=R("div"),t=H("Acknowledged"),this.h()},l(s){e=V(s,"DIV",{class:!0});var l=L(e);t=Q(l,"Acknowledged"),l.forEach(p),this.h()},h(){y(e,"class","good svelte-1lxqxrg")},m(s,l){N(s,e,l),h(e,t)},p:z,i:z,o:z,d(s){s&&p(e)}}}function $e(r){let e,t,s,l,u,o,n,a,g,m,f,D,P=r[0].req_id+"",K,W,E,b,O,U,j,I=new Date(r[0].exp).toString()+"",d,v,J,T,B,q;const x=[Ye,Xe,Ze],C=[];function le(w,k){return w[2]?0:w[1]?1:2}return T=le(r),B=C[T]=x[T](r),{c(){e=R("div"),t=R("div"),s=R("div"),l=R("div"),u=R("div"),o=H("Awaiting MFA request confirmation"),n=F(),a=R("div"),g=R("div"),m=H("Request ID:"),f=F(),D=R("div"),K=H(P),W=F(),E=R("div"),b=R("div"),O=H("Request expires:"),U=F(),j=R("div"),d=H(I),v=F(),J=R("div"),B.c(),this.h()},l(w){e=V(w,"DIV",{class:!0});var k=L(e);t=V(k,"DIV",{class:!0});var i=L(t);s=V(i,"DIV",{class:!0});var c=L(s);l=V(c,"DIV",{class:!0});var Z=L(l);u=V(Z,"DIV",{class:!0});var Y=L(u);o=Q(Y,"Awaiting MFA request confirmation"),Y.forEach(p),Z.forEach(p),n=G(c),a=V(c,"DIV",{class:!0});var $=L(a);g=V($,"DIV",{class:!0});var _=L(g);m=Q(_,"Request ID:"),_.forEach(p),f=G($),D=V($,"DIV",{});var A=L(D);K=Q(A,P),A.forEach(p),$.forEach(p),W=G(c),E=V(c,"DIV",{class:!0});var X=L(E);b=V(X,"DIV",{class:!0});var de=L(b);O=Q(de,"Request expires:"),de.forEach(p),U=G(X),j=V(X,"DIV",{});var _e=L(j);d=Q(_e,I),_e.forEach(p),X.forEach(p),v=G(c),J=V(c,"DIV",{class:!0});var pe=L(J);B.l(pe),pe.forEach(p),c.forEach(p),i.forEach(p),k.forEach(p),this.h()},h(){y(u,"class","contentHeader svelte-1lxqxrg"),y(l,"class","contentRow svelte-1lxqxrg"),y(g,"class","contentHeader svelte-1lxqxrg"),y(a,"class","contentRow svelte-1lxqxrg"),y(b,"class","contentHeader svelte-1lxqxrg"),y(E,"class","contentRow svelte-1lxqxrg"),y(J,"class","contentRow svelte-1lxqxrg"),y(s,"class","content svelte-1lxqxrg"),y(t,"class","wrapperInner svelte-1lxqxrg"),y(e,"class","wrapperOuter svelte-1lxqxrg")},m(w,k){N(w,e,k),h(e,t),h(t,s),h(s,l),h(l,u),h(u,o),h(s,n),h(s,a),h(a,g),h(g,m),h(a,f),h(a,D),h(D,K),h(s,W),h(s,E),h(E,b),h(b,O),h(E,U),h(E,j),h(j,d),h(s,v),h(s,J),C[T].m(J,null),q=!0},p(w,[k]){(!q||k&1)&&P!==(P=w[0].req_id+"")&&ue(K,P),(!q||k&1)&&I!==(I=new Date(w[0].exp).toString()+"")&&ue(d,I);let i=T;T=le(w),T===i?C[T].p(w,k):(ie(),S(C[i],1,1,()=>{C[i]=null}),fe(),B=C[T],B?B.p(w,k):(B=C[T]=x[T](w),B.c()),M(B,1),B.m(J,null))},i(w){q||(M(B),q=!0)},o(w){S(B),q=!1},d(w){w&&p(e),C[T].d()}}}function xe(r,e,t){let{req:s={}}=e,l="",u=!1;return Me(async()=>{const o=new EventSource(`${s.url}/${s.req_id}/${s.code}`);o.onmessage=n=>{let a=n.data;if(a.includes("ACK")){l&&t(1,l="");let g=n.data.split("ACK")[1].trim();const m=JSON.parse(g);s.req_id===m.req_id?(t(2,u=!0),window.location.href=m.loc):t(1,l="MFA Request ACK was poisoned - this must never happen")}else a.includes("REJECTED")&&t(1,l="The MFA request was rejected");o.close()},o.onerror=n=>{console.error(n),t(1,l="Internal Server Error - Please try again"),setTimeout(()=>{t(0,s=void 0)},3e3)}}),r.$$set=o=>{"req"in o&&t(0,s=o.req)},[s,l,u]}class et extends Ve{constructor(e){super(),ye(this,e,xe,$e,Le,{req:0})}}function tt(r){return document.title="Login "+r[0],{c:z,l:z,m:z,d:z}}function st(r){return document.title="Login "+r[4],{c:z,l:z,m:z,d:z}}function be(r){let e,t;return{c(){e=R("img"),this.h()},l(s){e=V(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){y(e,"class","logo svelte-1f2u041"),me(e.src,t=r[3])||y(e,"src",t),y(e,"alt","Client Logo")},m(s,l){N(s,e,l)},p(s,l){l[0]&8&&!me(e.src,t=s[3])&&y(e,"src",t)},d(s){s&&p(e)}}}function qe(r){let e,t,s;function l(o){r[25](o)}let u={};return r[5]!==void 0&&(u.req=r[5]),e=new et({props:u}),oe.push(()=>ne(e,"req",l)),{c(){ee(e.$$.fragment)},l(o){te(e.$$.fragment,o)},m(o,n){se(e,o,n),s=!0},p(o,n){const a={};!t&&n[0]&32&&(t=!0,a.req=o[5],ae(()=>t=!1)),e.$set(a)},i(o){s||(M(e.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),s=!1},d(o){re(e,o)}}}function ke(r){let e,t,s;function l(o){r[26](o)}let u={onSuccess:ct,onError:r[15]};return r[6]!==void 0&&(u.data=r[6]),e=new Ke({props:u}),oe.push(()=>ne(e,"data",l)),{c(){ee(e.$$.fragment)},l(o){te(e.$$.fragment,o)},m(o,n){se(e,o,n),s=!0},p(o,n){const a={};!t&&n[0]&64&&(t=!0,a.data=o[6],ae(()=>t=!1)),e.$set(a)},i(o){s||(M(e.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),s=!1},d(o){re(e,o)}}}function rt(r){let e;return{c(){e=H("E-MAIL")},l(t){e=Q(t,"E-MAIL")},m(t,s){N(t,e,s)},d(t){t&&p(e)}}}function Ee(r){let e,t,s,l,u,o;function n(f){r[29](f)}function a(f){r[30](f)}let g={name:"rauthyPassword",autocomplete:"current-password",placeholder:"Password",$$slots:{default:[lt]},$$scope:{ctx:r}};r[11].password!==void 0&&(g.value=r[11].password),r[12].password!==void 0&&(g.error=r[12].password),e=new Ue({props:g}),oe.push(()=>ne(e,"value",n)),oe.push(()=>ne(e,"error",a)),e.$on("enter",r[14]);let m=r[10]&&Ie(r);return{c(){ee(e.$$.fragment),l=F(),m&&m.c(),u=ce()},l(f){te(e.$$.fragment,f),l=G(f),m&&m.l(f),u=ce()},m(f,D){se(e,f,D),N(f,l,D),m&&m.m(f,D),N(f,u,D),o=!0},p(f,D){const P={};D[1]&32&&(P.$$scope={dirty:D,ctx:f}),!t&&D[0]&2048&&(t=!0,P.value=f[11].password,ae(()=>t=!1)),!s&&D[0]&4096&&(s=!0,P.error=f[12].password,ae(()=>s=!1)),e.$set(P),f[10]?m?(m.p(f,D),D[0]&1024&&M(m,1)):(m=Ie(f),m.c(),M(m,1),m.m(u.parentNode,u)):m&&(ie(),S(m,1,1,()=>{m=null}),fe())},i(f){o||(M(e.$$.fragment,f),M(m),o=!0)},o(f){S(e.$$.fragment,f),S(m),o=!1},d(f){re(e,f),f&&p(l),m&&m.d(f),f&&p(u)}}}function lt(r){let e;return{c(){e=H("PASSWORD")},l(t){e=Q(t,"PASSWORD")},m(t,s){N(t,e,s)},d(t){t&&p(e)}}}function Ie(r){let e,t,s,l,u,o;return{c(){e=R("div"),t=H("Password forgotten?"),this.h()},l(n){e=V(n,"DIV",{class:!0});var a=L(e);t=Q(a,"Password forgotten?"),a.forEach(p),this.h()},h(){y(e,"class","forgotten svelte-1f2u041")},m(n,a){N(n,e,a),h(e,t),l=!0,u||(o=[he(e,"click",r[13]),he(e,"keypress",r[13])],u=!0)},p:z,i(n){l||(Ce(()=>{l&&(s||(s=ge(e,we,{},!0)),s.run(1))}),l=!0)},o(n){s||(s=ge(e,we,{},!1)),s.run(0),l=!1},d(n){n&&p(e),n&&s&&s.end(),u=!1,Be(o)}}}function ot(r){let e,t,s,l;function u(n){r[31](n)}let o={$$slots:{default:[at]},$$scope:{ctx:r}};return r[7]!==void 0&&(o.isLoading=r[7]),t=new Ae({props:o}),oe.push(()=>ne(t,"isLoading",u)),t.$on("click",r[14]),{c(){e=R("div"),ee(t.$$.fragment),this.h()},l(n){e=V(n,"DIV",{class:!0});var a=L(e);te(t.$$.fragment,a),a.forEach(p),this.h()},h(){y(e,"class","btn svelte-1f2u041")},m(n,a){N(n,e,a),se(t,e,null),l=!0},p(n,a){const g={};a[1]&32&&(g.$$scope={dirty:a,ctx:n}),!s&&a[0]&128&&(s=!0,g.isLoading=n[7],ae(()=>s=!1)),t.$set(g)},i(n){l||(M(t.$$.fragment,n),l=!0)},o(n){S(t.$$.fragment,n),l=!1},d(n){n&&p(e),re(t)}}}function nt(r){let e,t,s;return t=new Ae({props:{$$slots:{default:[it]},$$scope:{ctx:r}}}),t.$on("click",r[16]),{c(){e=R("div"),ee(t.$$.fragment),this.h()},l(l){e=V(l,"DIV",{class:!0});var u=L(e);te(t.$$.fragment,u),u.forEach(p),this.h()},h(){y(e,"class","btn svelte-1f2u041")},m(l,u){N(l,e,u),se(t,e,null),s=!0},p(l,u){const o={};u[1]&32&&(o.$$scope={dirty:u,ctx:l}),t.$set(o)},i(l){s||(M(t.$$.fragment,l),s=!0)},o(l){S(t.$$.fragment,l),s=!1},d(l){l&&p(e),re(t)}}}function at(r){let e;return{c(){e=H("LOGIN")},l(t){e=Q(t,"LOGIN")},m(t,s){N(t,e,s)},d(t){t&&p(e)}}}function it(r){let e;return{c(){e=H("REQUEST")},l(t){e=Q(t,"REQUEST")},m(t,s){N(t,e,s)},d(t){t&&p(e)}}}function De(r){let e,t;return{c(){e=R("div"),t=H(r[8]),this.h()},l(s){e=V(s,"DIV",{class:!0});var l=L(e);t=Q(l,r[8]),l.forEach(p),this.h()},h(){y(e,"class","errMsg errMsgApi svelte-1f2u041")},m(s,l){N(s,e,l),h(e,t)},p(s,l){l[0]&256&&ue(t,s[8])},d(s){s&&p(e)}}}function Re(r){let e,t;return{c(){e=R("div"),t=H("If your E-Mail exists, a request has been sent"),this.h()},l(s){e=V(s,"DIV",{class:!0});var l=L(e);t=Q(l,"If your E-Mail exists, a request has been sent"),l.forEach(p),this.h()},h(){y(e,"class","success svelte-1f2u041")},m(s,l){N(s,e,l),h(e,t)},d(s){s&&p(e)}}}function ft(r){let e,t,s,l,u,o,n,a,g,m,f,D,P,K,W,E,b,O,U,j,I=r[3]&&be(r),d=r[5]&&qe(r),v=r[6]&&ke(r);function J(i){r[27](i)}function T(i){r[28](i)}let B={type:"email",name:"rauthyEmail",autocomplete:"email",placeholder:"E-Mail",$$slots:{default:[rt]},$$scope:{ctx:r}};r[11].email!==void 0&&(B.value=r[11].email),r[12].email!==void 0&&(B.error=r[12].email),f=new Qe({props:B}),oe.push(()=>ne(f,"value",J)),oe.push(()=>ne(f,"error",T)),f.$on("enter",r[14]);let q=r[1]!==r[11].email&&!r[9]&&Ee(r);const x=[nt,ot],C=[];function le(i,c){return i[9]?0:1}E=le(r),b=C[E]=x[E](r);let w=r[8]&&De(r),k=r[2]&&Re();return{c(){e=R("div"),t=R("div"),s=R("div"),I&&I.c(),l=F(),u=R("div"),o=R("h2"),n=H(r[4]),a=F(),d&&d.c(),g=F(),v&&v.c(),m=F(),ee(f.$$.fragment),K=F(),q&&q.c(),W=F(),b.c(),O=F(),w&&w.c(),U=F(),k&&k.c(),this.h()},l(i){e=V(i,"DIV",{class:!0});var c=L(e);t=V(c,"DIV",{class:!0});var Z=L(t);s=V(Z,"DIV",{class:!0});var Y=L(s);I&&I.l(Y),Y.forEach(p),Z.forEach(p),l=G(c),u=V(c,"DIV",{class:!0});var $=L(u);o=V($,"H2",{});var _=L(o);n=Q(_,r[4]),_.forEach(p),$.forEach(p),a=G(c),d&&d.l(c),g=G(c),v&&v.l(c),m=G(c),te(f.$$.fragment,c),K=G(c),q&&q.l(c),W=G(c),b.l(c),O=G(c),w&&w.l(c),U=G(c),k&&k.l(c),c.forEach(p),this.h()},h(){y(s,"class","logo svelte-1f2u041"),y(t,"class","head svelte-1f2u041"),y(u,"class","name svelte-1f2u041"),y(e,"class","container svelte-1f2u041")},m(i,c){N(i,e,c),h(e,t),h(t,s),I&&I.m(s,null),h(e,l),h(e,u),h(u,o),h(o,n),h(e,a),d&&d.m(e,null),h(e,g),v&&v.m(e,null),h(e,m),se(f,e,null),h(e,K),q&&q.m(e,null),h(e,W),C[E].m(e,null),h(e,O),w&&w.m(e,null),h(e,U),k&&k.m(e,null),j=!0},p(i,c){i[3]?I?I.p(i,c):(I=be(i),I.c(),I.m(s,null)):I&&(I.d(1),I=null),(!j||c[0]&16)&&ue(n,i[4]),i[5]?d?(d.p(i,c),c[0]&32&&M(d,1)):(d=qe(i),d.c(),M(d,1),d.m(e,g)):d&&(ie(),S(d,1,1,()=>{d=null}),fe()),i[6]?v?(v.p(i,c),c[0]&64&&M(v,1)):(v=ke(i),v.c(),M(v,1),v.m(e,m)):v&&(ie(),S(v,1,1,()=>{v=null}),fe());const Z={};c[1]&32&&(Z.$$scope={dirty:c,ctx:i}),!D&&c[0]&2048&&(D=!0,Z.value=i[11].email,ae(()=>D=!1)),!P&&c[0]&4096&&(P=!0,Z.error=i[12].email,ae(()=>P=!1)),f.$set(Z),i[1]!==i[11].email&&!i[9]?q?(q.p(i,c),c[0]&2562&&M(q,1)):(q=Ee(i),q.c(),M(q,1),q.m(e,W)):q&&(ie(),S(q,1,1,()=>{q=null}),fe());let Y=E;E=le(i),E===Y?C[E].p(i,c):(ie(),S(C[Y],1,1,()=>{C[Y]=null}),fe(),b=C[E],b?b.p(i,c):(b=C[E]=x[E](i),b.c()),M(b,1),b.m(e,O)),i[8]?w?w.p(i,c):(w=De(i),w.c(),w.m(e,U)):w&&(w.d(1),w=null),i[2]?k||(k=Re(),k.c(),k.m(e,null)):k&&(k.d(1),k=null)},i(i){j||(M(d),M(v),M(f.$$.fragment,i),M(q),M(b),j=!0)},o(i){S(d),S(v),S(f.$$.fragment,i),S(q),S(b),j=!1},d(i){i&&p(e),I&&I.d(),d&&d.d(),v&&v.d(),re(f),q&&q.d(),C[E].d(),w&&w.d(),k&&k.d()}}}function ut(r){let e,t,s,l;function u(a,g){return a[4]?st:tt}let o=u(r),n=o(r);return s=new Je({props:{$$slots:{default:[ft]},$$scope:{ctx:r}}}),{c(){n.c(),e=ce(),t=F(),ee(s.$$.fragment)},l(a){const g=Se("svelte-e06m6b",document.head);n.l(g),e=ce(),g.forEach(p),t=G(a),te(s.$$.fragment,a)},m(a,g){n.m(document.head,null),h(document.head,e),N(a,t,g),se(s,a,g),l=!0},p(a,g){o!==(o=u(a))&&(n.d(1),n=o(a),n&&(n.c(),n.m(e.parentNode,e)));const m={};g[0]&8190|g[1]&32&&(m.$$scope={dirty:g,ctx:a}),s.$set(m)},i(a){l||(M(s.$$.fragment,a),l=!0)},o(a){S(s.$$.fragment,a),l=!1},d(a){n.d(a),p(e),a&&p(t),re(s,a)}}}function ct(r){r&&window.location.replace(r.loc)}function dt(r,e,t){let s,l,u="",o="",n="",a=[],g,m,f,D="",P=!1,K,W,E,b=!1,O="",U=!1,j=!1,I=!1,d={email:"",password:""},v={};const J=Ge().shape({email:He().required("E-Mail is required").email("Bad E-Mail format")});Me(async()=>{t(4,u=window.document.getElementsByName("rauthy-data")[0].id);const _=window.document.getElementsByName("rauthy-action")[0].id;_==="Refresh"?t(24,P=!0):_!=null&&_.startsWith("MfaLogin ")&&t(1,W=_.replace("MfaLogin ","")),t(23,D=window.document.getElementsByName("rauthy-csrf-token")[0].id),Ne(D);const A=We();t(0,s=A.client_id),t(17,o=A.redirect_uri),t(18,n=A.nonce),t(19,a=A.scope.split(" ")),t(20,g=A.state),t(21,m=A.code_challenge),t(22,f=A.code_challenge_method)});async function T(_){let A=await Oe(_);if(A.ok)t(3,l=await A.text());else{let X=await A.json();t(8,O=X.message)}}function B(){t(8,O=""),t(9,U=!0),t(11,d.password="",d)}async function q(){try{await J.validate(d,{abortEarly:!1}),t(12,v={})}catch(X){t(12,v=ve(X));return}const _={email:d.email,client_id:s,redirect_uri:o,state:g,code_challenge:m,code_challenge_method:f,nonce:n,scopes:a};if(d.email!==W){if(!d.password){t(12,v.password="Password is required",v);return}_.password=d.password}t(7,b=!0);let A=await je(_);await x(A)}async function x(_){_.status===202?window.location.replace(_.headers.get("location")):_.status===200?(t(8,O=""),t(7,b=!1),t(6,E=await _.json())):(t(8,O="Invalid credentials"),t(7,b=!1),t(10,j=!0))}function C(){t(6,E=void 0)}async function le(){try{await J.validate(d,{abortEarly:!1}),t(12,v={})}catch(X){t(12,v=ve(X));return}let _={email:d.email};t(7,b=!0);let A=await Fe(_);if(A.ok)t(2,I=!0);else{let X=await A.json();t(8,O=X.message)}t(7,b=!1)}function w(_){K=_,t(5,K)}function k(_){E=_,t(6,E)}function i(_){r.$$.not_equal(d.email,_)&&(d.email=_,t(11,d),t(1,W))}function c(_){r.$$.not_equal(v.email,_)&&(v.email=_,t(12,v))}function Z(_){r.$$.not_equal(d.password,_)&&(d.password=_,t(11,d),t(1,W))}function Y(_){r.$$.not_equal(v.password,_)&&(v.password=_,t(12,v))}function $(_){b=_,t(7,b),t(24,P),t(0,s),t(17,o),t(20,g),t(21,m),t(22,f),t(18,n),t(19,a),t(23,D)}return r.$$.update=()=>{if(r.$$.dirty[0]&33423361&&P&&(s==null?void 0:s.length)>0&&(o==null?void 0:o.length)>0){t(7,b=!0);const _={client_id:s,redirect_uri:o,state:g,code_challenge:m,code_challenge_method:f,nonce:n,scopes:a};Pe().then(()=>Te(_).then(A=>x(A)))}r.$$.dirty[0]&2&&W&&t(11,d.email=W,d),r.$$.dirty[0]&4&&I&&setTimeout(()=>{t(2,I=!1),t(9,U=!1),t(10,j=!1)},3e3),r.$$.dirty[0]&1&&s&&T(s)},[s,W,I,l,u,K,E,b,O,U,j,d,v,B,q,C,le,o,n,a,g,m,f,D,P,w,k,i,c,Z,Y,$]}class kt extends Ve{constructor(e){super(),ye(this,e,dt,ut,Le,{},null,[-1,-1])}}export{kt as component};
