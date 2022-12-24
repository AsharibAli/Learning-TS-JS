interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrail: ()=> string
    startTrail(): string
    getCoupon(coupanname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User{
 role: "admin" | "ta" | "learner"
}

const asharib: Admin = {
    dbId: 1234,
    email: "ash@.com",
    userId: 123,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "asharib", off: 10) => {
        return 10
    }
}

export{}