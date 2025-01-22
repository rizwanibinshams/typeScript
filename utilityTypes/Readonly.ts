

type users ={
    name:string;
    age:number
}

let userDetails:Readonly<users>={
    name:'riz',
    age:20
}

//userDetails.name = "dddd"  ---> we cant access this 