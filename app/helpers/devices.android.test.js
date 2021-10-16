const devices_android = require("./devices.android")
// @ponicode
describe("devices_android.size", () => {
    test("0", () => {
        let callFunction = () => {
            devices_android.size(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            devices_android.size("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            devices_android.size("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            devices_android.size(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            devices_android.size(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            devices_android.size(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
