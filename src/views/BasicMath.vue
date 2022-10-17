<template>
    <div class="content d-flex justify-center items-center px-16 py-8">
        <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-6 justify-center w-75">
            <div class="text-h5 text-center mx-6 my-6 text-blue d-flex flex-column font-weight-bold">
                <v-chip class="text-subtitle-2 d-flex justify-center font-italic w-24">Laboratory Activity 1</v-chip>
                Simple Calculator
            </div>
            <v-form>
                <v-text-field label="First Number" outlined color="blue" type="number" v-model="f_number">
                </v-text-field>
                <v-text-field label="Second Number" outlined color="blue" type="number" v-model="s_number">
                </v-text-field>
                <v-text-field label="Third Number" outlined color="blue" type="number" v-model="t_number">
                </v-text-field>
                <hr color="yellow">
            </v-form>
            <div class="math-output d-flex flex-wrap justify-center pt-5 card-content">
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">SUM
                    </v-chip>
                    <span class="text-h4 font-weight-black text-blue">{{ add }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">DIFFERENCE
                    </v-chip>
                    <span class="text-h4 font-weight-black text-blue">{{ subtract }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">PRODUCT
                    </v-chip>
                    <span class="text-h4 font-weight-black text-blue">{{ multiply }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-chip class="text-subtitle-1 mb-2 d-flex justify-center font-weight-bold " color="blue">QUOTIENT
                    </v-chip>
                    <span class="text-h4 font-weight-black text-blue">{{ divide }}</span>
                </v-card>
                <v-card color="yellow pa-3 text-center d-flex justify-center flex-column">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="blue">AVERAGE
                    </v-chip>
                    <span class="text-h4 font-weight-black text-blue">{{ doAverage }}</span>
                </v-card>
            </div>
        </v-card>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                f_number: 8,
                s_number: 2,
                t_number: 4,
                sum: 0,
                difference: 0,
                quotient: 0,
                product: 0,
                average: 0
            }
        },
        computed: {
            add: function () {
                this.sum = parseInt(this.f_number) + parseInt(this.s_number) + parseInt(this.t_number);
                return this.sum;
            },
            subtract: function () {
                this.difference = parseInt(this.f_number) - parseInt(this.s_number) - parseInt(this.t_number);
                return this.difference;
            },

            multiply: function () {
                this.product = parseInt(this.f_number) * parseInt(this.s_number) * parseInt(this.t_number);
                return this.product;
            },

            divide: function () {
                this.quotient = parseInt(this.f_number) / parseInt(this.s_number) / parseInt(this.t_number);
                return this.quotient;
            },

            doAverage: function () {
                this.average = (parseInt(this.f_number) + parseInt(this.s_number) + parseInt(this.t_number)) / 3;
                return this.average;
            }
        }
    }
</script>
<style scoped>
    .content {
        /* background-color: #d9d9d9; */
        background: rgb(37, 195, 255);
        background: linear-gradient(0deg, rgba(37, 195, 255, 1) 0%, rgba(255, 224, 108, 1) 100%);
        height: 100%;
        width: 100%;
    }

    .card-content {
        gap: 20px;
    }
</style>