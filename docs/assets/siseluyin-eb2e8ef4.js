/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as v,r as u,D as C,U as S,a0 as z,a3 as k,f as t,W as l,u as n,a6 as T,F as $,a7 as w,E as P}from"./vue-4ec1f53c.js";import{_ as x,a as q,b as E}from"./repeatpositioner-4dd15389.js";import{_ as R}from"./loading-ee00f445.js";import{l as M,_ as W}from"./repeatyintable-12c78725.js";import{a7 as j}from"./api-0902c31c.js";import{F as A,I as G,n as H,o as J,B as L,p as Q}from"./antDesignVue-408c3980.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./previewaudio-c278cd73.js";import"./axios-4a70c6fc.js";const X={key:0},Y={style:{"text-align":"right"},id:"bottomDom"},he={__name:"siseluyin",setup(Z){const f=v(),e=u({title:"",fenlei:"",currentPage:1,pageSizes:50}),s=u({data:[],total:0});let c=v("1");const i=()=>{c.value="1",s.total=0,s.data=[]},F=()=>{i(),f.value.resetFields(),e.currentPage=1,e.pageSizes=50,r()},p=a=>{i(),e.title=e.title.replace(/\s*/g,""),e.fenlei=e.fenlei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,r()};C(()=>{r()}),u([]);let D=u([{title:"标题",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"fenlei",key:"fenlei"},{title:"操作",width:600,align:"right",key:"siseluyin"}]);const O=M(),r=()=>{j(e).then(a=>{s.data=a.data.data,s.total=a.data.total,c.value="0",O.yinpinData=s.data.map(o=>({...o,state:!1}))})},B=a=>{K(a)},d=({page:a,pageSize:o})=>{i(),e.currentPage=a,e.pageSizes=o,r()},y=({current:a,size:o})=>{i(),e.currentPage=a,e.pageSizes=o},I=a=>{i(),e.currentPage=a,r()},V=a=>{switch(a){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},K=a=>{window.open(a,"_blank")};return(a,o)=>{const b=G,m=H,_=J,h=L,N=Q,U=A;return S(),z($,null,[k("div",null,[t(U,{id:"submitDom",model:n(e),ref_key:"formRef",ref:f,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:p},{default:l(()=>[t(N,null,{default:l(()=>[t(_,{span:6},{default:l(()=>[t(m,{label:"分 类",name:"fenlei"},{default:l(()=>[t(b,{value:n(e).fenlei,"onUpdate:value":o[0]||(o[0]=g=>n(e).fenlei=g),onKeydown:w(p,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(_,{span:6},{default:l(()=>[t(m,{label:"标 题",name:"title"},{default:l(()=>[t(b,{value:n(e).title,"onUpdate:value":o[1]||(o[1]=g=>n(e).title=g),onKeydown:w(p,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(_,{span:6},{default:l(()=>[t(m,{"wrapper-col":{offset:4,span:20}},{default:l(()=>[t(h,{type:"primary","html-type":"submit"},{default:l(()=>[P("提交")]),_:1}),t(h,{style:{"margin-left":"10px"},onClick:F},{default:l(()=>[P("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(x,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:d,onOnsizechange:y},null,8,["total","currentPage","pageSizes"]),n(s).data.length!==0?(S(),z("div",X,[t(W,{columns:n(D),onOntablecolumnurl:B},null,8,["columns"])])):T("",!0),t(R,{state:n(c)},null,8,["state"]),k("div",Y,[t(x,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:d,onOnsizechange:y},null,8,["total","currentPage","pageSizes"])]),t(q,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:I},null,8,["total","currentPage","pageSizes"]),t(E,{onOnTo:V})],64)}}};export{he as default};
