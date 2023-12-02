<template>
    <div
        class="flex justify-center items-center space-x-5 w-[20.5rem] sm:w-[25.5rem] md:w-[42.5rem] lg:w-[60rem]">
        <button @click="scrollCarousel(-1)" class="btn btn-circle btn-xs sm:btn-md">&lt;</button>

        <div
            class="h-96 md:h-full max-md:w-fit carousel rounded-box past-events"
            v-for="data in results"
            :key="data.id">
            <div
                class="carousel-item p-4 w-52 sm:w-60 md:h-96 lg:h-80 bg-info-content"
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
        <button @click="scrollCarousel(1)" class="btn btn-circle btn-xs sm:btn-md">&gt;</button>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { ref } from "vue";
    const { data } = await useFetch("/api/fetchPastEvents");
    const results = ref(data);

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector(".past-events");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
    const showNavButtons = computed(() => {
        return results.value.results.length && results.value.results.length > 1;
    });

    const getTitleClass = (title) => {
        return title.length > 30 ? "text-xs" : "text-md";
    };
</script>
