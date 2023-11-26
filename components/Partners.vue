<template>
    <div class="flex justify-center items-center space-x-5 md:w-[33rem] lg:w-[60rem]">
        <button @click="scrollCarousel(-1)" class="btn btn-circle hidden lg:block">&lt;</button>

        <div
            class="h-96 md:h-full max-md:w-full carousel max-md:carousel-vertical rounded-box partners"
            v-for="data in results"
            :key="data.id">
            <div
                class="carousel-item p-4 w-40 sm:w-60 md:h-96 lg:h-80 bg-info-content"
                v-for="partners in data">
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img :src="partners.imageUrl" :alt="partners.title" class="h-fit w-fit" />
                    </figure>
                    <div class="card-body">
                        <p class="card-title">
                            {{ partners.title }}
                        </p>
                        <p>
                            {{ partners.date }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="scrollCarousel(1)" class="btn btn-circle hidden lg:block">&gt;</button>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    const { data } = await useFetch("/api/fetchPartners");
    const results = ref(data);

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector(".partners");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
</script>
