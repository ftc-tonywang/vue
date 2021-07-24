// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//導入組件(位置在node_modules/vue)
import Vue from 'vue'
//導入組件時,後綴可以忽略不寫(位置在src/App.vue)
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
//創建對象
new Vue({
  el: '#app', //對應index.html的div id
  components: { App },  //註冊(組件必需是先註冊後使用,就是App.vue,組件包含template,script,style)
  template: '<App/>'
})
