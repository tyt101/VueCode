import Vue from "./index.js";
const vm = new Vue({
    el:'#app',
    data(){
        return {
            name:'tyt',
            age:18,
            hobbies:{
                name:'羽毛',
                time:20,
                deep:5
            },
            friends:[
                {name:'1111',age:22},
                {name:'222',age:33}
            ]
        }
    },
})
// vm._data.friends[0].name='222'
console.log(vm)