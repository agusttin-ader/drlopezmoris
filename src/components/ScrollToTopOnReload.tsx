/**
 * Must run inline in <head>, before first paint: by the time React hydrates the
 * browser has already restored the old scroll position or jumped to the #hash.
 */
const script = `(function(){try{
if("scrollRestoration" in history)history.scrollRestoration="manual";
var n=performance.getEntriesByType("navigation")[0];
var reload=n?n.type==="reload":performance.navigation&&performance.navigation.type===1;
if(!reload)return;
if(location.hash)history.replaceState(null,"",location.pathname+location.search);
var top=function(){
var r=document.documentElement,b=r.style.scrollBehavior;
r.style.scrollBehavior="auto";
window.scrollTo(0,0);
r.style.scrollBehavior=b;
};
top();
document.addEventListener("DOMContentLoaded",top);
window.addEventListener("load",top);
}catch(e){}})();`;

export function ScrollToTopOnReload() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
