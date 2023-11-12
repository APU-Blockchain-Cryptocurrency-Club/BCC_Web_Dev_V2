<template>
    <div class="flex items-center flex-col">
        <section>
            <h1 class="text-3xl text-orange-400 font-bold text-center my-5">Up Coming</h1>
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
            <h1 class="text-3xl text-orange-400 font-bold text-center my-5">Past Events</h1>
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
