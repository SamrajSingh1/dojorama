//>>built
define("dgrid/util/has-css3",["dojo/has","xstyle/css!../css/has-transforms3d.css"],function(e){var d=["ms","O","Moz","Webkit"];e.add("css-transitions",function(a,b,c){a=c.style;if(void 0!==a.transitionProperty)return!0;for(b=d.length;b--;)if(void 0!==a[d[b]+"TransitionProperty"])return d[b];return!1});e.add("transitionend",function(){var a=e("css-transitions");return!a?!1:!0===a?"transitionend":{ms:"MSTransitionEnd",O:"oTransitionEnd",Moz:"transitionend",Webkit:"webkitTransitionEnd"}[a]});e.add("css-transforms",
function(a,b,c){a=c.style;if(void 0!==a.transformProperty)return!0;for(b=d.length;b--;)if(void 0!==a[d[b]+"Transform"])return d[b];return!1});e.add("css-transforms3d",function(a,b,c){c.className="has-csstransforms3d";document.body.appendChild(c);a=c.offsetLeft;if(9===a)return!0;if(9<a)return(c=d[a-10])||!1;document.body.removeChild(c);c.className="";return!1});return e});