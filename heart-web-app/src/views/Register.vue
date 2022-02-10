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
            style="width: 12vw"
            @click="register"
            >Create Account</el-button>
    </el-form>
    <h3 style="color: red;">{{err}}</h3>
    <h3 style="color: green;">{{success}}</h3>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  data() {
    return {
      email: "",
      password: "",
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

    let err = ref("");
    let success = ref("");

      const register = () => {
          firebase
          .auth()
          .createUserWithEmailAndPassword(form.email, form.password1)
          .then(() => {
            // console.log("here");
            // this.$router.replace({ name: "login" });
            success.value = "Registration Succesful. You can now login."
            err.value = "";
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
      }
      return { register, form, err, success }
  }
};
</script>

<style scoped>

    .container {
        margin-top: 1%;
        width: 24vw;
        margin-left: 35vw;
    }

</style>