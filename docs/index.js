!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).iconColorChangeUtil={})}(this,function(e){"use strict";function t(g){return new Promise(function(n,e){var r,d,t=g.iconUrl,o=g.newColor,i=g.width,a=g.height,l=g.type,h=g.callback;h||"function"!=typeof l||(h=l,l="image-data"),u();var c=document.createElement("img");function u(){d||r||(r=document.createElement("canvas"),d=r.getContext("2d"))}c.addEventListener("load",function(){{var e,t;r.width=c.width,r.height=c.height,function(e,t){u(),null==d||d.clearRect(0,0,r.width,r.height),null==d||d.drawImage(c,0,0,r.width,r.height),function(){if(d){var e,t,n,o,i,a=d.getImageData(0,0,r.width,r.height),l=a.data;for(e=0,t=null==l?void 0:l.length;e<t;e+=4)0!==l[e+3]&&(n=l[e],o=l[e+1],i=l[e+2],i=(n+o+i)/3>>>0,l[e]=l[e+1]=l[e+2]=i);d.putImageData(a,0,0)}}(),function(e,t){d&&(d.globalCompositeOperation="source-atop",d.globalAlpha=t,d.fillStyle=e,d.fillRect(0,0,r.width,r.height),d.globalCompositeOperation="source-over",d.globalAlpha=1)}(e,t)}(o,1),t="data-png"===l?(e=r.toDataURL("image/png",1),null!=h&&h(e),e):(t=null==d?void 0:d.getImageData(0,0,r.width,r.height),null!=h&&h(t),t)}n(t),c.remove()}),c.addEventListener("error",function(){e("error")}),i&&(c.width=i),a&&(c.height=a),c.src=t})}e.default=t,e.iconColorChangeUtil=t,Object.defineProperty(e,"__esModule",{value:!0})});
