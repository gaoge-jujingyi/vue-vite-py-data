/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as F,a as R,b as L}from"./repeatpositioner-4dd15389.js";import{_ as M}from"./repeatcard-a2051df7.js";import{_ as W}from"./loading-ee00f445.js";import{aD as A,aE as G}from"./api-0902c31c.js";import{k as x,r as D,D as H,U as i,a0 as m,a3 as _,f as t,W as a,u as n,F as b,a1 as j,a6 as J,V as O,E as p,a2 as g}from"./vue-4ec1f53c.js";import{F as K,q as Q,s as X,n as Y,o as Z,p as ee,B as te,t as ae}from"./antDesignVue-408c3980.js";import{F as ne}from"./FieldTimeOutlined-27141a0b.js";import{S as oe}from"./SendOutlined-77b50b9d.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const se={key:0,style:{"column-count":"5","column-gap":"15px"}},re={style:{margin:"10px 0 10px 10px"}},le={style:{margin:"10px 0 10px 10px"}},ie={style:{width:"100%","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},pe={style:{"text-align":"right"},id:"bottomDom"},Oe={__name:"xiaojie",setup(ce){const y=x(),e=D({name:"",currentPage:1,pageSizes:50}),r=D({data:[],total:0});let d=x("1");const c=()=>{d.value="1",r.total=0,r.data=[]},B=()=>{c(),y.value.resetFields(),e.currentPage=1,e.pageSizes=50,u()},V=o=>{c(),e.name=e.name.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,u()};H(()=>{u(),C()});let f=x([]);const C=()=>{A().then(o=>{f.value=o.data.data,f.value.unshift({name:"全部"})})},u=()=>{G(e).then(o=>{r.data=o.data.data,r.total=o.data.total,d.value="0"})},S=({page:o,pageSize:l})=>{c(),e.currentPage=o,e.pageSizes=l,u()},v=({current:o,size:l})=>{c(),e.currentPage=o,e.pageSizes=l},$=o=>{c(),e.currentPage=o,u()},q=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},N=o=>{window.open(o,"_blank")};return(o,l)=>{const T=Q,E=X,z=Y,k=Z,P=ee,h=te,U=K,w=ae;return i(),m(b,null,[_("div",null,[t(U,{model:n(e),ref_key:"formRef",ref:y,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:V},{default:a(()=>[t(P,null,{default:a(()=>[t(k,{span:24},{default:a(()=>[t(z,{"label-col":{span:1},"wrapper-col":{span:22},label:"地 区",name:"name"},{default:a(()=>[t(E,{value:n(e).name,"onUpdate:value":l[0]||(l[0]=s=>n(e).name=s),"button-style":"solid"},{default:a(()=>[(i(!0),m(b,null,j(n(f),s=>(i(),O(T,{style:{margin:"0 10px 10px 0"},key:s.name,value:s.name==="全部"?"":s.name},{default:a(()=>[p(g(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(P,{id:"submitDom"},{default:a(()=>[t(k,{span:6},{default:a(()=>[t(z,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(h,{type:"primary","html-type":"submit"},{default:a(()=>[p("提交")]),_:1}),t(h,{style:{"margin-left":"10px"},onClick:B},{default:a(()=>[p("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(F,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"]),n(r).data.length!==0?(i(),m("div",se,[(i(!0),m(b,null,j(n(r).data,(s,I)=>(i(),O(M,{key:I,item:{...s,bj:s.img}},{time:a(()=>[_("p",re,[t(w,{color:"green"},{icon:a(()=>[t(n(ne))]),default:a(()=>[p(" "+g(s.create_time),1)]),_:2},1024)])]),diqu:a(()=>[_("p",le,[t(w,{color:"cyan"},{icon:a(()=>[t(n(oe))]),default:a(()=>[p(" "+g(s.name),1)]),_:2},1024)])]),jianjie:a(()=>[_("div",ie," 【简介】"+g(s.process),1)]),button:a(()=>[t(h,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:ue=>N(`https://yue67.xyz/show?id=${s.id}`)},{default:a(()=>[p(" 跳转详情 ")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):J("",!0),t(W,{state:n(d)},null,8,["state"]),_("div",pe,[t(F,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"])]),t(R,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:$},null,8,["total","currentPage","pageSizes"]),t(L,{onOnTo:q})],64)}}};export{Oe as default};
