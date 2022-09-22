export function initStatus(vm){
    const opt = vm.$options
    if(opt?.props){
        initProps(vm)
    }
    if(opt?.methods){
        initMethods(vm)
    }
    if(opt?.data){
        initData(vm)
    }
    if(opt?.computed){
        initComputed(vm)
    }
    if(opt?.watch){
        initWatch(vm)
    }
}

// 初始化data
function initData(vm){
    let data = vm.$options.data
    // 将data中的属性放入vm实例中
    data = vm._data = typeof data === 'function' ? data.call(vm):data||{}
    // 响应式
    for(let key in data){
        proxy(vm,`_data`,key)
    }
}
// 响应式关键之一：Object.defineProperty
function proxy(obj,sourceKey,key){
   Object.defineProperty(obj,key,{
        get(){
            return obj[sourceKey][key]
        },
        set(val){
            obj[sourceKey][key] = val
        }
    })
}