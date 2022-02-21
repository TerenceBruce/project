<template>
  <div class="fpWrapper">
        <div class="fpContainer">
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
            <el-input
                placeholder="Email Address"
                style="width: 18vw; margin-top: 4vh;"
                v-model="email"
            /><br><br>
            <el-button
                type="primary"
                style="width: 18vw; height: 4vh; font-size: 18px"
                @click="sendEmail"
                >Send email
          </el-button>
            <div id="result">
                <p>{{result}}</p>
            </div>
        </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import 'firebase/compat/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    setup() {

        const email = ref("");
        const result = ref("");

        const sendEmail = () => {

            if (email.value) {

                const auth = getAuth();
                sendPasswordResetEmail(auth, email.value)
                    .then(() => {
                        console.log("email sent");
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                result.value = "If there is an account associated with this email address, you will receive a link to reset your password";

            } else {
                result.value = "Invalid Email Address";
            }

        }


        return { sendEmail, email, result }
    }
}
</script>

<style scoped>

    .fpWrapper {
        background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
        height: 90vh;
        padding-top: 10vh;
    }
  
  .fpContainer {
      width: 50vw;
      height: 50vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
  }

  .header {
    padding-top: 5vh;
    height: 20vh;
    text-align: center;
  }

  .h_left {
    float: left;
    width: 15vw;
    margin-left: 4.5vw;
    height: 15vh;
  }

  #logo {
    float: right;
  }

  .h_right {
    float: right;
    width: 30.5vw;
    height: 13vh;
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

  /* #subtitle {
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
  } */

  #result {
      font-family: Tahoma;
      font-size: 18px;
      color: #4C4B4B;
      width: 40vw;
      margin-left: 5vw;
  }

</style>