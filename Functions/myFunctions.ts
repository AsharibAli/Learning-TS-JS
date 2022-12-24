function addTwo(num: number): number {
    return num + 2;
    // return "hello"
}


function getUpper(value: string) {
    return value.toUpperCase();
}


function signUpUser(name: string, email: string, isPid: boolean) {
    
}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


let myValue = addTwo(5)
getUpper("asharib")
signUpUser("asharib", "asharibarain4@gmail.com", false)
loginUser("a", "a@a.com")


// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "220 ok"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `heros is ${hero}`
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}


function handleEror(errmsg: string): never {
    throw new Error(errmsg)
}















export{}