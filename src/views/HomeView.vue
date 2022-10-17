<template>
  <div class="bg-yellow-lighten-3 hello d-flex flex-column justify-center items-center px-16 ">
    <div class="header-title">
       <v-card elevation="2" outlined shaped class=" d-flex flex-column px-12 justify-center ma-5 ">
          <div class="text-h5 text-center mx-6 my-6 text-blue d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Christine Faith Timpug | IT41S1</v-chip> Laboratory Activities
          </div>
      </v-card>
    </div>
    <div class="bannerr d-flex justify-center ma-4">
      <img src="../assets/dashboard-banner.jpg" alt="" class="w-96">
    </div>
    <div class="contentss d-flex flex-wrap justify-center">
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 1</v-chip>Simple Calculator 
          </div>
      </v-card>
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 2</v-chip>String Manipulation
          </div>
      </v-card>
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 4</v-chip>Vuetify Research
          </div>
      </v-card>
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 4</v-chip>Composition API
          </div>
      </v-card>
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 5</v-chip>Area Calculator
          </div>
      </v-card>
      <v-card elevation="2" outlined shaped class=" d-flex flex-column pa-9 justify-center bg-blue-lighten-1 ma-3">
          <div class="text-h5 text-center text-yellow d-flex flex-column font-weight-bold">
              <v-chip class="text-subtitle-2 d-flex justify-center font-italic\">Lab Act 6</v-chip>Axios API
          </div>
      </v-card>
      
    </div>
     
  </div>

</template>
<script>
  export default {
      data() {
          return {
             
          }
      },
      computed: {
         
      }
  }
</script>
<style scoped>
  .hello{
    height:100%;
    width: 100%;
  }

  .card-content{
      gap: 20px;
  }
</style>