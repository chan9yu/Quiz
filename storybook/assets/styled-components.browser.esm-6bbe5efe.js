import{R as T,r as Be}from"./index-76fb7be0.js";var R=function(){return R=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},R.apply(this,arguments)};function q(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var S="-ms-",ne="-moz-",m="-webkit-",ct="comm",Se="rule",Ge="decl",zt="@import",ut="@keyframes",jt="@layer",Mt=Math.abs,He=String.fromCharCode,_e=Object.assign;function Lt(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function pt(e){return e.trim()}function N(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function le(e,t){return e.indexOf(t)}function P(e,t){return e.charCodeAt(t)|0}function V(e,t,r){return e.slice(t,r)}function _(e){return e.length}function ft(e){return e.length}function re(e,t){return t.push(e),e}function Ft(e,t){return e.map(t).join("")}function Ke(e,t){return e.filter(function(r){return!N(r,t)})}var we=1,X=1,lt=0,O=0,A=0,J="";function ke(e,t,r,n,o,i,a,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:we,column:X,length:a,return:"",siblings:c}}function M(e,t){return _e(ke("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function W(e){for(;e.root;)e=M(e.root,{children:[e]});re(e,e.siblings)}function Bt(){return A}function Gt(){return A=O>0?P(J,--O):0,X--,A===10&&(X=1,we--),A}function $(){return A=O<lt?P(J,O++):0,X++,A===10&&(X=1,we++),A}function G(){return P(J,O)}function de(){return O}function xe(e,t){return V(J,e,t)}function Ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(e){return we=X=1,lt=_(J=e),O=0,[]}function Yt(e){return J="",e}function Re(e){return pt(xe(O-1,De(e===91?e+2:e===40?e+1:e)))}function Wt(e){for(;(A=G())&&A<33;)$();return Ne(e)>2||Ne(A)>3?"":" "}function Ut(e,t){for(;--t&&$()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return xe(e,de()+(t<6&&G()==32&&$()==32))}function De(e){for(;$();)switch(A){case e:return O;case 34:case 39:e!==34&&e!==39&&De(A);break;case 40:e===41&&De(e);break;case 92:$();break}return O}function qt(e,t){for(;$()&&e+A!==47+10;)if(e+A===42+42&&G()===47)break;return"/*"+xe(t,O-1)+"*"+He(e===47?e:$())}function Vt(e){for(;!Ne(G());)$();return xe(e,O)}function Xt(e){return Yt(he("",null,null,null,[""],e=Ht(e),0,[0],e))}function he(e,t,r,n,o,i,a,c,s){for(var u=0,f=0,l=a,y=0,d=0,w=0,x=1,E=1,C=1,h=0,v="",I=o,b=i,k=n,g=v;E;)switch(w=h,h=$()){case 40:if(w!=108&&P(g,l-1)==58){le(g+=p(Re(h),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:g+=Re(h);break;case 9:case 10:case 13:case 32:g+=Wt(w);break;case 92:g+=Ut(de()-1,7);continue;case 47:switch(G()){case 42:case 47:re(Kt(qt($(),de()),t,r,s),s);break;default:g+="/"}break;case 123*x:c[u++]=_(g)*C;case 125*x:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+f:C==-1&&(g=p(g,/\f/g,"")),d>0&&_(g)-l&&re(d>32?Je(g+";",n,r,l-1,s):Je(p(g," ","")+";",n,r,l-2,s),s);break;case 59:g+=";";default:if(re(k=Ze(g,t,r,u,f,o,c,v,I=[],b=[],l,i),i),h===123)if(f===0)he(g,t,k,k,I,i,l,c,b);else switch(y===99&&P(g,3)===110?100:y){case 100:case 108:case 109:case 115:he(e,k,k,n&&re(Ze(e,k,k,0,0,o,c,v,o,I=[],l,b),b),o,b,l,c,n?I:b);break;default:he(g,k,k,k,[""],b,0,c,b)}}u=f=d=0,x=C=1,v=g="",l=a;break;case 58:l=1+_(g),d=w;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Gt()==125)continue}switch(g+=He(h),h*x){case 38:C=f>0?1:(g+="\f",-1);break;case 44:c[u++]=(_(g)-1)*C,C=1;break;case 64:G()===45&&(g+=Re($())),y=G(),f=l=_(v=g+=Vt(de())),h++;break;case 45:w===45&&_(g)==2&&(x=0)}}return i}function Ze(e,t,r,n,o,i,a,c,s,u,f,l){for(var y=o-1,d=o===0?i:[""],w=ft(d),x=0,E=0,C=0;x<n;++x)for(var h=0,v=V(e,y+1,y=Mt(E=a[x])),I=e;h<w;++h)(I=pt(E>0?d[h]+" "+v:p(v,/&\f/g,d[h])))&&(s[C++]=I);return ke(e,t,r,o===0?Se:c,s,u,f,l)}function Kt(e,t,r,n){return ke(e,t,r,ct,He(Bt()),V(e,2,-2),0,n)}function Je(e,t,r,n,o){return ke(e,t,r,Ge,V(e,0,n),V(e,n+1,-1),n,o)}function dt(e,t,r){switch(Lt(e,t)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 4789:return ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+ne+e+S+e+e;case 5936:switch(P(e,t+11)){case 114:return m+e+S+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+S+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+S+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return m+e+S+e+e;case 6165:return m+e+S+"flex-"+e+e;case 5187:return m+e+p(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return m+e+S+"flex-item-"+p(e,/flex-|-self/g,"")+(N(e,/flex-|baseline/)?"":S+"grid-row-"+p(e,/flex-|-self/g,""))+e;case 4675:return m+e+S+"flex-line-pack"+p(e,/align-content|flex-|-self/g,"")+e;case 5548:return m+e+S+p(e,"shrink","negative")+e;case 5292:return m+e+S+p(e,"basis","preferred-size")+e;case 6060:return m+"box-"+p(e,"-grow","")+m+e+S+p(e,"grow","positive")+e;case 4554:return m+p(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4200:if(!N(e,/flex-|baseline/))return S+"grid-column-align"+V(e,t)+e;break;case 2592:case 3360:return S+p(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,N(n.props,/grid-\w+-end/)})?~le(e+(r=r[t].value),"span")?e:S+p(e,"-start","")+e+S+"grid-row-span:"+(~le(r,"span")?N(r,/\d+/):+N(r,/\d+/)-+N(e,/\d+/))+";":S+p(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return N(n.props,/grid-\w+-start/)})?e:S+p(p(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+ne+(P(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~le(e,"stretch")?dt(p(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return p(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,c,s,u){return S+o+":"+i+u+(a?S+o+"-span:"+(c?s:+s-+i)+u:"")+e});case 4949:if(P(e,t+6)===121)return p(e,":",":"+m)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return p(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(P(e,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+S+"$2box$3")+e;case 100:return p(e,":",":"+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(e,"scroll-","scroll-snap-")+e}return e}function me(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Zt(e,t,r,n){switch(e.type){case jt:if(e.children.length)break;case zt:case Ge:return e.return=e.return||e.value;case ct:return"";case ut:return e.return=e.value+"{"+me(e.children,n)+"}";case Se:if(!_(e.value=e.props.join(",")))return""}return _(r=me(e.children,n))?e.return=e.value+"{"+r+"}":""}function Jt(e){var t=ft(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}function Qt(e){return function(t){t.root||(t=t.return)&&e(t)}}function er(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ge:e.return=dt(e.value,e.length,r);return;case ut:return me([M(e,{value:p(e.value,"@","@"+m)})],n);case Se:if(e.length)return Ft(r=e.props,function(o){switch(N(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(M(e,{props:[p(o,/:(read-\w+)/,":"+ne+"$1")]})),W(M(e,{props:[o]})),_e(e,{props:Ke(r,n)});break;case"::placeholder":W(M(e,{props:[p(o,/:(plac\w+)/,":"+m+"input-$1")]})),W(M(e,{props:[p(o,/:(plac\w+)/,":"+ne+"$1")]})),W(M(e,{props:[p(o,/:(plac\w+)/,S+"input-$1")]})),W(M(e,{props:[o]})),_e(e,{props:Ke(r,n)});break}return""})}}var tr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ye=typeof window<"u"&&"HTMLElement"in window,rr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),nr={},Ce=Object.freeze([]),Z=Object.freeze({});function ht(e,t,r){return r===void 0&&(r=Z),e.theme!==r.theme&&e.theme||t||r.theme}var gt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),or=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ir=/(^-|-$)/g;function Qe(e){return e.replace(or,"-").replace(ir,"")}var ar=/(a)(d)/gi,et=function(e){return String.fromCharCode(e+(e>25?39:97))};function ze(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=et(t%52)+r;return(et(t%52)+r).replace(ar,"$1-$2")}var Ee,U=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},mt=function(e){return U(5381,e)};function We(e){return ze(mt(e)>>>0)}function sr(e){return e.displayName||e.name||"Component"}function Oe(e){return typeof e=="string"&&!0}var yt=typeof Symbol=="function"&&Symbol.for,vt=yt?Symbol.for("react.memo"):60115,cr=yt?Symbol.for("react.forward_ref"):60112,ur={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fr=((Ee={})[cr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[vt]=bt,Ee);function tt(e){return("type"in(t=e)&&t.type.$$typeof)===vt?bt:"$$typeof"in e?fr[e.$$typeof]:ur;var t}var lr=Object.defineProperty,dr=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,hr=Object.getOwnPropertyDescriptor,gr=Object.getPrototypeOf,nt=Object.prototype;function St(e,t,r){if(typeof t!="string"){if(nt){var n=gr(t);n&&n!==nt&&St(e,n,r)}var o=dr(t);rt&&(o=o.concat(rt(t)));for(var i=tt(e),a=tt(t),c=0;c<o.length;++c){var s=o[c];if(!(s in pr||r&&r[s]||a&&s in a||i&&s in i)){var u=hr(t,s);try{lr(e,s,u)}catch{}}}}return e}function H(e){return typeof e=="function"}function Ue(e){return typeof e=="object"&&"styledComponentId"in e}function B(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ye(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function oe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function je(e,t,r){if(r===void 0&&(r=!1),!r&&!oe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=je(e[n],t[n]);else if(oe(t))for(var n in t)e[n]=je(e[n],t[n]);return e}function qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Y(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Y(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(c,r[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ge=new Map,ve=new Map,Te=1,fe=function(e){if(ge.has(e))return ge.get(e);for(;ve.has(Te);)Te++;var t=Te++;return ge.set(e,t),ve.set(t,e),t},yr=function(e,t){ge.set(e,t),ve.set(t,e)},vr="style[".concat(K,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),br=new RegExp("^".concat(K,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sr=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},wr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var c=n[i].trim();if(c){var s=c.match(br);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(yr(f,u),Sr(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}};function kr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var s=Array.from(c.querySelectorAll("style[".concat(K,"]")));return s[s.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(K,"active"),n.setAttribute("data-styled-version","6.1.0");var a=kr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},xr=function(){function e(t){this.element=wt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Y(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Cr=function(){function e(t){this.element=wt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ar=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ot=Ye,Ir={isServer:!Ye,useCSSOMInjection:!rr},be=function(){function e(t,r,n){t===void 0&&(t=Z),r===void 0&&(r={});var o=this;this.options=R(R({},Ir),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ye&&ot&&(ot=!1,function(i){for(var a=document.querySelectorAll(vr),c=0,s=a.length;c<s;c++){var u=a[c];u&&u.getAttribute(K)!=="active"&&(wr(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qe(this,function(){return function(i){for(var a=i.getTag(),c=a.length,s="",u=function(l){var y=function(C){return ve.get(C)}(l);if(y===void 0)return"continue";var d=i.names.get(y),w=a.getGroup(l);if(d===void 0||w.length===0)return"continue";var x="".concat(K,".g").concat(l,'[id="').concat(y,'"]'),E="";d!==void 0&&d.forEach(function(C){C.length>0&&(E+="".concat(C,","))}),s+="".concat(w).concat(x,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},f=0;f<c;f++)u(f);return s}(o)})}return e.registerId=function(t){return fe(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(R(R({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Ar(o):n?new xr(o):new Cr(o)}(this.options),new mr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(fe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(fe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Pr=/&/g,Rr=/^\s*\/\/.*$/gm;function kt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=kt(r.children,t)),r})}function Er(e){var t,r,n,o=e===void 0?Z:e,i=o.options,a=i===void 0?Z:i,c=o.plugins,s=c===void 0?Ce:c,u=function(y,d,w){return w===r||w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):y},f=s.slice();f.push(function(y){y.type===Se&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Pr,r).replace(n,u))}),a.prefix&&f.push(er),f.push(Zt);var l=function(y,d,w,x){d===void 0&&(d=""),w===void 0&&(w=""),x===void 0&&(x="&"),t=x,r=d,n=new RegExp("\\".concat(r,"\\b"),"g");var E=y.replace(Rr,""),C=Xt(w||d?"".concat(w," ").concat(d," { ").concat(E," }"):E);a.namespace&&(C=kt(C,a.namespace));var h=[];return me(C,Jt(f.concat(Qt(function(v){return h.push(v)})))),h};return l.hash=s.length?s.reduce(function(y,d){return d.name||Y(15),U(y,d.name)},5381).toString():"",l}var Or=new be,Me=Er(),xt=T.createContext({shouldForwardProp:void 0,styleSheet:Or,stylis:Me});xt.Consumer;T.createContext(void 0);function Le(){return Be.useContext(xt)}var Ct=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Me);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,qe(this,function(){throw Y(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Me),this.name+t.hash},e}(),Tr=function(e){return e>="A"&&e<="Z"};function it(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Tr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var At=function(e){return e==null||e===!1||e===""},It=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!At(i)&&(Array.isArray(i)&&i.isCss||H(i)?n.push("".concat(it(o),":"),i,";"):oe(i)?n.push.apply(n,q(q(["".concat(o," {")],It(i),!1),["}"],!1)):n.push("".concat(it(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in tr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function L(e,t,r,n){if(At(e))return[];if(Ue(e))return[".".concat(e.styledComponentId)];if(H(e)){if(!H(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return L(o,t,r,n)}var i;return e instanceof Ct?r?(e.inject(r,n),[e.getName(n)]):[e]:oe(e)?It(e):Array.isArray(e)?Array.prototype.concat.apply(Ce,e.map(function(a){return L(a,t,r,n)})):[e.toString()]}function Pt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(H(r)&&!Ue(r))return!1}return!0}var $r=mt("6.1.0"),_r=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Pt(t),this.componentId=r,this.baseHash=U($r,r),this.baseStyle=n,be.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=B(o,this.staticRulesId);else{var i=ye(L(this.rules,t,r,n)),a=ze(U(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var c=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,c)}o=B(o,a),this.staticRulesId=a}else{for(var s=U(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var l=this.rules[f];if(typeof l=="string")u+=l;else if(l){var y=ye(L(l,t,r,n));s=U(s,y+f),u+=y}}if(u){var d=ze(s>>>0);r.hasNameForId(this.componentId,d)||r.insertRules(this.componentId,d,n(u,".".concat(d),void 0,this.componentId)),o=B(o,d)}}return o},e}(),ie=T.createContext(void 0);ie.Consumer;function Mr(e){var t=T.useContext(ie),r=Be.useMemo(function(){return function(n,o){if(!n)throw Y(14);if(H(n)){var i=n(o);return i}if(Array.isArray(n)||typeof n!="object")throw Y(8);return o?R(R({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?T.createElement(ie.Provider,{value:r},e.children):null}var $e={};function Nr(e,t,r){var n=Ue(e),o=e,i=!Oe(e),a=t.attrs,c=a===void 0?Ce:a,s=t.componentId,u=s===void 0?function(v,I){var b=typeof v!="string"?"sc":Qe(v);$e[b]=($e[b]||0)+1;var k="".concat(b,"-").concat(We("6.1.0"+b+$e[b]));return I?"".concat(I,"-").concat(k):k}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(v){return Oe(v)?"styled.".concat(v):"Styled(".concat(sr(v),")")}(e);var l=t.displayName&&t.componentId?"".concat(Qe(t.displayName),"-").concat(t.componentId):t.componentId||u,y=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,d=t.shouldForwardProp;if(n&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;d=function(v,I){return w(v,I)&&x(v,I)}}else d=w}var E=new _r(r,l,n?o.componentStyle:void 0);function C(v,I){return function(b,k,g){var ae=b.attrs,Et=b.componentStyle,Ot=b.defaultProps,Tt=b.foldedComponentIds,$t=b.styledComponentId,_t=b.target,Nt=T.useContext(ie),Dt=Le(),Ae=b.shouldForwardProp||Dt.shouldForwardProp,D=function(ce,ee,ue){for(var te,F=R(R({},ee),{className:void 0,theme:ue}),Pe=0;Pe<ce.length;Pe+=1){var pe=H(te=ce[Pe])?te(F):te;for(var j in pe)F[j]=j==="className"?B(F[j],pe[j]):j==="style"?R(R({},F[j]),pe[j]):pe[j]}return ee.className&&(F.className=B(F.className,ee.className)),F}(ae,k,ht(k,Nt,Ot)||Z),se=D.as||_t,Q={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?Q.as=D.forwardedAs:Ae&&!Ae(z,se)||(Q[z]=D[z]));var Xe=function(ce,ee){var ue=Le(),te=ce.generateAndInjectStyles(ee,ue.styleSheet,ue.stylis);return te}(Et,D),Ie=B(Tt,$t);return Xe&&(Ie+=" "+Xe),D.className&&(Ie+=" "+D.className),Q[Oe(se)&&!gt.has(se)?"class":"className"]=Ie,Q.ref=g,Be.createElement(se,Q)}(h,v,I)}var h=T.forwardRef(C);return h.attrs=y,h.componentStyle=E,h.shouldForwardProp=d,h.foldedComponentIds=n?B(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=l,h.target=n?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(I){for(var b=[],k=1;k<arguments.length;k++)b[k-1]=arguments[k];for(var g=0,ae=b;g<ae.length;g++)je(I,ae[g],!0);return I}({},o.defaultProps,v):v}}),qe(h,function(){return".".concat(h.styledComponentId)}),i&&St(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function at(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var st=function(e){return Object.assign(e,{isCss:!0})};function Ve(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(H(e)||oe(e)){var n=e;return st(L(at(Ce,q([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?L(o):st(L(at(o,t)))}function Fe(e,t,r){if(r===void 0&&(r=Z),!t)throw Y(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Ve.apply(void 0,q([o],i,!1)))};return n.attrs=function(o){return Fe(e,t,R(R({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Fe(e,t,R(R({},r),o))},n}var Rt=function(e){return Fe(Nr,e)},Dr=Rt;gt.forEach(function(e){Dr[e]=Rt(e)});var zr=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Pt(t),be.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(ye(L(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&be.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Lr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ve.apply(void 0,q([e],t,!1)),o="sc-global-".concat(We(JSON.stringify(n))),i=new zr(n,o),a=function(s){var u=Le(),f=T.useContext(ie),l=T.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&c(l,s,u.styleSheet,f,u.stylis),T.useLayoutEffect(function(){if(!u.styleSheet.server)return c(l,s,u.styleSheet,f,u.stylis),function(){return i.removeStyles(l,u.styleSheet)}},[l,s,u.styleSheet,f,u.stylis]),null};function c(s,u,f,l,y){if(i.isStatic)i.renderStyles(s,nr,f,y);else{var d=R(R({},u),{theme:ht(u,l,a.defaultProps)});i.renderStyles(s,d,f,y)}}return T.memo(a)}function Fr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ye(Ve.apply(void 0,q([e],t,!1))),o=We(n);return new Ct(o,n)}export{Mr as X,Lr as a,Fr as c,Ve as n,Dr as s};
//# sourceMappingURL=styled-components.browser.esm-6bbe5efe.js.map
