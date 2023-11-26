<template>
    <div class="flex flex-col justify-start pl-11 sm:pl-16 w-full">
        <section>
            <h1 class="text-2xl text-orange-400 font-bold my-5 md:pl-20 text-left w-[300px]">
                Upcoming Events
            </h1>
            <Suspense>
                <div class="w-full">
                    <UpComingEvents />
                </div>
                <template #fallback>
                    <span class="loading loading-spinner loading-lg"> </span>
                </template>
            </Suspense>
        </section>

        <section class="mb-16">
            <h1 class="text-2xl text-orange-400 font-bold my-5 md:pl-20 text-left">Past Events</h1>
            <Suspense>
                <div class="w-full">
                    <PastEvents />
                </div>
                <template #fallback>
                    <span class="loading loading-spinner loading-lg"> </span>
                </template>
            </Suspense>
        </section>
    </div>
</template>
