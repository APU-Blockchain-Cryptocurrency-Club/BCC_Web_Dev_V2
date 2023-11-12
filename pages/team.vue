<template>
  <div class="px-8 md:pl-20 xl:p-32 xl:pt-12 xl:pb-12">
    <div>
      <b class="text-4xl xl:text-6xl text-orange-400 leading-normal">
        Our Team
      </b>
    </div>
    <div class="xl:mt-10">
      <b class="w-full text-3xl xl:text-5xl text-white leading-normal">
        Heroes 🦸‍♂️ behind APUBCC
      </b>
      <p class="w-full text-xl xl:text-3xl text-white leading-normal">
        We are a group of passionate students who are interested in blockchain
        and cryptocurrency.
      </p>
    </div>
    <details className="dropdown relative">
      <summary tabindex="0" class="btn btn-ghost text-lg text-orange-400">
        {{ currentPage }}
      </summary>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 absolute z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
      >
        <li
          v-for="dept in departments"
          :key="dept"
          class="rounded-2xl px-6 py-2 mx-2 text-black hover:bg-orange-400 cursor-pointer"
          :class="{ 'bg-orange-400 text-white': currentPage === dept }"
          @click="changePage(dept)"
        >
          {{ dept }}
        </li>
      </ul>
    </details>

    <!-- TODO: add loading spinner here cuz data fetching takes too long -->
    <div>
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
            <tr v-for="(teamMember, index) in filteredCommittees" :key="index">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="teamMember.imageUrl" alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">
                      {{ teamMember.title }}
                    </div>
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
                <a
                  :href="teamMember.linkedInUrl"
                  target="_blank"
                  class="btn btn-ghost btn-xs"
                >
                  LinkedIn
                </a>
                <a
                  :href="teamMember.twitterUrl"
                  target="_blank"
                  class="btn btn-ghost btn-xs"
                >
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
  data() {
    return {
      currentPage: "all",
      departments: [
        "all",
        "lead",
        "event",
        "marketing",
        "community",
        "bootcamp",
        "external relations",
        "secretary",
        "treasurer",
        "production",
      ],
      committees: [],
      filteredCommittees: [],
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      if (page === "all") {
        this.filteredCommittees = this.committees;
        return;
      }
      // instead of N different lists for N committees, put the full list of committees to 1 var.
      // then filter the committees based on currentPage.
      this.filteredCommittees = this.committees.filter((committee) =>
        committee.department
          .map((c) => c.toLowerCase())
          .includes(page.toLowerCase()),
      );
    },
  },
  async created() {
    try {
      const response = await fetch("/api/fetchTeam"); // Adjust the API endpoint
      const data = await response.json();
      this.committees = data.results;
      this.filteredCommittees = data.results;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
};
</script>
