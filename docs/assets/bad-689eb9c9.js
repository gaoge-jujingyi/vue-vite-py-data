import"./default-e5d332e7.js";import{_ as A}from"./index-ee3da9b4.js";import{F as E,_ as L}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as R}from"./index-8134270f.js";import{_ as G,a as J}from"./index-1729d7ee.js";import{I as M}from"./index-da5f4ce2.js";import{r as F,a as h,y as j,B as u,G as m,L as _,c as t,D as a,E as n,K as S,H as O,$ as Q,a0 as W,C as B,I as i,J as d,a1 as X}from"./index-71a5391b.js";import{_ as D,a as Y,b as Z,c as ee,d as te}from"./repeatpositioner-3854e0ff.js";import{_ as ae}from"./repeatcard-74591095.js";import{_ as ne}from"./loading-c4a3f1f3.js";import{d as oe}from"./api-47b35210.js";import{F as le}from"./FieldTimeOutlined-51f3237f.js";import{S as re}from"./SendOutlined-f6b47245.js";import{P as se}from"./PartitionOutlined-6b28da80.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-79080fe8.js";const ie={key:0,style:{"column-count":"5","column-gap":"15px"}},ue={style:{margin:"10px 0 10px 10px"}},pe={style:{margin:"10px 0 10px 10px"}},ce={style:{margin:"10px 0 10px 10px"}},_e={style:{"text-align":"right"},id:"bottomDom"},Ke={__name:"bad",setup(me){const x=F(),e=h({title:"",dalei:"",currentPage:1,pageSizes:50}),V=h([{value:"",title:"全部"},{value:"电影",title:"电影"},{value:"电视剧",title:"电视剧"},{value:"动漫",title:"动漫"},{value:"综艺",title:"综艺"},{value:"三级",title:"三级"},{value:"漫画",title:"漫画"},{value:"H动漫",title:"H动漫"},{value:"AV",title:"AV"},{value:"短视频",title:"短视频"},{value:"大陆新闻",title:"大陆新闻"}]),r=h({data:[],total:0});let g=F("1");const p=()=>{g.value="1",r.total=0,r.data=[]},C=()=>{p(),x.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},k=l=>{p(),e.title=e.title.replace(/\s*/g,""),e.dalei=e.dalei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};j(()=>{c()});const c=()=>{oe(e).then(l=>{r.data=l.data.data,r.total=l.data.total,g.value="0"})},z=({page:l,pageSize:s})=>{p(),e.currentPage=l,e.pageSizes=s,c()},P=({current:l,size:s})=>{p(),e.currentPage=l,e.pageSizes=s},q=l=>{p(),e.currentPage=l,c()},I=l=>{switch(l){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},$=l=>{window.open(l,"_blank")};return(l,s)=>{const K=M,f=L,v=ee,N=G,T=J,w=te,b=R,H=E,y=A;return u(),m(S,null,[_("div",null,[t(H,{id:"submitDom",model:n(e),ref_key:"formRef",ref:x,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:k},{default:a(()=>[t(w,null,{default:a(()=>[t(v,{span:6},{default:a(()=>[t(f,{label:"标 题",name:"title"},{default:a(()=>[t(K,{value:n(e).title,"onUpdate:value":s[0]||(s[0]=o=>n(e).title=o),onKeydown:W(k,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(v,{span:18},{default:a(()=>[t(f,{label:"分 类",name:"dalei"},{default:a(()=>[t(T,{value:n(e).dalei,"onUpdate:value":s[1]||(s[1]=o=>n(e).dalei=o),"button-style":"solid"},{default:a(()=>[(u(!0),m(S,null,O(n(V),o=>(u(),B(N,{key:o.title,value:o.value},{default:a(()=>[i(d(o.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(v,{span:6},{default:a(()=>[t(f,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(b,{type:"primary","html-type":"submit"},{default:a(()=>[i("提交")]),_:1}),t(b,{style:{"margin-left":"10px"},onClick:C},{default:a(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(D,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:z,onOnsizechange:P},null,8,["total","currentPage","pageSizes"]),n(r).data.length!==0?(u(),m("div",ie,[(u(!0),m(S,null,O(n(r).data,(o,U)=>(u(),B(ae,{key:U,item:o},X({dalei:a(()=>[_("p",pe,[t(y,{color:"orange"},{icon:a(()=>[t(n(se))]),default:a(()=>[i(" "+d(o.dalei),1)]),_:2},1024)])]),button:a(()=>[t(b,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:de=>$(o.url)},{default:a(()=>[i("跳转详情")]),_:2},1032,["onClick"])]),_:2},[o.time!=="无"?{name:"time",fn:a(()=>[_("p",ue,[t(y,{color:"green"},{icon:a(()=>[t(n(le))]),default:a(()=>[i(" "+d(o.time),1)]),_:2},1024)])]),key:"0"}:void 0,o.diqu!=="无"?{name:"diqu",fn:a(()=>[_("p",ce,[t(y,{color:"blue"},{icon:a(()=>[t(n(re))]),default:a(()=>[i(" "+d(o.diqu),1)]),_:2},1024)])]),key:"1"}:void 0]),1032,["item"]))),128))])):Q("",!0),t(ne,{state:n(g)},null,8,["state"]),_("div",_e,[t(D,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:z,onOnsizechange:P},null,8,["total","currentPage","pageSizes"])]),t(Y,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:q},null,8,["total","currentPage","pageSizes"]),t(Z,{onOnTo:I})],64)}}};export{Ke as default};