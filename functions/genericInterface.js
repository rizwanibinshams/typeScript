var User = {
    name: 'rizwan',
    age: 22
};
var Admin = {
    name: 'riz',
    age: 22,
    role: 'admin'
};
function get(details) {
    return details;
}
var uDetails = get(User);
var aDetails = get(Admin);
console.log(uDetails);
console.log(aDetails);
