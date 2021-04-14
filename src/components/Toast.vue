<template>
    <div class="alert" v-show="isActive">
        {{text}}
    </div>
</template>

<script>
    export default{
        props:["show", "text"],
        data() {
            return {
                isActive: !!this.show,
                activeTimeout: {}
            };
        },
        mounted() {
            this.setTimeout();
        },
        watch: {
            show(newVal) {
                this.isActive = !!newVal;
            },
            isActive(newVal) {
                if(this.show !== !!newVal){
                    this.$emit("hide-toast", newVal);
                }
                this.setTimeout();
            }
        },
        methods: {
            setTimeout() {
                clearTimeout(this.activeTimeout);
                if(this.isActive) {
                    this.activeTimeout = setTimeout(() => {
                        this.isActive = false
                    }, 2000)
              }
            }
         }
    }
</script>


<style scoped src="../style/style.css">

</style>
