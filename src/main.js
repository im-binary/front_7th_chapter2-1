import { PageLayout } from "./components/index.js";
import { getProducts, getCategories } from "./api/productApi.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      // serviceWorker: {
      //   url: "/front_7th_chapter2-1/mockServiceWorker.js",
      // },
      onUnhandledRequest: "bypass",
    }),
  );

const DEFAULT_LIMIT = 20;
const DEFAULT_SORT = "price_asc";
const LIMIT_OPTIONS = [10, 20, 50, 100];
const SORT_OPTIONS = [
  { value: "price_asc", label: "가격 낮은순" },
  { value: "price_desc", label: "가격 높은순" },
  { value: "name_asc", label: "이름순" },
  { value: "name_desc", label: "이름 역순" },
];

const CART_STORAGE_KEY = "shopping_cart";
const TOAST_DISPLAY_DURATION = 2000;
const CART_BADGE_CLASSES = [
  "absolute",
  "-top-1",
  "-right-1",
  "bg-red-500",
  "text-white",
  "text-xs",
  "rounded-full",
  "h-5",
  "w-5",
  "flex",
  "items-center",
  "justify-center",
].join(" ");

const TOAST_CONTAINER_CLASSES = [
  "fixed",
  "top-20",
  "left-1/2",
  "-translate-x-1/2",
  "z-50",
  "flex",
  "flex-col",
  "items-center",
  "space-y-2",
].join(" ");

const TOAST_CLASS_NAMES = [
  "toast-item",
  "bg-green-600",
  "text-white",
  "px-4",
  "py-3",
  "rounded-lg",
  "shadow-lg",
  "text-sm",
  "font-medium",
  "transition-opacity",
  "duration-300",
].join(" ");

const categoryButtonBaseClasses = "text-left px-3 py-2 text-sm rounded-md border transition-colors";
const categoryButtonDefaultClasses = "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
const categoryButtonActiveClasses = "bg-blue-600 border-blue-600 text-white hover:bg-blue-700";

