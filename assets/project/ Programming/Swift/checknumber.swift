import Foundation

class CheckNum {
    func findNum() {
        print("Enter the number: ", terminator: "")

        if let input = readLine(), let check = Int(input) {
            if check > 0 {
                print("The number is  te postive")
            } else if check < 0 {
                print("The number is negative")
            }
            else{
                print("the number is zero")
            }
        } else {
            print("Enter a valid number")
        }
    }
}

let obj = CheckNum()
obj.findNum()