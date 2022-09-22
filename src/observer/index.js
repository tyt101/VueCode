import { arrayMethods} from './array.js'
class Observer{
    constructor(value){
        //给每个响应式数据增加一个__ob__值，来防止已经被响应式观察过的数据被重复观察，同样可以用__ob__来获取数据本身
        Object.defineProperty(value,'__ob__',{
            value:this,                 //this指向数据本身
            enumerable:false,
            configurable:true,
            writable:true
        })
        //对数组单独处理
        if(Array.isArray(value)){
            value.__proto__ = arrayMethods
            this.observerArray(value)
        }
        this.walk(value)
    }
    walk(data){
        const keys = Object.keys(data)
        for(let i = 0; i < keys.length;i ++){
            const key = keys[i]
            const value = data[key]
            defineReactive(data,key,value)
        }
    }
    // defineProperty的缺点：       对象新增或者删除的属性无法被set监听到。只有对象本身的属性才会被劫持
    defineReactive(obj,key,val){
        // 递归使无论对象还是数组。所有的数据都进行了观测
        observer(val)
        Object.defineProperty(obj,key,{
            get(){
                console.log("获取值：",val)
                return val
            },
            set(newVal){
                if(newVal === val)return
                console.log("设置新值:",val)
                obj[key] = val
            }
        })
    }
    observerArray(item){
        for(let i = 0 ; i< item.length;i++){
            observer(item[i])
        }
    }
    
}
export function observer(data){
    if(typeof data === 'object') {
        return new Observer(data)  
    }
}