const escapeHtml = (value = "") =>
  String(value).replace(/[<>"']/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });

const renderCategorySection = ({ categoryState, selectedCategory1 = "", selectedCategory2 = "" } = {}) => {
  const { data = [], isLoading = false, error = null } = categoryState ?? {};

  const breadcrumbParts = [
    '<span class="text-sm text-gray-600">카테고리:</span>',
    '<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>',
  ];

  if (selectedCategory1) {
    breadcrumbParts.push(
      '<span class="text-xs text-gray-400">/</span>',
      `<button data-breadcrumb="category1" data-category1="${escapeHtml(selectedCategory1)}" class="text-xs hover:text-blue-800 hover:underline">${escapeHtml(selectedCategory1)}</button>`,
    );
  }

  if (selectedCategory2) {
    breadcrumbParts.push(
      '<span class="text-xs text-gray-400">/</span>',
      `<button data-breadcrumb="category2" data-category1="${escapeHtml(selectedCategory1)}" data-category2="${escapeHtml(selectedCategory2)}" class="text-xs hover:text-blue-800 hover:underline">${escapeHtml(selectedCategory2)}</button>`,
    );
  }

  let firstLevelMarkup = "";
  if (isLoading) {
    firstLevelMarkup = '<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>';
  } else if (error) {
    firstLevelMarkup = `<div class="text-sm text-red-600">${escapeHtml(error)}</div>`;
  } else if (!data.length) {
    firstLevelMarkup = '<div class="text-sm text-gray-500 italic">카테고리 정보가 없습니다.</div>';
  } else {
    firstLevelMarkup = `
      <div class="flex flex-wrap gap-2">
        ${data
          .map(({ name }) => {
            const isActive = name === selectedCategory1;
            const classes = `${categoryButtonBaseClasses} ${isActive ? categoryButtonActiveClasses : categoryButtonDefaultClasses}`;
            return `<button class="category1-filter-btn ${classes}" data-category1="${escapeHtml(name)}">${escapeHtml(name)}</button>`;
          })
          .join(" ")}
      </div>
    `;
  }

  let secondLevelMarkup = "";
  if (!isLoading && !error && selectedCategory1) {
    const targetCategory = data.find(({ name }) => name === selectedCategory1);
    if (targetCategory?.children?.length) {
      secondLevelMarkup = `
        <div class="flex flex-wrap gap-2">
          ${targetCategory.children
            .map((childName) => {
              const isActive = childName === selectedCategory2;
              const classes = `${categoryButtonBaseClasses} ${isActive ? categoryButtonActiveClasses : categoryButtonDefaultClasses}`;
              return `<button class="category2-filter-btn ${classes}" data-category1="${escapeHtml(selectedCategory1)}" data-category2="${escapeHtml(childName)}">${escapeHtml(childName)}</button>`;
            })
            .join(" ")}
        </div>
      `;
    }
  }

  return `
    <div class="space-y-2">
      <div class="flex items-center gap-2 flex-wrap text-xs text-gray-600">
        ${breadcrumbParts.join(" ")}
      </div>
      ${firstLevelMarkup}
      ${secondLevelMarkup}
    </div>
  `;
};

const renderFilterPanel = ({
  searchValue = "",
  selectedLimit = DEFAULT_LIMIT,
  selectedSort = DEFAULT_SORT,
  categoryState,
  selectedCategory1 = "",
  selectedCategory2 = "",
} = {}) => `
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value="${escapeHtml(searchValue)}"
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
      ${renderCategorySection({ categoryState, selectedCategory1, selectedCategory2 })}
      <div class="flex gap-2 items-center justify-between">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            ${createLimitOptions(selectedLimit)}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            ${createSortOptions(selectedSort)}
          </select>
        </div>
      </div>
    </div>
  </div>
`;

const createLimitOptions = (selectedLimit = DEFAULT_LIMIT) =>
  LIMIT_OPTIONS.map((limit) => {
    const isSelected = limit === selectedLimit ? " selected" : "";
    return `<option value="${limit}"${isSelected}>${limit}개</option>`;
  }).join("");

const createSortOptions = (selectedSort = DEFAULT_SORT) =>
  SORT_OPTIONS.map(({ value, label }) => {
    const isSelected = value === selectedSort ? " selected" : "";
    return `<option value="${value}"${isSelected}>${label}</option>`;
  }).join("");

const formatCurrency = (value) => {
  const numeric = Number.parseInt(value, 10);
  if (Number.isNaN(numeric)) {
    return "0";
  }
  return new Intl.NumberFormat("ko-KR").format(numeric);
};

const renderSpinner = (text) => `
  <div class="inline-flex items-center">
    <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-gray-600">${text}</span>
  </div>
`;

const renderSkeletonCard = () => `
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3 space-y-2">
      <div class="h-4 bg-gray-200 rounded"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
`;

const renderSkeletonCards = (count = 4) =>
  Array.from({ length: count })
    .map(() => renderSkeletonCard())
    .join("");

const renderLoadingContent = ({
  selectedLimit = DEFAULT_LIMIT,
  selectedSort = DEFAULT_SORT,
  searchValue = "",
  categoryState,
  selectedCategory1 = "",
  selectedCategory2 = "",
} = {}) => `
  ${renderFilterPanel({
    searchValue,
    selectedLimit,
    selectedSort,
    categoryState,
    selectedCategory1,
    selectedCategory2,
  })}
  <div class="mb-6">
    <div class="grid grid-cols-2 gap-4 mb-6">
      ${renderSkeletonCards(4)}
    </div>
    <div class="text-center py-4">
      ${renderSpinner("상품을 불러오는 중...")}
    </div>
  </div>
`;

const renderProductsGrid = (products) => {
  if (!products.length) {
    return `
      <div class="py-12 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg">
        <p class="text-sm text-gray-600">조건에 맞는 상품이 없습니다.</p>
      </div>
    `;
  }

  const cards = products
    .map((product) => {
      const { productId, title, image, brand, lprice } = product;
      const priceLabel = `${formatCurrency(lprice)}원`;
      const safeTitle = escapeHtml(title);
      const brandLabel = brand ? `<p class="text-xs text-gray-500 mb-2">${escapeHtml(brand)}</p>` : "";

      return `
        <article class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" data-product-id="${productId}">
          <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
            <img src="${image}" alt="${safeTitle}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-200" loading="lazy">
          </div>
          <div class="p-3">
            <div class="cursor-pointer product-info mb-3">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${safeTitle}</h3>
              ${brandLabel}
              <p class="text-lg font-bold text-gray-900">${priceLabel}</p>
            </div>
            <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${productId}">장바구니 담기</button>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid" data-testid="products-grid">
      ${cards}
    </div>
  `;
};

const renderLoadMoreSection = ({ hasMore, isLoadingMore, loadMoreError }) => {
  if (loadMoreError) {
    return `
      <div class="text-center py-4 space-y-3" id="load-more-section">
        <p class="text-sm text-red-600">${loadMoreError}</p>
        <button id="load-more-retry-button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          다시 시도
        </button>
      </div>
    `;
  }

  if (!hasMore) {
    return `<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>`;
  }

  const skeletonMarkup = isLoadingMore ? `<div class="grid grid-cols-2 gap-4">${renderSkeletonCards(2)}</div>` : "";
  const indicatorMarkup = isLoadingMore
    ? renderSpinner("다음 상품을 불러오는 중...")
    : `<span class="text-sm text-gray-500">스크롤을 유지하면 다음 상품을 자동으로 불러옵니다</span>`;

  return `
    <div class="space-y-4" id="load-more-section">
      ${skeletonMarkup}
      <div class="text-center py-4">
        ${indicatorMarkup}
      </div>
      <div id="load-more-sentinel" class="w-full h-1"></div>
    </div>
  `;
};

const renderProductsContent = ({
  products = [],
  pagination,
  selectedLimit = DEFAULT_LIMIT,
  selectedSort = DEFAULT_SORT,
  searchValue = "",
  categoryState,
  selectedCategory1 = "",
  selectedCategory2 = "",
  isLoadingMore = false,
  loadMoreError = null,
}) => {
  const totalProducts = pagination?.total ?? products.length;
  const hasMore = Boolean(pagination?.hasNext);

  return `
    ${renderFilterPanel({
      searchValue,
      selectedLimit,
      selectedSort,
      categoryState,
      selectedCategory1,
      selectedCategory2,
    })}
    <div class="mb-6">
      <div class="mb-4 text-sm text-gray-600">
        총 <span class="font-medium text-gray-900">${formatCurrency(totalProducts)}개</span>의 상품
      </div>
      ${renderProductsGrid(products)}
      ${renderLoadMoreSection({ hasMore, isLoadingMore, loadMoreError })}
    </div>
  `;
};

const renderErrorContent = (message) => `
  <div class="flex flex-col items-center justify-center py-20">
    <div class="text-center max-w-sm">
      <div class="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19H18.93a2 2 0 001.73-3L13.73 5a2 2 0 00-3.46 0L3.34 16a2 2 0 001.73 3z"></path>
        </svg>
      </div>
      <h2 class="text-lg font-semibold text-gray-900 mb-2">상품을 불러오지 못했습니다</h2>
      <p class="text-sm text-gray-600">${message ?? "일시적인 문제로 상품 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."}</p>
      <button id="retry-button" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">다시 시도</button>
    </div>
  </div>
`;

class ProductApp {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.lastParams = {
      limit: DEFAULT_LIMIT,
      sort: DEFAULT_SORT,
      page: 1,
      search: "",
      category1: "",
      category2: "",
    };
    this.state = {
      products: [],
      pagination: undefined,
      isLoading: false,
      isLoadingMore: false,
      loadMoreError: null,
    };
    this.observer = null;
    this.categoriesState = {
      data: [],
      isLoading: false,
      error: null,
    };
    this.cartItems = this.loadCartFromStorage();
  }

  async init() {
    this.state = { ...this.state, isLoading: true };
    this.categoriesState = { ...this.categoriesState, isLoading: true, error: null };
    void this.loadCategories();
    await this.loadProducts({ showSkeleton: true });
  }

  render(content) {
    this.rootElement.innerHTML = PageLayout({ children: content });
    this.updateCartIcon();
  }

  resetObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  updateView() {
    const previousScrollY = window.scrollY;
    this.resetObserver();
    this.render(
      renderProductsContent({
        products: this.state.products,
        pagination: this.state.pagination,
        selectedLimit: this.lastParams.limit,
        selectedSort: this.lastParams.sort,
        searchValue: this.lastParams.search ?? "",
        categoryState: this.categoriesState,
        selectedCategory1: this.lastParams.category1 ?? "",
        selectedCategory2: this.lastParams.category2 ?? "",
        isLoadingMore: this.state.isLoadingMore,
        loadMoreError: this.state.loadMoreError,
      }),
    );
    window.scrollTo({ top: previousScrollY });
    this.attachMainHandlers();
    this.setupInfiniteScroll();
  }

  async loadProducts({ showSkeleton = true } = {}) {
    if (showSkeleton) {
      this.resetObserver();
      this.state = {
        ...this.state,
        isLoading: true,
        isLoadingMore: false,
        loadMoreError: null,
      };
      this.render(
        renderLoadingContent({
          selectedLimit: this.lastParams.limit,
          selectedSort: this.lastParams.sort,
          searchValue: this.lastParams.search ?? "",
          categoryState: this.categoriesState,
          selectedCategory1: this.lastParams.category1 ?? "",
          selectedCategory2: this.lastParams.category2 ?? "",
        }),
      );
      this.attachMainHandlers();
    }

    try {
      const data = await getProducts({ ...this.lastParams, page: 1 });
      this.lastParams = { ...this.lastParams, page: data.pagination?.page ?? 1 };

      this.state = {
        products: data.products,
        pagination: data.pagination,
        isLoading: false,
        isLoadingMore: false,
        loadMoreError: null,
      };

      this.updateView();
    } catch (error) {
      console.error("상품 목록을 불러오는 중 오류가 발생했습니다.", error);
      this.state = {
        ...this.state,
        isLoading: false,
        isLoadingMore: false,
        loadMoreError: error?.message ?? null,
      };
      this.resetObserver();
      this.render(renderErrorContent(error?.message));
      this.attachRetryHandler();
    }
  }

  async loadCategories() {
    try {
      const rawCategories = await getCategories();
      const parsedCategories = Object.entries(rawCategories ?? {}).map(([name, children]) => ({
        name,
        children: Object.keys(children ?? {}).sort(),
      }));

      this.categoriesState = {
        data: parsedCategories,
        isLoading: false,
        error: null,
      };
    } catch (error) {
      console.error("카테고리를 불러오는 중 오류가 발생했습니다.", error);
      this.categoriesState = {
        data: [],
        isLoading: false,
        error: error?.message ?? "카테고리를 불러오지 못했습니다.",
      };
    } finally {
      if (this.state.isLoading) {
        this.render(
          renderLoadingContent({
            selectedLimit: this.lastParams.limit,
            selectedSort: this.lastParams.sort,
            searchValue: this.lastParams.search ?? "",
            categoryState: this.categoriesState,
            selectedCategory1: this.lastParams.category1 ?? "",
            selectedCategory2: this.lastParams.category2 ?? "",
          }),
        );
      } else {
        this.updateView();
      }
    }
  }

  async loadMoreProducts() {
    if (this.state.isLoadingMore) {
      return;
    }

    const pagination = this.state.pagination;
    if (!pagination?.hasNext) {
      return;
    }

    const nextPage = (pagination.page ?? 1) + 1;

    this.state = {
      ...this.state,
      isLoadingMore: true,
      loadMoreError: null,
    };
    this.updateView();

    try {
      const data = await getProducts({ ...this.lastParams, page: nextPage });
      this.lastParams = { ...this.lastParams, page: data.pagination?.page ?? nextPage };
      this.state = {
        ...this.state,
        products: [...this.state.products, ...data.products],
        pagination: data.pagination,
        isLoadingMore: false,
        loadMoreError: null,
      };
      this.updateView();
    } catch (error) {
      console.error("다음 상품을 불러오는 중 오류가 발생했습니다.", error);
      this.state = {
        ...this.state,
        isLoadingMore: false,
        loadMoreError: error?.message ?? "잠시 후 다시 시도해주세요.",
      };
      this.updateView();
    }
  }

  loadCartFromStorage() {
    if (typeof window === "undefined" || !window.localStorage) {
      return [];
    }

    try {
      const storedValue = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!storedValue) {
        return [];
      }

      const parsedValue = JSON.parse(storedValue);
      if (!Array.isArray(parsedValue)) {
        return [];
      }

      const uniqueItems = new Map();
      parsedValue.forEach((item) => {
        if (item && typeof item.productId === "string" && !uniqueItems.has(item.productId)) {
          uniqueItems.set(item.productId, {
            productId: item.productId,
            title: item.title ?? "",
            price: item.price ?? item.lprice ?? "",
            image: item.image ?? "",
            brand: item.brand ?? "",
          });
        }
      });

      return Array.from(uniqueItems.values());
    } catch (error) {
      console.error("장바구니 정보를 불러오는 중 오류가 발생했습니다.", error);
      return [];
    }
  }

  saveCartToStorage() {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    } catch (error) {
      console.error("장바구니 정보를 저장하는 중 오류가 발생했습니다.", error);
    }
  }

  getCartCount() {
    return this.cartItems.length;
  }

  updateCartIcon() {
    if (typeof document === "undefined") {
      return;
    }

    const cartButton = document.getElementById("cart-icon-btn");
    if (!cartButton) {
      return;
    }

    let badge = cartButton.querySelector("span");
    const count = this.getCartCount();

    if (count > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = CART_BADGE_CLASSES;
        cartButton.appendChild(badge);
      }
      badge.textContent = String(count);
      badge.style.display = "flex";
    } else if (badge) {
      badge.remove();
    }
  }

  showToast(message) {
    if (typeof document === "undefined") {
      return;
    }

    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = TOAST_CONTAINER_CLASSES;
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = TOAST_CLASS_NAMES;
    toast.textContent = message;
    container.appendChild(toast);

    window.setTimeout(() => {
      toast.classList.add("opacity-0");
      window.setTimeout(() => {
        toast.remove();
        if (container && container.childElementCount === 0) {
          container.remove();
        }
      }, 300);
    }, TOAST_DISPLAY_DURATION);
  }

  handleAddToCart(productId) {
    if (!productId) {
      return;
    }

    const alreadyInCart = this.cartItems.some((item) => item.productId === productId);

    if (!alreadyInCart) {
      const product = this.state.products.find((item) => item.productId === productId);
      if (!product) {
        return;
      }

      const cartItem = {
        productId,
        title: product.title ?? "",
        price: product.lprice ?? "",
        image: product.image ?? "",
        brand: product.brand ?? "",
      };

      this.cartItems = [...this.cartItems, cartItem];
      this.saveCartToStorage();
    }

    this.updateCartIcon();
    this.showToast("장바구니에 추가되었습니다");
  }

  handleSearch(value) {
    const nextSearch = value.trim();
    if (nextSearch === (this.lastParams.search ?? "")) {
      return;
    }

    this.lastParams = {
      ...this.lastParams,
      search: nextSearch,
      page: 1,
    };

    void this.loadProducts({ showSkeleton: true });
  }

  handleCategorySelect({ category1 = "", category2 = "" } = {}) {
    const nextCategory1 = category1;
    const nextCategory2 = nextCategory1 ? category2 : "";

    const currentCategory1 = this.lastParams.category1 ?? "";
    const currentCategory2 = this.lastParams.category2 ?? "";

    if (nextCategory1 === currentCategory1 && nextCategory2 === currentCategory2) {
      return;
    }

    this.lastParams = {
      ...this.lastParams,
      category1: nextCategory1,
      category2: nextCategory2,
      page: 1,
    };

    void this.loadProducts({ showSkeleton: true });
  }

  attachMainHandlers() {
    const searchInput = this.rootElement.querySelector("#search-input");
    const limitSelect = this.rootElement.querySelector("#limit-select");
    const sortSelect = this.rootElement.querySelector("#sort-select");
    const loadMoreRetryButton = this.rootElement.querySelector("#load-more-retry-button");
    const category1Buttons = this.rootElement.querySelectorAll(".category1-filter-btn");
    const category2Buttons = this.rootElement.querySelectorAll(".category2-filter-btn");
    const breadcrumbButtons = this.rootElement.querySelectorAll("[data-breadcrumb]");
    const addToCartButtons = this.rootElement.querySelectorAll(".add-to-cart-btn");

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = this.lastParams.search ?? "";
      searchInput.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") {
          return;
        }

        event.preventDefault();
        const target = event.target;
        if (target instanceof HTMLInputElement) {
          this.handleSearch(target.value);
        }
      });
    }

    if (limitSelect) {
      limitSelect.value = String(this.lastParams.limit);
      limitSelect.addEventListener("change", (event) => {
        const select = event.target;
        if (!(select instanceof HTMLSelectElement)) {
          return;
        }

        const nextLimit = Number.parseInt(select.value, 10);
        if (Number.isNaN(nextLimit) || nextLimit === this.lastParams.limit) {
          return;
        }

        this.lastParams = { ...this.lastParams, limit: nextLimit, page: 1 };
        void this.loadProducts({ showSkeleton: true });
      });
    }

    if (sortSelect) {
      sortSelect.value = this.lastParams.sort;
      sortSelect.addEventListener("change", (event) => {
        const select = event.target;
        if (!(select instanceof HTMLSelectElement)) {
          return;
        }

        const nextSort = select.value;
        if (nextSort === this.lastParams.sort) {
          return;
        }

        this.lastParams = { ...this.lastParams, sort: nextSort, page: 1 };
        void this.loadProducts({ showSkeleton: true });
      });
    }

    if (loadMoreRetryButton) {
      loadMoreRetryButton.addEventListener("click", () => {
        void this.loadMoreProducts();
      });
    }

    category1Buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const category1 = button.dataset.category1 ?? "";
        if (!category1) {
          return;
        }
        this.handleCategorySelect({ category1, category2: "" });
      });
    });

    category2Buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const category1 = button.dataset.category1 ?? "";
        const category2 = button.dataset.category2 ?? "";
        if (!category1 || !category2) {
          return;
        }
        this.handleCategorySelect({ category1, category2 });
      });
    });

    breadcrumbButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const type = button.dataset.breadcrumb;
        if (!type) {
          return;
        }

        if (type === "reset") {
          this.handleCategorySelect({ category1: "", category2: "" });
        } else if (type === "category1") {
          const category1 = button.dataset.category1 ?? "";
          this.handleCategorySelect({ category1, category2: "" });
        } else if (type === "category2") {
          const category1 = button.dataset.category1 ?? "";
          const category2 = button.dataset.category2 ?? "";
          this.handleCategorySelect({ category1, category2 });
        }
      });
    });

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const productId = button.dataset.productId;
        if (productId) {
          this.handleAddToCart(productId);
        }
      });
    });
  }

  attachRetryHandler() {
    const retryButton = this.rootElement.querySelector("#retry-button");
    if (!retryButton) {
      return;
    }

    retryButton.addEventListener("click", () => {
      void this.loadProducts({ showSkeleton: true });
    });
  }

  setupInfiniteScroll() {
    if (this.state.loadMoreError) {
      return;
    }

    const pagination = this.state.pagination;
    if (!pagination?.hasNext) {
      return;
    }

    const sentinel = this.rootElement.querySelector("#load-more-sentinel");
    if (!sentinel) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.state.isLoadingMore || this.state.loadMoreError) {
          return;
        }

        if (entries.some((entry) => entry.isIntersecting)) {
          void this.loadMoreProducts();
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0 },
    );

    this.observer.observe(sentinel);
  }
}

function main() {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("root element not found");
  }

  const app = new ProductApp(root);
  app.init();
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
