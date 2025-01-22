

enum statusType{
    PENDING,
    COMPLETED,
    FAILED
}


function getStatus(orderId : string,status : statusType){
    console.log(orderId, "==" ,status);
}

let results = getStatus('123',statusType.COMPLETED)
