import Foundation
class  checkage{
    func CheckEligle(){
        print ("enter you Age in number")
 if let Input = readLine() , let check = Int(Input){
            if check >= 18 {
                print ("you are eligible for vote")
            } else{
                print ("you are not eligigle for vote")
            }
        }
    }
}

let obj = checkage()
obj.CheckEligle()