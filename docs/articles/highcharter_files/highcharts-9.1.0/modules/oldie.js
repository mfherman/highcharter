/*
 Highcharts JS v9.1.0 (2021-05-03)

 Old IE (v6, v7, v8) module for Highcharts v6+.

 (c) 2010-2021 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/oldie",["highcharts"],function(C){a(C);a.Highcharts=C;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function C(a,z,r,D){a.hasOwnProperty(z)||(a[z]=D.apply(null,r))}a=a?a._modules:{};C(a,"Extensions/Math3D.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,z){function r(a,e,t){e=0<t&&t<Number.POSITIVE_INFINITY?
t/(a.z+e.z+t):1;return{x:a.x*e,y:a.y*e}}function D(a,e,t,q){var h=e.options.chart.options3d,g=p(q,t?e.inverted:!1),w={x:e.plotWidth/2,y:e.plotHeight/2,z:h.depth/2,vd:p(h.depth,1)*p(h.viewDistance,0)},D=e.scale3d||1;q=l*h.beta*(g?-1:1);h=l*h.alpha*(g?-1:1);var M=Math.cos(h),u=Math.cos(-q),J=Math.sin(h),z=Math.sin(-q);t||(w.x+=e.plotLeft,w.y+=e.plotTop);return a.map(function(a){var e=(g?a.y:a.x)-w.x;var A=(g?a.x:a.y)-w.y;a=(a.z||0)-w.z;e={x:u*e-z*a,y:-J*z*e+M*A-u*J*a,z:M*z*e+J*A+M*u*a};A=r(e,w,w.vd);
A.x=A.x*D+w.x;A.y=A.y*D+w.y;A.z=e.z*D+w.z;return{x:g?A.y:A.x,y:g?A.x:A.y,z:A.z}})}function h(a,e){var t=e.options.chart.options3d,q=e.plotWidth/2;e=e.plotHeight/2;t=p(t.depth,1)*p(t.viewDistance,0)+t.depth;return Math.sqrt(Math.pow(q-p(a.plotX,a.x),2)+Math.pow(e-p(a.plotY,a.y),2)+Math.pow(t-p(a.plotZ,a.z),2))}function g(a){var e=0,t;for(t=0;t<a.length;t++){var q=(t+1)%a.length;e+=a[t].x*a[q].y-a[q].x*a[t].y}return e/2}function u(a,e,t){return g(D(a,e,t))}var p=z.pick,l=a.deg2rad;a.perspective3D=r;
a.perspective=D;a.pointCameraDistance=h;a.shapeArea=g;a.shapeArea3d=u;return{perspective:D,perspective3D:r,pointCameraDistance:h,shapeArea:g,shapeArea3D:u}});C(a,"Core/Renderer/SVG/SVGElement3D.js",[a["Core/Color/Color.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,z,r){var g=a.parse,h=r.defined,J=r.merge,u=r.objectEach,p=r.pick,l;(function(a){a.base={initArgs:function(a){var e=this,q=e.renderer,l=q[e.pathType+"Path"](a),h=l.zIndexes;e.parts.forEach(function(a){e[a]=
q.path(l[a]).attr({"class":"highcharts-3d-"+a,zIndex:h[a]||0}).add(e)});e.attr({"stroke-linejoin":"round",zIndex:h.group});e.originalDestroy=e.destroy;e.destroy=e.destroyParts;e.forcedSides=l.forcedSides},singleSetterForParts:function(a,l,h,g,p,r){var e={};g=[null,null,g||"attr",p,r];var t=h&&h.zIndexes;h?(t&&t.group&&this.attr({zIndex:t.group}),u(h,function(l,g){e[g]={};e[g][a]=l;t&&(e[g].zIndex=h.zIndexes[g]||0)}),g[1]=e):(e[a]=l,g[0]=e);return this.processParts.apply(this,g)},processParts:function(a,
h,l,g,r){var e=this;e.parts.forEach(function(t){h&&(a=p(h[t],!1));if(!1!==a)e[t][l](a,g,r)});return e},destroyParts:function(){this.processParts(null,null,"destroy");return this.originalDestroy()}};a.cuboid=J(a.base,{parts:["front","top","side"],pathType:"cuboid",attr:function(a,l,g,p){if("string"===typeof a&&"undefined"!==typeof l){var e=a;a={};a[e]=l}return a.shapeArgs||h(a.x)?this.singleSetterForParts("d",null,this.renderer[this.pathType+"Path"](a.shapeArgs||a)):z.prototype.attr.call(this,a,void 0,
g,p)},animate:function(e,l,g){if(h(e.x)&&h(e.y)){e=this.renderer[this.pathType+"Path"](e);var t=e.forcedSides;this.singleSetterForParts("d",null,e,"animate",l,g);this.attr({zIndex:e.zIndexes.group});t!==this.forcedSides&&(this.forcedSides=t,a.cuboid.fillSetter.call(this,this.fill))}else z.prototype.animate.call(this,e,l,g);return this},fillSetter:function(a){this.forcedSides=this.forcedSides||[];this.singleSetterForParts("fill",null,{front:a,top:g(a).brighten(0<=this.forcedSides.indexOf("top")?0:
.1).get(),side:g(a).brighten(0<=this.forcedSides.indexOf("side")?0:-.1).get()});this.color=this.fill=a;return this}})})(l||(l={}));return l});C(a,"Core/Renderer/SVG/SVGRenderer3D.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGElement3D.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(a,z,r,D,h,J,u,p){function l(a,e,b,k,v,m,c,d){var f=[],n=
m-v;return m>v&&m-v>Math.PI/2+.0001?(f=f.concat(l(a,e,b,k,v,v+Math.PI/2,c,d)),f=f.concat(l(a,e,b,k,v+Math.PI/2,m,c,d))):m<v&&v-m>Math.PI/2+.0001?(f=f.concat(l(a,e,b,k,v,v-Math.PI/2,c,d)),f=f.concat(l(a,e,b,k,v-Math.PI/2,m,c,d))):[["C",a+b*Math.cos(v)-b*I*n*Math.sin(v)+c,e+k*Math.sin(v)+k*I*n*Math.cos(v)+d,a+b*Math.cos(m)+b*I*n*Math.sin(m)+c,e+k*Math.sin(m)-k*I*n*Math.cos(m)+d,a+b*Math.cos(m)+c,e+k*Math.sin(m)+d]]}var g=a.animObject,e=z.parse,t=r.charts,q=r.deg2rad,C=D.perspective,F=D.shapeArea,w=
p.defined,Q=p.extend,O=p.merge,G=p.pick,N=Math.cos,H=Math.sin,K=Math.PI,I=4*(Math.sqrt(2)-1)/3/(K/2);u.prototype.elements3d=J;u.prototype.toLinePath=function(a,e){var b=[];a.forEach(function(a){b.push(["L",a.x,a.y])});a.length&&(b[0][0]="M",e&&b.push(["Z"]));return b};u.prototype.toLineSegments=function(a){var e=[],b=!0;a.forEach(function(a){e.push(b?["M",a.x,a.y]:["L",a.x,a.y]);b=!b});return e};u.prototype.face3d=function(a){var e=this,b=this.createElement("path");b.vertexes=[];b.insidePlotArea=
!1;b.enabled=!0;b.attr=function(a){if("object"===typeof a&&(w(a.enabled)||w(a.vertexes)||w(a.insidePlotArea))){this.enabled=G(a.enabled,this.enabled);this.vertexes=G(a.vertexes,this.vertexes);this.insidePlotArea=G(a.insidePlotArea,this.insidePlotArea);delete a.enabled;delete a.vertexes;delete a.insidePlotArea;var b=C(this.vertexes,t[e.chartIndex],this.insidePlotArea),m=e.toLinePath(b,!0);b=F(b);a.d=m;a.visibility=this.enabled&&0<b?"visible":"hidden"}return h.prototype.attr.apply(this,arguments)};
b.animate=function(a){if("object"===typeof a&&(w(a.enabled)||w(a.vertexes)||w(a.insidePlotArea))){this.enabled=G(a.enabled,this.enabled);this.vertexes=G(a.vertexes,this.vertexes);this.insidePlotArea=G(a.insidePlotArea,this.insidePlotArea);delete a.enabled;delete a.vertexes;delete a.insidePlotArea;var b=C(this.vertexes,t[e.chartIndex],this.insidePlotArea),m=e.toLinePath(b,!0);b=F(b);b=this.enabled&&0<b?"visible":"hidden";a.d=m;this.attr("visibility",b)}return h.prototype.animate.apply(this,arguments)};
return b.attr(a)};u.prototype.polyhedron=function(a){var e=this,b=this.g(),k=b.destroy;this.styledMode||b.attr({"stroke-linejoin":"round"});b.faces=[];b.destroy=function(){for(var a=0;a<b.faces.length;a++)b.faces[a].destroy();return k.call(this)};b.attr=function(a,m,c,d){if("object"===typeof a&&w(a.faces)){for(;b.faces.length>a.faces.length;)b.faces.pop().destroy();for(;b.faces.length<a.faces.length;)b.faces.push(e.face3d().add(b));for(var f=0;f<a.faces.length;f++)e.styledMode&&delete a.faces[f].fill,
b.faces[f].attr(a.faces[f],null,c,d);delete a.faces}return h.prototype.attr.apply(this,arguments)};b.animate=function(a,m,c){if(a&&a.faces){for(;b.faces.length>a.faces.length;)b.faces.pop().destroy();for(;b.faces.length<a.faces.length;)b.faces.push(e.face3d().add(b));for(var d=0;d<a.faces.length;d++)b.faces[d].animate(a.faces[d],m,c);delete a.faces}return h.prototype.animate.apply(this,arguments)};return b.attr(a)};u.prototype.element3d=function(a,e){var b=this.g();Q(b,this.elements3d[a]);b.initArgs(e);
return b};u.prototype.cuboid=function(a){return this.element3d("cuboid",a)};u.prototype.cuboidPath=function(a){function e(d){return 0===c&&1<d&&6>d?{x:g[d].x,y:g[d].y+10,z:g[d].z}:g[0].x===g[7].x&&4<=d?{x:g[d].x+10,y:g[d].y,z:g[d].z}:0===f&&2>d||5<d?{x:g[d].x,y:g[d].y,z:g[d].z+10}:g[d]}function b(c){return g[c]}var k=a.x||0,l=a.y||0,m=a.z||0,c=a.height||0,d=a.width||0,f=a.depth||0,n=t[this.chartIndex],y=n.options.chart.options3d.alpha,h=0,g=[{x:k,y:l,z:m},{x:k+d,y:l,z:m},{x:k+d,y:l+c,z:m},{x:k,y:l+
c,z:m},{x:k,y:l+c,z:m+f},{x:k+d,y:l+c,z:m+f},{x:k+d,y:l,z:m+f},{x:k,y:l,z:m+f}],L=[];g=C(g,n,a.insidePlotArea);var x=function(c,d,a){var f=[[],-1],n=c.map(b),m=d.map(b);c=c.map(e);d=d.map(e);0>F(n)?f=[n,0]:0>F(m)?f=[m,1]:a&&(L.push(a),f=0>F(c)?[n,0]:0>F(d)?[m,1]:[n,0]);return f};var B=x([3,2,1,0],[7,6,5,4],"front");a=B[0];var A=B[1];B=x([1,6,7,0],[4,5,2,3],"top");d=B[0];var E=B[1];B=x([1,2,5,6],[0,7,4,3],"side");x=B[0];B=B[1];1===B?h+=1E6*(n.plotWidth-k):B||(h+=1E6*k);h+=10*(!E||0<=y&&180>=y||360>
y&&357.5<y?n.plotHeight-l:10+l);1===A?h+=100*m:A||(h+=100*(1E3-m));return{front:this.toLinePath(a,!0),top:this.toLinePath(d,!0),side:this.toLinePath(x,!0),zIndexes:{group:Math.round(h)},forcedSides:L,isFront:A,isTop:E}};u.prototype.arc3d=function(a){function l(a){var c=!1,d={},f;a=O(a);for(f in a)-1!==v.indexOf(f)&&(d[f]=a[f],delete a[f],c=!0);return c?[d,a]:!1}var b=this.g(),k=b.renderer,v="x y r innerR start end depth".split(" ");a=O(a);a.alpha=(a.alpha||0)*q;a.beta=(a.beta||0)*q;b.top=k.path();
b.side1=k.path();b.side2=k.path();b.inn=k.path();b.out=k.path();b.onAdd=function(){var a=b.parentGroup,c=b.attr("class");b.top.add(b);["out","inn","side1","side2"].forEach(function(d){b[d].attr({"class":c+" highcharts-3d-side"}).add(a)})};["addClass","removeClass"].forEach(function(a){b[a]=function(){var c=arguments;["top","out","inn","side1","side2"].forEach(function(d){b[d][a].apply(b[d],c)})}});b.setPaths=function(a){var c=b.renderer.arc3dPath(a),d=100*c.zTop;b.attribs=a;b.top.attr({d:c.top,zIndex:c.zTop});
b.inn.attr({d:c.inn,zIndex:c.zInn});b.out.attr({d:c.out,zIndex:c.zOut});b.side1.attr({d:c.side1,zIndex:c.zSide1});b.side2.attr({d:c.side2,zIndex:c.zSide2});b.zIndex=d;b.attr({zIndex:d});a.center&&(b.top.setRadialReference(a.center),delete a.center)};b.setPaths(a);b.fillSetter=function(a){var c=e(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:c});this.side2.attr({fill:c});this.inn.attr({fill:c});this.out.attr({fill:c});this.top.attr({fill:a});return this};["opacity","translateX","translateY",
"visibility"].forEach(function(a){b[a+"Setter"]=function(c,d){b[d]=c;["out","inn","side1","side2","top"].forEach(function(a){b[a].attr(d,c)})}});b.attr=function(a){var c;if("object"===typeof a&&(c=l(a))){var d=c[0];arguments[0]=c[1];Q(b.attribs,d);b.setPaths(b.attribs)}return h.prototype.attr.apply(b,arguments)};b.animate=function(a,c,d){var f=this.attribs,n="data-"+Math.random().toString(26).substring(2,9);delete a.center;delete a.z;delete a.alpha;delete a.beta;var e=g(G(c,this.renderer.globalAnimation));
if(e.duration){c=l(a);b[n]=0;a[n]=1;b[n+"Setter"]=r.noop;if(c){var k=c[0];e.step=function(c,a){function d(c){return f[c]+(G(k[c],f[c])-f[c])*a.pos}a.prop===n&&a.elem.setPaths(O(f,{x:d("x"),y:d("y"),r:d("r"),innerR:d("innerR"),start:d("start"),end:d("end"),depth:d("depth")}))}}c=e}return h.prototype.animate.call(this,a,c,d)};b.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();return h.prototype.destroy.call(this)};b.hide=function(){this.top.hide();
this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};b.show=function(a){this.top.show(a);this.out.show(a);this.inn.show(a);this.side1.show(a);this.side2.show(a)};return b};u.prototype.arc3dPath=function(a){function e(c){c%=2*Math.PI;c>Math.PI&&(c=2*Math.PI-c);return c}var b=a.x||0,k=a.y||0,g=a.start||0,m=(a.end||0)-.00001,c=a.r||0,d=a.innerR||0,f=a.depth||0,n=a.alpha||0,y=a.beta||0,h=Math.cos(g),t=Math.sin(g);a=Math.cos(m);var L=Math.sin(m),x=c*Math.cos(y);c*=Math.cos(n);var B=d*Math.cos(y),
p=d*Math.cos(n);d=f*Math.sin(y);var E=f*Math.sin(n);f=[["M",b+x*h,k+c*t]];f=f.concat(l(b,k,x,c,g,m,0,0));f.push(["L",b+B*a,k+p*L]);f=f.concat(l(b,k,B,p,m,g,0,0));f.push(["Z"]);var r=0<y?Math.PI/2:0;y=0<n?0:Math.PI/2;r=g>-r?g:m>-r?-r:g;var q=m<K-y?m:g<K-y?K-y:m,u=2*K-y;n=[["M",b+x*N(r),k+c*H(r)]];n=n.concat(l(b,k,x,c,r,q,0,0));m>u&&g<u?(n.push(["L",b+x*N(q)+d,k+c*H(q)+E]),n=n.concat(l(b,k,x,c,q,u,d,E)),n.push(["L",b+x*N(u),k+c*H(u)]),n=n.concat(l(b,k,x,c,u,m,0,0)),n.push(["L",b+x*N(m)+d,k+c*H(m)+E]),
n=n.concat(l(b,k,x,c,m,u,d,E)),n.push(["L",b+x*N(u),k+c*H(u)]),n=n.concat(l(b,k,x,c,u,q,0,0))):m>K-y&&g<K-y&&(n.push(["L",b+x*Math.cos(q)+d,k+c*Math.sin(q)+E]),n=n.concat(l(b,k,x,c,q,m,d,E)),n.push(["L",b+x*Math.cos(m),k+c*Math.sin(m)]),n=n.concat(l(b,k,x,c,m,q,0,0)));n.push(["L",b+x*Math.cos(q)+d,k+c*Math.sin(q)+E]);n=n.concat(l(b,k,x,c,q,r,d,E));n.push(["Z"]);y=[["M",b+B*h,k+p*t]];y=y.concat(l(b,k,B,p,g,m,0,0));y.push(["L",b+B*Math.cos(m)+d,k+p*Math.sin(m)+E]);y=y.concat(l(b,k,B,p,m,g,d,E));y.push(["Z"]);
h=[["M",b+x*h,k+c*t],["L",b+x*h+d,k+c*t+E],["L",b+B*h+d,k+p*t+E],["L",b+B*h,k+p*t],["Z"]];b=[["M",b+x*a,k+c*L],["L",b+x*a+d,k+c*L+E],["L",b+B*a+d,k+p*L+E],["L",b+B*a,k+p*L],["Z"]];L=Math.atan2(E,-d);k=Math.abs(m+L);a=Math.abs(g+L);g=Math.abs((g+m)/2+L);k=e(k);a=e(a);g=e(g);g*=1E5;m=1E5*a;k*=1E5;return{top:f,zTop:1E5*Math.PI+1,out:n,zOut:Math.max(g,m,k),inn:y,zInn:Math.max(g,m,k),side1:h,zSide1:.99*k,side2:b,zSide2:.99*m}};return u});C(a,"Extensions/Oldie/VMLAxis3D.js",[a["Core/Utilities.js"]],function(a){var g=
a.addEvent,r=function(){return function(a){this.axis=a}}();return function(){function a(){}a.compose=function(h){h.keepProps.push("vml");g(h,"init",a.onInit);g(h,"render",a.onRender)};a.onInit=function(){this.vml||(this.vml=new r(this))};a.onRender=function(){var a=this.vml;a.sideFrame&&(a.sideFrame.css({zIndex:0}),a.sideFrame.front.attr({fill:a.sideFrame.color}));a.bottomFrame&&(a.bottomFrame.css({zIndex:1}),a.bottomFrame.front.attr({fill:a.bottomFrame.color}));a.backFrame&&(a.backFrame.css({zIndex:0}),
a.backFrame.front.attr({fill:a.backFrame.color}))};return a}()});C(a,"Extensions/Oldie/VMLRenderer3D.js",[a["Core/Axis/Axis.js"],a["Core/Options.js"],a["Extensions/Oldie/VMLAxis3D.js"]],function(a,z,r){var g=z.setOptions;return function(){function h(){}h.compose=function(h,u){var p=u.prototype;h=h.prototype;g({animate:!1});h.face3d=p.face3d;h.polyhedron=p.polyhedron;h.elements3d=p.elements3d;h.element3d=p.element3d;h.cuboid=p.cuboid;h.cuboidPath=p.cuboidPath;h.toLinePath=p.toLinePath;h.toLineSegments=
p.toLineSegments;h.arc3d=function(a){a=p.arc3d.call(this,a);a.css({zIndex:a.zIndex});return a};h.arc3dPath=p.arc3dPath;r.compose(a)};return h}()});C(a,"Extensions/Oldie/Oldie.js",[a["Core/Chart/Chart.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Options.js"],a["Core/Color/Palette.js"],a["Core/Pointer.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer3D.js"],a["Core/Utilities.js"],a["Extensions/Oldie/VMLRenderer3D.js"]],function(a,z,r,D,h,C,u,p,l,M){var e=z.parse,
g=r.deg2rad,q=r.doc;z=r.noop;var J=r.svg,F=r.win,w=D.getOptions,Q=l.addEvent,O=l.createElement,G=l.css,N=l.defined,H=l.discardElement,K=l.erase,I=l.extend;D=l.extendClass;var A=l.isArray,R=l.isNumber,b=l.isObject,k=l.pick,v=l.pInt,m=l.uniqueKey;w().global.VMLRadialGradientURL="http://code.highcharts.com/9.1.0/gfx/vml-radial-gradient.png";q&&!q.defaultView&&(r.getStyle=l.getStyle=function n(a,f){var d={width:"clientWidth",height:"clientHeight"}[f];if(a.style[f])return v(a.style[f]);"opacity"===f&&
(f="filter");if(d)return a.style.zoom=1,Math.max(a[d]-2*n(a,"padding"),0);a=a.currentStyle[f.replace(/\-(\w)/g,function(a,d){return d.toUpperCase()})];"filter"===f&&(a=a.replace(/alpha\(opacity=([0-9]+)\)/,function(a,d){return d/100}));return""===a?1:v(a)});J||(Q(u,"afterInit",function(){"text"===this.element.nodeName&&this.css({position:"absolute"})}),C.prototype.normalize=function(a,d){a=a||F.event;a.target||(a.target=a.srcElement);d||(this.chartPosition=d=this.getChartPosition());return I(a,{chartX:Math.round(Math.max(a.x,
a.clientX-d.left)),chartY:Math.round(a.y)})},a.prototype.ieSanitizeSVG=function(a){return a=a.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},a.prototype.isReadyToRender=
function(){var a=this;return J||F!=F.top||"complete"===q.readyState?!0:(q.attachEvent("onreadystatechange",function(){q.detachEvent("onreadystatechange",a.firstRender);"complete"===q.readyState&&a.firstRender()}),!1)},q.createElementNS||(q.createElementNS=function(a,d){return q.createElement(d)}),r.addEventListenerPolyfill=function(a,d){function c(a){a.target=a.srcElement||F;d.call(b,a)}var b=this;b.attachEvent&&(b.hcEventsIE||(b.hcEventsIE={}),d.hcKey||(d.hcKey=m()),b.hcEventsIE[d.hcKey]=c,b.attachEvent("on"+
a,c))},r.removeEventListenerPolyfill=function(a,d){this.detachEvent&&(d=this.hcEventsIE[d.hcKey],this.detachEvent("on"+a,d))},a={docMode8:q&&8===q.documentMode,init:function(a,d){var c=["<",d,' filled="f" stroked="f"'],b=["position: ","absolute",";"],e="div"===d;("shape"===d||e)&&b.push("left:0;top:0;width:1px;height:1px;");b.push("visibility: ",e?"hidden":"visible");c.push(' style="',b.join(""),'"/>');d&&(c=e||"span"===d||"img"===d?c.join(""):a.prepVML(c),this.element=O(c));this.renderer=a},add:function(a){var c=
this.renderer,f=this.element,b=c.box,e=a&&a.inverted;b=a?a.element||a:b;a&&(this.parentGroup=a);e&&c.invertChild(f,b);b.appendChild(f);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:u.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,d=Math.cos(a*g),f=Math.sin(a*g);G(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",
d,", M12=",-f,", M21=",f,", M22=",d,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,d,f,b,e){var c=b?Math.cos(b*g):1,n=b?Math.sin(b*g):0,h=k(this.elemHeight,this.element.offsetHeight);this.xCorr=0>c&&-a;this.yCorr=0>n&&-h;var l=0>c*n;this.xCorr+=n*d*(l?1-f:f);this.yCorr-=c*d*(b?l?f:1-f:1);e&&"left"!==e&&(this.xCorr-=a*f*(0>c?-1:1),b&&(this.yCorr-=h*f*(0>n?-1:1)),G(this.element,{textAlign:e}))},pathToVML:function(a){for(var c=a.length,f=[];c--;)R(a[c])?f[c]=Math.round(10*
a[c])-5:"Z"===a[c]?f[c]="x":(f[c]=a[c],!a.isArc||"wa"!==a[c]&&"at"!==a[c]||(f[c+5]===f[c+7]&&(f[c+7]+=a[c+7]>a[c+5]?1:-1),f[c+6]===f[c+8]&&(f[c+8]+=a[c+8]>a[c+6]?1:-1)));return f.join(" ")||"x"},clip:function(a){var c=this;if(a){var f=a.members;K(f,c);f.push(c);c.destroyClip=function(){K(f,c)};a=a.getCSS(c)}else c.destroyClip&&c.destroyClip(),a={clip:c.docMode8?"inherit":"rect(auto)"};return c.css(a)},css:u.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&H(a)},destroy:function(){this.destroyClip&&
this.destroyClip();return u.prototype.destroy.apply(this)},on:function(a,d){this.element["on"+a]=function(){var a=F.event;a.target=a.srcElement;d(a)};return this},cutOffPath:function(a,d){a=a.split(/[ ,]/);var c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=v(a[c-2])-10*d;return a.join(" ")},shadow:function(a,d,b){var c=[],f,e=this.element,g=this.renderer,l=e.style,m=e.path;m&&"string"!==typeof m.value&&(m="x");var p=m;if(a){var q=k(a.width,3);var t=(a.opacity||.15)/q;for(f=1;3>=f;f++){var r=2*q+1-2*f;
b&&(p=this.cutOffPath(m.value,r+.5));var u=['<shape isShadow="true" strokeweight="',r,'" filled="false" path="',p,'" coordsize="10 10" style="',e.style.cssText,'" />'];var w=O(g.prepVML(u),null,{left:v(l.left)+k(a.offsetX,1)+"px",top:v(l.top)+k(a.offsetY,1)+"px"});b&&(w.cutOff=r+1);u=['<stroke color="',a.color||h.neutralColor100,'" opacity="',t*f,'"/>'];O(g.prepVML(u),null,null,w);d?d.element.appendChild(w):e.parentNode.insertBefore(w,e);c.push(w)}this.shadows=c}return this},updateShadows:z,setAttr:function(a,
d){this.docMode8?this.element[a]=d:this.element.setAttribute(a,d)},getAttr:function(a){return this.docMode8?this.element[a]:this.element.getAttribute(a)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,d,b){(b.getElementsByTagName("stroke")[0]||O(this.renderer.prepVML(["<stroke/>"]),null,null,b))[d]=a||"solid";this[d]=a},dSetter:function(a,d,b){var c=this.shadows;a=a||[];this.d=a.join&&a.join(" ");b.path=a=this.pathToVML(a);if(c)for(b=c.length;b--;)c[b].path=
c[b].cutOff?this.cutOffPath(a,c[b].cutOff):a;this.setAttr(d,a)},fillSetter:function(a,d,b){var c=b.nodeName;"SPAN"===c?b.style.color=a:"IMG"!==c&&(b.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,b,d,this)))},"fill-opacitySetter":function(a,d,b){O(this.renderer.prepVML(["<",d.split("-")[0],' opacity="',a,'"/>']),null,null,b)},opacitySetter:z,rotationSetter:function(a,d,b){b=b.style;this[d]=b[d]=a;b.left=-Math.round(Math.sin(a*g)+1)+"px";b.top=Math.round(Math.cos(a*g))+"px"},strokeSetter:function(a,
d,b){this.setAttr("strokecolor",this.renderer.color(a,b,d,this))},"stroke-widthSetter":function(a,d,b){b.stroked=!!a;this[d]=a;R(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,d){this.setAttr(d,a)},visibilitySetter:function(a,d,b){"inherit"===a&&(a="visible");this.shadows&&this.shadows.forEach(function(c){c.style[d]=a});"DIV"===b.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(b.style[d]=a?"visible":"hidden"),d="top");b.style[d]=a},xSetter:function(a,d,b){this[d]=a;"x"===
d?d="left":"y"===d&&(d="top");this.updateClipping?(this[d]=a,this.updateClipping()):b.style[d]=a},zIndexSetter:function(a,d,b){b.style[d]=a},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}},a["stroke-opacitySetter"]=a["fill-opacitySetter"],r.VMLElement=a=D(u,a),a.prototype.ySetter=a.prototype.widthSetter=a.prototype.heightSetter=a.prototype.xSetter,C={Element:a,
isIE8:-1<F.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,d,b){this.crispPolyLine=p.prototype.crispPolyLine;this.alignedObjects=[];var c=this.createElement("div").css({position:"relative"});var f=c.element;a.appendChild(c.element);this.isVML=!0;this.box=f;this.boxWrapper=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(d,b,!1);if(!q.namespaces.hcv){q.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{q.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(S){q.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,d,f,e){var c=this.createElement(),n=b(a);return I(c,{members:[],count:0,left:(n?a.x:a)+1,top:(n?a.y:d)+1,width:(n?a.width:f)-1,height:(n?a.height:e)-1,getCSS:function(a){var c=a.element,d=c.nodeName,b=a.inverted,f=this.top-("shape"===d?c.offsetTop:0),e=this.left;c=e+this.width;var n=f+this.height;f={clip:"rect("+Math.round(b?
e:f)+"px,"+Math.round(b?n:c)+"px,"+Math.round(b?c:n)+"px,"+Math.round(b?f:e)+"px)"};!b&&a.docMode8&&"DIV"===d&&I(f,{width:c+"px",height:n+"px"});return f},updateClipping:function(){c.members.forEach(function(a){a.element&&a.css(c.getCSS(a))})}})},color:function(a,d,b,n){var c=this,f=/^rgba/,g,h,l="none";a&&a.linearGradient?h="gradient":a&&a.radialGradient&&(h="pattern");if(h){var k,m,p=a.linearGradient||a.radialGradient,q=void 0,r=void 0,t=void 0,u=void 0,v,z,A,C,D="";a=a.stops;r=q=void 0;var F=[],
G=function(){g=['<fill colors="'+F.join(",")+'" opacity="',z,'" o:opacity2="',v,'" type="',h,'" ',D,'focus="100%" method="any" />'];O(c.prepVML(g),null,null,d)};q=a[0];r=a[a.length-1];0<q[0]&&a.unshift([0,q[1]]);1>r[0]&&a.push([1,r[1]]);a.forEach(function(a,c){f.test(a[1])?(M=e(a[1]),k=M.get("rgb"),m=M.get("a")):(k=a[1],m=1);F.push(100*a[0]+"% "+k);c?(z=m,A=k):(v=m,C=k)});if("fill"===b)if("gradient"===h)q=p.x1||p[0]||0,r=p.y1||p[1]||0,t=p.x2||p[2]||0,u=p.y2||p[3]||0,D='angle="'+(90-180*Math.atan((u-
r)/(t-q))/Math.PI)+'"',G();else{b=p.r;var I=2*b,J=2*b,K=p.cx,N=p.cy,H=d.radialReference,P;p=function(){H&&(P=n.getBBox(),K+=(H[0]-P.x)/P.width-.5,N+=(H[1]-P.y)/P.height-.5,I*=H[2]/P.width,J*=H[2]/P.height);D='src="'+w().global.VMLRadialGradientURL+'" size="'+I+","+J+'" origin="0.5,0.5" position="'+K+","+N+'" color2="'+C+'" ';G()};n.added?p():n.onAdd=p;l=A}else l=k}else if(f.test(a)&&"IMG"!==d.tagName){var M=e(a);n[b+"-opacitySetter"](M.get("a"),b,d);l=M.get("rgb")}else p=d.getElementsByTagName(b),
p.length&&(p[0].opacity=1,p[0].type="solid"),l=a;return l},prepVML:function(a){var c=this.isIE8;a=a.join("");c?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=-1===a.indexOf('style="')?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:p.prototype.html,path:function(a){var c={coordsize:"10 10"};A(a)?c.d=a:b(a)&&I(c,a);return this.createElement("shape").attr(c)},
circle:function(a,d,f){var c=this.symbol("circle");b(a)&&(f=a.r,d=a.y,a=a.x);c.isCircle=!0;c.r=f;return c.attr({x:a,y:d})},g:function(a){var c;a&&(c={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(c)},image:function(a,b,f,e,g){var c=this.createElement("img").attr({src:a});1<arguments.length&&c.attr({x:b,y:f,width:e,height:g});return c},createElement:function(a){return"rect"===a?this.symbol(a):p.prototype.createElement.call(this,a)},invertChild:function(a,
b){var c=this;b=b.style;var d="IMG"===a.tagName&&a.style;G(a,{flip:"x",left:v(b.width)-(d?v(d.top):1)+"px",top:v(b.height)-(d?v(d.left):1)+"px",rotation:-90});[].forEach.call(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,f,e,g){var c=g.start,d=g.end,h=g.r||f||e;f=g.innerR;e=Math.cos(c);var k=Math.sin(c),l=Math.cos(d),n=Math.sin(d);if(0===d-c)return["x"];c=["wa",a-h,b-h,a+h,b+h,a+h*e,b+h*k,a+h*l,b+h*n];g.open&&!f&&c.push("e","M",a,b);c.push("at",a-f,b-f,a+f,b+f,a+f*l,b+f*
n,a+f*e,b+f*k,"x","e");c.isArc=!0;return c},circle:function(a,b,f,e,g){g&&N(g.r)&&(f=e=2*g.r);g&&g.isCircle&&(a-=f/2,b-=e/2);return["wa",a,b,a+f,b+e,a+f,b+e/2,a+f,b+e/2,"e"]},rect:function(a,b,e,g,h){return p.prototype.symbols[N(h)&&h.r?"callout":"square"].call(0,a,b,e,g,h)}}},r.VMLRenderer=a=function(){this.init.apply(this,arguments)},I(a.prototype,p.prototype),I(a.prototype,C),r.Renderer=a,M.compose(a,p));p.prototype.getSpanWidth=function(a,b){var c=a.getBBox(!0).width;!J&&this.forExport&&(c=this.measureSpanWidth(b.firstChild.data,
a.styles));return c};p.prototype.measureSpanWidth=function(a,b){var c=q.createElement("span");a=q.createTextNode(a);c.appendChild(a);G(c,b);this.box.appendChild(c);b=c.offsetWidth;H(c);return b}});C(a,"masters/modules/oldie.src.js",[],function(){})});
//# sourceMappingURL=oldie.js.map