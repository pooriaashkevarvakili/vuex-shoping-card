<template>   
    <div class="container mt-5 py-2">
      <h1 class="my-2">Products</h1>
       <div class="row">
           <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2">
               <SingleProduct :product="product"/>
           </div>
       </div>
   </div>
</template>   

<script>
    import SingleProduct from "./SingleProduct.vue"
    import {mapState,useStore} from "vuex"
    export default{
        components: {
            SingleProduct
        },
        computed: {
          ...mapState({
            products:state=>state.products
          })

        },
        created(){
         this.create()
        },
    setup(){
          const store=useStore()
      function create(){
       store.dispatch("fetchProducts");
      }
      return{
            create
      }
    }
    }
</script>