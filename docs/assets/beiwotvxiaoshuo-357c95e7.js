/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as v,r as c,D as T,$ as U,U as x,a0 as y,a3 as k,f as o,W as s,u as a,a6 as q,F as E,a7 as M,E as w}from"./vue-4ec1f53c.js";import{_ as z,a as W,b as j}from"./repeatpositioner-4dd15389.js";import{_ as A}from"./loading-ee00f445.js";import{_ as G}from"./repeattable-9e60b802.js";import{a2 as H}from"./api-0902c31c.js";import{x as J}from"./xiaoshuo-8ddb4dd7.js";import{F as L,I as Q,n as X,o as Y,B as Z,p as ee}from"./antDesignVue-408c3980.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-4f5d1037.js";import"./axios-4a70c6fc.js";const te={key:0},ae={style:{"text-align":"right"},id:"bottomDom"},ze={__name:"beiwotvxiaoshuo",setup(oe){const p=v(),e=c({title:"",currentPage:1,pageSizes:50}),n=c({data:[],total:0});let m=v("1");const i=()=>{m.value="1",n.total=0,n.data=[]},P=()=>{i(),p.value.resetFields(),e.currentPage=1,e.pageSizes=50,l()},_=t=>{i(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,l()};T(()=>{e.title=u.beiwotvxiaoshuo_parameter,l()});let g=c([]),F=c([{title:"小说",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"tag",key:"tags"},{title:"观看",dataIndex:"guankan",key:"guankan"},{title:"时间",dataIndex:"time",key:"times"},{title:"操作",width:220,key:"sisexiaoshuos"}]);const l=()=>{H(e).then(t=>{n.data=t.data.data,n.total=t.data.total,m.value="0",g=n.data})},I=t=>{N(t)},O=U(),u=J(),B=t=>{u.title=t.title,u.frompath="/beiwotvxiaoshuo",u.content=t.html,u.beiwotvxiaoshuo_parameter=e.title.replace(/\s*/g,""),O.push("/yuedu")},d=({page:t,pageSize:r})=>{i(),e.currentPage=t,e.pageSizes=r,l()},f=({current:t,size:r})=>{i(),e.currentPage=t,e.pageSizes=r},D=t=>{i(),e.currentPage=t,l()},V=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},N=t=>{window.open(t,"_blank")};return(t,r)=>{const $=Q,h=X,b=Y,S=Z,C=ee,K=L;return x(),y(E,null,[k("div",null,[o(K,{id:"submitDom",model:a(e),ref_key:"formRef",ref:p,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:_},{default:s(()=>[o(C,null,{default:s(()=>[o(b,{span:6},{default:s(()=>[o(h,{label:"标 题",name:"title"},{default:s(()=>[o($,{value:a(e).title,"onUpdate:value":r[0]||(r[0]=R=>a(e).title=R),onKeydown:M(_,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),o(b,{span:6},{default:s(()=>[o(h,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[o(S,{type:"primary","html-type":"submit"},{default:s(()=>[w("提交")]),_:1}),o(S,{style:{"margin-left":"10px"},onClick:P},{default:s(()=>[w("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),o(z,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:d,onOnsizechange:f},null,8,["total","currentPage","pageSizes"]),a(n).data.length!==0?(x(),y("div",te,[o(G,{dataSource:a(g),columns:a(F),onOntablecolumn:I,onOntableyuedu:B},null,8,["dataSource","columns"])])):q("",!0),o(A,{state:a(m)},null,8,["state"]),k("div",ae,[o(z,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:d,onOnsizechange:f},null,8,["total","currentPage","pageSizes"])]),o(W,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:D},null,8,["total","currentPage","pageSizes"]),o(j,{onOnTo:V})],64)}}};export{ze as default};
