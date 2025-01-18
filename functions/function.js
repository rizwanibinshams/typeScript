//eg-1
// function getUserName(userDetails:Details){
//     return userDetails.name; 
// }
// let userDetails : Details = {
//  name : ' rizwan',
//  age : 22
// }
// console.log(getUserName(userDetails));
function getUserName(_a) {
    var name = _a.name, age = _a.age;
    return name;
}
console.log(getUserName({ name: 'rizwan', age: 20 }));
