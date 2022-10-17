<template>
    <div class="content d-flex justify-center items-center px-16 py-8">
        <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-6 justify-center w-75">
            <div class="text-h5 text-center mx-6 my-6 text-blue-lighten-1 d-flex flex-column font-weight-bold">
                <v-chip class="text-subtitle-2 d-flex justify-center font-italic w-24">Laboratory Activity 2</v-chip>
                String Manipulation
            </div>
            <v-form>
                <v-text-field label="String" outlined color="yellow-darken-2" v-model="string_inp"></v-text-field>

                <hr color="blue">
            </v-form>
            <div class="math-output d-flex flex-wrap justify-center pt-5 card-content">
                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">Vowel Count
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ countVowels }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">Number Count
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ countNumbers }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">Consonant Count
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ countConsonants }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">Vowels To *
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ newString }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">String To Uppercase
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ uppercaseString }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-chip class="d-flex justify-center text-subtitle-1 mb-2 font-weight-bold " color="">Consonants to Uppercase
                    </v-chip>
                    <span class="text-h4 font-weight-black">{{ conUppercase }}</span>
                </v-card>



            </div>
        </v-card>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                string_inp: "hello october 2022",
                vowel_count: 0,
                number_count: 0,
                consononant_count: 0,
                new_string: "hello",
                new_string2: "hello",
                new_string3: "hello"
            }
        },
        computed: {
            countVowels: function () {
                this.vowel_count = this.string_inp.match(/[aeiou]/ig).length;
                return this.vowel_count;

            },

            countNumbers: function () {
                this.number_count = this.string_inp.match(/[0-9]/ig).length;
                return this.number_count;

            },

            countConsonants: function () {
                this.consononant_count = this.string_inp.match(/[bcdfghjklmnpqrstvwxys]/ig).length;
                return this.consononant_count;

            },

            newString: function () {
                this.new_string = this.string_inp.replace(/[aeiou]/ig, '*');
                return this.new_string;

            },

            uppercaseString: function(){
                this.new_string2 = this.string_inp.toUpperCase();
                return this.new_string2;
            },

            conUppercase: function(){
                this.new_string3 = this.string_inp.replace(/[bcdfghjklmnpqrstvwxys]/ig, function(m){
                    m = m.toUpperCase();
                    return m;
                });
                return this.new_string3;
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
        gap: 10px;
    }
</style>