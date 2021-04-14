<template> 
    <div>
      <Navbar/>
     <Products/>
      <Cart/>
      <Toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Products from './components/Products.vue'
    import Cart from './components/Cart.vue'
    import Toast from './components/Toast.vue'
    import {mapGetters,useStore} from 'vuex'
    export default {
        components:{
          Navbar,
          Products,
          Cart,
          Toast
        },
        computed: {
          ...mapGetters({
               toast:'toast'
             }),
        },
      setup(){
          const store=useStore()
      function  hideToast() {
          store.commit("hideToast");
        }
        return{
            hideToast,
        }
      }
    }
</script>

<style scoped>

</style>
