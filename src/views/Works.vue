<template>
    <div class="pt-28 pb-10 min-h-screen container mx-auto flex">
        <div class="sm:mx-8 mx-5 lg:grid grid-cols-2 gap-10 m-auto">
            <div v-for="repo in repos" :key="repo.id">
                <Card :data="repo"/>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../components/Card.vue'
import axios from 'axios'

export default {
    data() {
        return {
            repos : []
        }
    },
    components : { Card },
    name : 'Works',
    created()  {
        axios.get("https://api.github.com/users/yogesh7401/repos")
        .then(e => {
            console.log(e);
            this.repos = e.data
        })
    }
}

</script>
