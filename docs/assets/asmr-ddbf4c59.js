/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as V,r as S,D as Z,U as i,a0 as k,a3 as b,f as n,W as t,u as e,F as z,a1 as $,a6 as v,a7 as j,E as _,V as y,a2 as F}from"./vue-4ec1f53c.js";import{_ as M,a as ee,b as te}from"./repeatpositioner-4dd15389.js";import{_ as ne}from"./repeatcard-a2051df7.js";import{_ as ae}from"./loading-ee00f445.js";import{_ as oe}from"./previewimg-374cfc4f.js";import{_ as le}from"./previewaudio-c278cd73.js";import{aa as se}from"./api-0902c31c.js";import{F as re,m as ie,E as ue,I as ce,n as me,o as pe,B as _e,p as de,t as ge,z as fe}from"./antDesignVue-408c3980.js";import{F as ye}from"./FieldTimeOutlined-27141a0b.js";import"./index-0b6d407d.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const he={key:0,style:{"column-count":"5","column-gap":"15px"}},ke={style:{margin:"10px 0 10px 10px"}},be={style:{margin:"10px 0 10px 10px"}},ve={style:{width:"100%","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},we={style:{"text-align":"right"},id:"bottomDom"},xe={style:{"column-count":"3","column-gap":"15px"}},He={__name:"asmr",setup(Se){const U=V(),l=S({title:"",currentPage:1,pageSizes:50}),d=S({data:[],total:0});let C=V("1");const w=()=>{C.value="1",d.total=0,d.data=[]},A=()=>{w(),U.value.resetFields(),l.currentPage=1,l.pageSizes=50,x()},O=a=>{w(),l.currentPage=1,l.pageSizes=50,x()};Z(()=>{x()});const x=()=>{se(l).then(a=>{d.data=a.data.data,d.total=a.data.total,C.value="0"})},T=({page:a,pageSize:r})=>{w(),l.currentPage=a,l.pageSizes=r,x()},B=({current:a,size:r})=>{w(),l.currentPage=a,l.pageSizes=r},E=a=>{w(),l.currentPage=a,x()},N=a=>{switch(a){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},K=a=>{window.open(a,"_blank")},f=S({state:!1,title:"",imgs:[]}),R=a=>{let r=a.map(s=>s.type=="folder"?s.children.map(m=>m.type=="folder"?m.children.map(p=>p.type=="folder"?p.children.map(c=>({...c})):p):m):s).flat(3);f.state=!0,f.imgs=r.filter(s=>s.type=="image").map(s=>s.mediaStreamUrl),f.title="查看详情图片"},u=S({state:!1,title:"",music:[]}),q=a=>{let r=a.map(s=>s.type=="folder"?s.children.map(m=>m.type=="folder"?m.children.map(p=>p.type=="folder"?p.children.map(c=>({...c})):p):m):s).flat(3);u.state=!0,u.music=r.filter(s=>s.type!="image").map(s=>({...s,state:!1})),u.title="播放列表"},J=()=>{u.music=[]};let L=S([{title:"标题",dataIndex:"title",width:300,key:"title"},{title:"简介",dataIndex:"workTitle",key:"workTitle"},{title:"操作",align:"right",width:600,key:"asmr"}]);const W=a=>{u.music=u.music.map(r=>({...r,state:!1})),u.music[a].state=!0},G=a=>{window.open(a)},H=()=>{f.imgs=[]};return(a,r)=>{const s=ce,m=me,p=pe,c=_e,Q=de,X=re,P=ge,I=ie,Y=fe;return i(),k(z,null,[b("div",null,[n(X,{id:"submitDom",model:e(l),ref_key:"formRef",ref:U,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:O},{default:t(()=>[n(Q,null,{default:t(()=>[n(p,{span:6},{default:t(()=>[n(m,{label:"标 题",name:"title"},{default:t(()=>[n(s,{value:e(l).title,"onUpdate:value":r[0]||(r[0]=o=>e(l).title=o),onKeydown:j(O,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),n(p,{span:6},{default:t(()=>[n(m,{"wrapper-col":{offset:2,span:22}},{default:t(()=>[n(c,{type:"primary","html-type":"submit"},{default:t(()=>[_("提交")]),_:1}),n(c,{style:{"margin-left":"10px"},onClick:A},{default:t(()=>[_("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),n(M,{total:e(d).total,currentPage:e(l).currentPage,pageSizes:e(l).pageSizes,onOnpagechange:T,onOnsizechange:B},null,8,["total","currentPage","pageSizes"]),e(d).data.length!==0?(i(),k("div",he,[(i(!0),k(z,null,$(e(d).data,(o,g)=>(i(),y(ne,{key:g,item:{...o,bj:o.mainCoverUrl}},{time:t(()=>[b("p",ke,[n(P,{color:"orange"},{icon:t(()=>[n(e(ye))]),default:t(()=>[_(" "+F(o.release),1)]),_:2},1024)])]),watch:t(()=>[b("p",be,[n(P,{color:"green"},{icon:t(()=>[n(e(ue))]),default:t(()=>[_(" "+F(o.rate_count),1)]),_:2},1024)])]),tag:t(()=>[b("div",ve,[(i(!0),k(z,null,$(o.tags,(h,D)=>(i(),y(P,{color:"blue",key:D},{default:t(()=>[_(F(h.name),1)]),_:2},1024))),128))])]),button:t(()=>[o.music.length!==0?(i(),y(c,{key:0,type:"dashed",style:{margin:"0 0 10px 10px"},onClick:h=>R(o.music)},{default:t(()=>[_("查看图片 ")]),_:2},1032,["onClick"])):v("",!0),o.music.length!==0?(i(),y(c,{key:1,type:"dashed",style:{margin:"0 0 10px 10px"},onClick:h=>q(o.music)},{default:t(()=>[_("播放列表 ")]),_:2},1032,["onClick"])):v("",!0),n(c,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:h=>K(`https://www.asmr.one/work/RJ0${o.id}`)},{default:t(()=>[_("跳转详情 ")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):v("",!0),n(ae,{state:e(C)},null,8,["state"]),b("div",we,[n(M,{total:e(d).total,currentPage:e(l).currentPage,pageSizes:e(l).pageSizes,onOnpagechange:T,onOnsizechange:B},null,8,["total","currentPage","pageSizes"])]),n(ee,{total:e(d).total,currentPage:e(l).currentPage,pageSizes:e(l).pageSizes,onOnpageturning:E},null,8,["total","currentPage","pageSizes"]),n(te,{onOnTo:N}),n(I,{visible:e(f).state,"onUpdate:visible":r[1]||(r[1]=o=>e(f).state=o),footer:null,width:"80%",onCancel:H,title:e(f).title},{default:t(()=>[b("div",xe,[(i(!0),k(z,null,$(e(f).imgs,(o,g)=>(i(),y(oe,{key:g,item:o},null,8,["item"]))),128))])]),_:1},8,["visible","title"]),n(I,{visible:e(u).state,"onUpdate:visible":r[2]||(r[2]=o=>e(u).state=o),footer:null,width:"80%",onCancel:J,title:e(u).title},{default:t(()=>[n(Y,{dataSource:e(u).music,columns:e(L),pagination:!1},{bodyCell:t(({column:o,record:g,index:h})=>[o.key==="asmr"?(i(),k(z,{key:0},[g.state?(i(),y(le,{key:0,src:g.mediaStreamUrl},null,8,["src"])):v("",!0),!g.state&&g.type==="audio"?(i(),y(c,{key:1,type:"dashed",onClick:D=>W(h)},{default:t(()=>[_("点击播放 ")]),_:2},1032,["onClick"])):v("",!0),n(c,{type:"dashed",style:{"margin-left":"10px"},onClick:D=>G(g.mediaDownloadUrl)},{default:t(()=>[_("点击下载 ")]),_:2},1032,["onClick"])],64)):v("",!0)]),_:1},8,["dataSource","columns"])]),_:1},8,["visible","title"])],64)}}};export{He as default};
