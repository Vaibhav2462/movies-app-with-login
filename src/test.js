
// testuser
// ruDWLeHr9K7ErsUS



// let clearObj = mySetTimeout(fn , 2000)
// function mySetTimeout(fn,delay){
//     let clearObj = {
//         shallIrun:true
//     }
//     function later(){
//         if(clearObj.shallIrun == false){
//             return
//         }
//         fn()
//         setTimeout(later,delay)
//     }
//     if(clearObj.shallIrun == true){
//         setTimeout(later,delay)
//     }
//     return clearObj
// }
// function fn(){
//     console.log("i am running")
// }
// function myclear(clearObj){
//     clearObj.shallIrun = false
// }
// setTimeout(function(){
//     myclear(clearObj)
//     console.log("END")
// },11000)

// let object = {
//     newObj:{
//         obj2 :{
//             obj5 :{
//                 one:1,
//                 three:3
//             }
//         }
//     },
//     obj3:{
//         obj4:{
//             two:2
//         }
//     },
//     a:10
// }

// // for(let i in object){
// //     console.log(i)
// // }


// function flatten(object){
//     let res = {}
//     for(let i in object){
//         if(typeof object[i] == "object"){
//             let sobj = flatten(object[i])
//             for(let j in sobj){
//                 res[i+'.'+j] = sobj[j]
//             }
//         }
//         else{
//             res[i] = object[i]
//         }
//     }
//     return res
// }


// let ans = flatten(object)
// console.log(ans)


// function pro(){
//     return new Promise (function(resolve,reject){
//         console.log("inside promise")
        
//         setTimeout(function(){
//             resolve(20)
//         },2000)
//         console.log("promise end")
//     })
// }
// let obj = pro()
// setTimeout(function(){
//     console.log(obj)
// },3000)
// obj.then(function(data){
//     console.log(data)
// })


// console.log(1)
// setTimeout(function(){
//     console.log(3)
// })
// console.log(4)
// setTimeout(function(){
//     console.log(2)
// })
// Promise.resolve().then(function(){
//     console.log(5)
// })
// console.log(6)

// let arr1 = [1,2,3,4]
// let arr2 = [6,7,8,9]

// console.log(arr1.push(arr2))