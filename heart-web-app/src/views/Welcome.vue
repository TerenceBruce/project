<template>
  <div>
    <div v-if="loggedIn">Logged in as <b>{{ email }}</b><br><br>
        <!-- <el-button type="warning" @click="changePassword">Reset Password</el-button> -->
        <el-button class="btn"
            type="primary"
            @click="loadMyAccount"
            >My Account
        </el-button>
        <el-button type="danger" @click="signOut">Sign out</el-button>
        <br><br>
        <div class="pageBody">
            <h1>Welcome to the heart app.</h1>
            <h4>Access the help page for information about how to use the site.</h4>
            <el-button class="btn"
                type="primary"
                @click="loadNews"
                >News Page
            </el-button>
        </div>
    </div>
    <div v-else>You are not logged in.</div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from "vue-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    mounted() {
        this.checkLogin();
    },
    setup() {
        const myRouter = useRouter();
        const loadMyAccount = () => {
            myRouter.push('myaccount');
        }

        const loadNews = () => {
            myRouter.push('news');
        }

        return {loadMyAccount, loadNews}
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
        height: 100vh;
        padding-top: 4vh;
        color: white;
    }

</style>