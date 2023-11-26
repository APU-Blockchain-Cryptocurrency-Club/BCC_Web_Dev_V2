<template>
    <div :class="dynamicClass" class="flex items-center space-x-5 md:w-[42.5rem] lg:w-[60rem]">
        <button v-show="showNavButtons" @click="scrollCarousel(-1)" class="btn btn-circle">
            &lt;
        </button>

        <div
            class="h-96 md:h-full max-md:w-fit carousel max-md:carousel-vertical rounded-box up-coming-events"
            v-if="noEvent"
            v-for="data in results"
            :key="data.id">
            <div
                class="carousel-item p-4 w-40 sm:w-60 md:h-96 lg:h-80 bg-info-content"
                v-for="events in data">
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img :src="events.imageUrl" :alt="events.title" class="h-fit w-fit" />
                    </figure>
                    <div class="card-body">
                        <p class="card-title">
                            {{ events.title }}
                        </p>
                        <p>
                            {{ events.date }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <p v-else class="text-xl text-white text-left">No Upcoming Event</p>

        <button v-show="showNavButtons" @click="scrollCarousel(1)" class="btn btn-circle">
            &gt;
        </button>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    const { data } = await useFetch("/api/fetchUpComingEvents");
    const results = ref(data);

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector(".up-coming-events");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
    const showNavButtons = computed(() => {
        return results.value.results.length && results.value.results.length > 3;
    });
    const noEvent = computed(() => {
        return results.value.results.length && results.value.results.length !== 0;
    });

    const dynamicClass = computed(() => {
        return results.value?.results?.length > 3 ? "justify-center" : "justify-start pl-10";
    });
</script>
