<template>
    <div class="bg-green-200 dark:bg-card w-full h-full p-5 rounded-md rounded-tl-3xl rounded-br-xl lg:my-0 my-5 shadow-xl cursor-pointer card">
      <div class="flex justify-between flex-wrap">
        <p class="text-green-800 text-lg dark:text-white md:text-2xl">{{ data.name }}</p>
        <p class="text-sm mt-auto text-green-600 dark:text-gray-400 ml-auto">{{ moment(data.pushed_at).format("lll") }}</p>
      </div>
      <div class="mt-6 h-28">
        <p :style="{textIndent : '3rem'}" class="text-md text-justify dark:text-gray-400 line-clamp text-green-600" v-if="data.id === 395348959">Github Read Me</p>
        <p :style="{textIndent : '3rem'}" class="text-md text-justify dark:text-gray-400 line-clamp text-green-600">{{ data.description }}</p>
      </div>
      <div class="text-green-800 dark:text-gray-100 flex flex-wrap justify-between">
        <p class="mt-auto">
          <span>&#9733; {{ data.stargazers_count }}</span> <span class="ml-4"> &#9874; &nbsp; {{ this.data.language }}  </span>
          <a :href="data.homepage" v-if="data.homepage !== '' && data.homepage !== null" class="ml-4 font-bold cursor-pointer text-green-600">&#128065;</a>
        </p>
        <div class="ml-auto">
          <a :href="data.html_url" target="blank"  class="underline cursor-pointer text-green-600 dark:text-gray-100">view source...</a>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment"
export default {
  name  : "Card",
  props : ["data"],
  created: function () {
    this.moment = moment;
  }
}
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
