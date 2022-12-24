interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string
    getCoupon(coupanname: string, value: number): number
}

const asharib: User = {
    dbId: 4,
    email: "ash@.com", 
    userId: 2004,
    googleId: "20000",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "asharib10", off: 10) => {
        return 10
    }

}