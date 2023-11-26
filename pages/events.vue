<template>
    <div class="p-4 max-sm:p-8 sm:p-8 xl:container xl:mx-auto space-y-5">
        <div class="items-center text-justify">
            <b class="text-3xl sm:text-4xl text-orange-400 leading-normal">Upcoming Events</b>
        </div>
        <Suspense>
            <div class="w-full">
                <UpComingEvents />
            </div>
            <template #fallback>
                <span class="loading loading-spinner loading-lg"> </span>
            </template>
        </Suspense>

        <div class="items-center text-justify">
            <b class="text-3xl sm:text-4xl text-orange-400 leading-normal">Past Events</b>
        </div>
        <Suspense>
            <div class="w-full">
                <PastEvents />
            </div>
            <template #fallback>
                <span class="loading loading-spinner loading-lg"> </span>
            </template>
        </Suspense>
    </div>
</template>
