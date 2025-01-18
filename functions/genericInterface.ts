

interface UserDetails {
    name:string;
    age : number;
}

interface AdminDetails extends UserDetails{
    role: string
}


let User : UserDetails ={
    name:'rizwan',
    age:22
}

let Admin : AdminDetails = {
    name:'riz',
    age:22,
    role : 'admin'
}

function get<T>(details:T):T{
 return details
}

let uDetails = get<UserDetails>(User);
let aDetails = get<AdminDetails>(Admin);


console.log(uDetails);
console.log(aDetails);