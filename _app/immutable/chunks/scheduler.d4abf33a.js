function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function F(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function A(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function B(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function G(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function H(t,n,e,o,r,a){if(r){const _=y(n,e,o,a);t.p(_,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let l;function h(t){l=t}function m(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){m().$$.on_mount.push(t)}function K(t){m().$$.after_update.push(t)}const i=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(M))}function L(){return O(),x}function z(t){u.push(t)}const d=new Set;let c=0;function M(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,h(n),v(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(i.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function v(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function N(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{K as a,b,A as c,D as d,G as e,C as f,I as g,m as h,F as i,h as j,M as k,P as l,S as m,k as n,J as o,B as p,z as q,E as r,U as s,L as t,H as u,N as v,l as w,j as x,i as y,O as z};
