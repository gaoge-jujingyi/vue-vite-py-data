import"./default-e5d332e7.js";import{F as T,_ as q}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as E}from"./index-8134270f.js";import{I as U}from"./index-da5f4ce2.js";import{r as y,a as c,y as G,x as L,B as S,G as v,L as w,c as a,D as r,E as o,$ as M,K as j,a0 as A,I as k}from"./index-71a5391b.js";import{_ as z,a as H,b as J,c as Q,d as W}from"./repeatpositioner-3854e0ff.js";import{_ as X}from"./loading-c4a3f1f3.js";import{_ as Y}from"./repeattable-4a7fe53a.js";import{a2 as Z}from"./api-47b35210.js";import{x as tt}from"./xiaoshuo-18c1a3cf.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-98bb1baa.js";import"./eagerComputed-c651f318.js";import"./index-1729d7ee.js";import"./createForOfIteratorHelper-f2236921.js";import"./index-7f28f9f3.js";import"./index-8ca851ae.js";import"./index-bd4b2240.js";import"./shallowequal-0f2097ab.js";import"./index-67c02b9a.js";import"./index-116a0eec.js";import"./scrollTo-4a3c9ce6.js";import"./index-ee3da9b4.js";import"./index-79080fe8.js";import"./index.esm-e815afff.js";const et={key:0},ot={style:{"text-align":"right"},id:"bottomDom"},Nt={__name:"beiwotvxiaoshuo",setup(at){const p=y(),t=c({title:"",currentPage:1,pageSizes:50}),n=c({data:[],total:0});let m=y("1");const i=()=>{m.value="1",n.total=0,n.data=[]},P=()=>{i(),p.value.resetFields(),t.currentPage=1,t.pageSizes=50,l()},_=e=>{i(),t.title=t.title.replace(/\s*/g,""),t.currentPage=1,t.pageSizes=50,l()};G(()=>{t.title=u.beiwotvxiaoshuo_parameter,l()});let g=c([]),I=c([{title:"小说",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"tag",key:"tags"},{title:"观看",dataIndex:"guankan",key:"guankan"},{title:"时间",dataIndex:"time",key:"times"},{title:"操作",width:220,key:"sisexiaoshuos"}]);const l=()=>{Z(t).then(e=>{n.data=e.data.data,n.total=e.data.total,m.value="0",g=n.data})},O=e=>{K(e)},B=L(),u=tt(),F=e=>{u.title=e.title,u.frompath="/beiwotvxiaoshuo",u.content=e.html,u.beiwotvxiaoshuo_parameter=t.title.replace(/\s*/g,""),B.push("/yuedu")},d=({page:e,pageSize:s})=>{i(),t.currentPage=e,t.pageSizes=s,l()},f=({current:e,size:s})=>{i(),t.currentPage=e,t.pageSizes=s},D=e=>{i(),t.currentPage=e,l()},V=e=>{switch(e){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},K=e=>{window.open(e,"_blank")};return(e,s)=>{const N=U,h=q,b=Q,x=E,$=W,C=T;return S(),v(j,null,[w("div",null,[a(C,{id:"submitDom",model:o(t),ref_key:"formRef",ref:p,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:_},{default:r(()=>[a($,null,{default:r(()=>[a(b,{span:6},{default:r(()=>[a(h,{label:"标 题",name:"title"},{default:r(()=>[a(N,{value:o(t).title,"onUpdate:value":s[0]||(s[0]=R=>o(t).title=R),onKeydown:A(_,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(b,{span:6},{default:r(()=>[a(h,{"wrapper-col":{offset:4,span:20}},{default:r(()=>[a(x,{type:"primary","html-type":"submit"},{default:r(()=>[k("提交")]),_:1}),a(x,{style:{"margin-left":"10px"},onClick:P},{default:r(()=>[k("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(z,{total:o(n).total,currentPage:o(t).currentPage,pageSizes:o(t).pageSizes,onOnpagechange:d,onOnsizechange:f},null,8,["total","currentPage","pageSizes"]),o(n).data.length!==0?(S(),v("div",et,[a(Y,{dataSource:o(g),columns:o(I),onOntablecolumn:O,onOntableyuedu:F},null,8,["dataSource","columns"])])):M("",!0),a(X,{state:o(m)},null,8,["state"]),w("div",ot,[a(z,{total:o(n).total,currentPage:o(t).currentPage,pageSizes:o(t).pageSizes,onOnpagechange:d,onOnsizechange:f},null,8,["total","currentPage","pageSizes"])]),a(H,{total:o(n).total,currentPage:o(t).currentPage,pageSizes:o(t).pageSizes,onOnpageturning:D},null,8,["total","currentPage","pageSizes"]),a(J,{onOnTo:V})],64)}}};export{Nt as default};