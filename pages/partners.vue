<template>
    <div class="p-4 max-sm:p-8 sm:p-8 xl:container xl:mx-auto">
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
            <div class="flex justify-center mt-20 md:mt-10">
                <Partners />
            </div>

            <!-- fallback -->
            <template #fallback>
                <span class="loading loading-spinner loading-lg"> </span>
            </template>
        </Suspense>
    </div>
</template>
