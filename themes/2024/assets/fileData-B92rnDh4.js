import{c as D,d as _,D as I,r as k,E as U,o as W,G as $,H as Q}from"./index-EADe6V-l.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=D("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=D("ClipboardListIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=D("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=D("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var b=function(){return b=Object.assign||function(f){for(var l,u=1,c=arguments.length;u<c;u++){l=arguments[u];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(f[d]=l[d])}return f},b.apply(this,arguments)};var N;(function(s){var f=function(){function n(e,t,r,a){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var o=[],i=0;i<this.size;i++)o.push(!1);for(var i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var h=this.addEccAndInterleave(r);if(this.drawCodewords(h),a==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var E=this.getPenaltyScore();E<v&&(a=i,v=E),this.applyMask(i)}c(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return n.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,a,o,i){if(r===void 0&&(r=1),a===void 0&&(a=40),o===void 0&&(o=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=a&&a<=n.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");var h,v;for(h=r;;h++){var E=n.getNumDataCodewords(h,t)*8,m=d.getTotalBits(e,h);if(m<=E){v=m;break}if(h>=a)throw new RangeError("Data too long")}for(var p=0,C=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];p<C.length;p++){var M=C[p];i&&v<=n.getNumDataCodewords(h,M)*8&&(t=M)}for(var g=[],w=0,S=e;w<S.length;w++){var R=S[w];l(R.mode.modeBits,4,g),l(R.numChars,R.mode.numCharCountBits(h),g);for(var P=0,y=R.getData();P<y.length;P++){var K=y[P];g.push(K)}}c(g.length==v);var O=n.getNumDataCodewords(h,t)*8;c(g.length<=O),l(0,Math.min(4,O-g.length),g),l(0,(8-g.length%8)%8,g),c(g.length%8==0);for(var T=236;g.length<O;T^=253)l(T,8,g);for(var z=[];z.length*8<g.length;)z.push(0);return g.forEach(function(J,F){return z[F>>>3]|=J<<7-(F&7)}),new n(h,t,z,o)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var a=0;a<r;a++)e==0&&a==0||e==0&&a==r-1||e==r-1&&a==0||this.drawAlignmentPattern(t[e],t[a]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,a=0;a<10;a++)r=r<<1^(r>>>9)*1335;var o=(t<<10|r)^21522;c(o>>>15==0);for(var a=0;a<=5;a++)this.setFunctionModule(8,a,u(o,a));this.setFunctionModule(8,7,u(o,6)),this.setFunctionModule(8,8,u(o,7)),this.setFunctionModule(7,8,u(o,8));for(var a=9;a<15;a++)this.setFunctionModule(14-a,8,u(o,a));for(var a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,u(o,a));for(var a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,u(o,a));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;c(r>>>18==0);for(var t=0;t<18;t++){var a=u(r,t),o=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(o,i,a),this.setFunctionModule(i,o,a)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var a=-4;a<=4;a++){var o=Math.max(Math.abs(a),Math.abs(r)),i=e+a,h=t+r;0<=i&&i<this.size&&0<=h&&h<this.size&&this.setFunctionModule(i,h,o!=2&&o!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.setFunctionModule(e+a,t+r,Math.max(Math.abs(a),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var a=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),h=a-i%a,v=Math.floor(i/a),E=[],m=n.reedSolomonComputeDivisor(o),p=0,C=0;p<a;p++){var M=e.slice(C,C+v-o+(p<h?0:1));C+=M.length;var g=n.reedSolomonComputeRemainder(M,m);p<h&&M.push(0),E.push(M.concat(g))}for(var w=[],S=function(R){E.forEach(function(P,y){(R!=v-o||y>=h)&&w.push(P[R])})},p=0;p<E[0].length;p++)S(p);return c(w.length==i),w},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var a=0;a<this.size;a++)for(var o=0;o<2;o++){var i=r-o,h=(r+1&2)==0,v=h?this.size-1-a:a;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=u(e[t>>>3],7-(t&7)),t++)}}c(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var a=void 0;switch(e){case 0:a=(r+t)%2==0;break;case 1:a=t%2==0;break;case 2:a=r%3==0;break;case 3:a=(r+t)%3==0;break;case 4:a=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:a=r*t%2+r*t%3==0;break;case 6:a=(r*t%2+r*t%3)%2==0;break;case 7:a=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&a&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,a=0,o=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],a=1);e+=this.finderPenaltyTerminateAndCount(r,a,o)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,h=0,o=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(h++,h==5?e+=n.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],h=1);e+=this.finderPenaltyTerminateAndCount(r,h,o)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var E=0,m=0,p=this.modules;m<p.length;m++){var C=p[m];E=C.reduce(function(w,S){return w+(S?1:0)},E)}var M=this.size*this.size,g=Math.ceil(Math.abs(E*20-M*10)/M)-1;return c(0<=g&&g<=9),e+=g*n.PENALTY_N4,c(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],a=this.size-7;r.length<e;a-=t)r.splice(1,0,a);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return c(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var a=1,r=0;r<e;r++){for(var o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],a),o+1<t.length&&(t[o]^=t[o+1]);a=n.reedSolomonMultiply(a,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),a=function(v){var E=v^r.shift();r.push(0),t.forEach(function(m,p){return r[p]^=n.reedSolomonMultiply(m,E)})},o=0,i=e;o<i.length;o++){var h=i[o];a(h)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,a=7;a>=0;a--)r=r<<1^(r>>>7)*285,r^=(t>>>a&1)*e;return c(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];c(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();s.QrCode=f;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function u(n,e){return(n>>>e&1)!=0}function c(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,a=e;r<a.length;r++){var o=a[r];l(o,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var a=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+a),10),a*3+1,t),r+=a}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var a=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;a+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(a,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,a=0,o=e;a<o.length;a++){var i=o[a],h=i.mode.numCharCountBits(t);if(i.numChars>=1<<h)return 1/0;r+=4+h+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();s.QrSegment=d})(N||(N={}));(function(s){(function(f){var l=function(){function u(c,d){this.ordinal=c,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();f.Ecc=l})(s.QrCode||(s.QrCode={}))})(N||(N={}));(function(s){(function(f){var l=function(){function u(c,d){this.modeBits=c,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();f.Mode=l})(s.QrSegment||(s.QrSegment={}))})(N||(N={}));var A=N,H="H",L={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},V=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function G(s){return s in L}function Y(s,f){f===void 0&&(f=0);var l=[];return s.forEach(function(u,c){var d=null;u.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+f," ").concat(c+f,"h").concat(e-d,"v1H").concat(d+f,"z")),d=null;return}if(e===u.length-1){if(!n)return;d===null?l.push("M".concat(e+f,",").concat(c+f," h1v1H").concat(e+f,"z")):l.push("M".concat(d+f,",").concat(c+f," h").concat(e+1-d,"v1H").concat(d+f,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var B={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:H,validator:function(s){return G(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},X=b(b({},B),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),Z=_({name:"QRCodeSvg",props:B,setup:function(s){var f=k(0),l=k(""),u=function(){var c=s.value,d=s.level,n=s.margin,e=A.QrCode.encodeText(c,L[d]).getModules();f.value=e.length+n*2,l.value=Y(e,n)};return u(),U(u),function(){return I("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[I("path",{fill:s.background,d:"M0,0 h".concat(f.value,"v").concat(f.value,"H0z")}),I("path",{fill:s.foreground,d:l.value})])}}}),q=_({name:"QRCodeCanvas",props:B,setup:function(s){var f=k(null),l=function(){var u=s.value,c=s.level,d=s.size,n=s.margin,e=s.background,t=s.foreground,r=f.value;if(r){var a=r.getContext("2d");if(a){var o=A.QrCode.encodeText(u,L[c]).getModules(),i=o.length+n*2,h=window.devicePixelRatio||1,v=d/i*h;r.height=r.width=d*h,a.scale(v,v),a.fillStyle=e,a.fillRect(0,0,i,i),a.fillStyle=t,V?a.fill(new Path2D(Y(o,n))):o.forEach(function(E,m){E.forEach(function(p,C){p&&a.fillRect(C+n,m+n,1,1)})})}}};return W(l),U(l),function(){return I("canvas",{ref:f,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ne=_({name:"Qrcode",render:function(){var s=this.$props,f=s.renderAs,l=s.value,u=s.size,c=s.margin,d=s.level,n=s.background,e=s.foreground,t=u>>>0,r=c>>>0,a=G(d)?d:H;return I(f==="svg"?Z:q,{value:l,size:t,margin:r,level:a,background:n,foreground:e})},props:X}),ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oe(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}const ie=$("fileData",()=>{const s=Q(JSON.parse(localStorage.getItem("receiveData")||"[]")||[]),f=Q(JSON.parse(localStorage.getItem("shareData")||"[]")||[]);function l(){localStorage.setItem("receiveData",JSON.stringify(s)),localStorage.setItem("shareData",JSON.stringify(f))}function u(e){s.unshift(e),l()}function c(e){f.unshift(e),l()}function d(e){s.splice(e,1),l()}function n(e){f.splice(e,1),l()}return{receiveData:s,shareData:f,save:l,addShareData:c,addReceiveData:u,deleteReceiveData:d,deleteShareData:n}});export{ee as C,te as E,ne as Q,re as S,x as a,ae as c,oe as g,ie as u};
