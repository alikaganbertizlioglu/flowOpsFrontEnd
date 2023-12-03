import './polyfills.server.mjs';
import{Ba as ce,D as Q,Ea as he,F as z,J as g,K as E,M as A,N as p,P as C,Q as j,S as ae,U as V,X as c,Y as T,Z as se,_ as S,aa as re,ca as l,da as o,ea as _,ga as k,ha as u,i as m,ia as h,k as v,m as X,ma as f,na as d,p as J,q,r as ne,u as ie,w as O,xa as oe,ya as le,za as ue}from"./chunk-LNMTZCMP.mjs";import{a as $}from"./chunk-KRLCULJA.mjs";var fe=(()=>{let a=class a{constructor(){this.isDarkTheme=!1}toggleTheme(){this.isDarkTheme=!this.isDarkTheme,document.body.classList.toggle("dark-theme",this.isDarkTheme)}isDarkMode(){return this.isDarkTheme}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=g({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();var y=class{},de=(()=>{class n extends y{getTranslation(e){return m({})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),R=class{},pe=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();function B(n,a){if(n===a)return!0;if(n===null||a===null)return!1;if(n!==n&&a!==a)return!0;let e=typeof n,t=typeof a,i,s,r;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(a))return!1;if((i=n.length)==a.length){for(s=0;s<i;s++)if(!B(n[s],a[s]))return!1;return!0}}else{if(Array.isArray(a))return!1;r=Object.create(null);for(s in n){if(!B(n[s],a[s]))return!1;r[s]=!0}for(s in a)if(!(s in r)&&typeof a[s]<"u")return!1;return!0}return!1}function b(n){return typeof n<"u"&&n!==null}function W(n){return n&&typeof n=="object"&&!Array.isArray(n)}function ve(n,a){let e=Object.assign({},n);return W(n)&&W(a)&&Object.keys(a).forEach(t=>{W(a[t])?t in n?e[t]=ve(n[t],a[t]):Object.assign(e,{[t]:a[t]}):Object.assign(e,{[t]:a[t]})}),e}var M=class{},ge=(()=>{class n extends M{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let i;return typeof e=="string"?i=this.interpolateString(e,t):typeof e=="function"?i=this.interpolateFunction(e,t):i=e,i}getValue(e,t){let i=typeof t=="string"?t.split("."):[t];t="";do t+=i.shift(),b(e)&&b(e[t])&&(typeof e[t]=="object"||!i.length)?(e=e[t],t=""):i.length?t+=".":e=void 0;while(i.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(i,s)=>{let r=this.getValue(t,s);return b(r)?r:i}):e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),I=class{},me=(()=>{class n extends I{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),H=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new S;onLangChange=new S;onDefaultLangChange=new S},Z=new A("USE_STORE"),Y=new A("USE_DEFAULT_LANG"),ee=new A("DEFAULT_LANGUAGE"),te=new A("USE_EXTEND"),N=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new S;_onLangChange=new S;_onDefaultLangChange=new S;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,i,s,r,w=!0,x=!1,D=!1,P){this.store=e,this.currentLoader=t,this.compiler=i,this.parser=s,this.missingTranslationHandler=r,this.useDefaultLang=w,this.isolate=x,this.extend=D,P&&this.setDefaultLang(P)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(O(1)).subscribe(i=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return m(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe(O(1)).subscribe(i=>{this.changeLang(e)}),t):(this.changeLang(e),m(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(Q(1),O(1));return this.loadingTranslations=t.pipe(X(i=>this.compiler.compileTranslations(i,e)),Q(1),O(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[e]=this.extend&&this.translations[e]?$($({},i),this.translations[e]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),t}setTranslation(e,t,i=!1){t=this.compiler.compileTranslations(t,e),(i||this.extend)&&this.translations[e]?this.translations[e]=ve(this.translations[e],t):this.translations[e]=t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,i){let s;if(t instanceof Array){let r={},w=!1;for(let x of t)r[x]=this.getParsedResult(e,x,i),v(r[x])&&(w=!0);if(w){let x=t.map(D=>v(r[D])?r[D]:m(r[D]));return ne(x).pipe(X(D=>{let P={};return D.forEach((De,Te)=>{P[t[Te]]=De}),P}))}return r}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),i)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),i)),typeof s>"u"){let r={key:t,translateService:this};typeof i<"u"&&(r.interpolateParams=i),s=this.missingTranslationHandler.handle(r)}return typeof s<"u"?s:t}get(e,t){if(!b(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(ie(i=>(i=this.getParsedResult(i,e,t),v(i)?i:m(i))));{let i=this.getParsedResult(this.translations[this.currentLang],e,t);return v(i)?i:m(i)}}getStreamOnTranslationChange(e,t){if(!b(e)||!e.length)throw new Error('Parameter "key" required');return J(q(()=>this.get(e,t)),this.onTranslationChange.pipe(z(i=>{let s=this.getParsedResult(i.translations,e,t);return typeof s.subscribe=="function"?s:m(s)})))}stream(e,t){if(!b(e)||!e.length)throw new Error('Parameter "key" required');return J(q(()=>this.get(e,t)),this.onLangChange.pipe(z(i=>{let s=this.getParsedResult(i.translations,e,t);return v(s)?s:m(s)})))}instant(e,t){if(!b(e)||!e.length)throw new Error('Parameter "key" required');let i=this.getParsedResult(this.translations[this.currentLang],e,t);if(v(i)){if(e instanceof Array){let s={};return e.forEach((r,w)=>{s[e[w]]=e[w]}),s}return e}else return i}set(e,t,i=this.currentLang){this.translations[i][e]=this.compiler.compile(t,i),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||n)(p(H),p(y),p(I),p(M),p(R),p(Y),p(Z),p(te),p(ee))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();var F=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,i){let s=r=>{this.value=r!==void 0?r:e,this.lastKey=e,this._ref.markForCheck()};if(i){let r=this.translate.getParsedResult(i,e,t);v(r.subscribe)?r.subscribe(s):s(r)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(B(e,this.lastKey)&&B(t,this.lastParams))return this.value;let i;if(b(t[0])&&t.length)if(typeof t[0]=="string"&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{i=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else typeof t[0]=="object"&&!Array.isArray(t[0])&&(i=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,i,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)(T(N,16),T(se,16))};static \u0275pipe=ae({name:"translate",type:n,pure:!1});static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),Ce=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:y,useClass:de},e.compiler||{provide:I,useClass:me},e.parser||{provide:M,useClass:ge},e.missingTranslationHandler||{provide:R,useClass:pe},H,{provide:Z,useValue:e.isolate},{provide:Y,useValue:e.useDefaultLang},{provide:te,useValue:e.extend},{provide:ee,useValue:e.defaultLanguage},N]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:y,useClass:de},e.compiler||{provide:I,useClass:me},e.parser||{provide:M,useClass:ge},e.missingTranslationHandler||{provide:R,useClass:pe},{provide:Z,useValue:e.isolate},{provide:Y,useValue:e.useDefaultLang},{provide:te,useValue:e.extend},{provide:ee,useValue:e.defaultLanguage},N]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=E({})}return n})();var Le=(()=>{let a=class a{constructor(t){this.themeService=t}toggleTheme(){this.themeService.toggleTheme()}isDarkMode(){return this.themeService.isDarkMode()}};a.\u0275fac=function(i){return new(i||a)(T(fe))},a.\u0275cmp=C({type:a,selectors:[["app-header"]],decls:35,vars:20,consts:[[1,"container"],[1,"d-flex","flex-wrap","justify-content-center","align-items-center","py-3"],["href","/",1,"d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","link-body-emphasis","text-decoration-none"],[1,"fs-2","text-center"],["id","modeLabel",1,"mode-label","ms-2"],[1,"switch"],["type","checkbox",2,"display","none",3,"checked","change"],[1,"slider"],[1,"d-flex","flex-wrap","justify-content-center","py-1","mb-","border-bottom"],[1,"nav","nav-pills"],[1,"nav-item"],["href","#","aria-current","page",1,"nav-link","active"],["href","#",1,"nav-link"]],template:function(i,s){i&1&&(l(0,"div",0)(1,"header",1)(2,"a",2)(3,"span",3)(4,"b"),u(5,"FlowOps "),o(),u(6),f(7,"translate"),o()(),l(8,"span",4),u(9),o(),l(10,"label",5)(11,"input",6),k("change",function(){return s.toggleTheme()}),o(),_(12,"span",7),o()(),l(13,"header",8)(14,"ul",9)(15,"li",10)(16,"a",11),u(17),f(18,"translate"),o()(),l(19,"li",10)(20,"a",12),u(21),f(22,"translate"),o()(),l(23,"li",10)(24,"a",12),u(25),f(26,"translate"),o()(),l(27,"li",10)(28,"a",12),u(29),f(30,"translate"),o()(),l(31,"li",10)(32,"a",12),u(33),f(34,"translate"),o()()()()()),i&2&&(c(6),h(d(7,8,"PROJECT_DESCRIPTION")),c(3),h(s.isDarkMode()?"Dark Mode":"Light Mode"),c(2),re("checked",s.isDarkMode()),c(6),h(d(18,10,"HOME")),c(4),h(d(22,12,"FEATURES")),c(4),h(d(26,14,"PRICING")),c(4),h(d(30,16,"FAQS")),c(4),h(d(34,18,"ABOUT")))},dependencies:[F],styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:34px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translate(26px)}']});let n=a;return n})();var be=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=C({type:a,selectors:[["app-footer"]],decls:25,vars:15,consts:[[1,"container"],[1,"py-3","my-4"],[1,"nav","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#",1,"nav-link","px-2","text-body-secondary"],[1,"text-center","text-body-secondary"]],template:function(i,s){i&1&&(l(0,"div",0)(1,"footer",1)(2,"ul",2)(3,"li",3)(4,"a",4),u(5),f(6,"translate"),o()(),l(7,"li",3)(8,"a",4),u(9),f(10,"translate"),o()(),l(11,"li",3)(12,"a",4),u(13),f(14,"translate"),o()(),l(15,"li",3)(16,"a",4),u(17),f(18,"translate"),o()(),l(19,"li",3)(20,"a",4),u(21),f(22,"translate"),o()()(),l(23,"p",5),u(24,"\xA9 2023 FlowOps, Inc"),o()()()),i&2&&(c(5),h(d(6,5,"HOME")),c(4),h(d(10,7,"FEATURES")),c(4),h(d(14,9,"PRICING")),c(4),h(d(18,11,"FAQS")),c(4),h(d(22,13,"ABOUT")))},dependencies:[F]});let n=a;return n})();var ye=(()=>{let a=class a{constructor(t){this.translateService=t,t.setDefaultLang("en"),t.use("en")}switchLanguage(){this.translateService.use(this.translateService.currentLang==="en"?"tr":"en")}};a.\u0275fac=function(i){return new(i||a)(p(N))},a.\u0275prov=g({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();var we=(()=>{let a=class a{constructor(t){this.translateService=t}switchLanguage(){this.translateService.switchLanguage()}};a.\u0275fac=function(i){return new(i||a)(T(ye))},a.\u0275cmp=C({type:a,selectors:[["app-home"]],decls:5,vars:3,consts:[[3,"click"]],template:function(i,s){i&1&&(l(0,"h1"),u(1),f(2,"translate"),o(),l(3,"button",0),k("click",function(){return s.switchLanguage()}),u(4,"Switch Language"),o()),i&2&&(c(1),h(d(2,1,"GREETING")))},dependencies:[F]});let n=a;return n})();var U=(()=>{let a=class a{constructor(){this.title="flowOpsFrontEnd"}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=C({type:a,selectors:[["app-root"]],decls:3,vars:0,template:function(i,s){i&1&&_(0,"app-header")(1,"app-home")(2,"app-footer")},dependencies:[Le,be,we]});let n=a;return n})();var G=class{http;prefix;suffix;constructor(a,e="/assets/i18n/",t=".json"){this.http=a,this.prefix=e,this.suffix=t}getTranslation(a){return this.http.get(`${this.prefix}${a}${this.suffix}`)}};function Fe(n){return new G(n)}var xe=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=j({type:a,bootstrap:[U]}),a.\u0275inj=E({providers:[ce()],imports:[ue,le,Ce.forRoot({loader:{provide:y,useFactory:Fe,deps:[oe]}})]});let n=a;return n})();var Pe=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=j({type:a,bootstrap:[U]}),a.\u0275inj=E({imports:[xe,he]});let n=a;return n})();export{Pe as a};