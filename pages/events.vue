<template>
    <div class="p-4 max-sm:p-8 sm:p-8 xl:container xl:mx-auto space-y-16">
        <div class="space-y-5">
            <div class="items-center text-justify lg:text-center">
                <b class="text-3xl sm:text-4xl text-orange-400 leading-normal">
                    Upcoming Events
                </b>
            </div>
            <Suspense>
                <div class="w-full flex justify-center">
                    <UpComingEvents />
                </div>
                <template #fallback>
                    <span class="loading loading-spinner loading-lg"> </span>
                </template>
            </Suspense>
        </div>

        <div class="space-y-5">
            <div class="items-center text-justify lg:text-center">
                <b class="text-3xl sm:text-4xl text-orange-400 leading-normal">Past Events</b>
            </div>
            <Suspense>
                <div class="w-full flex justify-center">
                    <PastEvents />
                </div>
                <template #fallback>
                    <span class="loading loading-spinner loading-lg"> </span>
                </template>
            </Suspense>
        </div>
    </div>
</template>
