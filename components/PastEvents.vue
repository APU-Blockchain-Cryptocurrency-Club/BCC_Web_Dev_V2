<template>
    <div class="carousel-container flex justify-center items-center space-x-5">
        <button @click="scrollCarousel(-1)" class="btn btn-circle">&lt;</button>
        <div
            class="carousel carousel-center max-w-7xl p-4 space-x-4 bg-neutral rounded-box mb-16 relative past-events"
            v-for="data in results"
            :key="data.id">
            <div class="carousel-item h-fit max-h-96" v-for="event in data">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="flex items-center h-fit w-full">
                        <img
                            :src="event.imageUrl"
                            :alt="event.title"
                            class="rounded-box h-64 mx-auto" />
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
</template>

<script setup>
    import { ref } from "vue";
    const { data } = await useFetch("/api/fetchPastEvents");
    const results = ref(data);

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector(".past-events");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
</script>
