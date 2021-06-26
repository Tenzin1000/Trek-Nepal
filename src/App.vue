<template>
<div>
    <app-nav></app-nav>
     <router-view></router-view>
    <app-footer></app-footer>
</div>

</template>


<script>
import navbar from "./components/navbar.vue"
import footer from "./components/footer"


export default {
  components:{
    'app-nav':navbar,
    'app-footer':footer,
  },
  data(){
    return{

    }
  }
}
</script>
<style>

</style>