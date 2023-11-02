<template>
    <div class="px-8 sm:p-3 sm:pt-12 sm:pb-12 sm:px-32">
        <div class="items-center text-justify">
            <b class="text-3xl sm:text-6xl text-orange-400 leading-normal">Partners</b>
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
            <div class="flex justify-center items-center space-x-5 pt-16">
                <button @click="scrollCarousel(-1)" class="btn btn-circle max-lg:hidden">
                    &lt;
                </button>
                <div
                    class="carousel max-lg:carousel-vertical h-96 w-fit lg:carousel-center lg:max-w-7xl lg:p-4 lg:space-x-4 bg-neutral rounded-box lg:mb-16 px-6 pt-3 partners"
                    v-for="data in results"
                    :key="data.id">
                    <div
                        class="carousel-item h-full lg:h-96 items-stretch mb-6"
                        v-for="partners in data">
                        <div class="w-80 bg-base-100 shadow-xl rounded-box">
                            <figure>
                                <img
                                    :src="partners.imageUrl"
                                    :alt="partners.title"
                                    class="rounded-t-lg h-64 w-full" />
                            </figure>
                            <div class="px-4 py-2">
                                <p class="font-bold text-lg card-title">
                                    {{ partners.title }}
                                </p>
                                <p>
                                    {{ partners.date }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="scrollCarousel(1)" class="btn btn-circle max-lg:hidden">
                    &gt;
                </button>
            </div>

            <!-- fallback -->
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
        const carousel = document.querySelector(".partners");
        const scrollAmount = 300; // Adjust as needed
        carousel.scrollLeft += direction * scrollAmount;
    };
</script>
