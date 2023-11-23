<template>
    <div class="flex flex-col justify-start px-20">
        <section>
            <h1 class="text-3xl text-orange-400 font-bold my-5 px-20">Up Coming</h1>
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
            <h1 class="text-3xl text-orange-400 font-bold my-5 px-20">Past Events</h1>
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
