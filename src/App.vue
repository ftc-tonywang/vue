<template>
  <div id="app">
    <!-- header組件使用,引用Header.vue, 然後傳值到HeaderView並顯示出來 -->

    <!-- 1.直接傳值 -->
    <!-- <HeaderView tonyMsg="父組件傳遞值到子組件"></HeaderView> -->
    <!-- 2.使用綁定 -->
    <HeaderView :tonyMsg="title"></HeaderView>

    <!-- 圖檔 -->
    <img src="./assets/logo.png">
    <!-- 對應到下方註冊的HelloWorld -->
    <!-- <HelloWorld/> -->
    
    <!-- 組件使用,引用List.vue, 然後綁定一個自定義事件myMsg,該事件定義在List.vue addData的方法中,用意是將子組件的值傳回父組件-->
    <ListView @myMsg="getData"></ListView>
  </div>
</template>

<script>
//導入組件
//import HelloWorld from './components/HelloWorld'

//import名稱(ListView)可以自訂義,但註冊組件與上方的組件使用也要用同一名字
import ListView from './components/List'
import HeaderView from './components/Header'

//類似於impost
export default {
  name: 'App',
  components: {
    //HelloWorld //註冊組件
    ListView,
    HeaderView,
  },
  data() {
    return {
      title: "父組件傳遞值到子組件(使用綁定)"
    }
  },
  methods: {
    getData(msg){
      console.log("取得List子組件的傳遞值:" + msg);
      //改變title的值(再將值傳遞到Header子組件)
      this.title = msg;
      
      
    }
  },
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
