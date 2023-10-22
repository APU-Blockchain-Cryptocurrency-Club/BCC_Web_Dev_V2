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
        <div class="pt-12">
            <ul class="flex">
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'all'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('all')"> All </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'leaders'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('leaders')"> Leaders </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'events'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('events')"> Events </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'marketing'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('marketing')"> Marketing</li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'community'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('community')"> Community </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'bootcamp'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('bootcamp')"> Bootcamp </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'pr'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('pr')"> PR </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'secretaries'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('secretaries')"> Secretaries </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'ad-hoc'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('ad-hoc')"> Ad-Hoc </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'alumni'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('alumni')"> Alumni/Contributors</li>
            </ul>
        </div>
        <div v-if="currentPage === 'all'">
            <div class="overflow-x-auto">
                <table class="table text-white">
                    <!-- head -->
                    <thead>
                    <tr class="text-white">
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
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div class="font-bold text-white">Hart Hagerty</div>
                            <div class="text-sm opacity-50 text-white">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
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