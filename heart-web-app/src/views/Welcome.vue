<template>
  <div>
    <div v-if="loggedIn">Logged in as <b>{{ email }}</b><br><br>
        <el-button type="warning" @click="changePassword">Reset Password</el-button>
        <el-button type="danger" @click="signOut">Sign out</el-button>
        <br><br>
        <div class="pageBody">
            ALL DATA GOES IN THIS DIV
        </div>
    </div>
    <div v-else>Not logged in.</div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    mounted() {
        this.checkLogin();
    },
    methods: {
        checkLogin() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    // console.log(user.email);
                    this.loggedIn = true;
                    this.email = user.email;
                } else {
                    this.loggedIn = false;
                }
            });
        },
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: "login" }
                );
            });
        },
        changePassword() {
            const auth = getAuth();
            sendPasswordResetEmail(auth, this.email)
            .then(() => {
                console.log("email sent");
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    data() {
        return { loggedIn: false };
    }
};

</script>

<style>

    .pageBody {
        background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
        height: 80vh;
    }

</style>