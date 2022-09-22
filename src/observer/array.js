const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
console.log(arrayMethods)
const methodsToPatch = [
    "push",
    "pop",
    "unshift",
    "shift",
    "splice",
    "reverse",
    "slice"
]
methodsToPatch.forEach(method=>{
    arrayMethods[method] = function(...args){
        const result = arrayProto[method].apply(this,args)
        // 获取到实例
        const ob = this.__ob__          

        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                // slice(2)??  ====>  例如：splice(1,0,7,8)从第1位起删除0个元素，在第一位后面添加7，8
                inserted = args.slice(2)
                break;
            default:
                break;
        }
        if(inserted) ob.observerArray(inserted)
        return result
    }
})