// const User = {
//     name: "Asharib",
//     email: "asharibarain4@gmail.com",
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }
// // Odd Behavior
// let newUser = { name: "Asharib", isPaid: false, email: "ash@.com" }
// createUser(newUser)

// function createCourse(): {name: string, price: number}{
//     return {name: "reatcjs", price: 99}
// }


// // Tyoe Aliases
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function updateCustomer(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// updateCustomer({name: "", email: "", isActive: true})


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credrdDetails?: number;
}

let myUser: User = {
    _id: "123",
    name: "h",
    email: "ash@.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}


type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "ash@.com"
// myUser._id = "123"

export {}