<template>
    <div
        class="flex justify-center items-center space-x-5 w-full"
        :class="{ 'lg:w-[1024px]': shouldApplyWidthClass }">
        <button
            v-if="showNavButtons"
            @click="scrollCarousel(-1)"
            class="btn btn-circle hidden lg:block">
            &lt;
        </button>

        <div
            class="carousel max-lg:carousel-vertical h-96 w-full lg:carousel-center lg:max-w-7xl lg:p-4 lg:space-x-4 bg-neutral rounded-box lg:mb-16 px-6 pt-3 up-coming-events"
            v-for="data in results"
            :key="data.id">
            <div class="carousel-item h-full lg:h-96 items-stretch mb-6" v-for="event in data">
                <div class="w-80 bg-base-100 shadow-xl rounded-box">
                    <figure>
                        <img
                            :src="event.imageUrl"
                            :alt="event.title"
                            class="rounded-t-lg h-64 w-full" />
                    </figure>
                    <div class="px-4 py-2">
                        <p class="font-bold text-lg card-title">
                            {{ event.title }}
                        </p>
                        <p>
                            {{ event.date }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
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

    const shouldApplyWidthClass = computed(() => results.value.results.length > 2);
</script>
