

function resolveToString():Promise<string>{
    return new Promise((resolve,reject)=>{
        resolve('this is resolved string')
    })
}


resolveToString()
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
    
})



async function rsTostring():Promise<string>{
    return new Promise((resolve,reject)=>{
        resolve('resolved')
    })
}

async function getval(){
    try {
        let result = await rsTostring();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getval()