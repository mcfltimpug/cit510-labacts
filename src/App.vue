<template>
  <v-app>
    <v-main>
      <MainNav/>
      <router-view class="rview"/>
    </v-main>
  </v-app>
</template>

<script>
import MainNav from './components/MainNav.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { MainNav }
}
</script>

<style>
.rview{
  width: 100%;
  height: 100%;
}
</style>
