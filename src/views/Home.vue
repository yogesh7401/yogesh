<template>
    <div class="container mx-auto grid min-h-screen md:grid-cols-2">
        <div class="mx-5 md:mx-10 md:my-auto mt-28">
            <p class="text-2xl md:text-4xl font-bold text-blue-600 dark:text-white text-center md:text-left">
                Yogeshwaran
            </p>
            <p class="mt-5 p text-blue-500 text-md md:text-lg lg:text-xl dark:text-gray-400 font-serif text-center md:text-justify">
                A Fullstack web developer 💻
                Intrested in working on Frontend, Backend, API's, Databases and currently learning new things,
                I enjoy playing cricket🏏 and watching anime is my recent hobby.
            </p>
            <div class="md:mx-0 mx-auto w-52">
                <Social />
            </div>
        </div>
        <div class="mx-5 md:mx-10 my-auto">
            <img class="object-contain" :src="Developing" alt="Developing">
        </div>
    </div>
</template>

<script>
// import Developing from '../assets/Developing.svg'
import Luffy from '../assets/luffy punch.gif'
import Social from '../components/Social.vue'

export default {
  components: { Social },
    name : 'Home',
    data() {
        return {
            Developing : Luffy,
            Social     : Social
        }
    }
}
</script>
<style scoped>
.p {
    text-indent: 10%;
}
</style>