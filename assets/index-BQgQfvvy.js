(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};var i=class{constructor(e,t={}){this.target=e,this.props=t,this.state={},this.subscriptions=[]}render(){throw Error(`render() method must be implemented`)}mount(){this.render(),this.attachEvents()}unmount(){this.detachEvents(),this.unsubscribeAll(),this.target&&(this.target.innerHTML=``)}attachEvents(){}detachEvents(){}setState(e){this.state={...this.state,...e},this.render()}setProps(e){this.props={...this.props,...e},this.render()}addSubscription(e){this.subscriptions.push(e)}unsubscribeAll(){this.subscriptions.forEach(e=>e()),this.subscriptions=[]}$(e){return this.target.querySelector(e)}$$(e){return this.target.querySelectorAll(e)}},a=i,o=class{constructor(e={}){this.state=e,this.listeners=new Map}getState(){return this.state}setState(e){let t={...this.state};this.state={...this.state,...e},this.notify(t,this.state)}get(e){return this.state[e]}set(e,t){this.setState({[e]:t})}subscribe(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{let n=this.listeners.get(e),r=n.indexOf(t);r>-1&&n.splice(r,1)}}notify(e,t){this.listeners.has(`*`)&&this.listeners.get(`*`).forEach(n=>{n(t,e)}),Object.keys(t).forEach(n=>{e[n]!==t[n]&&this.listeners.has(n)&&this.listeners.get(n).forEach(r=>{r(t[n],e[n])})})}reset(e={}){this.state=e,this.notify({},this.state)}};const s=new o({products:[],filteredProducts:[],categories:[],isLoading:!1,error:null,searchQuery:``,selectedCategory1:null,selectedCategory2:null,sortBy:`price_asc`,limit:20,page:1,totalProducts:0,cart:[],selectedCartItems:[],isCartModalOpen:!1,currentRoute:`/`});function c(e,t=`success`){let n={success:`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `,info:`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    `,error:`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `},r={success:`bg-green-600`,info:`bg-blue-600`,error:`bg-red-600`};return`
    <div class="${r[t]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm toast-notification">
      <div class="flex-shrink-0">
        ${n[t]}
      </div>
      <p class="text-sm font-medium">${e}</p>
      <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `}const l=`
  <main class="max-w-md mx-auto px-4 py-4">
    <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
        </defs>
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
  </main>
`;function u(e=0){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              ${e>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${e}</span>`:``}
            </button>
          </div>
        </div>
      </div>
    </header>
  `}const d=`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
`;var f=class extends a{constructor(e){super(e),this.setupSubscriptions()}setupSubscriptions(){let e=s.subscribe(`cart`,()=>{this.updateHeader()});this.addSubscription(e)}render(){let e=s.get(`cart`),t=e.length;this.target.innerHTML=`
      <div id="app-container">
        ${u(t)}
        <main id="main-content"></main>
        ${d}
      </div>
    `}updateHeader(){let e=this.target.querySelector(`header`);if(e){let t=s.get(`cart`),n=t.length;e.outerHTML=u(n)}}attachEvents(){this.target.addEventListener(`click`,e=>{let t=e.target.closest(`#cart-icon-btn`);t&&(s.set(`isCartModalOpen`,!0),this.openCartModal())})}openCartModal(){let e=new CustomEvent(`open-cart-modal`);window.dispatchEvent(e)}},p=f,m=class{constructor(){this.routes=new Map,this.currentRoute=null,this.beforeHooks=[],this.afterHooks=[],window.addEventListener(`popstate`,()=>{this.handleRoute(window.location.pathname)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`a[data-link], a[href^="/"]`);if(t&&!t.hasAttribute(`target`)){e.preventDefault();let n=t.getAttribute(`href`)||`/`;this.push(n)}})}register(e,t){return this.routes.set(e,t),this}beforeEach(e){return this.beforeHooks.push(e),this}afterEach(e){return this.afterHooks.push(e),this}async push(e,t={}){if(this.currentRoute!==e){for(let t of this.beforeHooks){let n=await t(e,this.currentRoute);if(n===!1)return}window.history.pushState(t,``,e),await this.handleRoute(e);for(let t of this.afterHooks)t(e,this.currentRoute)}}async replace(e,t={}){window.history.replaceState(t,``,e),await this.handleRoute(e)}back(){window.history.back()}forward(){window.history.forward()}go(e){window.history.go(e)}async handleRoute(e){if(this.currentRoute=e,this.routes.has(e)){await this.routes.get(e)();return}for(let[t,n]of this.routes){let r=this.matchRoute(t,e);if(r){await n(r);return}}this.routes.has(`*`)?await this.routes.get(`*`)():console.warn(`No route found for ${e}`)}matchRoute(e,t){let n=e.split(`/`),r=t.split(`/`);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++)if(n[e].startsWith(`:`)){let t=n[e].slice(1);i[t]=r[e]}else if(n[e]!==r[e])return null;return Object.keys(i).length>0?i:null}getCurrentPath(){return this.currentRoute||window.location.pathname}init(){this.handleRoute(window.location.pathname)}};const h=new m;function g(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(e){return console.error(`Failed to save to localStorage:`,e),!1}}function _(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.error(`Failed to get from localStorage:`,e),t}}function v(e){let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstChild}var y=class{constructor(){this.container=null,this.init()}init(){this.container||(this.container=document.createElement(`div`),this.container.id=`toast-container`,this.container.className=`fixed top-4 right-4 z-50 flex flex-col gap-2 items-end`,document.body.appendChild(this.container))}show(e,t=`success`,n=3e3){let r=c(e,t),i=v(r);this.container.appendChild(i);let a=i.querySelector(`.toast-close-btn`);return a?.addEventListener(`click`,()=>{this.remove(i)}),n>0&&setTimeout(()=>{this.remove(i)},n),i}remove(e){e.classList.add(`opacity-0`,`transition-opacity`),setTimeout(()=>{e.remove()},300)}success(e,t){return this.show(e,`success`,t)}info(e,t){return this.show(e,`info`,t)}error(e,t){return this.show(e,`error`,t)}};const b=new y,x=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`}));async function S(){let e=_(`cart`,[]);s.set(`cart`,e),s.subscribe(`cart`,e=>{g(`cart`,e)});let t=document.getElementById(`root`),n=new p(t);n.mount(),C(),h.init(),console.log(`✅ App initialized successfully!`),console.log(`📦 Store:`,s.getState())}function C(){h.register(`/`,async()=>{let e=document.getElementById(`main-content`);e&&(e.innerHTML=`
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">🛍️ 쇼핑몰</h2>
            <p class="text-gray-600 mb-6">상품 목록 컴포넌트를 여기에 구현하세요</p>
            <div class="space-y-4 text-left max-w-sm mx-auto">
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 class="font-bold text-green-900 mb-2">✅ 리팩토링 완료!</h3>
                <ul class="text-sm text-green-800 space-y-1">
                  <li>• 컴포넌트 시스템 구축</li>
                  <li>• 상태 관리 (Store)</li>
                  <li>• 라우터 시스템</li>
                  <li>• HTML 템플릿 분리</li>
                  <li>• 유틸리티 함수</li>
                </ul>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 class="font-bold text-blue-900 mb-2">📂 프로젝트 구조</h3>
                <ul class="text-xs text-blue-800 space-y-1 font-mono">
                  <li>src/components/ - UI 컴포넌트</li>
                  <li>src/state/ - 상태 관리</li>
                  <li>src/router/ - 라우팅</li>
                  <li>src/templates/ - HTML 템플릿</li>
                  <li>src/utils/ - 유틸리티</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,b.success(`홈 페이지가 로드되었습니다`))}),h.register(`/product/:id`,async e=>{let t=document.getElementById(`main-content`);t&&(t.innerHTML=`
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">📦 상품 상세</h2>
            <p class="text-gray-600">상품 ID: ${e.id}</p>
            <button onclick="window.history.back()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              돌아가기
            </button>
          </div>
        </div>
      `)}),h.register(`*`,async()=>{let e=document.getElementById(`main-content`);e&&(e.innerHTML=l)})}async function w(){try{await S()}catch(e){console.error(`❌ Failed to initialize app:`,e),b.error(`앱 초기화 중 오류가 발생했습니다`)}}x().then(w);