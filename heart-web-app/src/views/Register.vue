<template>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="h_left">
          <img id="logo" src="../assets/logo.png" width="150" />
        </div>
        <div class="h_right">
          <h1 id="title">Heart App</h1>
        </div>
        <div class="h_center">
          <h4 id="subtitle">Register for an account</h4>
        </div>
      </div>
      <el-form class="left" ref="formRef" :model="form" label-position="top">
        <el-form-item label="Email">
          <el-input
            type="text"
            placeholder="Email"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Number">
          <el-input
            type="text"
            placeholder="Number"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="number"
          ></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input
            type="text"
            placeholder="Address"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="address"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password *">
          <el-input
            type="text"
            placeholder="password"
            required
            show-password
            autocomplete="off"
            style="width: 20vw;"
            v-model="password1"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-form class="right" ref="formRef" :model="form" label-position="top">
        <el-form-item label="Full Name">
          <el-input
            type="text"
            placeholder="Name"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="name"
          ></el-input>
        </el-form-item>
        <el-form-item label="Institution">
          <el-input
            type="text"
            placeholder="MMU"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="institution"
          ></el-input>
        </el-form-item>
        <el-form-item label="Postcode">
          <el-input
            type="text"
            placeholder="postcode"
            required
            autocomplete="on"
            style="width: 20vw;"
            v-model="postcode"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password *">
          <el-input
            type="text"
            placeholder="password"
            required
            show-password
            autocomplete="off"
            style="width: 20vw;"
            v-model="password2"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn" type="primary" @click="register"
        >Create Account</el-button
      >
      <p style="color: #d63737">{{ err }}</p>
      <p style="color: #6cac73">{{ success }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication } from "@/firebase/database";
import { firebaseFireStore } from "@/firebase/database";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

export default {
  name: "register",
  emits: ["register-clicked"],

  setup() {
    const name = ref("");
    const address = ref("");
    const postcode = ref("");
    const number = ref("");
    const email = ref("");
    const institution = ref("");
    const password1 = ref("");
    const password2 = ref("");
    const errorRegistration = ref("");

    watch(password2, () => {
      if (
        password1.value !== "" &&
        password2.value !== "" &&
        password1.value !== password2.value
      ) {
        errorRegistration.value = "Passwords do not match!";
      } else {
        errorRegistration.value = null;
      }
    });

    const router = useRouter();
    
    function register() {
      const info = {
        email: email.value,
        password: password1.value,
        institution: institution.value,
        number: number.value,
        address: address.value,
        postcode: postcode.value,
        name: name.value,
      };

      if (!errorRegistration.value) {
        firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
              return userCredentials.user.updateProfile({ name: info.name })
                .then(() => {
                  firebaseFireStore.collection('users').doc(userCredentials.user.uid).set({
                      email: info.email,
                      name: info.name,
                      institution: info.institution,
                      number: info.number,
                      address: info.address,
                      postcode: info.postcode,
                    }),
                    router.replace("registersuccess");
                });
            },
            (error) => {
              errorRegistration.value = error.message;
            }
          );
      }
    }

    return {
      name,
      password1,
      password2,
      email,
      institution,
      address,
      postcode,
      number,
      errorRegistration,
      register,
    };
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(360deg, #001e3c 0%, #002663 93.8%);
  height: 90vh;
  padding-top: 10vh;
}
.container {
  width: 50vw;
  height: 75vh;
  border-radius: 5px;
  background-color: white;
  margin-left: 25vw;
  margin-top: 3vw;
}

.header {
  padding-top: 5vh;
  /* background-color: green; */
  height: 20vh;
  text-align: center;
}

.h_left {
  float: left;
  width: 15vw;
  margin-left: 4.5vw;
  height: 15vh;
  margin-top: 1vw;
  /* background-color: red; */
}

#logo {
  float: right;
}

.h_right {
  float: right;
  width: 30.5vw;
  height: 13vh;
  /* background-color: blue; */
  padding-top: 1vh;
}

#title {
  float: left;
  font-family: Tahoma;
  font-size: 40px;
  color: #4c4b4b;
}

.h_center {
  margin-top: 15vh;
  height: 4vh;
}

#subtitle {
  font-family: Tahoma;
  font-size: 18px;
  color: #4c4b4b;
}

.left {
  width: 20vw;
  float: left;
  padding-left: 2vw;
}

.right {
  width: 22vw;
  float: right;
}

.btn {
  width: 18vw;
  font-size: 18px;
  font-family: Tahoma;
  margin-top: 2vh;
}
</style>