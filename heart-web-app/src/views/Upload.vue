<template>
<div class="wrapper">
  <div class="h_left">
    <img id="logo" src="../assets/logo.png" width="130"> 
    <h1 class="logo"> HeartApp </h1>
    <p class="login"> logged in as <br> USER</p>
  </div>
  <div class="sidenav">
      <router-link to="/upload"><el-button>Upload Data </el-button></router-link><br><br>
      <router-link to="/upload"><el-button>View Data </el-button></router-link><br><br>
      <router-link to="/upload"><el-button>My Account</el-button></router-link><br><br>
      <router-link to="/upload"> <el-button>Log out </el-button></router-link>
  </div>
    <div class="container">
    <div class="import"><br>
    <h1> Upload File </h1>
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
import {
  VueCsvSubmit,
  VueCsvMap,
  VueCsvInput,
  VueCsvErrors,
  VueCsvImport,
} from "vue-csv-import";

export default {
  name: "Upload",
  components: {
    VueCsvSubmit,
    VueCsvMap,
    VueCsvInput,
    VueCsvErrors,
    VueCsvImport,
  },
  data() {
    return { csv: null };
  },
};
</script>

<style>
.sidenav {
  float: left;
  position: absolute;
  margin-top: 10vw;
  color: white;
  font-size: 20px;
  padding: 30px;
  text-decoration: none;
}

.login {
  float: right;
  position: absolute;
  margin-top: -6vw;
  margin-left: 90vw;
  white-space: nowrap;
  color: white;
}

.logo {
  float: left;
  position: absolute;
  margin-top: -6vw;
  margin-left: 12vw;
  color: white;
}

.import {
  margin: 10vw;
}

.h_left {
  float: left;
  position: absolute;
  width: 15vw;
  margin-top: -5vw;
  margin-left: -2vw;
  height: 15vh;
  /* background-color: red; */
}

.wrapper {
  background: linear-gradient(360deg, #001e3c 0%, #002663 93.8%);
  height: 200vh;
  padding-top: 10vh;
}

.container {
  height: 82vh;
  border-radius: 5px;
  background-color: white;
  margin-left: 14vw;
  margin-top: -8vw;
}
</style>