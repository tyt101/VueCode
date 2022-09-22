import {initStatus} from './status.js'
export function initMixin(Vue){
    Vue.prototype._init = function(options){
        const vm = this
        // 初始化基本配置：el，store，router，render,data,props,methods,computed等
        vm.$options = options
        // 初始化状态, （进行二次处理,在这里给data添加响应式）
        initStatus(vm)
    }
}