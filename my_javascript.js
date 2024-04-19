// // console.log();
// var a = ["arun", "guru", "arun raj", "ravi", "ek vilan"];
// b = [...a];

// // console.log(a);

// var b = [];
// // console.log(`B: ${b.indexOf("arun raj")}`);
// // var d = b.includes("rav");
// // var d = b.indexOf("arun");

// const d = new Date();
// // console.log(d)


/* const d = new Date();

const year = d.getFullYear();
console.log("year ", year);
const month = (d.getMonth() + 1).toString().padStart(2, '0');
console.log("year ", month);
const day = d.getDate().toString().padStart(2, '0');
console.log("year ", day);

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate); // Output: e.g., 2024-04-19
 */


const d = new Date();

const year = d.getFullYear();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

for (let i = 0; i < months.length; i++) {

    // console.log("months index :" + months.indexOf(months[i]), ` *** name of months : ${months[i]}`,);

    // console.table([{name: months.indexOf(months[i])}]);
}



const monthName = months[d.getMonth()];
console.log("d.getMonth() ", d.getMonth());
const day = d.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${monthName}-${day}`;

console.log(formattedDate); // Output: e.g., 2024-April-19
