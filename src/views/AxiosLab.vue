<template>
    <div class="content pa-5">
        <div class="text-center pa-5">
            <v-chip class="text-subtitle-1 d-flex justify-center font-italic font-weight-medium " color="blue">Midterm Laboratory 2
            </v-chip>
            <p class="text-h4 font-weight-bold">Axios API</p>
        </div>
        <v-card v-for="apiInfo in apiInfos" :key="apiInfo.id" class="pa-5 ma-2 mt-9">
            <p class="text-h5 text-center font-weight-bold text-blue">Weather Report for ☁️ {{ apiInfo.name }} ☁️</p>
            <p></p>

        </v-card>
        <v-card v-for="apiInfo in apiInfos" :key="apiInfo.id" class="pa-5 ma-2 bg-yellow text-h5 font-weight-black ">
            <p>Day and Time ⌛: {{ apiInfo["day and time"] }}</p>
        </v-card>
        <v-card v-for="apiInfo in apiInfos" :key="apiInfo.id"
            class="pa-5 ma-2 bg-pink-lighten-1 text-h5 font-weight-black ">
            <p><span class="text-yellow">Weather</span> 🌦️: {{ apiInfo.weather }}</p>
        </v-card>
        <v-card v-for="apiInfo in apiInfos" :key="apiInfo.id"
            class="pa-5 ma-2 bg-green-darken-1 text-h5 font-weight-black ">

            <p>Temperature 🌡️: {{ apiInfo.temperature }}</p>
        </v-card>

        <div class="mt-5">
            <p class="text-center text-h5 font-weight-black">Other Countries</p>
        </div>

        <div class="mt-5 d-flex flex-wrap justify-center">

            <v-card v-for="otherInfo in otherInfos1" :key="otherInfo.id"
                class="pa-5 ma-2 mt-3 d-inline-flex flex-column flex-wrap">
                <p class="text-h5 text-center font-weight-bold text-blue">☁️ {{ otherInfo.name }} ☁️</p>
                <p class="text-subtitle-1 font-weight-medium">⌛: {{ otherInfo["day and time"] }}</p>
                <p class="text-subtitle-1 font-weight-medium">🌦️: {{ otherInfo.weather }}</p>
                <p class="text-subtitle-1 font-weight-medium">🌡️: {{ otherInfo.temperature }}</p>
            </v-card>

            <v-card v-for="otherInfo in otherInfos2" :key="otherInfo.id"
                class="pa-5 ma-2 mt-3 d-inline-flex flex-column flex-wrap justify-center">
                <p class="text-h5 text-center font-weight-bold text-blue">☁️ {{ otherInfo.name }} ☁️</p>
                <p class="text-subtitle-1 font-weight-medium">⌛: {{ otherInfo["day and time"] }}</p>
                <p class="text-subtitle-1 font-weight-medium">🌦️: {{ otherInfo.weather }}</p>
                <p class="text-subtitle-1 font-weight-medium">🌡️: {{ otherInfo.temperature }}</p>
            </v-card>
        </div>


    </div>

</template>
<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import axios from 'axios';

    const apiInfos = ref([]);
    const otherInfos1 = ref([]);
    const otherInfos2 = ref([]);


    async function getInfo() {
        axios({
            method: 'GET',
            url: 'https://weather-request.p.rapidapi.com/weather/Philippines',
            headers: {
                'X-RapidAPI-Key': '450a4e6855mshcd241ef58c65649p18c3a4jsndb5107b3cb96',
                'X-RapidAPI-Host': 'weather-request.p.rapidapi.com'
            }

        }).then(response => {
            apiInfos.value = (response.data)
            console.log(apiInfos.value)
        })

        axios({
            method: 'GET',
            url: 'https://weather-request.p.rapidapi.com/weather/Korea',
            headers: {
                'X-RapidAPI-Key': '450a4e6855mshcd241ef58c65649p18c3a4jsndb5107b3cb96',
                'X-RapidAPI-Host': 'weather-request.p.rapidapi.com'
            }

        }).then(response => {
            otherInfos1.value = (response.data)
        })

        axios({
            method: 'GET',
            url: 'https://weather-request.p.rapidapi.com/weather/Japan',
            headers: {
                'X-RapidAPI-Key': '450a4e6855mshcd241ef58c65649p18c3a4jsndb5107b3cb96',
                'X-RapidAPI-Host': 'weather-request.p.rapidapi.com'
            }

        }).then(response => {
            otherInfos2.value = (response.data)
        })
    }

    onMounted(async () => {
        await getInfo()
    });
</script>

<style>



</style>