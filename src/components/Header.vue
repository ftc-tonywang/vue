<template>
  <div class="headerview">
    <h1>{{ title }}</h1>
    <h2>{{ tonyMsg }}</h2>
  </div>
</template>

<script>
//export default 寫法等同於一般html裡的new vue()
export default {
  //目前看不出來name的用意何在,好像隨便取都沒關係,就算刪掉也沒關係
  name: 'Header2',
  //組件中,data數據選項必需是函數, data () 也可以寫成 data: function(),但推薦前者
  data () {
    return {
      title: '我是標題部份'
    }
  },
  //通訊使用,父組件(App.vue)傳資料給子組件(Header.vue)的實現,使用props
  props: {
    tonyMsg: {  //像是一個自訂義的屬性(取什麼都可以,但其它要能對應到,注意大小寫有差)
      type: String,
      default: "我是誰?"
    }
  }
}
</script>

<style>

</style>