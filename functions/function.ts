

type Details = {
    name: string;
    age : number;
    salary ?: number;
    getName ?: () => void;
} 

//eg-1

// function getUserName(userDetails:Details){
//     return userDetails.name; 
// }

// let userDetails : Details = {
//  name : ' rizwan',
//  age : 22
// }

// console.log(getUserName(userDetails));


function getUserName({name,age}:{name:string,age:number}){
    retur n name;
}

console.log(getUserName({name:'rizwan',age:20}));