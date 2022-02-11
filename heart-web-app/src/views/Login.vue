<template>
  <div class="wrapper">
        <el-form
        ref="formRef"
        :model="form"
        >
        <div class="container">
          <div class="header">
            <h1 id="title">Heart App</h1>
            <p id="subtitle">Please enter your username and password</p>
          </div>
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
    height: 22vh;
    padding-top: 5vh;
  }

  #subtitle {
    margin-top: 10vh;
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
  }

  #error {
    font-family: Tahoma;
    font-size: 18px;
    color: #D63737;
  }


</style>