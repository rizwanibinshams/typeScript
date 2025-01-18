var user = {
    name: 'rizwan',
    age: 22
};
var admin = {
    f_name: 'riz',
    role: 'admin'
};
function getDetails(details) {
    return details;
}
var userValue = getDetails(user);
var adminValue = getDetails(admin);
console.log('admin name = ', adminValue.f_name);
console.log('user name = ', userValue.name);
