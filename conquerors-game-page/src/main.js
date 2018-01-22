import Vue from 'vue'
import App from './App.vue'
import ResourcesDropDown from './components/resources/ResourcesDropDown.vue'

Vue.component('cnq-resources-drop-down', ResourcesDropDown);

new Vue({
  el: '#app',
  render: h => h(App)
})
