

// we can add key and values dynamicaly


type Food = Record<string,string | number>;

// or we can make like this also 

type Foods = {
    [index:string]:any
}

let food : Food={
    KFC:"chicken",
    PIZZA:"mutton"
}