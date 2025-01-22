
//we can remove the value that won't need on from the type 


type ussr={
    name:string;
    age:number;
    salary: number
}

let usrd:Omit<ussr,"salary">={
    age:22,
    name:'riz'
}