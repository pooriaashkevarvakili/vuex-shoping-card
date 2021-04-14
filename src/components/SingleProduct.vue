<template>
    <div class="card"> 
       <div class="card-body"> 
           <h5 class="card-title">{{product.name}}</h5> 
           <p class="card-text">Price: <b>${{product.price}}</b></p>
         <img style="width:200px;height:300px;position:relative;left:120px" v-bind:src="product.img" alt="product"/>
           <button 
               class="btn mt-3"
             style="position:relative;left:-200px"
               :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
               @click="addToCart(product.id)"
               :disabled="!inCartQuantity">
               {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
           </button> 
       </div> 
   </div>
</template>

<script>
import {useRouter} from "vue-router"
import {useStore} from "vuex"
    export default{
        props: ["product"],
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            }
        },
        setup(){

          const store=useStore()
          const route=useRouter()
          function addToCart(id){
            store.dispatch("addToCart", id);
            route.push('/singleProduct');

          }
          return{
            addToCart
          }
        }
    }
</script>