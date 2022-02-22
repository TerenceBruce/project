<template>
<div class="wrapper">
    <div class="container">
    <div class="h_left"><img id="logo" src="../assets/logo.png" width="130"> </div>
    <div class="import">
    <vue-csv-import
        v-model="csv"
        :fields="{
            ledv: {required: true, label: 'ledv'},
            redv: {required: true, label: 'redv'},
            lesv: {required: true, label: 'lesv'},
            resv: {required: true, label: 'resv'},
            lvef: {required: true, label: 'lvef'},
            rvef: {required: true, label: 'rvef'},
            lvmass: {required: true, label: 'lvmass'},
            rvmass: {required: true, label: 'rvmass'},
            lsv: {required: true, label: 'lsv'},
            rsv: {required: true, label: 'rsv'},
            scar: {required: true, label: 'scar'},
            female: {required: true, label: 'female'},
            AgeatMRI: {required: true, label: 'AgeatMRI'},
            ApicalHCM: {required: true, label: 'ApicalHCM'},
            SuddenCardiacDeath: {required: true, label: 'SuddenCardiacDeath'},
            Hypertension: {required: true, label: 'Hypertension'},
            Diabetes: {required: true, label: 'Diabetes'},
            Myectomy: {required: true, label: 'Myectomy'}
            }"
    >
      
      <vue-csv-toggle-headers style="margin-top: 1vw;"></vue-csv-toggle-headers>
      <vue-csv-errors></vue-csv-errors>
      <p><vue-csv-input style="width: 18vw; height: 4vh; font-size: 15px"></vue-csv-input></p>
      <vue-csv-map></vue-csv-map>
      <vue-csv-submit style="width: 18vw; height: 4vh; font-size: 18px; margin-top: 1vw;"></vue-csv-submit> 
  </vue-csv-import>
  </div>
    <p> Results </p>
    {{ csv }}
    </div>
</div>
</template>

<script>

import {VueCsvToggleHeaders, VueCsvSubmit, VueCsvMap, VueCsvInput, VueCsvErrors, VueCsvImport} from 'vue-csv-import';

export default {
    name: 'Upload',
    components: { VueCsvToggleHeaders, VueCsvSubmit, VueCsvMap, VueCsvInput, VueCsvErrors, VueCsvImport },
    data() { return { csv: null,};
  },
};
</script>

<style>

  .import {
    margin: 10vw;
  }
  
  .h_left {
    float: left;
    position: absolute;
    width: 15vw;
    margin-top: 0.5vw;
    height: 15vh;
    /* background-color: red; */
  }

  .wrapper {
    background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
    height: 200vh;
    padding-top: 10vh;
  }

    .container {
      width: 50vw;
      height: 78vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
  }


</style>