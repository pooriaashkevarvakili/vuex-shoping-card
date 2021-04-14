import { createStore } from 'vuex'
import myApi from '../myapi'

export default createStore({
  state: {
    products: null,
    cart: [],
    toast: {
        text: "",
        show: false
    }
  },
  getters:{
    cartSize: (state) => {
      return state.cart.length;
  },
  cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
          return total + (product.price * product.quantity);
      }, 0);
  },
  toast: (state) => {
      return state.toast;
  }
  },
  mutations: {
    setUpProducts: (state, productsPayload) => {

      state.products = productsPayload;
  },
  addToCart: (state, productId) => {

      let product = state.products.find((product) => product.id === productId);
      let cartProduct = state.cart.find((product) => product.id === productId);

      if (cartProduct) {
          cartProduct.quantity++;
      } else {
          state.cart.push({
              ...product,
              stock: product.quantity,
              quantity: 0,
          });
      }
      product.quantity--;
  },
  removeFromCart: (state, productId) => {
      let product = state.products.find((product) => product.id === productId);
      let cartProduct = state.cart.find((product) => product.id === productId);

      cartProduct.quantity--;
      product.quantity++;
  },
  deleteFromCart: (state, productId) => {
      let product = state.products.find((product) => product.id === productId);
      let cartProductIndex = state.cart.findIndex((product) => product.id === productId);
      product.quantity = state.cart[cartProductIndex].stock;
      state.cart.splice(cartProductIndex, 1);
  },
  showToast: (state, toastText) => {
      state.toast.show = true;
      state.toast.text = toastText;
  },
  hideToast: (state) => {
      state.toast.show = false;
      state.toast.text = "";
  }
  },
  actions: {
    fetchProducts: ({ commit }) => {
      myApi.getProducts().then((products) => {
          commit("setUpProducts", products);
          commit("showToast", "products loaded");
      });
  },
  addToCart: ({ commit }, productId) => {
      myApi.products("add", productId).then((productId) => {
          commit("addToCart", productId);
          commit("showToast", "added to cart");
      });
  },
  removeFromCart: ({ commit }, productId) => {
      myApi.products("remove", productId).then((productId) => {
          commit("removeFromCart", productId);
          commit("showToast", "removed from cart");
      });
  },
  deleteFromCart: ({ commit }, productId) => {
      myApi.products("delete", productId).then((productId) => {
          commit("deleteFromCart", productId);
          commit("showToast", "deleted from cart");
      });

  }
}
  
 
})
