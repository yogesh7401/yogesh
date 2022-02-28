<template>
<div class="absolute top-0 left-0 right-0 z-50">
  <nav class="flex flex-wrap bg-green-50 dark:bg-black items-center justify-between py-3 mb-3">
    <div class="md:container w-screen md:px-0 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link to='/' class="border-0">
          <p class="text-4xl logo text-green-600 dark:text-white border-0">{ Yogesh }</p>
        </router-link>
        <div class="lg:hidden ml-auto mt-2 mr-4" @click="this.changeTheme">
          <svg version="1.0" v-if="this.$store.state.theme === 'dark'" class="ml-auto" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 1280.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path  fill="#FACC15" d="M4671 12787 c-13 -6 -34 -25 -45 -40 l-21 -28 -8 -1457 c-9 -1611
            -13 -1503 54 -1538 19 -9 45 -14 63 -11 17 3 181 88 364 190 l332 184 382 7
            c275 5 391 11 413 20 39 17 65 56 65 99 0 26 -158 304 -726 1278 -446 764
            -739 1257 -760 1277 -36 34 -72 41 -113 19z"/>
            <path  fill="#FACC15" d="M9603 12133 c-32 -19 -2044 -2008 -2075 -2053 -27 -39 -23 -94 10
            -130 24 -28 62 -40 397 -136 l370 -106 280 -269 c283 -272 313 -295 367 -282
            30 8 64 39 77 71 10 27 38 129 361 1362 89 338 206 785 261 994 120 455 122
            462 103 497 -33 64 -92 84 -151 52z"/>
            <path  fill="#FACC15" d="M713 9750 c-62 -38 -78 -88 -45 -147 18 -32 2007 -2044 2052 -2075
            39 -27 94 -23 130 10 27 24 41 63 137 398 l106 372 269 278 c271 282 294 312
            281 366 -8 30 -39 64 -71 77 -15 6 -189 53 -387 105 -1934 508 -2375 623
            -2411 629 -20 4 -41 0 -61 -13z"/>
            <path  fill="#FACC15" d="M6074 9589 c-1027 -99 -1976 -729 -2483 -1645 -183 -330 -311 -723
            -366 -1124 -22 -160 -31 -532 -16 -699 63 -715 360 -1378 853 -1907 534 -574
            1220 -915 2008 -999 157 -17 488 -19 643 -5 1039 99 1986 723 2496 1646 183
            330 311 723 366 1124 22 160 31 532 16 699 -64 721 -364 1386 -865 1921 -528
            562 -1215 901 -1996 985 -144 16 -515 18 -656 4z"/>
            <path  fill="#FACC15" d="M9764 8192 c-37 -23 -59 -71 -51 -111 3 -15 89 -177 190 -359 l184
            -332 7 -382 c5 -275 11 -391 20 -413 17 -39 56 -65 99 -65 26 0 304 158 1278
            726 796 464 1256 738 1278 761 29 31 33 40 28 75 -6 47 -37 84 -81 97 -18 5
            -618 12 -1476 15 -1412 7 -1446 6 -1476 -12z"/>
            <path  fill="#FACC15" d="M1309 5544 c-796 -464 -1256 -738 -1278 -761 -29 -31 -33 -40 -28
            -75 6 -47 37 -84 81 -97 18 -5 618 -12 1473 -16 1303 -6 1444 -5 1472 10 39
            20 65 68 58 109 -3 17 -88 181 -190 364 l-184 332 -7 382 c-5 275 -11 391 -20
            413 -17 39 -56 65 -99 65 -26 0 -304 -158 -1278 -726z"/>
            <path  fill="#FACC15" d="M9950 5263 c-27 -25 -40 -63 -136 -399 l-106 -370 -269 -280 c-272
            -282 -295 -312 -282 -366 8 -30 39 -64 71 -77 27 -10 129 -38 1362 -361 338
            -89 785 -206 994 -261 455 -120 462 -122 497 -103 64 33 84 92 52 151 -19 32
            -2008 2044 -2053 2075 -39 27 -94 23 -130 -9z"/>
            <path  fill="#FACC15" d="M3845 3643 c-27 -7 -61 -39 -74 -71 -10 -27 -38 -129 -361 -1362 -89
            -338 -206 -785 -261 -994 -120 -455 -122 -462 -103 -497 33 -64 92 -84 151
            -51 32 18 2044 2007 2075 2052 27 39 23 94 -9 130 -25 27 -63 40 -399 136
            l-371 106 -269 260 c-148 143 -278 266 -289 273 -25 16 -64 24 -90 18z"/>
            <path  fill="#FACC15" d="M8040 3072 c-19 -10 -174 -95 -345 -189 l-310 -171 -380 -7 c-273 -5
            -388 -10 -410 -19 -39 -17 -65 -56 -65 -99 0 -26 158 -304 726 -1278 465 -797
            738 -1256 761 -1278 31 -29 40 -33 75 -28 47 6 84 37 97 81 5 18 12 618 16
            1473 7 1591 11 1484 -55 1518 -38 20 -68 19 -110 -3z"/>
            </g>
            </svg>
            <svg version="1.0" v-else xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" class="ml-auto" viewBox="0 0 1280.000000 1074.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1074.000000) scale(0.100000,-0.100000)"
            fill="#16A34A" stroke="none">
            <path d="M7280 10683 c122 -106 456 -448 564 -578 826 -994 1265 -2198 1266
            -3465 0 -1147 -384 -2295 -1075 -3215 -295 -393 -683 -779 -1075 -1073 -800
            -599 -1791 -976 -2760 -1052 -80 -6 -167 -14 -193 -18 l-49 -7 114 -91 c1044
            -834 2358 -1254 3671 -1173 1734 106 3304 1033 4227 2494 347 549 599 1177
            724 1805 76 381 99 618 100 1040 1 363 -7 488 -49 780 -186 1284 -817 2442
            -1795 3295 -973 850 -2226 1315 -3535 1315 l-200 -1 65 -56z"/>
            </g>
            </svg>
        </div>
        <button class="text-green-600 cursor-pointer text-xl leading-none px-3 py-1 border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect :fill='this.$store.state.theme === "dark" ? "white" : "#059669"' width="100" height="10" rx="8"></rect>
            <rect :fill='this.$store.state.theme === "dark" ? "white" : "#059669"' :x="[showMenu ? '20' : '0']" y="30" width="80" height="10" rx="8"></rect>
            <rect :fill='this.$store.state.theme === "dark" ? "white" : "#059669"' y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center ml-auto mr-4">
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
          <!-- <li class="nav-item" v-on:click="this.toggleNavbarMenu">
            <router-link to="/inspirations" :class="menuClass">
              <span class="pl-2">.inspirations()</span>
            </router-link>
          </li> -->
          <li class="nav-item mt-5 ml-5 hidden lg:block" @click="this.changeTheme">
            <svg version="1.0" v-if="this.$store.state.theme === 'dark'" class="ml-auto" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path  fill="#FACC15" d="M4671 12787 c-13 -6 -34 -25 -45 -40 l-21 -28 -8 -1457 c-9 -1611
              -13 -1503 54 -1538 19 -9 45 -14 63 -11 17 3 181 88 364 190 l332 184 382 7
              c275 5 391 11 413 20 39 17 65 56 65 99 0 26 -158 304 -726 1278 -446 764
              -739 1257 -760 1277 -36 34 -72 41 -113 19z"/>
              <path  fill="#FACC15" d="M9603 12133 c-32 -19 -2044 -2008 -2075 -2053 -27 -39 -23 -94 10
              -130 24 -28 62 -40 397 -136 l370 -106 280 -269 c283 -272 313 -295 367 -282
              30 8 64 39 77 71 10 27 38 129 361 1362 89 338 206 785 261 994 120 455 122
              462 103 497 -33 64 -92 84 -151 52z"/>
              <path  fill="#FACC15" d="M713 9750 c-62 -38 -78 -88 -45 -147 18 -32 2007 -2044 2052 -2075
              39 -27 94 -23 130 10 27 24 41 63 137 398 l106 372 269 278 c271 282 294 312
              281 366 -8 30 -39 64 -71 77 -15 6 -189 53 -387 105 -1934 508 -2375 623
              -2411 629 -20 4 -41 0 -61 -13z"/>
              <path  fill="#FACC15" d="M6074 9589 c-1027 -99 -1976 -729 -2483 -1645 -183 -330 -311 -723
              -366 -1124 -22 -160 -31 -532 -16 -699 63 -715 360 -1378 853 -1907 534 -574
              1220 -915 2008 -999 157 -17 488 -19 643 -5 1039 99 1986 723 2496 1646 183
              330 311 723 366 1124 22 160 31 532 16 699 -64 721 -364 1386 -865 1921 -528
              562 -1215 901 -1996 985 -144 16 -515 18 -656 4z"/>
              <path  fill="#FACC15" d="M9764 8192 c-37 -23 -59 -71 -51 -111 3 -15 89 -177 190 -359 l184
              -332 7 -382 c5 -275 11 -391 20 -413 17 -39 56 -65 99 -65 26 0 304 158 1278
              726 796 464 1256 738 1278 761 29 31 33 40 28 75 -6 47 -37 84 -81 97 -18 5
              -618 12 -1476 15 -1412 7 -1446 6 -1476 -12z"/>
              <path  fill="#FACC15" d="M1309 5544 c-796 -464 -1256 -738 -1278 -761 -29 -31 -33 -40 -28
              -75 6 -47 37 -84 81 -97 18 -5 618 -12 1473 -16 1303 -6 1444 -5 1472 10 39
              20 65 68 58 109 -3 17 -88 181 -190 364 l-184 332 -7 382 c-5 275 -11 391 -20
              413 -17 39 -56 65 -99 65 -26 0 -304 -158 -1278 -726z"/>
              <path  fill="#FACC15" d="M9950 5263 c-27 -25 -40 -63 -136 -399 l-106 -370 -269 -280 c-272
              -282 -295 -312 -282 -366 8 -30 39 -64 71 -77 27 -10 129 -38 1362 -361 338
              -89 785 -206 994 -261 455 -120 462 -122 497 -103 64 33 84 92 52 151 -19 32
              -2008 2044 -2053 2075 -39 27 -94 23 -130 -9z"/>
              <path  fill="#FACC15" d="M3845 3643 c-27 -7 -61 -39 -74 -71 -10 -27 -38 -129 -361 -1362 -89
              -338 -206 -785 -261 -994 -120 -455 -122 -462 -103 -497 33 -64 92 -84 151
              -51 32 18 2044 2007 2075 2052 27 39 23 94 -9 130 -25 27 -63 40 -399 136
              l-371 106 -269 260 c-148 143 -278 266 -289 273 -25 16 -64 24 -90 18z"/>
              <path  fill="#FACC15" d="M8040 3072 c-19 -10 -174 -95 -345 -189 l-310 -171 -380 -7 c-273 -5
              -388 -10 -410 -19 -39 -17 -65 -56 -65 -99 0 -26 158 -304 726 -1278 465 -797
              738 -1256 761 -1278 31 -29 40 -33 75 -28 47 6 84 37 97 81 5 18 12 618 16
              1473 7 1591 11 1484 -55 1518 -38 20 -68 19 -110 -3z"/>
              </g>
              </svg>
              <svg version="1.0" v-else xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" class="ml-auto" viewBox="0 0 1280.000000 1074.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,1074.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M7280 10683 c122 -106 456 -448 564 -578 826 -994 1265 -2198 1266
              -3465 0 -1147 -384 -2295 -1075 -3215 -295 -393 -683 -779 -1075 -1073 -800
              -599 -1791 -976 -2760 -1052 -80 -6 -167 -14 -193 -18 l-49 -7 114 -91 c1044
              -834 2358 -1254 3671 -1173 1734 106 3304 1033 4227 2494 347 549 599 1177
              724 1805 76 381 99 618 100 1040 1 363 -7 488 -49 780 -186 1284 -817 2442
              -1795 3295 -973 850 -2226 1315 -3535 1315 l-200 -1 65 -56z"/>
              </g>
              </svg>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import Yogesh from '../assets/yogesh.png'
import { useRoute } from 'vue-router'
export default {
  name: "Navbar",
  data() {
    return {
      Yogesh : Yogesh,
      showMenu: false,
      menuClass : "mx-3 py-2 flex items-center text-xs text-lg font-bold leading-snug dark:text-white text-green-600 float-right mt-3 hover:opacity-75",
      route : useRoute(),
      borderColor : "",
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
  }
}
</style>