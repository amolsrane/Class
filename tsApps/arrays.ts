let names=['Gol','Ball','Cat','Dog','E','Fog','Allu','Imran','Hoku','July','Amol','Sachin','virat','Nayna','Dhoni','taken','bryanmills',]



console.log("Length of names is ", names.length);

// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// for(let i in names){
//     console.log( names[i])
// }


// for(let i of names){
//     console.log(i)
// }
// names.push('Z')
// console.log('Push one Element in names as G',names)

// names.pop()
// console.log('pop one Element',names)


// passsing function to function, parametter function is called as callback function

// function printNames(s:string, i:number){
//     console.log('Name at Index'+ i +'='+ s)
// }

// names.forEach(printNames)

//inline call back function

// names.forEach(function(s:string,i:number){
//     console.log('Name at Index'+ i +'='+ s);
// });


// names.forEach((s:string,i:number)=>{
//     console.log('Name at Index'+ i +'='+ s);
// });

// names.forEach((s:string,i:number)=>{
//     console.log(`name at Index ${i}= ${s}`);
// });


// names.splice(1,1)
// console.log('splice one Element',names)

// let arrayM=[]
// for(let i=0;i<names.length;i++){
//     if(names[i].charAt(0)==="A"){
//         arrayM.push(names[i]);
//     }
// }


let arrayM=names.filter((s,i)=>{
    return s.charAt(0)==="A";
})

arrayM.forEach((s,i)=>{
    console.log(s)
})

// console.log("shift array ", names.shift())
// console.log('after shift',names)


// console.log("Unshift array ", names.unshift('Z'))
// console.log('after Unshift',names)


console.log("Sort array ", names.sort())

console.log("reverse array ", names.reverse())

console.log("shift array ", names.shift())
console.log('after shift',names)


console.log("Unshift array ", names.unshift('Z'))
console.log('after Unshift',names)

// expore sort,revers , shift, unshift methods of array