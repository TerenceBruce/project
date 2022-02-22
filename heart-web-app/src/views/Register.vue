<template>
  <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="h_left">
              <img id="logo" src="../assets/logo.png" width="150">
            </div>
            <div class="h_right">
              <h1 id="title">Heart App</h1>
            </div>
            <div class="h_center">
              <h4 id="subtitle">Register for an account</h4>
            </div>
          </div>
          <el-form class="left"
            ref="formRef"
            :model="form"
            label-position="top"
            >
            <el-form-item label="Email *" >
              <el-input
              placeholder="Email Address"
              v-model="form.email"
              style="width: 20vw;"
              required
              />
            </el-form-item>
            <el-form-item label="Number" >
              <el-input
              placeholder="Contact Number"
              v-model="form.number"
              style="width: 20vw;"
              />
            </el-form-item>
            <el-form-item label="Address" >
              <el-input
              placeholder="Address"
              v-model="form.address"
              style="width: 20vw;"
              />
            </el-form-item>
            <el-form-item label="Password *" >
              <el-input
              type="password"
              show-password
              placeholder="Password"
              v-model="form.password1"
              style="width: 20vw;"
              />
            </el-form-item>
          </el-form>
          <el-form class="right"
            ref="formRef"
            :model="form"
            label-position="top">
            <el-form-item label="Name *" >
              <el-input
              placeholder="Full Name"
              v-model="form.name"
              style="width: 20vw;"
              />
            </el-form-item>
            <el-form-item label="Institution *" >
              <el-input
              placeholder="E.g. MMU"
              v-model="form.institution"
              style="width: 20vw;"
              />
            </el-form-item>
            <el-form-item label="Postcode" >
              <el-input
              placeholder="Postcode"
              v-model="form.postcode"
              style="width: 20vw;"
              />
            </el-form-item>
            <el-form-item label="Confirm Password *">
              <el-input
              type="password"
              show-password
              placeholder="Password"
              v-model="form.password2"
              style="width: 20vw;"
              />
            </el-form-item>
        </el-form>
        <el-button class="btn"
          type="primary"
          @click="register"
          >Create Account</el-button>
        <p style="color: #D63737;">{{err}}</p>
        <p style="color: #6CAC73;">{{success}}</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, sendEmailVerification } from "firebase/auth";
export default {
  setup() {

      const myRouter = useRouter();

      const form = reactive({
      email: '',
      name: '',
      institution: '',
      number: '',
      address:'',
      postcode: '',
      password1: '',
      password2: ''
    })

    let err = ref("");
    let success = ref("");

      const register = () => {

        if (form.email && form.name && form.institution && form.password1 && form.password2) {

            firebase
            .auth()
            .createUserWithEmailAndPassword(form.email, form.password1)
            .then(() => {
              // success.value = "Registration Succesful. You can now login."
              // err.value = "";
              const auth = getAuth();
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  console.log("email sent");
                  myRouter.push({name: 'registersuccess', params: {email: form.email}});
                });
            })
            .catch((error) => {
              console.log(error.code);
              if (error.code === "auth/email-already-in-use") {
                err.value = "Email is already linked to an account"
              }
              else if (error.code === "auth/invalid-email") {
                err.value = "Email is invalid"
              }
              else if (error.code === "auth/internal-error" || error.code === "auth/weak-password") {
                err.value = "Password is invalid"
              }
            })
        } else {
           err.value = "Please fill in all required fields"
        }
      }
      return { register, form, err, success }
  }
};
</script>

<style scoped>


  .wrapper {
    background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
    height: 90vh;
    padding-top: 10vh;
  }
  .container {
      width: 50vw;
      height: 75vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
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
    color: #4C4B4B;
  }

  .h_center {
    margin-top: 15vh;
    height: 4vh;
  }

  #subtitle {
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
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
    width: 18vw;;
    font-size: 18px;
    font-family: Tahoma;
    margin-top: 2vh;
  }

</style>