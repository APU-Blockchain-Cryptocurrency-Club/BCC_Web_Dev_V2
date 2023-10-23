<template>
    <div class="p-32 pt-12 pb-12">
        <div>
            <b class="text-6xl text-orange-400 leading-normal"> Our Team </b>
        </div>
        <div class="mt-10">
            <b class="w-full text-5xl text-white leading-normal">
                Heroes 🦸‍♂️ behind APUBCC
            </b>
            <p class="w-full text-4xl text-white leading-normal">
                We are a group of passionate students who are interested in blockchain and cryptocurrency.
            </p>
        </div>
        <div class="pt-12 mb-12">
            <ul class="flex">
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'all'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('all')"> All </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'leaders'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('leaders')"> Leaders </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'events'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('events')"> Events </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'marketing'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('marketing')"> Marketing</li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'community'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('community')"> Community </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'bootcamp'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('bootcamp')"> Bootcamp </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'pr'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('pr')"> PR </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'secretaries'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('secretaries')"> Secretary </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'treasurer'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('treasurer')"> Treasurer </li>
            </ul>
        </div>
        <div v-if="currentPage === 'all'">
            <div class="overflow-x-auto">
                <table class="table text-white">
                    <!-- head -->
                    <thead>
                    <tr class="text-white text-base">
                        <th>Name</th>
                        <th>Roles</th>
                        <th>Social</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- row 1 -->
                    <tr>
                        <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src="https://pbs.twimg.com/profile_images/1704535820731039746/W1Y2gXs__400x400.jpg" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div class="font-bold text-white">Hart Hagerty</div>
                            <!-- <div class="text-sm opacity-50 text-white">United States</div> -->
                            </div>
                        </div>
                        </td>
                        <td>
                        <span class="badge badge-ghost badge-md">Desktop Support Technician</span>
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" stroke="white" height="4em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                            </button>
                            <button class="btn btn-ghost btn-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" stroke="white" height="4em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            </button>
                        </th>
                    </tr>
                    </tbody>
                    <!-- foot -->
                    <tfoot>
                        
                    </tfoot>
                    
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentPage: "all",
        }
    },
    methods:{
        changePage(page){
            this.currentPage = page;
        }
    }
}

</script>