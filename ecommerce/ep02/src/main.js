import { setupProducts } from "./products";
import { setupCart } from './cart';
import { setupCounter } from './counter'

async function main() {
  const {
    getProductById,
    updateCount: updateProductCount,
  } = await setupProducts({
    container: document.querySelector("#products"),
    onDecreaseClick,
    onIncreaseClick
  });

  const  {
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    updateCount: updateCartCount
  } = setupCart({
    container: document.querySelector('.cart_items'),
    onDecreaseClick,
    onIncreaseClick
  });

  const {
    increase,
    decrease,
    getTotalCount
  } = setupCounter();

  const updateTotalCount = () => {
    const totalCount = getTotalCount();
    document.querySelector(".total_count").innerHTML = totalCount ? `(${totalCount})` : '';
  }

  function onIncreaseClick({ productId }) {
    const count = increase({ productId })
    updateProductCount({ productId, count })
    if(count === 1) {
      const product = getProductById({ productId });
      addProductToCart({ product });
    };
    updateCartCount({ productId, count })
    updateTotalCount();
  };

  function onDecreaseClick({ productId }) {
    const count = decrease({ productId });
    updateProductCount({ productId, count })
    updateCartCount({ productId, count })
    if(count === 0) {
      const product = getProductById({ productId });
      removeProductFromCart({ product });
    };
    updateTotalCount();
  };

  document.querySelector(".btn-cart").addEventListener("click", () => {
    document.body.classList.add("displaying_cart");
  });

  document.querySelector(".btn-close-cart").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });

  document.querySelector(".cart-dimmed-bg ").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
}

main();