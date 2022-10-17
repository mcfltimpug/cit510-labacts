<template>
    <div class="content d-flex justify-center items-center h-screen">
        <v-card elevation="2" outlined shaped class=" d-flex flex-column px-12 justify-center ma-8 ">
            <div class="text-h5 text-center mx-6 my-6 text-blue d-flex flex-column font-weight-bold">
                <v-chip class="text-subtitle-2 d-flex justify-center font-italic w-24">Laboratory Activity 5</v-chip>
                Simple Calculator
                <span class="text-body-1">Using Composition API</span>
            </div>
            <v-form>
                <v-text-field label="First Number" outlined color="blue" type="number" v-model.number="f_number">
                </v-text-field>
                <v-text-field label="Second Number" outlined color="blue" type="number" v-model.number="s_number">
                </v-text-field>
                <v-text-field label="Third Number" outlined color="blue" type="number" v-model.number="t_number">
                </v-text-field>
                <hr color="yellow">
            </v-form>
            <div class="math-output d-flex flex-wrap justify-center pt-5 card-content">
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-btn rounded="pill" color="blue" elevation="1" @click="add" class="mb-5">
                       Compute Sum
                    </v-btn>
                    <span class="text-h4 font-weight-black text-blue">{{ sum }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-btn rounded="pill" color="blue" elevation="1" @click="subtract" class="mb-5">
                       Compute Difference
                    </v-btn>
                    <span class="text-h4 font-weight-black text-blue">{{ difference }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-btn rounded="pill" color="blue" elevation="1" @click="multiply" class="mb-5">
                       Compute Product
                    </v-btn>
                    <span class="text-h4 font-weight-black text-blue">{{ product }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-btn rounded="pill" color="blue" elevation="1" @click="divide" class="mb-5">
                       Compute Quotient
                    </v-btn>
                    <span class="text-h4 font-weight-black text-blue">{{ quotient }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-btn rounded="pill" color="blue" elevation="1" @click="doAverage" class="mb-5">
                       Compute Average
                    </v-btn>
                    <span class="text-h4 font-weight-black text-blue">{{ average }}</span>
                </v-card>
            </div>
        </v-card>
    </div>

</template>
<script setup>
    import {
        ref
    } from 'vue'

    const f_number = ref(8);
    const s_number = ref(2);
    const t_number = ref(4);
    const sum = ref(0);
    const difference = ref(0);
    const quotient = ref(0);
    const product = ref(0);
    const average = ref(0);

    function add() {
        sum.value = f_number.value + s_number.value + t_number.value;
        return sum.value;
    }
     function subtract(){
        difference.value = f_number.value - s_number.value - t_number.value;
        return difference.value;
     }
     function multiply(){
        product.value = f_number.value * s_number.value * t_number.value;
        return product.value;
     }
     function divide(){
        quotient.value = f_number.value / s_number.value / t_number.value;
        return quotient.value;
     }
     function doAverage(){
        average.value = (f_number.value + s_number.value + t_number.value)/3;
     }
    
</script>
<style>
    .content {
        /* background-color: #d9d9d9; */
        background: rgb(37, 195, 255);
        background: linear-gradient(0deg, rgba(37, 195, 255, 1) 0%, rgba(255, 224, 108, 1) 100%);
        text-align: justify;
        text-justify: inter-word;
        width: 100%;
    }

    .card-content {
        gap: 20px;
    }
</style>