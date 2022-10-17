<template>
    <div class="contentz d-flex justify-center items-center flex-column">
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="300">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <img src="../assets/logo.png" alt="" width="50">
                <h1 class="text-h4 font-weight-thin mb-4">
                    Composition API
                </h1>
                <h4 class="subheading text-yellow">
                    Vue 3 Feature
                </h4>
            </div>
            <v-card class></v-card>
        </v-parallax>
        <div class="d-flex justify-center ma-9">
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">What is a Composition API?</h1>
                <p class="text-justify">It is a set of API that allows the authoring of vue components through importing
                    functions.</p>
            </v-card>
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Composed of the Following APIs:</h1>
                <ul>
                    <li>Reactivity API - to create watchers, reactive state, and computed state.</li>
                    <li>Lifecycle Hooks - to hook into the lifecycle of a component.</li>
                    <li>Dependency Injection - to leverage dependency injection with the help of Reactivity API</li>
                </ul>
            </v-card>
        </div>
        <div class="div px-9 pb-9">
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
        </div>
        <div class="text-h5 text-center font-weight-bold bg-yellow mb-9">Why Composition API?</div>
        <div class="div px-9 pb-9">
            <v-expansion-panels class="">
                <v-expansion-panel class="bg-blue-lighten-1 mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Limitations Before</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <p>It solves the following limitations when creating huge vue component:</p>
                        <ul>
                            <li>It can be difficult or time-consuming to reuse logic among many components.</li>
                            <li>Multiple options may be used to divide code that logically belongs together - data,
                                method, and computed</li>

                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="bg-blue-lighten-1 mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">Composition API as the Solution</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <p>The Composition API addresses the first issue by making it simpler for you to organize
                            pertinent code into groups as your code expands.
                        </p>
                        <p>The second issue is resolved by employing composables to improve code reuse. Because Vue
                            projects were more difficult to manage as they increased in size and complexity, it was
                            developed for improved extensibility and code structure. It also provides far improved
                            TypeScript support.</p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <div class="text-h5 text-center font-weight-bold bg-white">Other Information</div>
        <div class="d-flex justify-center ma-9">
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Secondary Benefits</h1>
                <ul>
                    <li>Better Typescript Compatibility</li>
                    <li>Easier Access to Features such as Reactivity</li>
                    <li>Makes it simple to integrate pre-packaged features</li>
                </ul>
            </v-card>
            <v-card elevation="2" outlined shaped class="d-flex flex-column mr-md-3 pa-md-16 pa-9 mr-2 justify-center">
                <h1 class="text-h5 font-weight-bold">Disadvantages</h1>
                <ul>
                    <li>Most Vue-based projects such as Nuxt and Vuetify still rely on Options API. Some have beta
                        support and third party libraries but no stable release yet.
                    </li>
                    <li>Confusion may exist on ref() and reactive() especially on beginners
                    </li>
                    <li>No support for options such as name and inheritAttrs. The solution is to create a new script tag
                        that integrates Options API.
                    </li>
                </ul>
            </v-card>
        </div>
        <div class="div px-9 pb-9">
            <v-expansion-panels class="">
                <v-expansion-panel class="bg-yellow mb-5">
                    <v-expansion-panel-title>
                        <h1 class="text-h5 font-weight-bold">References</h1>
                        <v-spacer></v-spacer>

                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="ma-5">
                        <ul>
                            <li>Chukwudalu, L. (2022, August 23). An ultimate guide to the Vue 3 Composition API. OpenReplay Blog. Retrieved October 7, 2022, from https://blog.openreplay.com/an-ultimate-guide-to-the-vue-3-composition-api</li>
                            <li>Gore, A. (2020, February 17). When To Use The New Vue Composition API (And When Not To). Vue.js Developers. Retrieved October 7, 2022, from https://vuejsdevelopers.com/2020/02/17/vue-composition-api-when-to-use/</li>
                            <li>Medium. (2022, April 2). Vue 3 Composition API: Basics and Patterns | by Arcana Network | Arcana Network Blog. Medium. Retrieved October 7, 2022, from https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d</li>
                            <li>Vue. (2022). Vue 3 Migration Guide | Vue 3 Migration Guide. Retrieved October 3, 2022, from https://v3-migration.vuejs.org</li>

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