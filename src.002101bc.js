parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
console.log("it works");var e=document.querySelector("#touch-me"),o=e.getContext("2d"),t=document.querySelector(".shake"),n=20,r=0;o.lineJoin="round",o.lineCap="round",o.lineWidth=10;var a=e.width,i=e.height;console.log(a,i);var c=Math.floor(Math.random()*a),s=Math.floor(Math.random()*i);function l(e){var t=e.key;switch(r+=10,o.strokeStyle="hsl(".concat(r,",100%,50%)"),o.beginPath(),o.moveTo(c,s),t){case"ArrowUp":s-=n;break;case"ArrowDown":s+=n;break;case"ArrowLeft":c-=n;break;case"ArrowRight":c+=n}o.lineTo(c,s),o.stroke()}function d(e){e.key.includes("Arrow")&&(e.preventDefault(),l({key:e.key}))}function h(){e.classList.add("buttons"),o.clearRect(0,0,a,i),e.addEventListener("animationend",function(){e.classList.remove("buttons")})}o.strokeStyle="hsl(".concat(r,",100%,50%)"),o.beginPath(),o.moveTo(c,s),o.lineTo(c,s),o.stroke(),window.addEventListener("keydown",d),t.addEventListener("click",h);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-3b4qz/src.002101bc.js.map