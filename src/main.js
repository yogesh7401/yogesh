import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createStore } from 'vuex'
import router from './router/index.js'

const store = createStore({
    state () {
      return {
        theme: localStorage.getItem('theme')
      }
    },
    mutations: {
      toggleTheme (state) {
          state.theme === "dark" ? state.theme = "light" : state.theme = "dark" 
      }
    }
  })

createApp(App).use(router).use(store).mount('#app')
