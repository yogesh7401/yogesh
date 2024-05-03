<template>
    <div class="h-full w-full bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-5 md:p-8 rounded-tl-3xl rounded-br-xl lg:my-0 my-5 shadow-xl cursor-pointer card">
      <div class="flex justify-between flex-wrap">
        <p class="text-yellow-500 text-lg md:text-2xl">{{ data.name }}</p>
        <p class="text-sm mt-auto text-gray-500 ml-auto">{{ moment(data.pushed_at).format("MMM Do YYYY") }}</p>
      </div>
      <div class="mt-6 h-24">
        <p :style="{textIndent : '3rem'}" class="text-md md:text-base text-justify line-clamp text-gray-600" v-if="data.id === 395348959">Github Read Me</p>
        <p :style="{textIndent : '3rem'}" class="text-md md:text-base text-justify line-clamp text-gray-600">{{ data.description === null ? "Nothing to display" : data.description }}</p>
      </div>
      <div class="text-gray-800 flex flex-wrap justify-between">
        <p class="mt-auto">
          <span>&#9733; {{ data.stargazers_count }}</span> <span class="ml-4"> &#9874; {{ this.data.language }}  </span>
          <a :href="data.homepage" v-if="data.homepage !== '' && data.homepage !== null" class="ml-4 cursor-pointer text-black-600">&#128065;</a>
        </p>
        <div class="ml-auto">
          <a :href="data.html_url" target="blank"  class="underline cursor-pointer text-black-600">view source...</a>
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
