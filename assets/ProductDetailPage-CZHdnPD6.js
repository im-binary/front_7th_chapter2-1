import{CartIconButton as e,Header as t,PageLayout as n,addToCart as r,escapeHtml as i,formatCurrency as a,updateCartItemQuantity as o}from"./index-C-OIUxUE.js";import{getProduct as s,getProducts as c,setCategory as l}from"./filterActions-DAE5MY0m.js";const u=e=>{e.currentAction=`productDetailActions.startProductLoad`,e.updateSlice(`productDetail`,{product:null,relatedProducts:[],isLoading:!0,error:null,quantity:1})},d=(e,t,n=[])=>{e.currentAction=`productDetailActions.setProductSuccess`,e.updateSlice(`productDetail`,{product:t,relatedProducts:n,isLoading:!1,error:null,quantity:1})},f=(e,t)=>{e.currentAction=`productDetailActions.setProductError`,e.updateSlice(`productDetail`,e=>({...e,isLoading:!1,error:t}))};var p=class{constructor(e){this.app=e}async load(e){u(this.app.store),this.renderLoading();try{let t=await s(e);if(!t||t.productId!==e)throw Error(`상품을 찾을 수 없습니다.`);let n=[];if(t.category2){let r=await c({category1:t.category1||``,category2:t.category2||``,limit:10});n=r.products.filter(t=>t.productId!==e).slice(0,4)}d(this.app.store,t,n),this.renderContent()}catch(e){console.error(`상품 상세 정보를 불러오는 중 오류가 발생했습니다.`,e),f(this.app.store,e?.message||`상품 정보를 불러올 수 없습니다.`),this.renderError()}}renderLoading(){let r=`
      <div class="flex items-center space-x-3">
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
    `,i=`
      <div class="max-w-4xl mx-auto px-4 py-6">
        <div class="py-20 bg-gray-50 flex items-center justify-center rounded-lg">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    `,a=this.app.getCartCount();this.app.rootElement.innerHTML=n({header:t({leftContent:r,rightContent:e({count:a})}),children:i})}renderError(){let r=`
      <div class="flex items-center space-x-3">
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
    `,a=`
      <div class="max-w-4xl mx-auto px-4 py-6">
        <div class="py-20 bg-red-50 rounded-lg">
          <div class="text-center">
            <p class="text-red-600 mb-4">${i(this.app.detailState.error||`오류가 발생했습니다.`)}</p>
            <button onclick="window.history.back()" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    `,o=this.app.getCartCount();this.app.rootElement.innerHTML=n({header:t({leftContent:r,rightContent:e({count:o})}),children:a})}renderContent(){let r=this.app.detailState.product;if(!r)return;let o=this.app.detailState.quantity,s=`
      <div class="flex items-center space-x-3">
        <button id="detail-back-btn" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
    `,c=`
      <a href="/" class="hover:text-blue-600 transition-colors" data-link>홈</a>
    `;r.category1&&(c+=`
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-category1" data-category1="${i(r.category1)}">
          ${i(r.category1)}
        </button>
      `),r.category2&&(c+=`
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-category2" data-category1="${i(r.category1)}" data-category2="${i(r.category2)}">
          ${i(r.category2)}
        </button>
      `);let l=this.app.detailState.relatedProducts.map(e=>`
      <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer hover:bg-gray-100 transition-colors" data-product-id="${i(e.productId)}">
        <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
          <img src="${i(e.image)}" alt="${i(e.title)}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${i(e.title)}</h3>
        <p class="text-sm font-bold text-blue-600">${a(e.lprice)}원</p>
      </div>
    `).join(``),u=`
      <div class="max-w-4xl mx-auto px-4 py-6">
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            ${c}
          </div>
        </nav>
        
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${i(r.image)}" alt="${i(r.title)}" class="w-full h-full object-cover product-detail-image">
            </div>
            <div>
              ${r.brand?`<p class="text-sm text-gray-600 mb-1">${i(r.brand)}</p>`:``}
              <h1 class="text-xl font-bold text-gray-900 mb-3">${i(r.title)}</h1>
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${a(r.lprice)}원</span>
              </div>
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${i(r.title)}에 대한 상세 설명입니다.
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                  rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="${o}" min="1" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                  rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button id="add-to-cart-btn" data-product-id="${i(r.productId)}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
              hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        
        ${this.app.detailState.relatedProducts.length>0?`
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200">
              <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
              <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-3">
                ${l}
              </div>
            </div>
          </div>
        `:``}
      </div>
    `,d=this.app.getCartCount();this.app.rootElement.innerHTML=n({header:t({leftContent:s,rightContent:e({count:d})}),children:u}),this.attachHandlers()}attachHandlers(){let e=this.app.rootElement.querySelector(`#quantity-decrease`),t=this.app.rootElement.querySelector(`#quantity-increase`),n=this.app.rootElement.querySelector(`#quantity-input`),r=this.app.rootElement.querySelector(`#add-to-cart-btn`),i=this.app.rootElement.querySelector(`.go-to-product-list`),a=this.app.rootElement.querySelectorAll(`.related-product-card`),o=this.app.rootElement.querySelector(`.breadcrumb-category1`),s=this.app.rootElement.querySelector(`.breadcrumb-category2`),c=this.app.rootElement.querySelector(`[data-link]`),u=this.app.rootElement.querySelector(`#cart-icon-btn`),d=this.app.rootElement.querySelector(`#detail-back-btn`);d&&d.addEventListener(`click`,()=>{window.history.back()}),u&&u.addEventListener(`click`,e=>{e.preventDefault(),this.app.openCartModal()}),c&&c.addEventListener(`click`,e=>{e.preventDefault(),this.app.navigateTo(`/`)}),o&&o.addEventListener(`click`,()=>{let e=o.dataset.category1;l(this.app.store,{category1:e||``,category2:``}),this.app.navigateTo(`/`)}),s&&s.addEventListener(`click`,()=>{let e=s.dataset.category1,t=s.dataset.category2;l(this.app.store,{category1:e||``,category2:t||``}),this.app.navigateTo(`/`)}),e&&e.addEventListener(`click`,()=>{let e=this.app.detailState.quantity;e>1&&(this.app.detailState.quantity=e-1,n&&(n.value=String(this.app.detailState.quantity)))}),t&&t.addEventListener(`click`,()=>{this.app.detailState.quantity+=1,n&&(n.value=String(this.app.detailState.quantity))}),n&&n.addEventListener(`change`,e=>{let t=Number.parseInt(e.target.value,10);!Number.isNaN(t)&&t>=1?this.app.detailState.quantity=t:(this.app.detailState.quantity=1,e.target.value=`1`)}),r&&r.addEventListener(`click`,()=>{let e=r.dataset.productId;e&&this.handleAddToCart(e,this.app.detailState.quantity)}),i&&i.addEventListener(`click`,()=>{this.app.navigateTo(`/`)}),a.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;t&&this.app.navigateTo(`/product/${t}`)})})}handleAddToCart(e,t){if(!e||!this.app.detailState.product)return;let n=this.app.detailState.product,i=this.app.cartItems.findIndex(t=>t.productId===e);if(i>=0){let n=this.app.cartItems[i],r=this.app.getCartItemQuantity(n)+t;o(this.app.store,e,r)}else{let i={productId:e,title:n.title??``,price:n.lprice??``,image:n.image??``,brand:n.brand??``};r(this.app.store,i),t>1&&o(this.app.store,e,t)}this.app.saveCartToStorage(),this.app.updateCartIcon(),this.app.cartState.isOpen&&this.app.updateCartModalView(),this.app.showToast(`장바구니에 추가되었습니다`,`success`)}};export{p as ProductDetailPage};