var u=Object.defineProperty;var h=(o,t,n)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var l=(o,t,n)=>(h(o,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();class p{constructor(){l(this,"status");l(this,"containerElement");l(this,"titleElement");l(this,"usernameElement");l(this,"passwordElement");l(this,"usernameInputElement");l(this,"passwordInputElement");l(this,"buttonElement");l(this,"textAreaElement");this.containerElement=document.createElement("div")}setDomNode(){this.status=!0,this.containerElement=document.createElement("div"),this.titleElement=document.createElement("p"),this.usernameElement=document.createElement("label"),this.passwordElement=document.createElement("label"),this.usernameInputElement=document.createElement("input"),this.passwordInputElement=document.createElement("input"),this.underElement=document.createElement("div"),this.buttonElement=document.createElement("button"),this.textAreaElement=document.createElement("p"),this.usernameInputElement.id="usernameInput",this.passwordInputElement.id="passwordInput",this.buttonElement.id="submitButton",this.containerElement.className="card-container",this.titleElement.className="title-class",this.usernameElement.className="label-class",this.passwordElement.className="label-class",this.usernameInputElement.className="input-class",this.passwordInputElement.className="input-class",this.textAreaElement.className="link-class",this.titleElement.innerText="로그인",this.usernameElement.innerText="username",this.passwordElement.innerText="password",this.buttonElement.innerText="login",this.textAreaElement.innerHTML='아직 회원이 아니신가요? <a class="text-area" href="#">회원가입</a>하기',this.textAreaElement.addEventListener("click",()=>{this.status?(this.status=!1,this.convertSignUp()):(this.status=!0,this.convertLogIn())}),this.buttonElement.addEventListener("click",n=>{n.preventDefault(),this.status?window.location.href="/mainPage.html":this.createFontModal(["Share","Share2","Gulim","GaramFlower","Gomshinche","Ttobagttobag","Bareunjeongsin","Okbiche"])});let t=[this.titleElement,this.usernameElement,this.usernameInputElement,this.passwordElement,this.passwordInputElement,this.buttonElement,this.textAreaElement];this.containerElement.append(...t)}convertSignUp(){this.titleElement.innerText="회원가입",this.buttonElement.innerText="register",this.textAreaElement.innerHTML='회원이신가요? <a class="text-area" href="#">로그인</a>하기'}convertLogIn(){this.titleElement.innerText="로그인",this.buttonElement.innerText="login",this.textAreaElement.innerHTML='아직 회원이 아니신가요? <a class="text-area" href="#">회원가입</a>하기'}render(){this.setDomNode(),document.getElementById("wrapper").appendChild(this.containerElement)}updateFontPreview(){var t=document.getElementById("fontSelect").value,n="30px "+t,s=document.getElementById("fontPreviewCanvas"),e=s.getContext("2d");e.clearRect(0,0,s.width,s.height),e.font=n,e.fillStyle="#000",e.fillText("선택된 폰트입니다.",10,50)}createFontModal(t){var n=document.createElement("select");n.setAttribute("id","fontSelect");var s=document.createElement("canvas");s.width=500,s.height=100,s.id="fontPreviewCanvas";var e=document.createElement("button");e.innerText="폰트 선택",n.classList.add("font-select"),s.classList.add("font-preview-canvas"),e.classList.add("font-select-button"),t.forEach(function(i){var c=document.createElement("option");c.value=i,c.text=i,n.appendChild(c)});var a=document.createElement("div");a.classList.add("modal");var r=document.createElement("div");r.classList.add("modal-content");var d=document.createElement("h2");d.innerText="폰트 선택",n.addEventListener("change",()=>{var i=n.value,c="30px "+i,m=s.getContext("2d");m.clearRect(0,0,s.width,s.height),m.font=c,m.fillStyle="#000",m.fillText("선택된 폰트입니다.",10,50)}),r.appendChild(d),r.appendChild(n),r.appendChild(s),r.appendChild(e),a.appendChild(r),document.body.appendChild(a),window.onclick=function(i){i.target==a&&a.remove()},e.onclick=function(){var i=n.value;localStorage.setItem("font",i),a.remove(),alert("선택된 폰트: "+i)}}}const E=[new FontFace("Share","url(Fonts/Share.ttf)"),new FontFace("Share2","url(Fonts/Share2.ttf)"),new FontFace("Gulim","url(Fonts/Gulim.ttf)"),new FontFace("GaramFlower","url(Fonts/GaramFlower.ttf)"),new FontFace("Gomshinche","url(Fonts/Gomshinche.ttf)"),new FontFace("Ttobagttobag","url(Fonts/Ttobagttobag.ttf)"),new FontFace("Okbiche","url(Fonts/Okbiche.ttf)"),new FontFace("Bareunjeongsin","url(Fonts/Bareunjeongsin.ttf)")];E.forEach(o=>{o.load().then(t=>{document.fonts.add(t)})});const f=new p;f.render();
