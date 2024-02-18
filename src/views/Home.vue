<template>
    <div class="container mx-auto grid min-h-screen md:grid-cols-2">    
        <div class="mt-auto mx-auto hidden md:block">
            <img class="object-contain" :src="Yogesh" alt="Developing">
        </div>
        <div class="mx-5 md:mx-10 md:my-auto mt-32">
            <p class="text-gray-500 mb-2">Hello!</p>
            <div class="text-2xl md:text-4xl md:text-left">
                <p> I'm <span class="font-bold text-yellow-500">Yogeshwaran</span> </p>
                <p class="md:mt-2">an fullstack developer</p>
            </div>
            <p class="mt-5 inset-1 text-gray-600 text-md md:text-lg lg:text-xl font-serif md:text-justify">
                Intrested in working on Frontend, Backend, API's, Databases and currently learning new things,
                I enjoy playing cricket🏏 and watching anime is my recent hobby.
            </p>
            <div class="md:mx-0 mx-auto">
                <Social />
            </div>
        </div>    
        <div class="mt-20 mx-auto md:hidden">
            <img class="object-contain" :src="Yogesh" alt="Developing">
        </div> 
    </div>
</template>

<script>
// import Developing from '../assets/Developing.svg'
import Yogesh from '../assets/yogesh_landing.png'
import Social from '../components/Social.vue'

export default {
  components: { Social },
    name : 'Home',
    data() {
        return {
            Yogesh : Yogesh,
            Social     : Social
        }
    }
}
</script>
<style scoped>
</style>