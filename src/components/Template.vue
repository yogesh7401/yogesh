<template>
    <div class="background">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name : 'Template',
    components : {
        Navbar
    }
}
</script>
