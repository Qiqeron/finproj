<template>
  
  <div class="bg2">
  </div>
  <header>
    <div class="contain">
      <h2 class="todoChat">TodoChat</h2>
      <NavBar></NavBar>
    </div> 
  </header>
  <router-view class="cont"></router-view>  
</template>

<script>
import NavBar from "./components/Navigation.vue"

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  body{
    margin: 0;
  }
  .bg2, .bg2::after, .bg2::before{
    margin: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(90deg, #f598a8, #f6edb2);
    background-size: cover;
    background-repeat: repeat-y;
  }
  header{
    width: 100%;
    height: 80px;
    background-color: rgb(53, 56, 56);
  }
  .contain{
    height: 100%;
    align-items: center;
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  h2{
    font-size: 30px;
    color: white;
  }
  .cont{
    margin: 0;
  }
</style>
