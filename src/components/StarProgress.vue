<template>
    <div class="grid grid-cols-2 sm:mx-14 my-8 mx-2">
        <p class="text-xl py-auto font-bold text-blue-600 dark:text-white">{{ name }}</p>
        <div class="flex justify-between">
            <div v-for="i in 5" :key="i">
                <svg id="Layer_1" class="w-5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>star-glyph</title><polygon points="256 12.53 335.11 172.82 512 198.53 384 323.29 414.21 499.47 256 416.29 97.78 499.47 128 323.29 0 198.53 176.89 172.82 256 12.53" :fill="stars >= i ? '#FACC15' : '#FEF08A'"/></svg>
                <!-- <svg id="Layer_1" class="w-5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>star-glyph</title><polygon points="256 12.53 335.11 172.82 512 198.53 384 323.29 414.21 499.47 256 416.29 97.78 499.47 128 323.29 0 198.53 176.89 172.82 256 12.53" :fill="stars >= i ? '#166534' : '#86EFAC'"/></svg> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name  : "StarProgress",
  props : ['name','stars']
}
</script>
