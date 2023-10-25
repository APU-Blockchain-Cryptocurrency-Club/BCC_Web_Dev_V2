<template>
    <div class="flex justify-center items-center space-x-5">
        <button
            @click="scrollCarousel(-1)"
            class="btn btn-circle"
            v-if="data.length in results >= 2">
            &lt;
        </button>
        <div
            class="carousel carousel-center max-w-7xl p-4 space-x-4 bg-neutral rounded-box mb-16 up-coming-events"
            v-for="data in results"
            :key="data.id">
            <div class="carousel-item h-96" v-for="event in data">
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
            @click="scrollCarousel(1)"
            class="btn btn-circle"
            v-if="data.length in results >= 2">
            &gt;
        </button>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const { data } = await useFetch("/api/fetchUpComingEvents");
    const results = ref(data);

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector(".up-coming-events");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
</script>
