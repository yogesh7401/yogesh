<template>
    <div class="pt-28 pb-10 min-h-screen container w-full mx-auto">
        <div class="sm:mx-8 mx-5 mb-5 flex justify-end ">
            <select :onchange="e => filterRepo(e.target.value)" class="p-1 px-3 ml-auto w-36 rounded-md outline-none select">
                <option value="All">All</option>
                <option :value="language" v-show="language!==null" :key="language" v-for="language in languages">{{ language }}</option>
            </select>
        </div>
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
            repos : [],
            data: [],
            lang: 'All',
            languages: []
        }
    },
    components : { Card },
    name : 'Works',
    methods: {
        filterRepo: function(value) {
            value !== 'All' ?
                this.repos = this.data.filter(e => {
                    return e.language === value
                })
                :
                this.repos = this.data
        }  
    },
    created()  {
        axios.get("https://api.github.com/users/yogesh7401/repos")
        .then(e => {
            this.repos = e.data
            this.data = e.data
            this.languages = [...new Map(e.data.map(item => [item['language'], item])).values()]
            this.languages = this.languages.map(function (obj) {
                return obj.language;
            });
        })
    }
}

</script>
