<template>
    <div class="container mx-auto grid min-h-screen lg:grid-cols-2">
        <div class="m-auto hidden lg:block">
            <img class="object-contain w-80" :src="Yogesh" alt="Yogesh alt">
        </div>
        <div class="mx-5 md:mx-10 mt-28 md:mt-auto my-auto">
            <div v-for="skill in Skills" :key="skill.name">
                <StarProgress :name="skill.name" :stars="skill.stars"/>
            </div>
        </div>
    </div>
</template>

<script>
import StarProgress from "../components/StarProgress.vue"
import Yogesh from "../assets/yogesh_skills.jpg"
export default {
    components: { StarProgress },
    name : 'Skill',
    data() {
        return {
            StartProgress : StarProgress,
            Yogesh: Yogesh,
            Skills : [
                {
                    name : "HTML/CSS",
                    stars: 5
                },
                {
                    name : "Javascript",
                    stars: 4
                },
                {
                    name : "C/C++",
                    stars: 4
                },
                {
                    name : "Database",
                    stars: 4
                },
                {
                    name : "PHP",
                    stars: 3
                },
                {
                    name : "Java",
                    stars: 3
                }
            ]
        }
    }
}
</script>
<style scoped>
.p {
    text-indent: 10%;
}
</style>