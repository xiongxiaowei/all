<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="btn btn-info" ng-click="fetchGoods()">点击获取</button>
    <button class="btn btn-info" @click="fetchGoods()">点击获取</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
   data () {
    return {
      goods: {}
      
    }
  },
   mounted() {
    this.fetchGoods()
  },
  methods: {
  fetchGoods() {
    // console.log(this.$http.get)
    this.$http.get('/api/goods').then(function(res) {
      console.log(res.data)
      this.goods = res.data
    }.bind(this)).catch(function(error) {
      console.log('home', error)
    })
  }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
