import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
const SECRET = process.env.SECRET;

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp(SECRET);

//exports our db so we can use it elsewhere
export const db = firebase.firestore();

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')