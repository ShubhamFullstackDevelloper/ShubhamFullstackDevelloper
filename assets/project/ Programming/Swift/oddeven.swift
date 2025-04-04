import Foundation

class CheckNum {
    func findNum() {
        print("Enter the number: ", terminator: "")

        if let input = readLine(), let check = Int(input) {
            if check % 2 == 0 {
                print("The number is even")
            } else {
                print("The number is odd")
            }
        } else {
            print("Enter a valid number")
        }
    }
}

let obj = CheckNum()
obj.findNum()