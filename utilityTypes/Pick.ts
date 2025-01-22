

// we can take only required values from the type


type usss ={
    name:string;
    age:number,
    salary:number
}


let uds : Pick<usss,"name" | 'salary'>={
    name:"riznx",
    salary:20900
}