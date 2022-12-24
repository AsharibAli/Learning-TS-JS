let score: number | string = 33

score = 44
score = "44"



type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let asharib: User | Admin = { name: "Asharib", id: 4 }

asharib = { username: "ash", id: 4 }
// function getDbId(id: number | string) {
//     //making some API calls 
//     console.log(`DB id is ${id}`);
// }

getDbId("4");
getDbId(4);

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  } 
}

// Arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"
