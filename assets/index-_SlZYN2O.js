const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CatalogPage-B2_9fu7n.js","assets/filterActions-DAE5MY0m.js","assets/ProductDetailPage-8SBpv6nq.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=(t,n)=>{for(var r in n)e(t,r,{get:n[r],enumerable:!0})},n=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const r=`modulepreload`,i=function(e){return`/front_7th_chapter2-1/`+e},a={},o=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=e(t.map(e=>{if(e=i(e,n),e in a)return;a[e]=!0;let t=e.endsWith(`.css`),o=t?`[rel="stylesheet"]`:``,c=!!n;if(c)for(let n=s.length-1;n>=0;n--){let r=s[n];if(r.href===e&&(!t||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=t?`stylesheet`:r,t||(u.as=`script`),u.crossOrigin=``,u.href=e,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),t)return new Promise((t,n)=>{u.addEventListener(`load`,t),u.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${e}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;s(e.reason)}return e().catch(s)})};var s=class{constructor(e={}){this.routes=e,this.init()}init(){window.addEventListener(`popstate`,()=>{this.handleRoute()})}handleRoute(){let e=window.location.pathname;for(let[t,n]of Object.entries(this.routes)){let r=this.matchRoute(e,t);if(r){n(r.params);return}}this.routes[`*`]&&this.routes[`*`]()}matchRoute(e,t){let n=[],r=t.replace(/:[^/]+/g,e=>(n.push(e.slice(1)),`([^/]+)`)).replace(/\*/g,`.*`),i=RegExp(`^${r}$`),a=e.match(i);if(!a)return null;let o={};return n.forEach((e,t)=>{o[e]=a[t+1]}),{params:o}}navigateTo(e){window.history.pushState(null,``,e),this.handleRoute()}goBack(){window.history.back()}},c=class{constructor(e={}){this.state=e,this.listeners=new Set,this.currentAction=null}setState(e){let t=this.state,n=typeof e==`function`?e(this.state):{...this.state,...e};this.state=n,this.notify(t,n)}updateSlice(e,t){this.setState(n=>{let r=n[e],i=typeof t==`function`?t(r):{...r,...t};return{...n,[e]:i}})}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(e,t){this.listeners.forEach(n=>{n(t,e)})}getState(e){return e?e(this.state):this.state}enableDevTools(){this.subscribe((e,t)=>{let n=this.currentAction||`Unknown`;console.group(`🏪 Store Action: ${n}`),console.log(`Previous:`,t),console.log(`Current:`,e),console.groupEnd(),this.currentAction=null})}dispatch(e,t){this.currentAction=e,t()}};const l=20,u=`price_asc`,d=[10,20,50,100],f=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],p={catalog:{products:[],pagination:void 0,isLoading:!1,isLoadingMore:!1,loadMoreError:null},categories:{data:[],isLoading:!1,error:null},filters:{limit:l,sort:u,page:1,search:``,category1:``,category2:``},cart:{items:[],selectedIds:new Set,isOpen:!1,modalElement:null,lastFocusedElement:null,escListener:null},productDetail:{product:null,relatedProducts:[],isLoading:!1,error:null,quantity:1},ui:{currentPage:`list`}},m=({title:e,href:t})=>`
  <h1 class="text-xl font-bold text-gray-900">
    <a href="${t}" data-link="">${e}</a>
  </h1>
`,h=({count:e}={})=>{let t=typeof e==`number`?`
    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      ${e}
    </span>
  `:``;return`
    <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
      </svg>
      ${t}
    </button>
  `},g=({title:e=`쇼핑몰`,href:t=`/`,cartCount:n,leftContent:r,rightContent:i}={})=>{let a=r??m({title:e,href:t}),o=i??h({count:n});return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          ${a}
          <div class="flex items-center space-x-2">
            ${o}
          </div>
        </div>
      </div>
    </header>
  `},_=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,v=({children:e=``,header:t,footer:n,wrapperClass:r=`min-h-screen bg-gray-50`,mainClass:i=`max-w-md mx-auto px-4 py-4`}={})=>{let a=t??g(),o=n??_();return`
    <div class="${r}">
      ${a}
      <main class="${i}">
        ${e}
      </main>
      ${o}
    </div>
  `},y=`toast-container`,b=3e3,x=[`fixed`,`top-20`,`left-1/2`,`-translate-x-1/2`,`z-50`,`flex`,`flex-col`,`items-center`,`space-y-2`].join(` `),ee=[`toast-item`,`text-white`,`px-4`,`py-3`,`rounded-lg`,`shadow-lg`,`flex`,`items-center`,`space-x-2`,`max-w-sm`,`transition-opacity`,`duration-300`].join(` `),S={success:`bg-green-600`,info:`bg-blue-600`,error:`bg-red-600`},C={success:`
    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  `,info:`
    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `,error:`
    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  `},w=(e,t=`success`)=>{if(typeof document>`u`)return;let n=document.getElementById(y);n||(n=document.createElement(`div`),n.id=y,n.className=x,document.body.appendChild(n));let r=document.createElement(`div`),i=S[t]??S.success,a=C[t]??C.success;r.className=`${ee} ${i}`,r.setAttribute(`role`,`status`),r.setAttribute(`aria-live`,t===`error`?`assertive`:`polite`),r.innerHTML=`
    <div class="flex-shrink-0">
      ${a}
    </div>
    <p class="text-sm font-medium">${T(e)}</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `,n.appendChild(r);let o=r.querySelector(`#toast-close-btn`);o&&o.addEventListener(`click`,()=>{r.classList.add(`opacity-0`),window.setTimeout(()=>{r.remove(),n&&n.childElementCount===0&&n.remove()},300)}),window.setTimeout(()=>{r.classList.add(`opacity-0`),window.setTimeout(()=>{r.remove(),n&&n.childElementCount===0&&n.remove()},300)},b)};function T(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}const E=(e=``)=>String(e).replace(/[<>"']/g,e=>{switch(e){case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),D=e=>{let t=Number.parseInt(e,10);return Number.isNaN(t)?`0`:new Intl.NumberFormat(`ko-KR`).format(t)},O=({items:e=[],summary:t={itemCount:0,selectedCount:0,selectedPrice:0,totalPrice:0,allSelected:!1}}={})=>{let{itemCount:n,selectedCount:r,selectedPrice:i,totalPrice:a,allSelected:o}=t,s=n?`<span class="text-sm font-normal text-gray-600 ml-1">(${n})</span>`:``,c=n?`
        <div class="p-4 border-b border-gray-200 bg-gray-50">
          <label class="flex items-center text-sm text-gray-700">
            <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"${o?` checked`:``}>
            전체선택 (${n}개)
          </label>
        </div>
      `:``,l=e.map(e=>{let t=e.unitPrice??0,n=e.quantity??0,r=t*n,i=E(e.title??``),a=e.brand?`<p class="text-xs text-gray-500 mb-1">${E(e.brand)}</p>`:``,o=e.isSelected?` checked`:``,s=`${D(t)}원`,c=`${D(r)}원`;return`
          <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
            <label class="flex items-center mr-3">
              <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${e.productId}"${o}>
            </label>
            <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
              <img src="${e.image}" alt="${i}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-medium text-gray-900 truncate">${i}</h4>
              ${a}
              <p class="text-sm text-gray-600 mt-1">${s}</p>
              <div class="flex items-center mt-2" aria-label="수량 조절">
                <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}" aria-label="수량 감소">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" value="${n}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300" disabled data-product-id="${e.productId}">
                <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}" aria-label="수량 증가">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="text-right ml-3">
              <p class="text-sm font-medium text-gray-900">${c}</p>
              <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">삭제</button>
            </div>
          </div>
        `}).join(``),u=n?`
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${c}
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
              ${l}
            </div>
          </div>
        </div>
      `:`
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          <div class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <div class="text-gray-400 mb-4">
                <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
              <p class="text-gray-600">원하는 상품을 담아보세요!</p>
            </div>
          </div>
        </div>
      `,d=r?`
        <div class="flex justify-between items-center mb-3 text-sm">
          <span class="text-gray-600">선택한 상품 (${r}개)</span>
          <span class="font-medium">${D(i)}원</span>
        </div>
      `:``,f=r?`선택한 상품 삭제 (${r}개)`:`선택한 상품 삭제`,p=r?``:` disabled`,m=n?`
        <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          ${d}
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-bold text-gray-900">총 금액</span>
            <span class="text-xl font-bold text-blue-600">${D(a)}원</span>
          </div>
          <div class="space-y-2">
            <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm"${p}>
              ${f}
            </button>
            <div class="flex gap-2">
              <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                전체 비우기
              </button>
              <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                구매하기
              </button>
            </div>
          </div>
        </div>
      `:``;return`
      <div class="cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden" role="dialog" aria-modal="true" aria-label="장바구니">
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니
            ${s}
          </h2>
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1" aria-label="장바구니 닫기">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        ${u}
        ${m}
      </div>
    `},k=`shopping_cart`,A=`shopping_cart_selected`,j=[`absolute`,`-top-1`,`-right-1`,`bg-red-500`,`text-white`,`text-xs`,`rounded-full`,`h-5`,`w-5`,`flex`,`items-center`,`justify-center`].join(` `),M=(e,t)=>{e.currentAction=`cartActions.addToCart`,e.updateSlice(`cart`,e=>{let{items:n}=e,r=n.findIndex(e=>e.productId===t.productId),i;if(r>=0){let e=n[r],t={...e,quantity:e.quantity+1};i=[...n.slice(0,r),t,...n.slice(r+1)]}else{let e={productId:t.productId,title:t.title??``,price:t.price??``,image:t.image??``,brand:t.brand??``,quantity:1};i=[...n,e]}return{...e,items:i}})},N=(e,t,n)=>{e.currentAction=`cartActions.updateCartItemQuantity`,e.updateSlice(`cart`,e=>{let{items:r}=e,i=r.findIndex(e=>e.productId===t);if(i===-1)return e;let a={...r[i],quantity:n},o=[...r.slice(0,i),a,...r.slice(i+1)];return{...e,items:o}})},P=(e,t)=>{e.currentAction=`cartActions.removeCartItem`,e.updateSlice(`cart`,e=>{let n=e.items.filter(e=>e.productId!==t),r=new Set(e.selectedIds);return r.delete(t),{...e,items:n,selectedIds:r}})},F=e=>{e.currentAction=`cartActions.removeSelectedCartItems`,e.updateSlice(`cart`,e=>{let t=e.items.filter(t=>!e.selectedIds.has(t.productId));return{...e,items:t,selectedIds:new Set}})},I=e=>{e.currentAction=`cartActions.clearCart`,e.updateSlice(`cart`,e=>({...e,items:[],selectedIds:new Set}))},L=(e,t,n,r)=>{e.currentAction=`cartActions.openCartModal`,e.updateSlice(`cart`,e=>({...e,isOpen:!0,modalElement:t,lastFocusedElement:n,escListener:r}))},R=e=>{e.currentAction=`cartActions.closeCartModal`,e.updateSlice(`cart`,e=>({...e,isOpen:!1,modalElement:null,lastFocusedElement:null,escListener:null}))},z=(e,t)=>{e.currentAction=`cartActions.setCartSelection`,e.updateSlice(`cart`,e=>({...e,selectedIds:new Set(t)}))};var B={};t(B,{areSetsEqual:()=>K,attachCartModalEventHandlers:()=>ne,calculateCartTotals:()=>se,changeCartItemQuantity:()=>re,clearCartItems:()=>oe,closeCartModal:()=>X,ensureSelectedIdsSet:()=>G,getCartCount:()=>te,getCartItemQuantity:()=>le,getCartItemUnitPrice:()=>ce,loadCartFromStorage:()=>V,loadCartSelectionFromStorage:()=>U,normalizeCartSelections:()=>Q,openCartModal:()=>Y,removeCartItem:()=>ie,removeSelectedCartItems:()=>ae,saveCartSelectionToStorage:()=>W,saveCartToStorage:()=>H,setSelectedIds:()=>q,updateCartIcon:()=>J,updateCartModalView:()=>Z});function V(){if(typeof window>`u`||!window.localStorage)return[];try{let e=window.localStorage.getItem(k);if(!e)return[];let t=JSON.parse(e);if(!Array.isArray(t))return[];let n=new Map;return t.forEach(e=>{if(!e||typeof e.productId!=`string`)return;let t=(()=>{let t=Number.parseInt(e.quantity??e.qty??1,10);return Number.isNaN(t)||t<1?1:t})(),r=n.get(e.productId);if(r){r.quantity+=t;return}n.set(e.productId,{productId:e.productId,title:e.title??``,price:e.price??e.lprice??``,image:e.image??``,brand:e.brand??``,quantity:t})}),Array.from(n.values())}catch(e){return console.error(`장바구니 정보를 불러오는 중 오류가 발생했습니다.`,e),[]}}function H(){if(!(typeof window>`u`||!window.localStorage))try{window.localStorage.setItem(k,JSON.stringify(this.cartItems))}catch(e){console.error(`장바구니 정보를 저장하는 중 오류가 발생했습니다.`,e)}}function U(){if(typeof window>`u`||!window.localStorage)return new Set;try{let e=window.localStorage.getItem(A);if(!e)return new Set;let t=JSON.parse(e);if(!Array.isArray(t))return new Set;let n=t.map(e=>e==null?``:String(e)).filter(e=>e.length>0);return new Set(n)}catch(e){return console.error(`선택한 장바구니 정보를 불러오는 중 오류가 발생했습니다.`,e),new Set}}function W(){if(!(typeof window>`u`||!window.localStorage))try{let e=Array.from(this.ensureSelectedIdsSet());e.length===0?window.localStorage.removeItem(A):window.localStorage.setItem(A,JSON.stringify(e))}catch(e){console.error(`선택한 장바구니 정보를 저장하는 중 오류가 발생했습니다.`,e)}}function G(){let e=this.cartState.selectedIds;return e instanceof Set?e:(console.warn(`selectedIds is not a Set, initializing to empty Set`),z(this.store,new Set),this.cartState.selectedIds)}function K(e,t){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function q(e){let t=e instanceof Set?e:new Set(e??[]),n=new Set;t.forEach(e=>{if(e==null)return;let t=typeof e==`string`?e:String(e);t.length>0&&n.add(t)});let r=this.ensureSelectedIdsSet(),i=!this.areSetsEqual(r,n);z(this.store,n),i&&this.saveCartSelectionToStorage()}function te(){return this.cartItems.length}function J(){if(typeof document>`u`)return;let e=document.getElementById(`cart-icon-btn`);if(!e)return;let t=e.querySelector(`span`),n=this.getCartCount();n>0?(t||(t=document.createElement(`span`),t.className=j,e.appendChild(t)),t.textContent=String(n),t.style.display=`flex`):t&&t.remove()}function Y(){if(typeof document>`u`)return;this.cartModalElement&&this.closeCartModal(!1),this.ensureSelectedIdsSet();let e=document.activeElement instanceof HTMLElement?document.activeElement:null,t=document.createElement(`div`);t.className=`cart-modal-overlay fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center px-0 sm:px-4`,t.setAttribute(`role`,`presentation`),t.addEventListener(`click`,e=>{e.target===t&&(e.stopPropagation(),requestAnimationFrame(()=>{this.closeCartModal()}))});let n=e=>{e.key===`Escape`&&(e.preventDefault(),this.closeCartModal())};document.addEventListener(`keydown`,n),L(this.store,t,e,n),this.updateCartModalView(),document.body.appendChild(t),document.body.style.overflow=`hidden`;let r=document.getElementById(`root`);r&&r.setAttribute(`aria-hidden`,`true`)}function X(e=!0){if(!this.cartModalElement)return;this.cartState.escListener&&document.removeEventListener(`keydown`,this.cartState.escListener),this.cartModalElement.remove(),document.body.style.overflow=``;let t=document.getElementById(`root`);t&&t.removeAttribute(`aria-hidden`);let n=this.cartState.lastFocusedElement;R(this.store),this.saveCartSelectionToStorage(),e&&n instanceof HTMLElement&&n.focus()}function Z(){if(!this.cartModalElement||!this.cartState.isOpen)return;this.normalizeCartSelections();let e=this.ensureSelectedIdsSet(),t=this.calculateCartTotals(),n=this.cartItems.map(t=>{let n=this.getCartItemQuantity(t);return{productId:t.productId,title:t.title??``,image:t.image??``,brand:t.brand??``,quantity:n,unitPrice:this.getCartItemUnitPrice(t),isSelected:e.has(t.productId)}}),r={itemCount:n.length,selectedCount:t.selectedCount,selectedPrice:t.selectedPrice,totalPrice:t.totalPrice,allSelected:n.length>0&&e.size===n.length};this.cartModalElement.innerHTML=O({items:n,summary:r}),this.attachCartModalEventHandlers()}function Q(){let e=this.ensureSelectedIdsSet(),t=new Set;this.cartItems.forEach(n=>{e.has(n.productId)&&t.add(n.productId)}),this.setSelectedIds(t)}function ne(){if(!this.cartModalElement)return;let e=this.cartModalElement,t=e.querySelector(`#cart-modal-close-btn`);t&&t.addEventListener(`click`,e=>{e.preventDefault(),this.closeCartModal()});let n=e.querySelector(`#cart-modal-select-all-checkbox`);if(n instanceof HTMLInputElement){let e=this.cartItems.length,t=this.ensureSelectedIdsSet(),r=t.size;n.checked=e>0&&r===e,n.indeterminate=r>0&&r<e,n.addEventListener(`change`,e=>{let t=e.target;t instanceof HTMLInputElement&&(t.checked?this.setSelectedIds(new Set(this.cartItems.map(e=>e.productId))):this.setSelectedIds(new Set),this.updateCartModalView())})}e.querySelectorAll(`.cart-item-checkbox`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement))return;let n=t.dataset.productId??``;if(!n)return;let r=this.ensureSelectedIdsSet(),i=new Set(r);t.checked?i.add(n):i.delete(n),this.setSelectedIds(i),this.updateCartModalView()})}),e.querySelectorAll(`.quantity-increase-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.productId??``;n&&this.changeCartItemQuantity(n,1)})}),e.querySelectorAll(`.quantity-decrease-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.productId??``;n&&this.changeCartItemQuantity(n,-1)})}),e.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.productId??``;n&&this.removeCartItem(n)})});let r=e.querySelector(`#cart-modal-remove-selected-btn`);r&&r.addEventListener(`click`,e=>{e.preventDefault(),this.removeSelectedCartItems()});let i=e.querySelector(`#cart-modal-clear-cart-btn`);i&&i.addEventListener(`click`,e=>{e.preventDefault(),this.clearCartItems()});let a=e.querySelector(`#cart-modal-checkout-btn`);a&&a.addEventListener(`click`,e=>{e.preventDefault(),this.showToast(`구매 기능은 준비 중입니다`,`info`)})}function re(e,t){if(!t)return;let n=this.cartItems.find(t=>t.productId===e);if(!n)return;let r=this.getCartItemQuantity(n),i=r+t,a=i<1?1:i;a!==r&&(N(this.store,e,a),this.saveCartToStorage(),this.updateCartIcon(),this.updateCartModalView())}function ie(e){let t=this.cartItems.length;t!==0&&(P(this.store,e),this.cartItems.length!==t&&(this.saveCartToStorage(),this.updateCartIcon(),this.updateCartModalView(),this.showToast(`상품을 장바구니에서 삭제했습니다`,`info`)))}function ae(){let e=this.ensureSelectedIdsSet();if(e.size===0)return;let t=this.cartItems.length;F(this.store),this.cartItems.length!==t&&(this.saveCartToStorage(),this.updateCartIcon(),this.updateCartModalView(),this.showToast(`선택한 상품을 삭제했습니다`,`info`))}function oe(){this.cartItems.length&&(I(this.store),this.saveCartToStorage(),this.updateCartIcon(),this.updateCartModalView(),this.showToast(`장바구니를 모두 비웠습니다`,`info`))}function se(){let e=0,t=0,n=this.ensureSelectedIdsSet();return this.cartItems.forEach(r=>{let i=this.getCartItemUnitPrice(r),a=this.getCartItemQuantity(r),o=i*a;e+=o,n.has(r.productId)&&(t+=o)}),{totalPrice:e,selectedPrice:t,selectedCount:n.size}}function ce(e){let t=Number.parseInt(e.price??e.lprice??`0`,10);return Number.isNaN(t)||t<0?0:t}function le(e){let t=Number.parseInt(e.quantity??1,10);return Number.isNaN(t)||t<1?1:t}function ue(e){let t=new URLSearchParams;Object.entries(e).forEach(([e,n])=>{n!=null&&n!==``&&t.set(e,String(n))});let n=t.toString();return n?`?${n}`:``}function de(e=window.location.search){let t=new URLSearchParams(e),n={};return t.forEach((e,t)=>{n[t]=e}),n}function fe(){return de(window.location.search)}function pe(e,t={}){let n=ue(t),r=`${e}${n}`;window.location.pathname+window.location.search!==r&&window.history.pushState(null,``,r)}function $(e){let t={};return e.search&&(t.search=e.search),e.category1&&(t.category1=e.category1),e.category2&&(t.category2=e.category2),e.sort&&(t.sort=e.sort),e.limit&&(t.limit=e.limit),e.page&&e.page>1&&(t.page=e.page),t}function me(e,t={}){return{search:e.search||``,category1:e.category1||``,category2:e.category2||``,sort:e.sort||t.sort||`recent`,limit:e.limit?parseInt(e.limit,10):t.limit||20,page:e.page?parseInt(e.page,10):1}}const he=[`loadCartFromStorage`,`saveCartToStorage`,`loadCartSelectionFromStorage`,`saveCartSelectionToStorage`,`ensureSelectedIdsSet`,`areSetsEqual`,`setSelectedIds`,`getCartCount`,`updateCartIcon`,`openCartModal`,`closeCartModal`,`updateCartModalView`,`normalizeCartSelections`,`attachCartModalEventHandlers`,`changeCartItemQuantity`,`removeCartItem`,`removeSelectedCartItems`,`clearCartItems`,`calculateCartTotals`,`getCartItemUnitPrice`,`getCartItemQuantity`];var ge=class{constructor(e){this.rootElement=e,this.store=new c(p),this.observer=null,Object.defineProperty(this,`state`,{get:()=>this.store.state.catalog,set:e=>{this.store.updateSlice(`catalog`,e)}}),Object.defineProperty(this,`categoriesState`,{get:()=>this.store.state.categories,set:e=>{this.store.updateSlice(`categories`,e)}}),Object.defineProperty(this,`cartState`,{get:()=>this.store.state.cart,set:e=>{this.store.updateSlice(`cart`,e)}}),Object.defineProperty(this,`detailState`,{get:()=>this.store.state.productDetail,set:e=>{this.store.updateSlice(`productDetail`,e)}}),Object.defineProperty(this,`currentPage`,{get:()=>this.store.state.ui.currentPage,set:e=>{this.store.updateSlice(`ui`,{currentPage:e})}}),Object.defineProperty(this,`lastParams`,{get:()=>this.store.state.filters,set:e=>{this.store.updateSlice(`filters`,e)}}),Object.defineProperty(this,`cartModalElement`,{get:()=>this.store.state.cart.modalElement,set:e=>{this.store.updateSlice(`cart`,{modalElement:e})}}),Object.defineProperty(this,`cartItems`,{get:()=>this.store.state.cart.items,set:e=>{this.store.updateSlice(`cart`,{items:e})}}),this.bindCartModule(),this.cartItems=this.loadCartFromStorage();let t=this.loadCartSelectionFromStorage();t instanceof Set&&this.store.updateSlice(`cart`,{selectedIds:t}),this.ensureSelectedIdsSet(),this.normalizeCartSelections(),this.restoreFiltersFromURL(),this.setupURLSync(),this.initRouter()}restoreFiltersFromURL(){let e=window.location.pathname;if(e===`/`||e===`/index.html`){let e=fe();if(Object.keys(e).length>0){let t=me(e);this.store.updateSlice(`filters`,t)}}}setupURLSync(){this.store.subscribe((e,t)=>{if(JSON.stringify(e.filters)!==JSON.stringify(t.filters)){let t=window.location.pathname;if(t===`/`||t===`/index.html`){let t=$(e.filters);pe(`/`,t)}}})}bindCartModule(){he.forEach(e=>{typeof B[e]==`function`&&(this[e]=B[e].bind(this))})}initRouter(){this.router=new s({"/product/:id":e=>{this.showProductDetail(e.id)},"/":()=>{this.showProductList()},"*":()=>{this.showNotFoundPage()}})}navigateTo(e){this.router.navigateTo(e)}async init(){this.router.handleRoute()}async showProductList(){if(this.currentPage=`list`,this.state.products.length===0){let{CatalogPage:e}=await o(async()=>{let{CatalogPage:e}=await import(`./CatalogPage-B2_9fu7n.js`);return{CatalogPage:e}},__vite__mapDeps([0,1]));this.catalogPage=new e(this),await this.catalogPage.init()}else{if(!this.catalogPage){let{CatalogPage:e}=await o(async()=>{let{CatalogPage:e}=await import(`./CatalogPage-B2_9fu7n.js`);return{CatalogPage:e}},__vite__mapDeps([0,1]));this.catalogPage=new e(this)}this.catalogPage.updateView()}}async showProductDetail(e){this.currentPage=`detail`,this.resetObserver();let{ProductDetailPage:t}=await o(async()=>{let{ProductDetailPage:e}=await import(`./ProductDetailPage-8SBpv6nq.js`);return{ProductDetailPage:e}},__vite__mapDeps([2,1]));this.detailPage=new t(this),await this.detailPage.load(e)}async showNotFoundPage(){this.currentPage=`notFound`,this.resetObserver();let{NotFoundPage:e}=await o(async()=>{let{NotFoundPage:e}=await import(`./NotFoundPage-DsY2E770.js`);return{NotFoundPage:e}},[]),t=new e(this);t.render()}render(e){this.rootElement.innerHTML=v({children:e}),this.updateCartIcon()}resetObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}showToast(e,t=`success`){w(e,t)}};const _e=()=>o(async()=>{let{worker:e}=await import(`./browser-BEJMhtCw.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`}));function ve(){let e=document.getElementById(`root`);if(!e)throw Error(`root element not found`);let t=new ge(e);t.init()}_e().then(ve);export{h as CartIconButton,l as DEFAULT_LIMIT,u as DEFAULT_SORT,g as Header,d as LIMIT_OPTIONS,v as PageLayout,f as SORT_OPTIONS,n as __require,M as addToCart,E as escapeHtml,D as formatCurrency,N as updateCartItemQuantity};