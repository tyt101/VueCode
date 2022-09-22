import Vue from "./index.js";
const vm = new Vue({
    el:'#app',
    data(){
        return {
            name:'tyt',
            age:18,
        }
    }
})
console.log(vm)