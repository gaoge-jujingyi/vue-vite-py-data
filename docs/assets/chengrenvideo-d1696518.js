/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as z,r as u,D as T,U as k,a0 as y,a3 as P,f as a,W as l,u as t,a6 as j,F as q,a7 as E,E as w}from"./vue-4ec1f53c.js";import{_ as x,a as M,b as R}from"./repeatpositioner-4dd15389.js";import{_ as W}from"./loading-ee00f445.js";import{_ as A}from"./repeattable-9e60b802.js";import{_ as G}from"./previewvideo-8440aa41.js";import{u as H}from"./api-0902c31c.js";import{F as J,m as L,I as Q,n as X,o as Y,B as Z,p as ee}from"./antDesignVue-408c3980.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-4f5d1037.js";import"./axios-4a70c6fc.js";const te={key:0},ae={style:{"text-align":"right"},id:"bottomDom"},xe={__name:"chengrenvideo",setup(oe){const _=z(),e=u({title:"",currentPage:1,pageSizes:50}),n=u({data:[],total:0});let m=z("1");const i=()=>{m.value="1",n.total=0,n.data=[]},F=()=>{i(),_.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},g=o=>{i(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};T(()=>{c()});let d=u([]),O=u([{title:"封面",dataIndex:"bj",key:"bj"},{title:"标题",dataIndex:"title",key:"title"},{title:"操作",width:220,key:"actionvideo"}]);const c=()=>{H(e).then(o=>{n.data=o.data.data,n.total=o.data.total,m.value="0",d=n.data})},B=o=>{r.state=!0,r.url=o,r.title="播放视频"},r=u({state:!1,title:"",url:""}),D=()=>{r.url=""},f=({page:o,pageSize:s})=>{i(),e.currentPage=o,e.pageSizes=s,c()},b=({current:o,size:s})=>{i(),e.currentPage=o,e.pageSizes=s},I=o=>{i(),e.currentPage=o,c()},V=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},C=o=>{window.open(o,"_blank")};return(o,s)=>{const N=Q,h=X,v=Y,S=Z,U=ee,$=J,K=L;return k(),y(q,null,[P("div",null,[a($,{id:"submitDom",model:t(e),ref_key:"formRef",ref:_,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:g},{default:l(()=>[a(U,null,{default:l(()=>[a(v,{span:6},{default:l(()=>[a(h,{label:"标 题",name:"title"},{default:l(()=>[a(N,{value:t(e).title,"onUpdate:value":s[0]||(s[0]=p=>t(e).title=p),onKeydown:E(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(v,{span:6},{default:l(()=>[a(h,{"wrapper-col":{offset:4,span:20}},{default:l(()=>[a(S,{type:"primary","html-type":"submit"},{default:l(()=>[w("提交")]),_:1}),a(S,{style:{"margin-left":"10px"},onClick:F},{default:l(()=>[w("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(x,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:f,onOnsizechange:b},null,8,["total","currentPage","pageSizes"]),t(n).data.length!==0?(k(),y("div",te,[a(A,{dataSource:t(d),columns:t(O),onOntablecolumn:B,onOnurlopen:C},null,8,["dataSource","columns"])])):j("",!0),a(W,{state:t(m)},null,8,["state"]),P("div",ae,[a(x,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:f,onOnsizechange:b},null,8,["total","currentPage","pageSizes"])]),a(M,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpageturning:I},null,8,["total","currentPage","pageSizes"]),a(R,{onOnTo:V}),a(K,{visible:t(r).state,"onUpdate:visible":s[1]||(s[1]=p=>t(r).state=p),footer:null,width:"60%",onCancel:D,title:t(r).title},{default:l(()=>[a(G,{url:t(r).url},null,8,["url"])]),_:1},8,["visible","title"])],64)}}};export{xe as default};
