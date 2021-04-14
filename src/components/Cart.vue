<template>
    <div class="container"> 
        <h1 class="my-2">Cart <span class="badge badge-secondary">{{cartSize}} products</span></h1>
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert"> 
            Cart is empty! Please add some products. 
        </div>
        <table v-else class="table table-striped mb-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
              <th scope="row">{{index + 1}}</th>
              <td>{{product.name}}</td>
              <td>$ {{product.price}}</td>
              <td>
                  <button
                      @click="removeFromCart(product.id)"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button 
                      @click="addToCart(product.id)"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </td>
              <td><button 
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-small">
                  Delete
              </button></td>
              <td>$ {{product.quantity* product.price}}</td>
            </tr>
            
            <tr class="table-footer"> 
                <td colspan="5" class="total">Total:</td> 
                <td>$ {{cartTotalAmount}}</td> 
            </tr>
          </tbody>
        </table>
    </div>    
</template>
 
<script>
    import {mapState, mapGetters,useStore} from 'vuex'

    export default{
        computed: {

            ...mapState({
          cart :state=>state.cart
            }),
...mapGetters({
  cartSize:"cartSize",

}),
            ...mapGetters([

                "cartTotalAmount"
            ])
        },

      setup(){
          const store=useStore()
      function  addToCart(id) {
          store.dispatch("addToCart", id);
        }
      function  removeFromCart(id) {
         store.dispatch("removeFromCart", id);
        }
      function  deleteFromCart(id) {
          store.dispatch("deleteFromCart", id);
        }
        return{
        addToCart,
          removeFromCart,
          deleteFromCart
        }
      }
    } 
</script> 

<style scoped src="../style/style.css">
</style>