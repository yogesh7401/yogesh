<template>
<div class="absolute top-0 left-0 right-0 z-50">
  <nav class="flex flex-wrap items-center justify-between py-3 mb-3">
    <div class="md:container w-screen md:px-0 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link to='/' class="border-0">
          <p class="text-4xl logo text-yellow-500 border-0">{ Yogesh }</p>
        </router-link>
        <button class="text-black-600 cursor-pointer text-xl leading-none px-3 py-1 border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect fill='#000' width="100" height="10" rx="8"></rect>
            <rect fill='#000' :x="[showMenu ? '20' : '0']" y="30" width="80" height="10" rx="8"></rect>
            <rect fill='#000' y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </button>
      </div>
      <div :class="{'hidden bg-none text-gray-500 ': !showMenu, 'flex text-black bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg rounded-tr-none pb-4': showMenu}" class="lg:flex lg:flex-grow items-center ml-auto mr-4">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          
          <li class="nav-item">
            <router-link to="/" v-on:click="this.toggleNavbarMenu" :class="menuClass">
              <span class="pl-2">.me()</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/works" v-on:click="this.toggleNavbarMenu" :class="menuClass">
              <span class="pl-2">.works()</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" v-on:click="this.toggleNavbarMenu" :class="menuClass">
              <span class="pl-2">.skills()</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/timeline" v-on:click="this.toggleNavbarMenu" :class="menuClass">
              <span class="pl-2">.timeline()</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
      menuClass : "mx-3 py-2 flex items-center text-xs text-lg font-bold leading-snug float-right mt-3 hover:opacity-75",
      route : useRoute(),
      borderColor : "black",
      color : localStorage.getItem("theme")
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    toggleNavbarMenu: function(){
      this.showMenu = false;
    },
    changeTheme: function(){
      if(this.color === "dark") {
        localStorage.setItem("theme","light")
        this.$store.commit('toggleTheme')
      }
      else {
        localStorage.setItem("theme","dark")
        this.$store.commit('toggleTheme')
      }
    }
  }
}
</script>

<style scoped>
.logo {
  font-family: 'Mansalva', cursive;
}
@media only screen and (min-width: 1024px) {
  .router-link-active {
    border-color : v-bind(borderColor);
    padding-bottom : 0.25rem;
    border-bottom-width: 2px;
    border-radius: 2px;
    color: black;
  }
}
</style>