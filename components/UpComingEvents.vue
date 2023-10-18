<template>
    <div
        class="carousel carousel-center max-w-7xl p-4 space-x-4 bg-neutral rounded-box mb-10"
        v-for="data in results"
        :key="data.id"
    >
        <div class="carousel-item" v-for="event in data">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        :src="event.imageUrl"
                        :alt="event.title"
                        class="rounded-box w-fit"
                    />
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
</template>

<script setup>
import { ref } from "vue";
const { data } = await useFetch("/api/fetchUpComingEvents");
const results = ref(data);
</script>
