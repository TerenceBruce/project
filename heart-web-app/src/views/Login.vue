<template>
  <div class="wrapper">
        <el-form
        ref="formRef"
        :model="form"
        >
        <div class="container">
          <div class="header">
            <div class="h_left">
              <img id="logo" src="../assets/logo.png" width="150">
            </div>
            <div class="h_right">
              <h1 id="title">Heart App</h1>
            </div>
            <div class="h_center">
              <h4 id="subtitle">Please enter your username and password</h4>
            </div>
          </div>
          <div class="inputs">
            <el-form-item>
              <el-input
                placeholder="Email Address"
                v-model="form.email"
                style="width: 18vw; margin-left: 16vw ;"
                />
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                show-password
                placeholder="Password"
                v-model="form.password"
                style="width: 18vw; margin-left: 16vw;"
              />
            </el-form-item>
            <el-button
              type="primary"
              style="width: 18vw; height: 4vh; font-size: 18px"
              @click="login"
              >Sign in
            </el-button><br>
            <el-button type="text"
              style="margin-top: 1vh"
              @click="forgotPassword"
              ><u>Forgotten Password?</u>
            </el-button><br>
            <p id="error">{{err}}</p>
            </div>
        </div>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import firebase from 'firebase/compat/app';
import { useRouter } from "vue-router";
import 'firebase/compat/auth';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {

      const myRouter = useRouter();

      const form = reactive({
      email: '',
      password: ''
    })
    

    let err = ref("");

    const login = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(data => {
          console.log(data);
          myRouter.push('Welcome');
        })
        .catch(
          err.value = "Account not found. Please try again."
          // auth/wrong-password and auth/user-not-found //
        );
    }

    const forgotPassword = () => {
        myRouter.push('forgotPassword');
      }

      return { login, form, err, forgotPassword }
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
      height: 60vh;
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
    margin-top: 16vh;
    height: 4vh;
  }

  #subtitle {
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
  }

  .inputs {
    margin-top: 3vh;
  }

  #error {
    font-family: Tahoma;
    font-size: 18px;
    color: #D63737;
  }


</style>