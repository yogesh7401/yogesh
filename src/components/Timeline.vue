<template>
    <div class="pb-5 m-auto h-full">
        <p class="text-center p-2 bg-black-700 font-bold text-lg w-40 rounded-lg mx-auto">Born on 2000</p>
        <div v-for="e,i in Timeline" :key="e.date">
            <div class="grid grid-cols-2">
                <div v-if="(i+1) % 2 === 1" class="ml-auto pr-6 flex relative h-28 pt-3 border-r-2 border-black-100" :class=" i === 0 ? `pl-6 pt-8` : `pl-6 pt-3`">
                    <p class="absolute bg-yellow-500 text-white -right-4 w-8 text-center leading-7 text-sm border-2 border-black-800 m-auto h-8 bg-black-100 text-black-800 rounded-full">
                        {{ i+1 }}
                    </p>
                </div>
                <div v-if="(i+1) % 2 === 1" :class=" i === 0 ? `pl-6 pt-8` : `pl-6 pt-3`">
                    <div class="md:px-5 px-2 rounded-xl w-auto">
                        <p class="text-black-900 text-md">{{ e.date }}</p>
                        <p class="text-gray-500 text-sm">{{ e.desc }}</p>
                    </div>
                </div>
                <div v-if="(i+1) % 2 === 0" class="border-r-2 border-black-100 ml-auto relative pr-6 flex h-28 pt-3">
                    <div class="md:px-5 px-2 rounded-xl w-full">
                        <p class="text-black-900 text-md text-right">{{ e.date }}</p>
                        <p class="text-gray-500 text-sm text-right">{{ e.desc }}</p>
                    </div>
                    <p class="absolute bg-yellow-500 text-white -right-4 w-8 text-center leading-7 text-sm border-2 border-black-800 m-auto h-8 bg-black-100 text-black-800 rounded-full">
                        {{ i+1 }}
                    </p>
                </div>
                <div v-if="(i+1)%2 === 0" class="pt-3">

                </div>
            </div>
        </div>
        <p class="text-center bg-black-700 p-2 text-black-100 w-32 rounded-lg mx-auto">Learning <span class="animate-pulse">. . .</span></p>
    </div>
</template>


<script>
export default {
    name : 'Timeline',
    data() {
        return {
            Timeline : [
                {
                    date : 'May 2016',
                    desc : 'Completed SSLC with 90%'
                },
                {
                    date : 'May 2018',
                    desc : 'Completed Higher Secondary with 80%'
                },
                {
                    date : 'July 2018',
                    desc : 'College at DMI College of Engineering'
                },
                {
                    date : 'March 2021',
                    desc : 'Intern at KS Smart Solutions'
                },
                {
                    date : 'August 2022',
                    desc : 'Assistant System Engineer at TCS'
                }
            ] 
        }
    }
}
</script>