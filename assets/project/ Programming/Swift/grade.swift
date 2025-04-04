import Foundation

class CheckGrade {
    func gradeCheck() {
        print("Enter the grade: ", terminator: "")

        if let input = readLine(), let check = Int(input) {
            if check >= 90 {
                print("Your grade is A+")
            } else if check >= 80 {
                print("Your grade is B+")
            } else if check >= 70 {
                print("Your grade is C+")
            } else {
                print("Your grade is below C")
            }
        } else {
            print("Enter a valid input")
        }
    }
}

let obj = CheckGrade()
obj.gradeCheck()