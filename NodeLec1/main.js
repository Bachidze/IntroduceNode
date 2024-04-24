/* console.log('hello')
process.exit()

setTimeout(() => {
    console.log('first')
}, 1000);

console.log('second')

process.on('exit',() => {
    console.log('Done Main Js')
})

 */

/* console.log(process.argv) */

/* 
 const fs = require('fs')

fs.readFile('test.txt','utf-8',(err,data)=>{
    
if(err){
    console.log('File Does nt read')
    return
}else{
    console.log(data,'Read Data')
}
}) 

fs.readFile('second.txt','utf-8',(err,data) =>{
    console.log(data)
}) */

const fs = require('fs/promises')
const { stringify } = require('querystring')
const users = [
    {
        name:'gela',
        age:12,
        isSmoker:true,
        price:1
    },
    {
        name:'gela',
        age:12,
        isSmoker:true,
        price:1
    },
]

async function main(){
    try{
        await fs.writeFile('data.json',`${JSON.stringify(users)}`)
        

/* 
        const first = await fs.readFile('test.txt','utf-8')
        console.log(first)
        const second = first.split('').reverse().join('')
        console.log(second)
        await fs.writeFile('third.txt',`Reversed:${second}`) */
        
       /*  const firsttxt = await fs.readFile('test.txt','utf-8')
        console.log(firsttxt)

        const count = firsttxt.split(' ').reduce((tot,curr) => tot + Number(curr),0)

        await fs.writeFile('third.txt',`Sum:${count}`)
        console.log(count) */

     /*    const data1 = await fs.readFile('test.txt','utf-8')
        console.log(data1)
        const data2 = await fs.readFile('second.txt','utf-8')
        console.log(data2) */

        /* const promise1 =  fs.readFile('test.txt','utf-8')
        
        const promise2 =  fs.readFile('second.txt','utf-8') */
    2
      /*    await fs.writeFile('third.txt',`${data1} ${data2}`) */

      /*    const mypromise = new Promise((rej,res) => {
            console.log(data1)
         })
         const second = new Promise((rej,res) => {
            console.log(data2)
         })

         Promise.all([mypromise,second]).then(res => {
            console.log(res)
         }) */
    }catch(er){
console.log(er,'err')
    }
}

main()

/* const fs = require('fs')
fs.writeFile('third.txt','Hello World',(err,data) => {
    if(err){
        console.log('Erroria Errori')
    }
        console.log('Data Successed')
    
}) */


