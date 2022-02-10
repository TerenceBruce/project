<template>
  <div class="wrapper">
        <el-form
        label-width="150px"
        ref="formRef"
        :model="form"
        >
        <b>Login</b>
        <div class="container">
            <el-form-item label="Email">
            <el-input
            placeholder="Email Address"
            v-model="form.email"
            style="width: 16vw;"
            />
            </el-form-item>
            <el-form-item label="Password">
            <el-input
            type="password"
            show-password
            placeholder="Password"
            v-model="form.password"
            style="width: 16vw;"
            />
            </el-form-item>
        </div>
        <el-button
            type="primary"
            style="width: 10vw;"
            @click="login"
            >Sign in</el-button>
    </el-form>
    <h3 style="color: red;">{{err}}</h3>
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
            // auth/wrong-password and auth/user-not-found
          );
      }
      return { login, form, err }
  }
};
</script>

<style scoped>

    .container {
        margin-top: 1%;
        width: 24vw;
        margin-left: 35vw;
    }

    .error {
    color: red;
    font-size: 18px;
    }


</style>