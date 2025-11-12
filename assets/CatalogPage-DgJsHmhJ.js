import{DEFAULT_LIMIT as e,DEFAULT_SORT as t,LIMIT_OPTIONS as n,SORT_OPTIONS as r,addToCart as i,escapeHtml as a,formatCurrency as o}from"./index-DEgzM2Yr.js";import{getCategories as s,getProducts as c,setCategory as l,setPage as u,setPageLimit as d,setSearchQuery as f,setSortOption as p}from"./filterActions-DAE5MY0m.js";const m=()=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3 space-y-2">
      <div class="h-4 bg-gray-200 rounded"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
`,h=(e=4)=>Array.from({length:e}).map(()=>m()).join(``),g=e=>`
  <div class="inline-flex items-center">
    <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-gray-600">${e}</span>
  </div>
`,_=`text-left px-3 py-2 text-sm rounded-md border transition-colors`,v=`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`,y=`bg-blue-600 border-blue-600 text-white hover:bg-blue-700`,b=({categoryState:e,selectedCategory1:t=``,selectedCategory2:n=``}={})=>{let{data:r=[],isLoading:i=!1,error:o=null}=e??{},s=[`<span class="text-sm text-gray-600">카테고리:</span>`,`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`];t&&s.push(`<span class="text-xs text-gray-400">/</span>`,`<button data-breadcrumb="category1" data-category1="${a(t)}" class="text-xs hover:text-blue-800 hover:underline">${a(t)}</button>`),n&&s.push(`<span class="text-xs text-gray-400">/</span>`,`<button data-breadcrumb="category2" data-category1="${a(t)}" data-category2="${a(n)}" class="text-xs hover:text-blue-800 hover:underline">${a(n)}</button>`);let c=``;c=i?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:o?`<div class="text-sm text-red-600">${a(o)}</div>`:r.length?`
      <div class="flex flex-wrap gap-2">
        ${r.map(({name:e})=>{let n=e===t,r=`${_} ${n?y:v}`;return`<button class="category1-filter-btn ${r}" data-category1="${a(e)}">${a(e)}</button>`}).join(` `)}
      </div>
    `:`<div class="text-sm text-gray-500 italic">카테고리 정보가 없습니다.</div>`;let l=``;if(!i&&!o&&t){var u;let e=r.find(({name:e})=>e===t);!(e==null||(u=e.children)==null)&&u.length&&(l=`
        <div class="flex flex-wrap gap-2">
          ${e.children.map(e=>{let r=e===n,i=`${_} ${r?y:v}`;return`<button class="category2-filter-btn ${i}" data-category1="${a(t)}" data-category2="${a(e)}">${a(e)}</button>`}).join(` `)}
        </div>
      `)}return`
    <div class="space-y-2">
      <div class="flex items-center gap-2 flex-wrap text-xs text-gray-600">
        ${s.join(` `)}
      </div>
      ${c}
      ${l}
    </div>
  `},x=(t=e)=>n.map(e=>{let n=e===t?` selected`:``;return`<option value="${e}"${n}>${e}개</option>`}).join(``),S=(e=t)=>r.map(({value:t,label:n})=>{let r=t===e?` selected`:``;return`<option value="${t}"${r}>${n}</option>`}).join(``),C=({searchValue:n=``,selectedLimit:r=e,selectedSort:i=t,categoryState:o,selectedCategory1:s=``,selectedCategory2:c=``}={})=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value="${a(n)}"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      ${b({categoryState:o,selectedCategory1:s,selectedCategory2:c})}
      <div class="flex gap-2 items-center justify-between">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            ${x(r)}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            ${S(i)}
          </select>
        </div>
      </div>
    </div>
  </div>
`,w=({selectedLimit:n=e,selectedSort:r=t,searchValue:i=``,categoryState:a,selectedCategory1:o=``,selectedCategory2:s=``}={})=>`
  ${C({searchValue:i,selectedLimit:n,selectedSort:r,categoryState:a,selectedCategory1:o,selectedCategory2:s})}
  <div class="mb-6">
    <div class="grid grid-cols-2 gap-4 mb-6">
      ${h(4)}
    </div>
    <div class="text-center py-4">
      ${g(`상품을 불러오는 중...`)}
    </div>
  </div>
`,T=(e=[])=>{if(!e.length)return`
      <div class="py-12 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg">
        <p class="text-sm text-gray-600">조건에 맞는 상품이 없습니다.</p>
      </div>
    `;let t=e.map(e=>{let{productId:t,title:n,image:r,brand:i,lprice:s}=e,c=`${o(s)}원`,l=a(n),u=i?`<p class="text-xs text-gray-500 mb-2">${a(i)}</p>`:``;return`
        <article class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" data-product-id="${t}">
          <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
            <img src="${r}" alt="${l}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-200" loading="lazy">
          </div>
          <div class="p-3">
            <div class="cursor-pointer product-info mb-3">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${l}</h3>
              ${u}
              <p class="text-lg font-bold text-gray-900">${c}</p>
            </div>
            <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${t}">장바구니 담기</button>
          </div>
        </article>
      `}).join(``);return`
    <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid" data-testid="products-grid">
      ${t}
    </div>
  `},E=({hasMore:e,isLoadingMore:t,loadMoreError:n})=>{if(n)return`
      <div class="text-center py-4 space-y-3" id="load-more-section">
        <p class="text-sm text-red-600">${n}</p>
        <button id="load-more-retry-button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          다시 시도
        </button>
      </div>
    `;if(!e)return`<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>`;let r=t?`<div class="grid grid-cols-2 gap-4">${h(2)}</div>`:``,i=t?g(`다음 상품을 불러오는 중...`):`<span class="text-sm text-gray-500">스크롤을 유지하면 다음 상품을 자동으로 불러옵니다</span>`;return`
    <div class="space-y-4" id="load-more-section">
      ${r}
      <div class="text-center py-4">
        ${i}
      </div>
      <div id="load-more-sentinel" class="w-full h-1"></div>
    </div>
  `},D=({products:n=[],pagination:r,selectedLimit:i=e,selectedSort:a=t,searchValue:s=``,categoryState:c,selectedCategory1:l=``,selectedCategory2:u=``,isLoadingMore:d=!1,loadMoreError:f=null}={})=>{let p=r?.total??n.length,m=!!r?.hasNext;return`
    ${C({searchValue:s,selectedLimit:i,selectedSort:a,categoryState:c,selectedCategory1:l,selectedCategory2:u})}
    <div class="mb-6">
      <div class="mb-4 text-sm text-gray-600">
        총 <span class="font-medium text-gray-900">${o(p)}개</span>의 상품
      </div>
      ${T(n)}
      ${E({hasMore:m,isLoadingMore:d,loadMoreError:f})}
    </div>
  `},O=e=>`
  <div class="flex flex-col items-center justify-center py-20">
    <div class="text-center max-w-sm">
      <div class="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19H18.93a2 2 0 001.73-3L13.73 5a2 2 0 00-3.46 0L3.34 16a2 2 0 001.73 3z"></path>
        </svg>
      </div>
      <h2 class="text-lg font-semibold text-gray-900 mb-2">상품을 불러오지 못했습니다</h2>
      <p class="text-sm text-gray-600">${e??`일시적인 문제로 상품 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.`}</p>
      <button id="retry-button" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">다시 시도</button>
    </div>
  </div>
`,k=(e,t,n)=>{e.currentAction=`catalogActions.setProducts`,e.updateSlice(`catalog`,{products:t,pagination:n,isLoading:!1,isLoadingMore:!1,loadMoreError:null})},A=(e,t)=>{e.currentAction=`catalogActions.setError`,e.updateSlice(`catalog`,{isLoading:!1,loadMoreError:t})},j=e=>{e.currentAction=`catalogActions.startLoadMore`,e.updateSlice(`catalog`,{isLoadingMore:!0,loadMoreError:null})},M=(e,t,n)=>{e.currentAction=`catalogActions.loadMoreSuccess`,e.updateSlice(`catalog`,e=>({...e,products:[...e.products,...t],pagination:n,isLoadingMore:!1,loadMoreError:null}))},N=(e,t)=>{e.currentAction=`catalogActions.loadMoreError`,e.updateSlice(`catalog`,{isLoadingMore:!1,loadMoreError:t})},P=e=>{e.currentAction=`catalogActions.setInitialLoading`,e.updateSlice(`catalog`,{isLoading:!0,isLoadingMore:!1,loadMoreError:null})},F=e=>{e.currentAction=`categoryActions.startCategoryLoad`,e.updateSlice(`categories`,{isLoading:!0,error:null})},I=(e,t)=>{e.currentAction=`categoryActions.setCategoriesSuccess`,e.updateSlice(`categories`,{data:t,isLoading:!1,error:null})},L=(e,t)=>{e.currentAction=`categoryActions.setCategoriesError`,e.updateSlice(`categories`,{data:[],isLoading:!1,error:t})};var R=class{constructor(e){this.app=e}async init(){P(this.app.store),F(this.app.store),this.loadCategories(),await this.loadProducts({showSkeleton:!0})}updateView(){let e=window.scrollY;this.app.resetObserver(),this.app.render(D({products:this.app.state.products,pagination:this.app.state.pagination,selectedLimit:this.app.lastParams.limit,selectedSort:this.app.lastParams.sort,searchValue:this.app.lastParams.search??``,categoryState:this.app.categoriesState,selectedCategory1:this.app.lastParams.category1??``,selectedCategory2:this.app.lastParams.category2??``,isLoadingMore:this.app.state.isLoadingMore,loadMoreError:this.app.state.loadMoreError})),window.scrollTo({top:e}),this.attachMainHandlers(),this.setupInfiniteScroll()}async loadProducts({showSkeleton:e=!0}={}){e&&(this.app.resetObserver(),P(this.app.store),this.app.render(w({selectedLimit:this.app.lastParams.limit,selectedSort:this.app.lastParams.sort,searchValue:this.app.lastParams.search??``,categoryState:this.app.categoriesState,selectedCategory1:this.app.lastParams.category1??``,selectedCategory2:this.app.lastParams.category2??``})),this.attachMainHandlers());try{var t;let e=await c({...this.app.lastParams,page:1});u(this.app.store,(t=e.pagination)?.page??1),k(this.app.store,e.products,e.pagination),this.updateView()}catch(e){console.error(`상품 목록을 불러오는 중 오류가 발생했습니다.`,e),A(this.app.store,e?.message??null),this.app.resetObserver(),this.app.render(O(e?.message)),this.attachRetryHandler()}}async loadCategories(){try{let e=await s(),t=Object.entries(e??{}).map(([e,t])=>({name:e,children:Object.keys(t??{}).sort()}));I(this.app.store,t)}catch(e){console.error(`카테고리를 불러오는 중 오류가 발생했습니다.`,e),L(this.app.store,e?.message??`카테고리를 불러오지 못했습니다.`)}finally{this.app.state.isLoading?(this.app.render(w({selectedLimit:this.app.lastParams.limit,selectedSort:this.app.lastParams.sort,searchValue:this.app.lastParams.search??``,categoryState:this.app.categoriesState,selectedCategory1:this.app.lastParams.category1??``,selectedCategory2:this.app.lastParams.category2??``})),this.attachMainHandlers()):this.updateView()}}async loadMoreProducts(){if(this.app.state.isLoadingMore)return;let e=this.app.state.pagination;if(!e?.hasNext)return;let t=(e.page??1)+1;j(this.app.store),this.updateView();try{var n;let e=await c({...this.app.lastParams,page:t});u(this.app.store,(n=e.pagination)?.page??t),M(this.app.store,e.products,e.pagination),this.updateView()}catch(e){console.error(`다음 상품을 불러오는 중 오류가 발생했습니다.`,e),N(this.app.store,e?.message??`잠시 후 다시 시도해주세요.`),this.updateView()}}handleAddToCart(e){if(!e)return;let t=this.app.state.products.find(t=>t.productId===e);if(!t)return;let n={productId:e,title:t.title??``,price:t.lprice??``,image:t.image??``,brand:t.brand??``};i(this.app.store,n),this.app.saveCartToStorage(),this.app.updateCartIcon(),this.app.cartState.isOpen&&this.app.updateCartModalView(),this.app.showToast(`장바구니에 추가되었습니다`,`success`)}handleSearch(e){let t=e.trim();t!==(this.app.lastParams.search??``)&&(f(this.app.store,t),this.loadProducts({showSkeleton:!0}))}handleCategorySelect({category1:e=``,category2:t=``}={}){let n=e,r=n?t:``,i=this.app.lastParams.category1??``,a=this.app.lastParams.category2??``;n===i&&r===a||(l(this.app.store,{category1:n,category2:r}),this.loadProducts({showSkeleton:!0}))}attachMainHandlers(){let e=this.app.rootElement.querySelector(`#search-input`),t=this.app.rootElement.querySelector(`#limit-select`),n=this.app.rootElement.querySelector(`#sort-select`),r=this.app.rootElement.querySelector(`#load-more-retry-button`),i=this.app.rootElement.querySelectorAll(`.category1-filter-btn`),a=this.app.rootElement.querySelectorAll(`.category2-filter-btn`),o=this.app.rootElement.querySelectorAll(`[data-breadcrumb]`),s=this.app.rootElement.querySelectorAll(`.add-to-cart-btn`),c=this.app.rootElement.querySelector(`#cart-icon-btn`),l=this.app.rootElement.querySelectorAll(`.product-card`);c&&c.addEventListener(`click`,e=>{e.preventDefault(),this.app.openCartModal()}),l.forEach(e=>{let t=e.dataset.productId;if(!t)return;let n=e.querySelector(`.product-image`);n&&n.addEventListener(`click`,e=>{e.preventDefault(),this.app.navigateTo(`/product/${t}`)});let r=e.querySelector(`.product-info`);r&&r.addEventListener(`click`,e=>{e.preventDefault(),this.app.navigateTo(`/product/${t}`)})}),e instanceof HTMLInputElement&&(e.value=this.app.lastParams.search??``,e.addEventListener(`keydown`,e=>{if(e.key!==`Enter`)return;e.preventDefault();let t=e.target;t instanceof HTMLInputElement&&this.handleSearch(t.value)})),t&&(t.value=String(this.app.lastParams.limit),t.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLSelectElement))return;let n=Number.parseInt(t.value,10);Number.isNaN(n)||n===this.app.lastParams.limit||(d(this.app.store,n),this.loadProducts({showSkeleton:!0}))})),n&&(n.value=this.app.lastParams.sort,n.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLSelectElement))return;let n=t.value;n!==this.app.lastParams.sort&&(p(this.app.store,n),this.loadProducts({showSkeleton:!0}))})),r&&r.addEventListener(`click`,()=>{this.loadMoreProducts()}),i.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.category1??``;n&&this.handleCategorySelect({category1:n,category2:``})})}),a.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.category1??``,r=e.dataset.category2??``;!n||!r||this.handleCategorySelect({category1:n,category2:r})})}),o.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.breadcrumb;if(n){if(n===`reset`)this.handleCategorySelect({category1:``,category2:``});else if(n===`category1`){let t=e.dataset.category1??``;this.handleCategorySelect({category1:t,category2:``})}else if(n===`category2`){let t=e.dataset.category1??``,n=e.dataset.category2??``;this.handleCategorySelect({category1:t,category2:n})}}})}),s.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.productId;n&&this.handleAddToCart(n)})})}attachRetryHandler(){let e=this.app.rootElement.querySelector(`#retry-button`);e&&e.addEventListener(`click`,()=>{this.loadProducts({showSkeleton:!0})})}setupInfiniteScroll(){if(this.app.state.loadMoreError)return;let e=this.app.state.pagination;if(!e?.hasNext)return;let t=this.app.rootElement.querySelector(`#load-more-sentinel`);t&&(this.app.observer=new IntersectionObserver(e=>{this.app.state.isLoadingMore||this.app.state.loadMoreError||e.some(e=>e.isIntersecting)&&this.loadMoreProducts()},{root:null,rootMargin:`200px 0px`,threshold:0}),this.app.observer.observe(t))}};export{R as CatalogPage};