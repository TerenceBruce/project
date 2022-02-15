<template>
  <div class="fpWrapper">
        <div class="fpContainer">
            <div class="fpHeader">
                <h1>Heart App</h1>
                <p id="subtitle">Please enter your email address</p>
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

    .fpHeader {
        padding-top: 2vh;
    }
  
  .fpContainer {
      width: 50vw;
      height: 40vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
  }

  #subtitle {
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
  }

  #result {
      font-family: Tahoma;
      font-size: 18px;
      color: #4C4B4B;
      width: 40vw;
      margin-left: 5vw;
  }

</style>