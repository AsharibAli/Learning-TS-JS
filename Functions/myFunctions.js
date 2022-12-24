"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, isPid) {
}
let loginUser = (name, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("asharib");
signUpUser("asharib", "asharibarain4@gmail.com", false);
loginUser("a", "a@a.com");
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "220 ok"
// }
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map((hero) => {
    return `heros is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleEror(errmsg) {
    throw new Error(errmsg);
}
