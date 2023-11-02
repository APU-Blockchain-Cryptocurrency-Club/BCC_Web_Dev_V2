<template>
  <div class="px-8 sm:p-3 sm:pt-12 sm:pb-12 sm:px-32">
    <div class="items-center text-justify">
      <b class="text-3xl sm:text-6xl text-orange-400 leading-normal"
        >Partners</b
      >
    </div>
    <div class="sm:mt-20">
      <b class="w-full text-2xl sm:text-5xl text-white leading-normal"
        >More partnerships. More opportunities.</b
      >
      <p class="w-full text-2xl sm:text-4xl text-white leading-normal">
        We collaborate with different company to expand the community.
      </p>
    </div>

    <!-- partner list title -->
    <div class="items-center flex text-left sm:text-center pt-16">
      <b class="w-full text-3xl sm:mt-20 sm:text-5xl text-white leading-normal"
        >Our Partners</b
      >
    </div>

    <!-- Carousel -->
    <Suspense>
      <div
        class="carousel-container flex justify-center items-center space-x-5 pt-16"
      >
        <button @click="scrollCarousel(-1)" class="btn btn-circle">&lt;</button>
        <div
          class="carousel carousel-center max-w-7xl p-4 space-x-4 bg-neutral rounded-box mb-16 relative up-coming-events"
          v-for="data in results"
          :key="data.id"
        >
          <div class="carousel-item h-fit max-h-96" v-for="event in data">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="flex items-center w-full h-96">
                <img
                  :src="event.imageUrl"
                  :alt="event.title"
                  class="rounded-box mx-auto h-full"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {{ event.title }}
                </h2>
                <p>{{ event.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <button @click="scrollCarousel(1)" class="btn btn-circle">&gt;</button>
      </div>
      <template #fallback>
        <span class="loading loading-spinner loading-lg"> </span>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { data } = await useFetch("/api/fetchPartners");
const results = ref(data);

const scrollCarousel = (direction) => {
  const carousel = document.querySelector(".up-coming-events");
  const scrollAmount = 300; // Adjust as needed
  carousel.scrollLeft += direction * scrollAmount;
};
</script>
