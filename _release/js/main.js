var qlock=qlock||{};qlock.TimerModel=function(){"use strict";function a(){f=new Date;var a=f.getHours(),g=f.getMinutes(),h=f.getSeconds();h!==d&&$(e).trigger("update",[{current:{hh:a,mm:g,ss:h},past:{hh:b,mm:c,ss:d}}]),b=a,c=g,d=h}var b,c,d,e={},f=new Date;return e.start=function(){!function b(){window.requestAnimationFrame(b),a()}()},e};var qlock=qlock||{};qlock.ClockView=function(a,b){"use strict";function c(){$(b).on("update",d)}function d(a,b){var c=b.current,d=b.past;e(h,c.hh,d.hh),e(i,c.mm,d.mm),e(j,c.ss,d.ss),e(k,c.hh,d.hh),e(l,c.mm,d.mm),e(m,c.ss,d.ss)}function e(a,b,c){b!==c&&a.text(f(b,2))}function f(a,b){for(var c=""+a;c.length<b;)c="0"+c;return c}var g={},h=a.find("#js-hh"),i=a.find("#js-mm"),j=a.find("#js-ss"),k=a.find("#js-hh-invert"),l=a.find("#js-mm-invert"),m=a.find("#js-ss-invert");return c(),g};var qlock=qlock||{};qlock.ContainerView=function(a,b){"use strict";function c(){e=b.find(".js-full-resize"),a.resize(_.throttle(d,100)).trigger("resize")}function d(){var b=a.width(),c=a.height();e.css({width:b+"px",height:c+"px"})}var e;$(c)};var qlock=qlock||{};qlock.MaskView=function(a,b,c){"use strict";function d(){$(c).on("update",function(){e()})}function e(){switch(++k){case 1:g(i,5),g(j),h(i,"width","100%"),h(i,"height","100%"),h(j,"width","100%"),h(j,"height","100%"),f(j,"width","0%");break;case 2:g(i),g(j,5),h(j,"width","100%"),h(j,"height","100%"),f(i,"height","0%");break;case 3:g(i),h(i,"width","0%"),h(i,"height","100%"),f(i,"width","100%");break;case 4:g(j),g(i,5),h(j,"width","100%"),h(j,"height","0%"),f(j,"height","100%");break;case 5:h(i,"width","100%"),h(i,"height","100%"),f(j,"width","0%");break;case 6:g(i),g(j,5),h(j,"width","100%"),h(j,"height","100%"),f(i,"height","0%");break;case 7:g(j,5),g(i),h(i,"width","0%"),h(i,"height","100%"),f(i,"width","100%");break;case 8:g(j),g(i,5),h(j,"width","100%"),h(j,"height","0%"),f(j,"height","100%"),k=0}}function f(b,c,d){var e={},f=500;e[c]=d,"height"===c&&(f=f/a.width()*a.height()),b.stop().animate(e,f,"easeOutExpo")}function g(a,b){b=b||10,$(".z"+b).removeClass("z"+b),a.addClass("z"+b)}function h(a,b,c){var d={};d[b]=c,a.stop(),a.css(d)}var i=$("#js-mask-clock"),j=$("#js-mask-clock-invert"),k=0;d()};var qlock=qlock||{};!function(){"use strict";var a=$(window),b=$(".container"),c=qlock.TimerModel();qlock.ContainerView(a,b),qlock.MaskView(a,b,c),qlock.ClockView($(".clock"),c),c.start()}();