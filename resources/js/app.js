import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './bootstrap'

require('./bootstrap');
window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});

const createApp = async () => {
  await store.dispatch('auth/currentUser')

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  store,
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App />' // ルートコンポーネントを描画する
})
}

createApp()
