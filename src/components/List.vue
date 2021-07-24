<template>
  <div class="view">
    <h1 class="title">{{ title }}</h1>

    <!-- 按下enter鍵時觸發的動作,呼叫addData function, v-model為雙向綁定 -->
    <input v-model="newStr" @keyup.enter="addData" />
    <ul>
      <!-- 若item.isFinished為true,就綁定finish這個class,若為false,就不綁定finish這個finish -->
      <li v-for="item in items" v-bind:class="{finish:item.isFinished}" @click="toggleFinish(item);">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
//export default 寫法等同於一般html裡的new vue()
export default {
  name: 'List',
  //組件中,data數據選項必需是函數, data () 也可以寫成 data: function(),但推薦前者
  data () {
    return {
      title: 'TodoList',
      items: [
        {
          text: "今天晚上18:00跑步",
          isFinished: false
        },
        {
          text: "今天早餐",
          isFinished: true
        }
      ],
      newStr: ''
    }
  },
  methods: {
    toggleFinish: function(item){
      //點一次結果就會是之前的相反(有線就會變成無中線,無線就會變成有中線)
      item.isFinished = !item.isFinished;
    },
    addData: function(){
      //按下enter時新增一組 li 資料
      this.items.push(
        {
          text: this.newStr,
          isFinished: false
        }
      ),
      //通訊使用,子組件(Header.vue)傳資料給父組件(App.vue)的實現,使用自定義事件
      //將輸入框中輸入傳遞給父組件App
      //觸發myMsg事件,並且傳遞參數,使用$emit可使用自定義事件(是事件不是方法喔)
      this.$emit('myMsg', this.newStr);

      //做好後清空input data
      this.newStr = '';
    }
  },
}
</script>

<style>
.view{
  width: 400px;
  border: 1px solid gray;
  margin: 20px auto;
}

.view .title{
  border-bottom: 1px solid gray;
}

.view ul li{
  margin: 10px 0;
  list-style: none;

}

.view .finish{
  color: gray;
  text-decoration: line-through;
}
</style>