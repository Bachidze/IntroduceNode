/* class animal{
    constructor(name,age){
        this.animalName = name
        this.animalAge = age
    }

    getInfo(){
        console.log(`Name:${this.animalName} Age:${this.animalAge}`)
    }

}

class fish extends animal{
    constructor(name,age){
        super(name,age)
    }
    getAction(){
        console.log("I'm Swiming")
    }
}

class Hawk extends animal{
    constructor(name,age,speed){
        super(name,age)
        this.HawkSpeed = speed
    }

    getSpeed(){
        console.log(`Im Flying ${this.HawkSpeed}Km/h`)
    }

    getAction(){
        console.log("I'am Flying")
    }
}

const goldenFish = new fish("Shark",12)
goldenFish.getInfo()
goldenFish.getAction()


const letHawkSpeed = new Hawk('Hawk',19,200)

letHawkSpeed.getAction()
letHawkSpeed.getInfo()
letHawkSpeed.getSpeed() */

/* 
class Foo{
    constructor(initVal){
        this.Result = initVal
    }

    add(num){
        this.Result += num
        return this
    }

    getResult(){
        return this.Result
    }

    get Value(){
        return this.Result
    }

    set Value(num){
        if(num < 0){
            console.log('Impossible')
            return
        }
        this.Result = num
    }
} */

/* const number = new Foo()
number.Value = 10

console.log(number.add(10).Value) */


// რეკურსია
/* 
function factorial(num){
    if(num === 1){
        return num
    }

    return num *= factorial(num - 1)
}

console.log(factorial(6)) */

// იგივე ოღონფ For-ით
/* function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6)); */

// Bank Transactions

/* {
    time:,
    type:'deposit',
    amount:,
    id:123
} */

class BankAccoount{
    constructor(initValue = 0){
        this.Balance = initValue
        this.transitionHistory = []
    }

    addHistory(type,amount,id){
        const history = {
            type,
            date:new Date().toISOString(),
            amount,
            id
        }
        this.transitionHistory.push(history)
    }

    deposit(amount){
        this.Balance += amount
        this.addHistory('Deposit',amount)
    }

    WithDraw(amount){
        if(amount > this.Balance){
            console.log("Balance is not enougtj")
            return
        }

        this.Balance -= amount
        this.addHistory('WithDraw',amount)
    }

    transferMoneyToSomeone(amount,id){
        if(amount > this.Balance){
            console.log("Balance is not enougtj")
            return
        }

        this.Balance -= amount
        this.addHistory('TransferTSomeone',amount)
    }

    getBalance(){
        return this.Balance
    }

    getHistory(){
        return this.transitionHistory
    }
}

const user1 = new BankAccoount(100)
user1.deposit(400)
user1.transferMoneyToSomeone(50,'00231009')
user1.WithDraw(100)
console.log(user1.getBalance())
console.log(user1.getHistory())