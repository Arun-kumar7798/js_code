var UsersModels = require('./user_model');

var userList = [];
userList.push(new UsersModels(1, "arun@gmail.com", '123'));
userList.push(new UsersModels(2, "two@gmail.com", '123'));
userList.push(new UsersModels(3, "three@gmail.com", '123'));
userList.push(new UsersModels(4, "four@gmail.com", '123'));
userList.push(new UsersModels(5, "five@gmail.com", '123'));

// userList.push('arun');

// function myData() {
//     return userList.map(function (d) {
//         var dt = JSON.stringify(d);
//         return JSON.parse(dt);
//     });
// };
// console.log(myData());


// list value in users  models
userList.forEach(function (v) {
    var val =`${(v.ids)},${v.email},${v.pwd}`;
    // console.log("data is *** ", JSON.parse(JSON.stringify(v)));
    // var mapVal = JSON.parse(JSON.stringify(v));
    console.log(val);



});


