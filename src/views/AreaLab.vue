<template>
     <div class="content d-flex justify-center items-center px-16 py-8">
        <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-6 justify-center w-75">
            <div class="text-h5 text-center text-blue d-flex flex-column font-weight-bold my-4">
                <v-chip class="text-subtitle-2 d-flex justify-center font-italic w-24">Laboratory Activity 5</v-chip>
                Area Calculator
                <span class="text-body-1">Using Composition API</span>
            </div>
            <div class="d-flex flex-column justify-center">
                <p class="text-center text-body-1 font-weight-bold">Choose the Shape to Calculate the Area</p>
                <div class="d-flex flex-wrap card-content justify-center my-5">
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <p class="font-weight-bold text-h5">A. Circle</p>
                    </v-card>
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <p class="font-weight-bold text-h5">B. Square</p>
                    </v-card>
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <p class="font-weight-bold text-h5">C. Rectangle</p>
                    </v-card>
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <p class="font-weight-bold text-h5">D. Triangle</p>
                    </v-card>
                    <v-form>
                    </v-form>
                </div>
                <v-form class="d-flex justify-center flex-column">
                    <v-text-field label="Area Option" outlined color="blue" v-model="areaOption"
                        hint="Enter the LETTER of your choice.">
                    </v-text-field>
                </v-form>
                <hr color="yellow" class="my-3">

            </div>

            <div v-if="areaOption == 'A'">
                <v-form class="my-2 d-flex justify-center flex-column">
                    <h3 class="text-center">Circle Area Calculator</h3>
                    <v-text-field label="Radius" outlined color="blue" type="number" v-model.number="f_number"
                         hint="Enter Radius">
                    </v-text-field>
                   
                    <v-btn rounded="pill" color="blue" elevation="1" @click="doCircle" class="mb-5">
                        Calculate
                    </v-btn>
                </v-form>

                <div class="math-output d-flex flex-wrap justify-center card-content">
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">Circle Area
                            Result</v-chip>
                        <span class="text-h4 font-weight-black text-blue">{{ area }}</span>
                    </v-card>

                </div>
            </div>

            <div v-if="areaOption == 'B'">
                <v-form class="my-2 d-flex justify-center flex-column">
                    <h3 class="text-center">Square Area Calculator</h3>
                    <v-text-field label="Side" outlined color="blue" type="number" v-model.number="f_number"
                         hint="Enter Side">
                    </v-text-field>
                   
                    <v-btn rounded="pill" color="blue" elevation="1" @click="doSquare" class="mb-5">
                        Calculate
                    </v-btn>
                </v-form>

                <div class="math-output d-flex flex-wrap justify-center card-content">
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">Square Area
                            Result</v-chip>
                        <span class="text-h4 font-weight-black text-blue">{{ area }}</span>
                    </v-card>

                </div>
            </div>

            <div v-if="areaOption == 'C'">
                <v-form class="my-2 d-flex justify-center flex-column">
                    <h3 class="text-center">Rectangle Area Calculator</h3>
                    <v-text-field label="Width" outlined color="blue" type="number" v-model.number="f_number"
                         hint="Enter Width">
                    </v-text-field>
                    <v-text-field label="Length" outlined color="blue" type="number" v-model.number="s_number"
                         hint="Enter Length">
                    </v-text-field>
                   
                    <v-btn rounded="pill" color="blue" elevation="1" @click="doRectangle" class="mb-5">
                        Calculate
                    </v-btn>
                </v-form>

                <div class="math-output d-flex flex-wrap justify-center card-content">
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">Rectangle Area
                            Result</v-chip>
                        <span class="text-h4 font-weight-black text-blue">{{ area }}</span>
                    </v-card>

                </div>
            </div>

            <div v-if="areaOption == 'D'">
                <v-form class="my-2 d-flex justify-center flex-column">
                    <h3 class="text-center">Triangle Area Calculator</h3>
                    <v-text-field label="Base" outlined color="blue" type="number" v-model.number="f_number"
                         hint="Enter Base">
                    </v-text-field>
                    <v-text-field label="Height" outlined color="blue" type="number" v-model.number="s_number"
                         hint="Enter Height">
                    </v-text-field>
                   
                    <v-btn rounded="pill" color="blue" elevation="1" @click="doTriangle" class="mb-5">
                        Calculate
                    </v-btn>
                </v-form>

                <div class="math-output d-flex flex-wrap justify-center  card-content">
                    <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                        <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">Triangle Area
                            Result</v-chip>
                        <span class="text-h4 font-weight-black text-blue">{{ area }}</span>
                    </v-card>

                </div>
            </div>
        </v-card>
    </div>

</template>
<script setup>
    import {
        ref
    } from 'vue'

    const areaOption = ref('');
    const f_number = ref(0);
    const s_number = ref(0);
    const area = ref(0);
    const pi = ref(3.141592653589793238);

    function doCircle() {
        area.value = pi.value * (f_number.value * f_number.value);
        return area.value;
    }

    function doSquare() {
        area.value = f_number.value * f_number.value;
        return area.value;
    }

    function doRectangle() {
        area.value = f_number.value * s_number.value;
        return area.value;
    }

    function doTriangle() {
        area.value = (f_number.value * s_number.value) / 2;
    }

    if(areaOption.value == 'A'){
        area.value = pi.value * (f_number.value * f_number.value);
        
    }
</script>
<style scoped>
    .content {
        /* background-color: #d9d9d9; */
        background: rgb(37, 195, 255);
        background: linear-gradient(0deg, rgba(37, 195, 255, 1) 0%, rgba(255, 224, 108, 1) 100%);
        
        width: 100%;
    }

    .card-content {
        gap: 20px;
    }

  
</style>