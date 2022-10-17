<!-- <template lang="">
    <div>
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="300">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <img src="../assets/vuetify-logo.svg" alt="" width="50">
                <h1 class="text-h4 font-weight-thin mb-4">
                    Vuetify
                </h1>
                <h4 class="subheading text-yellow">
                    Build your application today!
                </h4>
            </div>
        </v-parallax>
    </div>
</template> -->
<template>
    <div class="contentz d-flex justify-center items-center flex-column">
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="300">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <img src="../assets/vuetify-logo.svg" alt="" width="50">
                <h1 class="text-h4 font-weight-thin mb-4">
                    Vuetify
                </h1>
                <h4 class="subheading text-yellow">
                    Build your application today!
                </h4>
            </div>
        </v-parallax>
        <div class="d-flex justify-center ma-9">
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">What is Vuetify?</h1>
                <p class="text-justify">Built on top of Vue.js, Vuetify is an entire UI framework. The project's aim is to give programmers the resources they require to create complex and captivating user interfaces.</p>
            </v-card>
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Features:</h1>
                <ul>
                    <li>Support for Vue CLI-3 and RTL</li>
                    <li>Templates for a variety of frameworks, such as Cordova, Webpack, etc.
</li>
                    <li>Internationalization</li>
                    <li>SSR and PWA</li>
                </ul>
            </v-card>
        </div>
        <!-- <div class="div px-9 pb-9">
            <v-expansion-panels class="">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Composition API Benefits</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <ul>
                            <li>Better Logic Reuse</li>
                            <li>More Flexible Code Organization</li>
                            <li>Better Type Inference</li>
                            <li>Smaller Production Bundle and Less Overhead</li>
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div> -->
        <div class="text-h5 text-center font-weight-bold bg-blue-lighten-1 mb-9">Vuetify Installation using Vue CLI</div>
        <div class="div px-9 pb-9">
            <v-expansion-panels class="">
                <v-expansion-panel class="bg-yellow mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Vuetify 2.0</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <p>Type the following commands:</p>
                        <ul>
                            <li>vue create my-app</li>
                            <li>cd my-app</li>
                            <li>vue add vuetify
</li>

                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="bg-yellow mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Vuetify 3.0</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <p>Type the following commands:
                        </p>
                        <ul>
                            <li>cd my-vuetify-app</li>
                            <li>vue add vuetify</li>
                            <li>*Choose 'Vuetify 3 - Vue CLI (preview 3)'</li>
                            
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="bg-yellow mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Other Installations</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <ul>
                            <li>Vue UI Install</li>
                            <li>Nuxt Install</li>
                            <li>Webpack Install</li>
                            <li>CDN</li>
                            <li>Electron Usage</li>
                            <li>PWA Usage</li>
                            <li>Cordova Usage</li>
                            <li>Capacitor Usage</li>
                            <li>Vuepress Usage</li>
                            
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <div class="text-h5 text-center font-weight-bold bg-white">Other Information</div>
        <div class="d-flex justify-center ma-9">
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Pros</h1>
                <ul>
                    <li>Components are reusable</li>
                    <li>Includes beauty for developers who have trouble in designing</li>
                    <li>Large source of components</li>
                    <li>Compatible with most browsers</li>
                    <li>Material Design</li>
                    <li>Huge community and better documentation</li>
                    <li>Continuous updates</li>
                </ul>
            </v-card>
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Cons</h1>
                <ul>
                    <li>If you are not familiar and fond of Material Designs, Vuetify might not be the choice</li>
                    <li>Customization is challenging.</li>
                </ul>
            </v-card>
        </div>
        <div class="div px-9 pb-9">
            <v-expansion-panels class="">
                <v-expansion-panel class="bg-blue mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">References</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <ul>
                            <li>Fewings, N. (2020, October 27). Quasar vs. Vutify vs. Bootstrap Vue: Choosing the Right Vue.js UI Library. Bits and Pieces. Retrieved October 7, 2022, from https://blog.bitsrc.io/quasar-vs-vutify-vs-bootstrap-vue-choosing-the-right-vuejs-ui-library-cf566f61bc4</li>
                            <li>Reilly, J. (2022, August 17). Getting started with Vuetify: Is Vuetify right for you? LogRocket Blog. Retrieved October 7, 2022, from https://blog.logrocket.com/getting-started-is-vuetify-right-for-you/</li>
                            <li>Vuetify. (n.d.). Get started with Vuetify — Vuetify. Vuetify. Retrieved October 7, 2022, from https://vuetifyjs.com/en/getting-started/installation/</li>
                            <li>Vuetify. (2022). Why you should be using Vuetify — Vuetify. Vuetify. Retrieved October 7, 2022, from https://vuetifyjs.com/en/introduction/why-vuetify/</li>

                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .contentz {
        /* background-color: #d9d9d9; */
        background: rgb(37, 195, 255);
        background: linear-gradient(0deg, rgba(37, 195, 255, 1) 0%, rgba(255, 224, 108, 1) 100%);


        width: 100%;
    }

    .cards {
        gap: 10px;
    }
</style>