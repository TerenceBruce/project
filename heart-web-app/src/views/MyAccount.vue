<template>
  <div>My Account</div>
  <div class="container">
    <el-form
        class="left"
        ref="formRef"
        :model="form"
        label-position="top">
        <el-form-item label="Email Address/Username" >
            <el-input
                v-model="form.email"
                style="width: 20vw;"
                disabled/>
        </el-form-item>
        <el-form-item label="Contact Number" >
            <el-input
                v-model="form.number"
                style="width: 20vw;"/>
        </el-form-item>
        <el-form-item label="Address" >
            <el-input
                v-model="form.address"
                style="width: 20vw;"/>
        </el-form-item>
    </el-form>
    <el-form
        class="right"
        ref="formRef"
        :model="form"
        label-position="top">
        <el-form-item label="Name *" >
            <el-input
                v-model="form.name"
                style="width: 20vw;"
                required/>
        </el-form-item>
        <el-form-item label="Institution *" >
            <el-input
                v-model="form.institution"
                style="width: 20vw;"
                required/>
        </el-form-item>
        <el-form-item label="Postcode" >
            <el-input
                v-model="form.postcode"
                style="width: 20vw;"/>
        </el-form-item>
    </el-form>
    <el-button
        type="warning"
        style="width: 14vw; font-size: 16px"
        @click="resetPassword"
    >Reset Password</el-button>
    <el-button
        type="primary"
        style="width: 14vw; font-size: 16px"
        @click="updateDetails"
    >Update Details</el-button>
    <p>{{result}}</p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import 'firebase/compat/auth';
import { getAuth, sendPasswordResetEmail, onAuthStateChanged  } from "firebase/auth";
export default {
    mounted() {
        this.checkLogin()
    },
    setup() {

        let email = ref("");

        const checkLogin = () => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    email.value = user.email
                    populatePage();
                }
            });
        }

        const populatePage = () => {
            form.name = "tomtomtom";
            form.number = "123456789";
            form.institution = "MMU";
            form.email = email.value;
        }

        let result = ref("");
        const form = reactive({
            email: '',
            name: '',
            institution: '',
            number: '',
            address:'',
            postcode: ''
        })

        const resetPassword = () => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    sendPasswordResetEmail(auth, user.email)
                    .then(() => {
                        console.log("email sent");
                        result.value = "Email Sent";
                    })
                    .catch((error) => {
                        console.log(error);
                        result.value = "Something went wrong";
                    });
                }
            });            
        }
        const updateDetails = () => {
            console.log(form);
            if (form.name && form.institution) {
                result.value = "Details updated";
            } else {
                result.value = "Required fields cannot be left blank";
            }
        }

        return { resetPassword, updateDetails, result, form, populatePage, checkLogin, email}

    }
}
</script>

<style scoped>

  .container {
    width: 50vw;
    height: 70vh;
    background-color: white;
    margin-left: 10vw;
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

</style>