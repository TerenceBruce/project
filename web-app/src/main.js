import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyADuTZ1K9rvWQDNlH6snazJe4Qmp4Q7p78",
    authDomain: "heart-project-4bb9b.firebaseapp.com",
    projectId: "heart-project-4bb9b",
    storageBucket: "heart-project-4bb9b.appspot.com",
    messagingSenderId: "24818209908",
    appId: "1:24818209908:web:9a60e675f2f5ae4a7e6d21",
    measurementId: "G-JY0C76GLHH"
  };

firebase.initializeApp(firebaseConfig);

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

