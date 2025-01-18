

type userDetails = {
    name:string;
    age:number
}

type adminDetails ={
    f_name : string;
    role : string;
}

// we can write like this also 

type admindetails = userDetails & {
    role:string;
}

let user = {
  name:'rizwan',
  age: 22
}

let admin = {
    f_name : 'riz',
    role : 'admin'
}



function getDetails<T>(details:T):T{
    return details
}

let userValue = getDetails<userDetails>(user);
let adminValue = getDetails<adminDetails>(admin)

console.log('admin name = ',adminValue.f_name);
console.log('user name = ',userValue.name);