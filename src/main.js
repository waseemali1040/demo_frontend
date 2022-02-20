import App from './App.vue'
import router from './router'

import store from "@/services/store";
import * as Vue from 'vue'
import ApiService from "@/services/api.service";


const app = Vue.createApp(App);
app.config.globalProperties.apiService = ApiService.init(app);
app.use(store)
app.use(router)

app.mount('#app')
