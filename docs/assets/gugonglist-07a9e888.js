/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as p,r as y,D as E,U as g,a0 as N,a3 as x,f as t,W as o,u as a,a6 as J,F as D,a1 as L,V as M,E as v,a2 as W,a7 as I}from"./vue-4ec1f53c.js";import{_ as F,a as j,b as A}from"./repeatpositioner-4dd15389.js";import{_ as G}from"./loading-ee00f445.js";import{_ as H}from"./repeattable-9e60b802.js";import{J as Q,K as X}from"./api-0902c31c.js";import{f as Y}from"./xijs-4f5d1037.js";import{F as Z,q as ee,s as te,n as ae,o as ne,p as oe,I as le,B as se}from"./antDesignVue-408c3980.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./axios-4a70c6fc.js";const re={key:0},ue={style:{"text-align":"right"},id:"bottomDom"},Fe={__name:"gugonglist",setup(ie){const b=p(),e=y({categoryName:"",titleName:"",dynastyName:"",currentPage:1,pageSizes:50}),r=y({data:[],total:0});let _=p("1");const u=()=>{_.value="1",r.total=0,r.data=[]},B=()=>{u(),b.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},d=n=>{u(),e.titleName=e.titleName.replace(/\s*/g,""),e.dynastyName=e.dynastyName.replace(/\s*/g,""),e.categoryName=e.categoryName.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};let f=p([]),S=p([]),O=y([{title:"分类",dataIndex:"categoryName",key:"categoryName"},{title:"编号",dataIndex:"culturalRelicNo",key:"culturalRelicNo"},{title:"年代",dataIndex:"dynastyName",key:"dynastyName"},{title:"级别",dataIndex:"levelName",key:"levelName"},{title:"名称",dataIndex:"name",key:"name"},{title:"馆藏时间",dataIndex:"time",key:"time"},{title:"操作",width:100,key:"action"}]);E(()=>{i(),V()});const i=()=>{Q(e).then(n=>{r.data=n.data.data,r.total=n.data.total,_.value="0",S.value=r.data.map(l=>({...l,time:Y(new Date(l.addTimeStamp).getTime()),url:`https://digicol.dpm.org.cn/cultural/detail?id=${l.uuid}`}))})},V=()=>{X().then(n=>{f.value=n.data.data,f.value.unshift({fenlei:"全部"})})},k=({page:n,pageSize:l})=>{u(),e.currentPage=n,e.pageSizes=l,i()},h=({current:n,size:l})=>{u(),e.currentPage=n,e.pageSizes=l},K=n=>{u(),e.currentPage=n,i()},T=n=>{switch(n){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},U=n=>{window.open(n,"_blank")},R=n=>{U(n)};return(n,l)=>{const $=ee,q=te,m=ae,c=ne,w=oe,z=le,P=se,C=Z;return g(),N(D,null,[x("div",null,[t(C,{id:"submitDom",model:a(e),ref_key:"formRef",ref:b,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:o(()=>[t(w,null,{default:o(()=>[t(c,{span:24},{default:o(()=>[t(m,{"label-col":{span:1},"wrapper-col":{span:22},label:"分 类",name:"categoryName"},{default:o(()=>[t(q,{value:a(e).categoryName,"onUpdate:value":l[0]||(l[0]=s=>a(e).categoryName=s),"button-style":"solid"},{default:o(()=>[(g(!0),N(D,null,L(a(f),s=>(g(),M($,{style:{margin:"0 10px 10px 0"},key:s.fenlei,value:s.fenlei==="全部"?"":s.fenlei},{default:o(()=>[v(W(s.fenlei),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(c,{span:6},{default:o(()=>[t(m,{label:"标 题",name:"titleName"},{default:o(()=>[t(z,{value:a(e).ntitleNameame,"onUpdate:value":l[1]||(l[1]=s=>a(e).ntitleNameame=s),onKeydown:I(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:o(()=>[t(m,{label:"年 代",name:"dynastyName"},{default:o(()=>[t(z,{value:a(e).dynastyName,"onUpdate:value":l[2]||(l[2]=s=>a(e).dynastyName=s),onKeydown:I(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:o(()=>[t(m,{"wrapper-col":{offset:2,span:22}},{default:o(()=>[t(P,{type:"primary","html-type":"submit"},{default:o(()=>[v("提交")]),_:1}),t(P,{style:{"margin-left":"10px"},onClick:B},{default:o(()=>[v("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(F,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:k,onOnsizechange:h},null,8,["total","currentPage","pageSizes"]),a(r).data.length!==0?(g(),N("div",re,[t(H,{dataSource:a(S),columns:a(O),onOntablecolumn:R},null,8,["dataSource","columns"])])):J("",!0),t(G,{state:a(_)},null,8,["state"]),x("div",ue,[t(F,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:k,onOnsizechange:h},null,8,["total","currentPage","pageSizes"])]),t(j,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:K},null,8,["total","currentPage","pageSizes"]),t(A,{onOnTo:T})],64)}}};export{Fe as default};
