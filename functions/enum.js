var statusType;
(function (statusType) {
    statusType[statusType["PENDING"] = 0] = "PENDING";
    statusType[statusType["COMPLETED"] = 1] = "COMPLETED";
    statusType[statusType["FAILED"] = 2] = "FAILED";
})(statusType || (statusType = {}));
function getStatus(orderId, status) {
    console.log(orderId, "==", status);
}
var results = getStatus('123', statusType.COMPLETED);
