class Observer{
    constructor(value){
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
    defineReactive(obj,key,val){
        observer(val)
        Object.defineProperty(obj,key,{
            get(){
                return val
            },
            set(newVal){
                if(newVal === val)return
                obj[key] = val
            }
        })
    }
    
}
export function observer(data){
    if(typeof data === 'object') {
        return new Observer(data)  
    }
}