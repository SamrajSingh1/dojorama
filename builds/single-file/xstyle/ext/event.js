//>>built
define("xstyle/ext/event",["../elemental"],function(e){var d;return d={onProperty:function(b,c,a){e.addRenderer(b,c,a,function(a){d.on(a,b.slice(2),function(){console.log("execute event",c)})})},on:document.addEventListener?function(b,c,a){b.addEventListener(c,a,!1)}:function(b,c,a){b.attachEvent(c,a)}}});