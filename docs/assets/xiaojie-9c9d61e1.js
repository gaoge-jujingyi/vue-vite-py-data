import"./default-e5d332e7.js";import{_ as R}from"./index-ee3da9b4.js";import{F as U,_ as G}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as H}from"./index-8134270f.js";import{_ as J,a as K}from"./index-1729d7ee.js";import{_ as D,a as M,b as A,c as Q,d as W}from"./repeatpositioner-3854e0ff.js";import{_ as X}from"./repeatcard-74591095.js";import{_ as Y}from"./loading-c4a3f1f3.js";import{aD as Z,aE as ee}from"./api-47b35210.js";import{r as x,a as F,y as te,B as i,G as u,L as m,c as t,D as a,E as n,K as b,H as j,$ as ae,C as B,I as p,J as g}from"./index-71a5391b.js";import{F as ne}from"./FieldTimeOutlined-51f3237f.js";import{S as oe}from"./SendOutlined-f6b47245.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-79080fe8.js";const se={key:0,style:{"column-count":"5","column-gap":"15px"}},re={style:{margin:"10px 0 10px 10px"}},le={style:{margin:"10px 0 10px 10px"}},ie={style:{width:"100%","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},pe={style:{"text-align":"right"},id:"bottomDom"},Oe={__name:"xiaojie",setup(ce){const y=x(),e=F({name:"",currentPage:1,pageSizes:50}),r=F({data:[],total:0});let d=x("1");const c=()=>{d.value="1",r.total=0,r.data=[]},O=()=>{c(),y.value.resetFields(),e.currentPage=1,e.pageSizes=50,_()},C=o=>{c(),e.name=e.name.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,_()};te(()=>{_(),V()});let f=x([]);const V=()=>{Z().then(o=>{f.value=o.data.data,f.value.unshift({name:"全部"})})},_=()=>{ee(e).then(o=>{r.data=o.data.data,r.total=o.data.total,d.value="0"})},S=({page:o,pageSize:l})=>{c(),e.currentPage=o,e.pageSizes=l,_()},v=({current:o,size:l})=>{c(),e.currentPage=o,e.pageSizes=l},$=o=>{c(),e.currentPage=o,_()},N=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},T=o=>{window.open(o,"_blank")};return(o,l)=>{const q=J,E=K,z=G,k=Q,P=W,h=H,I=U,w=R;return i(),u(b,null,[m("div",null,[t(I,{model:n(e),ref_key:"formRef",ref:y,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:C},{default:a(()=>[t(P,null,{default:a(()=>[t(k,{span:24},{default:a(()=>[t(z,{"label-col":{span:1},"wrapper-col":{span:22},label:"地 区",name:"name"},{default:a(()=>[t(E,{value:n(e).name,"onUpdate:value":l[0]||(l[0]=s=>n(e).name=s),"button-style":"solid"},{default:a(()=>[(i(!0),u(b,null,j(n(f),s=>(i(),B(q,{style:{margin:"0 10px 10px 0"},key:s.name,value:s.name==="全部"?"":s.name},{default:a(()=>[p(g(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(P,{id:"submitDom"},{default:a(()=>[t(k,{span:6},{default:a(()=>[t(z,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(h,{type:"primary","html-type":"submit"},{default:a(()=>[p("提交")]),_:1}),t(h,{style:{"margin-left":"10px"},onClick:O},{default:a(()=>[p("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(D,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"]),n(r).data.length!==0?(i(),u("div",se,[(i(!0),u(b,null,j(n(r).data,(s,L)=>(i(),B(X,{key:L,item:{...s,bj:s.img}},{time:a(()=>[m("p",re,[t(w,{color:"green"},{icon:a(()=>[t(n(ne))]),default:a(()=>[p(" "+g(s.create_time),1)]),_:2},1024)])]),diqu:a(()=>[m("p",le,[t(w,{color:"cyan"},{icon:a(()=>[t(n(oe))]),default:a(()=>[p(" "+g(s.name),1)]),_:2},1024)])]),jianjie:a(()=>[m("div",ie," 【简介】"+g(s.process),1)]),button:a(()=>[t(h,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:_e=>T(`https://yue67.xyz/show?id=${s.id}`)},{default:a(()=>[p("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):ae("",!0),t(Y,{state:n(d)},null,8,["state"]),m("div",pe,[t(D,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"])]),t(M,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:$},null,8,["total","currentPage","pageSizes"]),t(A,{onOnTo:N})],64)}}};export{Oe as default};