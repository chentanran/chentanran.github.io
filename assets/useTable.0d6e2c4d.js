var z=Object.defineProperty,x=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(t,e,r)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))v.call(e,r)&&b(t,r,e[r]);if(w)for(var r of w(e))B.call(e,r)&&b(t,r,e[r]);return t},h=(t,e)=>x(t,T(e));import{a8 as D,D as k,v as L,r as S,a as y,a$ as O,bB as p,k as A,s as C}from"./index.a0c7f9d4.js";import{E}from"./el-overlay.ceab73b5.js";import"./el-button.d4c4db84.js";const{t:n}=A(),W=t=>{const e=D({pageSize:10,currentPage:1,total:10,tableList:[],paramsObj:{},loading:!0,currentRow:null}),r=k(()=>({params:h(u({},e.paramsObj.params),{pageSize:e.pageSize,pageIndex:e.currentPage})}));L(()=>e.currentPage,()=>{l.getList()}),L(()=>e.pageSize,()=>{e.currentPage=1,l.getList()});const m=S(),i=S(),j=(a,s)=>{m.value=a,i.value=s},c=async()=>{await C();const a=y(m);return a||console.error("The table is not registered. Please use the register method to register"),a},d=async(a,s)=>{if(await((t==null?void 0:t.delListApi)&&(t==null?void 0:t.delListApi(a)))){p.success(n("common.delSuccess"));const o=(e.total%e.pageSize===s.length||e.pageSize===1)&&e.currentPage>1?e.currentPage-1:e.currentPage;e.currentPage=o,l.getList()}},l={getList:async()=>{var s;e.loading=!0;const a=await(t==null?void 0:t.getListApi(y(r)).catch(()=>{}).finally(()=>{e.loading=!1}));a&&(e.tableList=O(a.data||{},t==null?void 0:t.response.list),e.total=O(a.data||{},(s=t==null?void 0:t.response)==null?void 0:s.total)||0)},setProps:async(a={})=>{const s=await c();s==null||s.setProps(a)},setColumn:async a=>{const s=await c();s==null||s.setColumn(a)},getSelection:async()=>{const a=await c();return(a==null?void 0:a.selections)||[]},setSearchParams:a=>{e.currentPage=1,e.paramsObj=Object.assign(e.paramsObj,{params:u({pageSize:e.pageSize,pageIndex:e.currentPage},a)}),l.getList()},delList:async(a,s,g=!0)=>{const o=await c();if(s){if(!(o!=null&&o.selections.length)){p.warning(n("common.delNoData"));return}}else if(!e.currentRow){p.warning(n("common.delNoData"));return}const P={data:{ids:a}};g?E.confirm(n("common.delMessage"),n("common.delWarning"),{confirmButtonText:n("common.delOk"),cancelButtonText:n("common.delCancel"),type:"warning"}).then(async()=>{await d(P,a)}).catch(()=>{}):await d(P,a)}};return t!=null&&t.props&&l.setProps(t.props),{register:j,elTableRef:i,tableObject:e,methods:l}};export{W as u};
