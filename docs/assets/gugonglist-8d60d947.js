import"./default-e5d332e7.js";import{F as E,_ as J}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as L}from"./index-8134270f.js";import{I as G}from"./index-da5f4ce2.js";import{_ as H,a as M}from"./index-1729d7ee.js";import{r as p,a as y,y as j,B as g,G as N,L as x,c as t,D as o,E as a,$ as A,K as I,H as Q,C as W,I as v,J as X,a0 as D}from"./index-71a5391b.js";import{_ as B,a as Y,b as Z,c as ee,d as te}from"./repeatpositioner-3854e0ff.js";import{_ as ae}from"./loading-c4a3f1f3.js";import{_ as ne}from"./repeattable-4a7fe53a.js";import{J as oe,K as le}from"./api-47b35210.js";import{f as re}from"./index.esm-e815afff.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-98bb1baa.js";import"./eagerComputed-c651f318.js";import"./createForOfIteratorHelper-f2236921.js";import"./index-7f28f9f3.js";import"./index-8ca851ae.js";import"./index-bd4b2240.js";import"./shallowequal-0f2097ab.js";import"./index-67c02b9a.js";import"./index-116a0eec.js";import"./scrollTo-4a3c9ce6.js";import"./index-ee3da9b4.js";import"./index-79080fe8.js";const se={key:0},ie={style:{"text-align":"right"},id:"bottomDom"},Ue={__name:"gugonglist",setup(me){const b=p(),e=y({categoryName:"",titleName:"",dynastyName:"",currentPage:1,pageSizes:50}),s=y({data:[],total:0});let _=p("1");const i=()=>{_.value="1",s.total=0,s.data=[]},F=()=>{i(),b.value.resetFields(),e.currentPage=1,e.pageSizes=50,m()},d=n=>{i(),e.titleName=e.titleName.replace(/\s*/g,""),e.dynastyName=e.dynastyName.replace(/\s*/g,""),e.categoryName=e.categoryName.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,m()};let f=p([]),S=p([]),K=y([{title:"分类",dataIndex:"categoryName",key:"categoryName"},{title:"编号",dataIndex:"culturalRelicNo",key:"culturalRelicNo"},{title:"年代",dataIndex:"dynastyName",key:"dynastyName"},{title:"级别",dataIndex:"levelName",key:"levelName"},{title:"名称",dataIndex:"name",key:"name"},{title:"馆藏时间",dataIndex:"time",key:"time"},{title:"操作",width:100,key:"action"}]);j(()=>{m(),O()});const m=()=>{oe(e).then(n=>{s.data=n.data.data,s.total=n.data.total,_.value="0",S.value=s.data.map(l=>({...l,time:re(new Date(l.addTimeStamp).getTime()),url:`https://digicol.dpm.org.cn/cultural/detail?id=${l.uuid}`}))})},O=()=>{le().then(n=>{f.value=n.data.data,f.value.unshift({fenlei:"全部"})})},h=({page:n,pageSize:l})=>{i(),e.currentPage=n,e.pageSizes=l,m()},k=({current:n,size:l})=>{i(),e.currentPage=n,e.pageSizes=l},V=n=>{i(),e.currentPage=n,m()},T=n=>{switch(n){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},$=n=>{window.open(n,"_blank")},C=n=>{$(n)};return(n,l)=>{const R=H,U=M,u=J,c=ee,w=te,z=G,P=L,q=E;return g(),N(I,null,[x("div",null,[t(q,{id:"submitDom",model:a(e),ref_key:"formRef",ref:b,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:o(()=>[t(w,null,{default:o(()=>[t(c,{span:24},{default:o(()=>[t(u,{"label-col":{span:1},"wrapper-col":{span:22},label:"分 类",name:"categoryName"},{default:o(()=>[t(U,{value:a(e).categoryName,"onUpdate:value":l[0]||(l[0]=r=>a(e).categoryName=r),"button-style":"solid"},{default:o(()=>[(g(!0),N(I,null,Q(a(f),r=>(g(),W(R,{style:{margin:"0 10px 10px 0"},key:r.fenlei,value:r.fenlei==="全部"?"":r.fenlei},{default:o(()=>[v(X(r.fenlei),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(c,{span:6},{default:o(()=>[t(u,{label:"标 题",name:"titleName"},{default:o(()=>[t(z,{value:a(e).ntitleNameame,"onUpdate:value":l[1]||(l[1]=r=>a(e).ntitleNameame=r),onKeydown:D(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:o(()=>[t(u,{label:"年 代",name:"dynastyName"},{default:o(()=>[t(z,{value:a(e).dynastyName,"onUpdate:value":l[2]||(l[2]=r=>a(e).dynastyName=r),onKeydown:D(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:o(()=>[t(u,{"wrapper-col":{offset:2,span:22}},{default:o(()=>[t(P,{type:"primary","html-type":"submit"},{default:o(()=>[v("提交")]),_:1}),t(P,{style:{"margin-left":"10px"},onClick:F},{default:o(()=>[v("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(B,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:h,onOnsizechange:k},null,8,["total","currentPage","pageSizes"]),a(s).data.length!==0?(g(),N("div",se,[t(ne,{dataSource:a(S),columns:a(K),onOntablecolumn:C},null,8,["dataSource","columns"])])):A("",!0),t(ae,{state:a(_)},null,8,["state"]),x("div",ie,[t(B,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:h,onOnsizechange:k},null,8,["total","currentPage","pageSizes"])]),t(Y,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:V},null,8,["total","currentPage","pageSizes"]),t(Z,{onOnTo:T})],64)}}};export{Ue as default};