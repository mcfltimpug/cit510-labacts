<template>
    <div class="content d-flex justify-center items-center h-screen">
        <v-card elevation="2" outlined shaped class=" d-flex flex-column px-12 justify-center ma-8 ">
            <div class="text-h5 text-center mx-6 my-6 text-blue-lighten-1 d-flex flex-column font-weight-bold">
                <v-chip class="text-subtitle-2 d-flex justify-center font-italic w-24">Laboratory Activity 5</v-chip>
                String Manipulation
                <span class="text-body-1">Using Composition API</span>
            </div>
            <v-form>
                <v-text-field label="String" outlined color="yellow-darken-2" v-model="string_inp"></v-text-field>

                <hr color="blue">
            </v-form>
            <div class="math-output d-flex flex-wrap justify-center pt-5 card-content">
                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="countVowels" class="mb-5">
                      Count Vowels
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ vowel_count }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="countNumbers" class="mb-5">
                      Count Numbers
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ number_count }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="countConsonants" class="mb-5">
                      Count Consonants
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ consonant_count }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="vowelstoasterisk" class="mb-5">
                      Vowels to *
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ new_string }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="stringtouppercase" class="mb-5">
                      String to Uppercase
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ new_string2 }}</span>
                </v-card>

                <v-card color="blue" class="text-yellow pa-3 d-flex justify-center flex-column text-center">
                    <v-btn rounded="pill" color="yellow" elevation="1" @click="contouppercase" class="mb-5">
                      Consonants to Uppercase
                    </v-btn>
                    <span class="text-h4 font-weight-black">{{ new_string3 }}</span>
                </v-card>



            </div>
        </v-card>
    </div>

</template>
<script setup>
 import {
        ref
    } from 'vue'

 const string_inp = ref('');
 const vowel_count = ref(0);
 const number_count = ref(0);
 const consonant_count = ref(0);
 const new_string = ref('');
 const new_string2 = ref('');
 const new_string3 = ref('');

 function countVowels(){
    vowel_count.value = string_inp.value.match(/[aeiou]/ig).length;
    return vowel_count.value;
 }

 function countNumbers(){
    number_count.value = string_inp.value.match(/[0-9]/ig).length;
    return number_count.value;
 }
 function countConsonants(){
    consonant_count.value = string_inp.value.match(/[bcdfghjklmnpqrstvwxys]/ig).length;
    return consonant_count.value;
 }

 function vowelstoasterisk(){
    new_string.value = string_inp.value.replace(/[aeiou]/ig, '*');
    return new_string.value;
 }

function stringtouppercase(){
    new_string2.value = string_inp.value.toUpperCase();
    return new_string2.value;
}   

function contouppercase(){
    new_string3.value = string_inp.value.replace(/[bcdfghjklmnpqrstvwxys]/ig, function(m){
        m = m.toUpperCase();
        return m;
    });

    return new_string3.value;
}
    // export default {
    //     data() {
    //         return {
    //             string_inp: "hello october 2022",
    //             vowel_count: 0,
    //             number_count: 0,
    //             consononant_count: 0,
    //             new_string: "hello",
    //             new_string2: "hello",
    //             new_string3: "hello"
    //         }
    //     },
    //     computed: {
    //         countVowels: function () {
    //             this.vowel_count = this.string_inp.match(/[aeiou]/ig).length;
    //             return this.vowel_count;

    //         },

    //         countNumbers: function () {
    //             this.number_count = this.string_inp.match(/[0-9]/ig).length;
    //             return this.number_count;

    //         },

    //         countConsonants: function () {
    //             this.consononant_count = this.string_inp.match(/[bcdfghjklmnpqrstvwxys]/ig).length;
    //             return this.consononant_count;

    //         },

    //         newString: function () {
    //             this.new_string = this.string_inp.replace(/[aeiou]/ig, '*');
    //             return this.new_string;

    //         },

    //         uppercaseString: function(){
    //             this.new_string2 = this.string_inp.toUpperCase();
    //             return this.new_string2;
    //         },

    //         conUppercase: function(){
    //             this.new_string3 = this.string_inp.replace(/[bcdfghjklmnpqrstvwxys]/ig, function(m){
    //                 m = m.toUpperCase();
    //                 return m;
    //             });
    //             return this.new_string3;
    //         }

           
    //     }
    // }
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
        gap: 10px;
    }
</style>