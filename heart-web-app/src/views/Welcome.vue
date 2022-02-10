<template>
  <div>
    <div v-if="loggedIn">Logged in as {{ email }}<br><button class="but" @click="signOut">Sign out</button></div>
    <div v-else>Not logged in.</div>
    
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
    mounted() {
        this.checkLogin();
    },
    methods: {
    checkLogin() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.email);
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
    }
    },
    data() {
        return { loggedIn: false };
    }
};

</script>

<style>

</style>