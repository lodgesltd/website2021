import{S as t,i as s,s as e,e as l,u as o,c as n,a as r,v as a,d as h,b as c,g as f,m as i,I as u,h as g,q as p,k as d,H as m,J as v}from"./client.07d9ff60.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,g,p,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=o(d),this.h()},l(t){s=n(t,"LI",{});var l=r(s);e=n(l,"A",{rel:!0,href:!0});var o=r(e);g=a(o,d),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,g)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(g,d),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function L(t){let s,e,u,L,j,x=t[0],z=[];for(let s=0;s<x.length;s+=1)z[s]=b(E(t,x,s));return{c(){s=g(),e=l("h1"),u=o("Recent posts"),L=g(),j=l("ul");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){p('[data-svelte="svelte-19pw6h0"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=r(e);u=a(l,"Recent posts"),l.forEach(h),L=d(t),j=n(t,"UL",{class:!0});var o=r(j);for(let t=0;t<z.length;t+=1)z[t].l(o);o.forEach(h),this.h()},h(){document.title="Lodges Ltd - Blog",c(j,"class","svelte-9zr77z")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,L,l),f(t,j,l);for(let t=0;t<z.length;t+=1)z[t].m(j,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=E(t,x,e);z[e]?z[e].p(l,s):(z[e]=b(l),z[e].c(),z[e].m(j,null))}for(;e<z.length;e+=1)z[e].d(1);z.length=x.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(L),t&&h(j),v(z,t)}}}function j(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function x(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,L,e,{posts:0})}}export{j as preload};
