import{j as g,d as m,l as w,P as b,m as j,o as n,e as r,p as f,F as y,Q as h,g as v,n as l,s as B,v as L,x as $,y as D,z as k,A as z,B as C,C as P,D as R,E as M,G as N,H as O,I as A,J as E,K as F,L as I,M as J,N as K,O as T,R as U,S as x}from"./main.72e74292.js";const G="Y5Pet",H="x-X7U",Q="oOJAu",S="_8fzKZ";var V={section:G,main:H,limiter:Q,group:S};const X=m({setup(Z){const{t:q,locale:i,fallbackLocale:c}=w({inheritLocale:!0}),p=b();function u(a,s){return new Date(s).getTime()-new Date(a).getTime()}let o=p.getRoutes(),d=j(()=>{let a=[],s={};for(let e=0;e<o.length;e++){const t=o[e];t.meta.layout==="news"&&(s[t.meta.date]||(s[t.meta.date]=[]),s[t.meta.date].push(t))}for(const e of Object.values(s)){const t=e.find(_=>_.meta.locale===i.value);if(t){a.push(t);continue}a.push(e.find(_=>_.meta.locale===c.value))}return a=a.sort((e,t)=>u(e.meta.date,t.meta.date)),a=a.map(e=>({title:e.meta.title,description:e.meta.description,date:e.meta.date,url:e.path,picture:new URL({"/data/news/2022-03-11/picture.jpg":B,"/data/news/2022-03-28/picture.jpg":L,"/data/news/2022-03-29/picture.jpg":$,"/data/news/2022-04-10/picture.jpg":D,"/data/news/2022-04-11/picture.jpg":k,"/data/news/2022-04-12/picture.jpg":z,"/data/news/2022-04-17/picture.jpg":C,"/data/news/2022-04-19/picture.jpg":P,"/data/news/2022-04-21/picture.jpg":R,"/data/news/2022-04-26/picture.jpg":M,"/data/news/2022-05-09/picture.jpg":N,"/data/news/2022-05-11/picture.jpg":O,"/data/news/2022-05-12/picture.jpg":A,"/data/news/2022-05-13/picture.jpg":E,"/data/news/2022-05-18/picture.jpg":F,"/data/news/2022-05-20/picture.jpg":I,"/data/news/2022-05-23/picture.jpg":J,"/data/news/2022-05-24/picture.jpg":K,"/data/news/2022-06-10/picture.jpg":T}[`/data/news/${e.meta.date.substring(0,10)}/picture.jpg`],self.location).href})),a});return(a,s)=>{const e=x;return n(),r("main",{class:l([a.$style.main,a.$style.limiter])},[f("div",{class:l([a.$style.group,a.$style.section])},[(n(!0),r(y,null,h(v(d),t=>(n(),U(e,{title:t.title,description:t.description,picture:t.picture,date:t.date,url:t.url},null,8,["title","description","picture","date","url"]))),256))],2)],2)}}}),Y={$style:V};var ee=g(X,[["__cssModules",Y]]);export{ee as default};
