
// when the type is optional we can set it as required


type userr = {
    name:string;
    age?:number;
}


const uDetails:Required<userr>={
    age:22,
    name:'sagg'
}