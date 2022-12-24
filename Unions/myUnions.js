"use strict";
let score = 33;
score = 44;
score = "44";
let asharib = { name: "Asharib", id: 4 };
asharib = { username: "ash", id: 4 };
// function getDbId(id: number | string) {
//     //making some API calls 
//     console.log(`DB id is ${id}`);
// }
getDbId("4");
getDbId(4);
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Arrays
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
