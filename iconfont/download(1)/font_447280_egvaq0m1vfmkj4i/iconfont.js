(function(window){var svgSprite='<svg><symbol id="icon-icon00096" viewBox="0 0 1024 1024"><path d="M512.602216 63.46545c-247.37711 0-447.930799 200.543456-447.930799 447.930799 0 247.378134 200.552665 447.931822 447.930799 447.931822 247.378134 0 447.930799-200.553689 447.930799-447.931822C960.533015 264.008906 759.980349 63.46545 512.602216 63.46545zM512.602216 903.335826c-216.452797 0-391.939577-175.467337-391.939577-391.939577 0-216.46303 175.48678-391.939577 391.939577-391.939577 216.45382 0 391.941624 175.476547 391.941624 391.939577C904.542816 727.868489 729.056036 903.335826 512.602216 903.335826zM355.94427 668.093081c-73.417103-73.451896-85.285408-184.970782-32.597419-270.836405l0 35.925211 31.532157 0 0-94.599542-94.598518 0 0 31.533181 43.078121 0c-68.075445 99.412151-56.71163 233.241158 30.296003 320.267211 48.421826 48.421826 113.523543 73.54604 179.024349 73.54604 46.576805-0.019443 93.363388-12.723789 134.406153-38.818097l-16.889669-26.626427C543.812031 753.391792 428.46291 740.610698 355.94427 668.093081zM691.379948 333.636706c-82.845847-82.855056-214.685547-97.461729-313.430502-34.728966l16.907065 26.626427c86.383416-54.897308 201.713095-42.117237 274.232758 30.402427 73.459059 73.448826 85.310991 184.981015 32.616862 270.835382l0-35.933397-31.533181 0 0 94.598518 94.581122 0 0-31.533181-43.083238 0C789.756513 554.49893 778.425444 420.674015 691.379948 333.636706z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)