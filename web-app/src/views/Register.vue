<template>
  <div class="wrapper">
        <el-form
        label-width="150px"
        ref="formRef"
        :model="form"
        >
        <b>Register Here</b>
        <!-- <div class="email">
            <input type="email" v-model="form.email" placeholder="Email" />
        </div> -->
        <div class="container">
            <el-form-item label="*Email">
            <el-input
            placeholder="Email Address"
            v-model="form.email"
            style="width: 16vw;"
            />
            </el-form-item>
            <el-form-item label="*Password">
            <el-input
            type="password"
            show-password
            placeholder="Password"
            v-model="form.password1"
            style="width: 16vw;"
            />
            </el-form-item>
        </div>
        <el-button
            type="primary"
            style="width: 10vw"
            @click="register"
            >Create Account</el-button>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  setup() {

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

      const register = () => {
          console.log("hit");
          console.log(form.email);
          console.log(form.password1);
      }
      return { register, form }
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