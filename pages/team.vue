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
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'all'}" class=" rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('all')"> All </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'leaders'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('leaders')"> Leaders </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'events'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('events')"> Events </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'marketing'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('marketing')"> Marketing</li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'community'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('community')"> Community </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'bootcamp'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('bootcamp')"> Bootcamp </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'pr'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('pr')"> PR </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'secretaries'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('secretaries')"> Secretary </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'treasurer'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('treasurer')"> Treasurer </li>
                <li :class="{'rounded-2xl bg-orange-400 px-6 py-2 mx-2 text-white': currentPage === 'production'}" class="rounded-2xl px-6 py-2 mx-2 text-white hover:bg-orange-400" @click="changePage('production')"> Production </li>
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
                        <tr v-for="(teamMember, index) in results" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'leaders'">
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
                        <tr v-for="(teamMember, index) in lead" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'events'">
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
                        <tr v-for="(teamMember, index) in event" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'marketing'">
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
                        <tr v-for="(teamMember, index) in marketing" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'community'">
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
                        <tr v-for="(teamMember, index) in community" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'bootcamp'">
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
                        <tr v-for="(teamMember, index) in bootcamp" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'pr'">
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
                        <tr v-for="(teamMember, index) in pr" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'secretaries'">
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
                        <tr v-for="(teamMember, index) in secretary" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'treasurer'">
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
                        <tr v-for="(teamMember, index) in treasurer" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
                </table>
            </div>
        </div>
        <div v-if="currentPage === 'production'">
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
                        <tr v-for="(teamMember, index) in production" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img :src="teamMember.imageUrl" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-white">{{ teamMember.title }}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-ghost badge-md">{{ dept }}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <!-- Display LinkedIn and Twitter links -->
                            <a :href="teamMember.linkedInUrl" target="_blank" class="btn btn-ghost btn-xs">
                            LinkedIn
                            </a>
                            <a :href="teamMember.twitterUrl" target="_blank" class="btn btn-ghost btn-xs">
                            Twitter
                            </a>
                        </td>
                        </tr>
                    </tbody>                  
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
            results: [],
            lead: [],
            event: [],
            marketing: [],
            community: [],
            bootcamp: [],
            pr: [],
            secretaries: [],
            treasurer: [],
            production: [],
        }
    },
    methods:{
        changePage(page){
            this.currentPage = page;
        }
    },
    async created() {
        try {
            const response = await fetch("/api/fetchTeam"); // Adjust the API endpoint
            const data = await response.json();
            this.results = data.results; // Update the results with the data received from the API
            this.lead = data.lead;
            this.event = data.events;
            this.marketing = data.marketing;
            this.community = data.community;
            this.bootcamp = data.bootcamp;
            this.pr = data.pr;
            this.secretary = data.secretary;
            this.treasurer = data.treasurer;
            this.production = data.production;

            
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    },
}

</script>