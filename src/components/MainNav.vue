<template>
    <nav>
        <v-toolbar app color="blue-lighten-1"  >
            <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
            <v-toolbar-title>
                
                <span class="font-weight-bold">CFT | </span>
                <span>Laboratory Activities</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
            <v-menu open-on-hover>

                <template v-slot:activator="{ props }">
                    <v-btn color="yellow" x-large v-bind="props">
                        <span class="font-weight-bold">Pages</span>
                        <v-spacer></v-spacer>
                        <v-icon large color="yellow">
                            mdi-arrow-down-bold-box-outline
                        </v-icon>
                    </v-btn>
                </template>

                <v-list class="bg-yellow hover:black">

                    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path"
                        :prepend-icon="item.icon">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>

        </v-toolbar>

        <!-- navigation drawer -->
        <v-navigation-drawer app v-model="drawer" color="blue-lighten-1" class="py-4">
            <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
                <v-list-item-title class="py-5">{{ item.title }}</v-list-item-title>

            </v-list-item>

        </v-navigation-drawer>
    </nav>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const drawer = ref(false)

    const items = ref([
        {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            path: '/'
        },
        {
            title: 'Simple Calculator',
            icon: 'mdi-calculator',
            path: '/basic-math'
        },
        {
            title: 'String Manipulation',
            icon: 'mdi-format-text-variant-outline',
            path: '/string-manipulation'
        },
        {
            title: 'Vuetify Research',
            icon: 'mdi-vuetify',
            path: '/vuetify-research'
        },
        {
            title: 'Composition API',
            icon: 'mdi-api',
            path: '/composition-api'
        },
        {
            title: 'Area Calculator',
            icon: 'mdi-triangle-outline',
            path: '/area-lab'
        },
        {
            title: 'Axios API',
            icon: 'mdi-weather-partly-cloudy',
            path: '/axios-lab'
        },
    ])

    function toggleDrawer() {
        return drawer.value = !drawer.value
    }
</script>

<style scoped>

</style>