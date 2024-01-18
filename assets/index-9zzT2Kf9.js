var L=Object.defineProperty;var C=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>(C(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();class w{constructor(t=0,r=0){u(this,"x");u(this,"y");this.x=t,this.y=r}updateLocation({x:t,y:r}){return this.x=t,this.y=r,this}getCoordinates(){return{x:this.x,y:this.y}}draw(t,{fillStyle:r="#e2b714",size:s=10}={}){t.beginPath(),t.fillStyle=r,t.arc(this.x,this.y,s,0,Math.PI*2),t.fill(),t.stroke()}}const T=({x:e,y:t})=>Math.hypot(e,t),M=({x:e,y:t})=>Math.atan2(t,e),S=e=>({dir:M(e),mag:T(e)}),P=({mag:e,dir:t})=>({x:Math.cos(t)*e,y:Math.sin(t)*e}),f=(e,t)=>({x:e.x+t.x,y:e.y+t.y}),O=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),v=(e,t)=>({x:e.x*t,y:e.y*t}),h=e=>v(e,1/T(e)),D=(e,t)=>e.x*t.x+e.y*t.y,d=window.innerWidth,l=window.innerHeight,c={x:d/2,y:l/2},x=document.getElementById("myCanvas"),o=x.getContext("2d");(()=>{x.width=d,x.height=l,o.translate(c.x,c.y);const e=new w(90,120),t=new w(20,50);function r(){I();const s=e.getCoordinates(),n=t.getCoordinates();y({x:0,y:0},s,"white"),y({x:0,y:0},n,"white");const i=f(s,n);o.beginPath(),o.setLineDash([3,3]),o.moveTo(n.x,n.y),o.lineTo(i.x,i.y),o.lineTo(s.x,s.y),o.stroke(),o.setLineDash([]),y({x:0,y:0},i);const a=v(h(s),50);y({x:0,y:0},a),console.log("Dot product of white vectors: "+D(h(n),h(s)))}r(),document.onmousemove=s=>{o.clearRect(-c.x,-c.y,d,l),e.updateLocation({x:s.x-c.x,y:s.y-c.y}),r()}})();function y(e,t,r="#e2b714",s=20){const{dir:n}=S(O(t,e)),i={dir:n+Math.PI*.8,mag:s/2},a=P(i),m=f(a,t),b={dir:n-Math.PI*.8,mag:s/2},p=P(b),g=f(p,t);o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(t.x,t.y),o.strokeStyle=r,o.stroke(),o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(m.x,m.y),o.lineTo(g.x,g.y),o.closePath(),o.stroke(),o.fillStyle=r,o.fill()}function I(){o.beginPath(),o.moveTo(-c.x,0),o.lineTo(d-c.y,0),o.moveTo(0,-c.y),o.lineTo(0,l-c.y),o.setLineDash([10,8]),o.lineWidth=2,o.strokeStyle="#e2b7148a",o.stroke(),o.setLineDash([])}
