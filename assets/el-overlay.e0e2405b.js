var Oe=Object.defineProperty,De=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(e,n,t)=>n in e?Oe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,X=(e,n)=>{for(var t in n||(n={}))Ne.call(n,t)&&re(e,t,n[t]);if(le)for(var t of le(n))$e.call(n,t)&&re(e,t,n[t]);return e},ie=(e,n)=>De(e,Re(n));import{q as Ce,aP as He,x as he,P as ue,au as Me,av as ze,ak as te,aR as de,v as B,bE as ce,bC as Ve,bF as Ye,bD as Ue,bG as Be,E as se,al as _,s as I,B as Pe,C as fe,d as Se,O as Te,g as O,z as ne,aD as we,N as Ke,bH as Xe,r as H,be as Ge,a8 as je,D as w,bI as me,aH as We,y as Ze,H as z,aA as qe,o as c,I as k,w as h,aB as G,aM as ee,e as g,c as A,n as u,V as pe,U as L,t as V,as as j,at as W,X as ve,a6 as ge,h as Je,am as Qe,b4 as Z,an as Fe,aC as xe,bJ as ke,aO as ye}from"./index.d0fb449c.js";import{o as Ae,a as Le,E as _e,f as en}from"./el-button.29905add.js";import{g as nn,E as on,i as tn,b as sn}from"./el-input.287fab42.js";import{o as Ee}from"./aria2.aa6f333a.js";var q=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(q||{});const an=(e,n,t)=>{let l={offsetX:0,offsetY:0};const a=d=>{const p=d.clientX,S=d.clientY,{offsetX:E,offsetY:v}=l,i=e.value.getBoundingClientRect(),b=i.left,N=i.top,J=i.width,Q=i.height,C=document.documentElement.clientWidth,U=document.documentElement.clientHeight,F=-b+E,x=-N+v,T=C-b-J+E,P=U-N-Q+v,K=r=>{const f=Math.min(Math.max(E+r.clientX-p,F),T),m=Math.min(Math.max(v+r.clientY-S,x),P);l={offsetX:f,offsetY:m},e.value.style.transform=`translate(${ue(f)}, ${ue(m)})`},$=()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",$)};document.addEventListener("mousemove",K),document.addEventListener("mouseup",$)},s=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",a)},o=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",a)};Ce(()=>{He(()=>{t.value?s():o()})}),he(()=>{o()})},ln=e=>{if(Me(e)||ze("[useLockscreen]","You need to pass a ref param to this function"),!te||de(document.body,"el-popup-parent--hidden"))return;let n=0,t=!1,l="0",a=0;const s=()=>{Ue(document.body,"el-popup-parent--hidden"),t&&(document.body.style.paddingRight=l)};B(e,o=>{if(!o){s();return}t=!de(document.body,"el-popup-parent--hidden"),t&&(l=document.body.style.paddingRight,a=Number.parseInt(ce(document.body,"paddingRight"),10)),n=nn();const d=document.documentElement.clientHeight<document.body.scrollHeight,p=ce(document.body,"overflowY");n>0&&(d||p==="scroll")&&t&&(document.body.style.paddingRight=`${a+n}px`),Ve(document.body,"el-popup-parent--hidden")}),Ye(()=>s())},D=[],rn=e=>{D.length!==0&&e.code===se.esc&&(e.stopPropagation(),D[D.length-1].handleClose())},un=(e,n)=>{B(n,t=>{t?D.push(e):D.splice(D.indexOf(e),1)})};te&&Be(document,"keydown",rn);const dn=(e,n,t)=>{const l=s=>{t(s)&&s.stopImmediatePropagation()};let a;B(()=>e.value,s=>{s?a=Be(document,n,l,!0):a==null||a()},{immediate:!0})},cn=(e,n)=>{let t;B(()=>e.value,l=>{var a,s;l?(t=document.activeElement,Me(n)&&((s=(a=n.value).focus)==null||s.call(a))):t.focus()})},Ie=e=>{if(!e)return{onClick:_,onMousedown:_,onMouseup:_};let n=!1,t=!1;return{onClick:o=>{n&&t&&e(o),n=t=!1},onMousedown:o=>{n=o.target===o.currentTarget},onMouseup:o=>{t=o.target===o.currentTarget}}},oe="_trap-focus-children",M=[],be=e=>{if(M.length===0)return;const n=M[M.length-1][oe];if(n.length>0&&e.code===se.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,l=e.target===n[0],a=e.target===n[n.length-1];l&&t&&(e.preventDefault(),n[n.length-1].focus()),a&&!t&&(e.preventDefault(),n[0].focus())}},fn={beforeMount(e){e[oe]=Ee(e),M.push(e),M.length<=1&&Ae(document,"keydown",be)},updated(e){I(()=>{e[oe]=Ee(e)})},unmounted(){M.shift(),M.length===0&&Le(document,"keydown",be)}},mn=Pe({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:fe([String,Array,Object])},zIndex:{type:fe([String,Number])}}),pn={click:e=>e instanceof MouseEvent};var vn=Se({name:"ElOverlay",props:mn,emits:pn,setup(e,{slots:n,emit:t}){const l=Te("overlay"),a=p=>{t("click",p)},{onClick:s,onMousedown:o,onMouseup:d}=Ie(e.customMaskEvent?void 0:a);return()=>e.mask?O("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:o,onMouseup:d},[ne(n,"default")],q.STYLE|q.CLASS|q.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[ne(n,"default")])}});const gn=vn,yn=Se({name:"ElMessageBox",directives:{TrapFocus:fn},components:X({ElButton:_e,ElInput:on,ElOverlay:gn,ElIcon:Ke},Xe),inheritAttrs:!1,props:{buttonSize:{type:String,validator:tn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{t}=sn(),l=Te("message-box"),a=H(!1),{nextZIndex:s}=Ge(),o=je({beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:s()}),d=w(()=>{const r=o.type;return{[l.bm("icon",r)]:r&&me[r]}}),p=en(w(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),S=w(()=>o.icon||me[o.type]||""),E=w(()=>!!o.message),v=H(),i=H(),b=H(),N=H(),J=w(()=>o.confirmButtonClass);B(()=>o.inputValue,async r=>{await I(),e.boxType==="prompt"&&r!==null&&P()},{immediate:!0}),B(()=>a.value,r=>{r&&((e.boxType==="alert"||e.boxType==="confirm")&&I().then(()=>{var f,m,ae;(ae=(m=(f=N.value)==null?void 0:f.$el)==null?void 0:m.focus)==null||ae.call(m)}),o.zIndex=s()),e.boxType==="prompt"&&(r?I().then(()=>{b.value&&b.value.$el&&K().focus()}):(o.editorErrorMessage="",o.validateError=!1))});const Q=w(()=>e.draggable);an(v,i,Q),Ce(async()=>{await I(),e.closeOnHashChange&&Ae(window,"hashchange",C)}),he(()=>{e.closeOnHashChange&&Le(window,"hashchange",C)});function C(){!a.value||(a.value=!1,I(()=>{o.action&&n("action",o.action)}))}const U=()=>{e.closeOnClickModal&&T(o.distinguishCancelAndClose?"close":"cancel")},F=Ie(U),x=r=>{if(o.inputType!=="textarea")return r.preventDefault(),T("confirm")},T=r=>{var f;e.boxType==="prompt"&&r==="confirm"&&!P()||(o.action=r,o.beforeClose?(f=o.beforeClose)==null||f.call(o,r,o,C):C())},P=()=>{if(e.boxType==="prompt"){const r=o.inputPattern;if(r&&!r.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||t("el.messagebox.error"),o.validateError=!0,!1;const f=o.inputValidator;if(typeof f=="function"){const m=f(o.inputValue);if(m===!1)return o.editorErrorMessage=o.inputErrorMessage||t("el.messagebox.error"),o.validateError=!0,!1;if(typeof m=="string")return o.editorErrorMessage=m,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},K=()=>{const r=b.value.$refs;return r.input||r.textarea},$=()=>{T("close")};return e.closeOnPressEscape?un({handleClose:$},a):dn(a,"keydown",r=>r.code===se.esc),e.lockScroll&&ln(a),cn(a),ie(X({},We(o)),{ns:l,overlayEvent:F,visible:a,hasMessage:E,typeClass:d,btnSize:p,iconComponent:S,confirmButtonClasses:J,rootRef:v,headerRef:i,inputRef:b,confirmRef:N,doClose:C,handleClose:$,handleWrapperClick:U,handleInputEnter:x,handleAction:T,t})}}),En=["aria-label"],bn={key:0},Cn=["innerHTML"];function hn(e,n,t,l,a,s){const o=z("el-icon"),d=z("close"),p=z("el-input"),S=z("el-button"),E=z("el-overlay"),v=qe("trap-focus");return c(),k(Je,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=i=>e.$emit("vanish"))},{default:h(()=>[G(O(E,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h(()=>[g("div",{class:u(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...i)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...i)),onMousedown:n[9]||(n[9]=(...i)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...i)),onMouseup:n[10]||(n[10]=(...i)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...i))},[G((c(),A("div",{ref:"rootRef",role:"dialog","aria-label":e.title||"dialog","aria-modal":"true",class:u([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ve(e.customStyle),onClick:n[7]||(n[7]=W(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),A("div",{key:0,ref:"headerRef",class:u(e.ns.e("header"))},[g("div",{class:u(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),k(o,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:h(()=>[(c(),k(pe(e.iconComponent)))]),_:1},8,["class"])):L("v-if",!0),g("span",null,V(e.title),1)],2),e.showClose?(c(),A("button",{key:0,type:"button",class:u(e.ns.e("headerbtn")),"aria-label":"Close",onClick:n[0]||(n[0]=i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=j(W(i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[O(o,{class:u(e.ns.e("close"))},{default:h(()=>[O(d)]),_:1},8,["class"])],34)):L("v-if",!0)],2)):L("v-if",!0),g("div",{class:u(e.ns.e("content"))},[g("div",{class:u(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),k(o,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:h(()=>[(c(),k(pe(e.iconComponent)))]),_:1},8,["class"])):L("v-if",!0),e.hasMessage?(c(),A("div",{key:1,class:u(e.ns.e("message"))},[ne(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),A("p",{key:1,innerHTML:e.message},null,8,Cn)):(c(),A("p",bn,V(e.message),1))])],2)):L("v-if",!0)],2),G(g("div",{class:u(e.ns.e("input"))},[O(p,{ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=i=>e.inputValue=i),type:e.inputType,placeholder:e.inputPlaceholder,class:u({invalid:e.validateError}),onKeydown:j(e.handleInputEnter,["enter"])},null,8,["modelValue","type","placeholder","class","onKeydown"]),g("div",{class:u(e.ns.e("errormsg")),style:ve({visibility:e.editorErrorMessage?"visible":"hidden"})},V(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],2),g("div",{class:u(e.ns.e("btns"))},[e.showCancelButton?(c(),k(S,{key:0,loading:e.cancelButtonLoading,class:u([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=i=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=j(W(i=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:h(()=>[ge(V(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):L("v-if",!0),G(O(S,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:u([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=i=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=j(W(i=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:h(()=>[ge(V(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],14,En)),[[v]])],34)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var Mn=Ze(yn,[["render",hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const Y=new Map,Bn=(e,n,t=null)=>{const l=we(Mn,e);return l.appContext=t,ke(l,n),document.body.appendChild(n.firstElementChild),l.component},Sn=()=>document.createElement("div"),Tn=(e,n)=>{const t=Sn();e.onVanish=()=>{ke(null,t),Y.delete(a)},e.onAction=s=>{const o=Y.get(a);let d;e.showInput?d={value:a.inputValue,action:s}:d=s,e.callback?e.callback(d,l.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?o.reject("close"):o.reject("cancel"):o.resolve(d)};const l=Bn(e,t,n),a=l.proxy;for(const s in e)ye(e,s)&&!ye(a.$props,s)&&(a[s]=e[s]);return B(()=>a.message,(s,o)=>{Z(s)?l.slots.default=()=>[s]:Z(o)&&!Z(s)&&delete l.slots.default},{immediate:!0}),a.visible=!0,a};function R(e,n=null){if(!te)return Promise.reject();let t;return Qe(e)||Z(e)?e={message:e}:t=e.callback,new Promise((l,a)=>{const s=Tn(e,n!=null?n:R._context);Y.set(s,{options:e,callback:t,resolve:l,reject:a})})}const wn=["alert","confirm","prompt"],kn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};wn.forEach(e=>{R[e]=An(e)});function An(e){return(n,t,l,a)=>{let s;return Fe(t)?(l=t,s=""):xe(t)?s="":s=t,R(Object.assign(X({title:s,message:n,type:""},kn[e]),l,{boxType:e}),a)}}R.close=()=>{Y.forEach((e,n)=>{n.doClose()}),Y.clear()};R._context=null;const y=R;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const Nn=y;export{Nn as E,fn as T,un as a,cn as b,gn as c,ln as u};
