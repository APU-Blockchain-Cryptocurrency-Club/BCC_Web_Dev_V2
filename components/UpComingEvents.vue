<template>
    <div
        class="flex justify-center items-center space-x-5 md:w-[41rem] lg:w-[60rem] md:px-10 lg:px-0">
        <button
            v-if="showNavButtons"
            @click="scrollCarousel(-1)"
            class="btn btn-circle hidden lg:block">
            &lt;
        </button>

        <div v-if="noEvent">
            <div
                class="h-96 md:h-full max-md:w-full carousel max-md:carousel-vertical rounded-box up-coming-events"
                v-for="data in results"
                :key="data.id">
                <div
                    class="carousel-item p-4 w-40 sm:w-60 md:h-96 lg:h-80 bg-info-content"
                    v-for="event in data">
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img :src="event.imageUrl" :alt="event.title" class="h-fit w-fit" />
                        </figure>
                        <div class="card-body">
                            <p :class="getTitleClass(event.title)" class="card-title">
                                {{ event.title }}
                            </p>
                            <p>
                                {{ event.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p v-else class="text-xl text-white w-full text-left px-20">No Event Coming Up</p>

        <button
            v-if="showNavButtons"
            @click="scrollCarousel(1)"
            class="btn btn-circle hidden lg:block">
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
        return results.value.results.length && results.value.results.length > 1;
    });
    const noEvent = computed(() => {
        return results.value.results.length && results.value.results.length !== 0;
    });
</script>
