
let statusTp = {
    PENDING : 'pending',
    COMPLETED : 'completed',
    FAILED :'failed'

}


function getval(ordrId : string, sts : keyof typeof statusTp){
    console.log(ordrId,"==",sts);
    console.log(ordrId,'==',statusTp[sts]);
}

getval('123',"COMPLETED")