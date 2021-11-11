/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(3));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(3));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(u){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(13)),a=n.__importDefault(r(14)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return a.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return a.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=i},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(3));e.exports=(0,n.default)("vendor")().reactCssThemr},function(e,t,r){e.exports={rangeEditor:"RangeEditor__rangeEditor___21aJB",rangeEditorValue:"RangeEditor__rangeEditorValue___3GwFy"}},function(e,t,r){"use strict";r(8)},function(e,t,r){"use strict";var n=_interopRequireDefault(r(9)),o=_interopRequireDefault(r(16));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,n.default)("Shel.Neos.RangeEditor:RangeEditor",{},(function(e){e.get("inspector").get("editors").set("Shel.Neos.RangeEditor/RangeEditor",{component:o.default})}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(10));t.createConsumerApi=o.default;var a=n.__importDefault(r(3));t.readFromConsumerApi=a.default;var i=r(12);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=a.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2).__importDefault(r(11)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(4));t.SynchronousRegistry=o.default;var a=n.__importDefault(r(15));t.SynchronousMetaRegistry=a.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function positionalArraySorter(e,t,r){var o,a,i,u,s,l,c,f,_,d,p,y,h,v;void 0===t&&(t="position"),void 0===r&&(r="key");var m="string"==typeof t?function(e){return e[t]}:t,b={},g={},w={},x={},S={},R={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);b[n]=t;var o=m(e),a=String(o||t),i=!1;if(a.startsWith("start")){var u=(s=a.match(/start\s+(\d+)/))&&s[1]?Number(s[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(a.startsWith("end")){var s;u=(s=a.match(/end\s+(\d+)/))&&s[1]?Number(s[1]):0;x[u]||(x[u]=[]),x[u].push(n)}else if(a.startsWith("before")){if(c=a.match(/before\s+(\S+)(\s+(\d+))?/)){var l=c[1];u=c[3]?Number(c[3]):0;S[l]||(S[l]={}),S[l][u]||(S[l][u]=[]),S[l][u].push(n)}else i=!0}else if(a.startsWith("after")){var c;if(c=a.match(/after\s+(\S+)(\s+(\d+))?/)){l=c[1],u=c[3]?Number(c[3]):0;R[l]||(R[l]={}),R[l][u]||(R[l][u]=[]),R[l][u].push(n)}else i=!0}else i=!0;if(i){var f=parseFloat(a);!isNaN(f)&&isFinite(f)||(f=t),g[f]||(g[f]=[]),g[f].push(n)}}));var O=[],P=[],E=[],j=[],k=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},M=function addToResults(e,t){e.forEach((function(e){var r,o,a,i;if(!(j.indexOf(e)>=0)){if(j.push(e),S[e]){var u=k(S[e],!0);try{for(var s=n.__values(u),l=s.next();!l.done;l=s.next()){var c=l.value;addToResults(S[e][c],t)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}}if(t.push(e),R[e]){var f=k(R[e],!1);try{for(var _=n.__values(f),d=_.next();!d.done;d=_.next()){c=d.value;addToResults(R[e][c],t)}}catch(e){a={error:e}}finally{try{d&&!d.done&&(i=_.return)&&i.call(_)}finally{if(a)throw a.error}}}}}))};try{for(var D=n.__values(k(w,!1)),q=D.next();!q.done;q=D.next()){var A=q.value;M(w[A],O)}}catch(e){o={error:e}}finally{try{q&&!q.done&&(a=D.return)&&a.call(D)}finally{if(o)throw o.error}}try{for(var N=n.__values(k(g,!0)),I=N.next();!I.done;I=N.next()){A=I.value;M(g[A],P)}}catch(e){i={error:e}}finally{try{I&&!I.done&&(u=N.return)&&u.call(N)}finally{if(i)throw i.error}}try{for(var T=n.__values(k(x,!0)),C=T.next();!C.done;C=T.next()){A=C.value;M(x[A],E)}}catch(e){s={error:e}}finally{try{C&&!C.done&&(l=T.return)&&l.call(T)}finally{if(s)throw s.error}}try{for(var F=n.__values(Object.keys(S)),W=F.next();!W.done;W=F.next()){var V=W.value;if(!(j.indexOf(V)>=0))try{for(var G=(_=void 0,n.__values(k(S[V],!1))),K=G.next();!K.done;K=G.next()){A=K.value;M(S[V][A],O)}}catch(e){_={error:e}}finally{try{K&&!K.done&&(d=G.return)&&d.call(G)}finally{if(_)throw _.error}}}}catch(e){c={error:e}}finally{try{W&&!W.done&&(f=F.return)&&f.call(F)}finally{if(c)throw c.error}}try{for(var B=n.__values(Object.keys(R)),H=B.next();!H.done;H=B.next()){V=H.value;if(!(j.indexOf(V)>=0))try{for(var L=(h=void 0,n.__values(k(R[V],!1))),U=L.next();!U.done;U=L.next()){A=U.value;M(R[V][A],P)}}catch(e){h={error:e}}finally{try{U&&!U.done&&(v=L.return)&&v.call(L)}finally{if(h)throw h.error}}}}catch(e){p={error:e}}finally{try{H&&!H.done&&(y=B.return)&&y.call(B)}finally{if(p)throw p.error}}return n.__spread(O,P,E).map((function(e){return b[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(4)).default);t.default=o},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),a=r.n(o),i=r(5),u=r(6),s=r.n(u);class RangeEditor extends n.PureComponent{constructor(e){super(e),this.state={value:0},this.editableRef=null,this.handleChange=e=>{const{options:t}=this.props,{target:r}=e;let n=parseInt(r.value||r.innerText);isNaN(n)||(n=Math.min(t.max,Math.max(t.min,n)),this.setState({value:n}),this.props.commit(n),this.editableRef.current.innerText=n,this.forceUpdate())},this.onKeyPress=e=>{isNaN(e.key)&&e.preventDefault()},this.editableRef=n.createRef()}componentDidMount(){this.setState({value:this.props.value})}render(){const{options:e,theme:t}=this.props,{value:r}=this.state;return n.createElement("div",{className:t.rangeEditor},n.createElement("input",{type:"range",min:e.min,max:e.max,step:e.step,value:r,className:"slider",onChange:this.handleChange}),n.createElement("div",{className:t.rangeEditorValue},n.createElement("span",{title:"Minimum"},e.min,e.unit),n.createElement("span",null,n.createElement("input",{title:"Current value",type:"text",ref:this.editableRef,onKeyPress:this.onKeyPress,onInput:this.handleChange,value:r,style:{width:e.max.toString().length+"ch"}}),e.unit),n.createElement("span",{title:"Maximum"},e.max,e.unit)))}}RangeEditor.propTypes={value:a.a.string,commit:a.a.func.isRequired,theme:a.a.object,options:a.a.shape({min:a.a.number,max:a.a.number,step:a.a.number,unit:a.a.string})},RangeEditor.defaultProps={options:{min:0,max:100,step:1,unit:""}},t.default=Object(i.themr)("shel-neos-rangeeditor/rangeEditor",s.a)(RangeEditor)}]);
//# sourceMappingURL=Plugin.js.map