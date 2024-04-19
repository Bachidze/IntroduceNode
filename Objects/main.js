/* const user = {
    name:'bachi',
    age:12,
    getAge: function(){
        console.log(this.age)
    }
}

user.getAge() */






//Class

/* class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    

    getName(){
        console.log(this.name)
    }
}

class SuperStudent extends Student{
    getSuper(){
        console.log('I am super gela')
    }
}
const superStudent = new SuperStudent('gela',12)
superStudent.getSuper()

const student = new Student('gio',16)
student.getName() */


class Claculator{
    constructor(initialValue = 1){
        this.num = initialValue   
    }
    add(n){
        this.num += n
        return this
    }
    Substract(n){
        this.num -= n
        return this
    }
    Multiply(n){
        this.num *= n
        return this
    }

    getResult(){
        return this.num
    }
}

const calculator = new Claculator(10)
console.log(calculator.add(10).Substract(2).Multiply(3).getResult())





// Constructor Old Fnc

/* function Student(name){
    this.name = name
    this.getName = () => {
        console.log(this.name)
    }
}

const student = new Student("Bachi Bachi")
student.getName()
 */








/* const obj1 = {
    name:'giorgi',
    color:'blue'
}
Object.freeze(user)


function foo(obj){
    const newObj = obj
    obj.price = 'priceless'
}

foo(user)
console.log(user) */




// reference

/* const obj2 = obj1

console.log(obj2)

obj2.name = 'aleko'
console.log(obj1) */

// value

/* 
let name1 = 'gela'
let name2 = name1
name2 = 'Givi'
console.log(name1) */






/* const obj1 = {
    name:'giorgi',
    color:'blue'
}

const obj2 = {
    year:22,
    name:'dogdogi'
}

const merge = Object.assign(obj1,obj2)
const merge2 = {...obj1,...obj2}

console.log(merge)
console.log(obj1)
 */





/* const result = []
for(let key in user){
    result.push([key,user[key]])
}

console.log(result) */


/* for(let [key,value] of Object.entries(user)){
    console.log(key,'keys')
    console.log(value,'Values')
}

 */
/* const values = Object.values(user)
console.log(values)
const entries = Object.entries(user)
console.log(entries) */


/* for(let key in user){
    console.log(user[key])
} */

/* const key = Object.keys(user)
for(let i of key){
    console.log(user[i])
} */

/* console.log(Object.keys(user)) */





