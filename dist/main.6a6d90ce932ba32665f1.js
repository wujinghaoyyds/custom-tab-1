(()=>{"use strict";const e=document.getElementById("formSearch"),n=document.getElementById("selectEngine"),t=document.getElementById("searchEngine"),c=document.getElementById("baidu"),d=document.getElementById("google"),i=document.getElementById("Bing"),o=document.getElementById("clearInput"),l=document.getElementById("inputSearch"),s=document.getElementById("clear"),a=document.getElementById("search"),u=document.getElementById("engineIcon"),m=document.getElementById("A360"),r=document.getElementById("soGou");t.addEventListener("click",(function(){n.style.display="block"})),n.addEventListener("click",(function(){n.style.display="none"})),document.getElementById("baidu").addEventListener("click",(()=>{console.log("执行了")})),o.addEventListener("click",(()=>{l.value="",s.style.display="none",a.style.display="none"})),l.addEventListener("input",(function(){""===l.value||void 0===l.value||null===l.value?(s.style.display="none",a.style.display="none"):(s.style.display="block",a.style.display="block")})),r.addEventListener("click",(()=>{e.action="https://www.sogou.com/web",l.name="query",u.innerHTML='<use xlink:href="#icon-soGou"></use>'})),c.addEventListener("click",(()=>{e.action="https://www.baidu.com/s",l.name="wd",u.innerHTML='<use xlink:href="#icon-baidu"></use>'})),d.addEventListener("click",(()=>{e.action="https://www.google.com.hk/search",l.name="q",u.innerHTML='<use xlink:href="#icon-google"></use>'})),i.addEventListener("click",(()=>{e.action="https://cn.bing.com/search",l.name="q",u.innerHTML='<use xlink:href="#icon-Bing"></use>'})),m.addEventListener("click",(()=>{e.action="https://www.so.com/s",l.name="q",u.innerHTML='<use xlink:href="#icon-icon360"></use>'})),document.body.style.backgroundImage="url(https://pic4.zhimg.com/v2-9f59d48f6c6985d85eb5ba0f277e89cf_r.jpg)"})();