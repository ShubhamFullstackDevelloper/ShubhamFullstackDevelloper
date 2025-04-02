

import java.util.Scanner;

class Scratch {
    public static void main(String[] args) {
//            Profitloss shubh = new Profitloss();
//            shubh.orinal();
//        Checknum check =new Checknum();
//        check.oddeven();
//        Bitwise checkt =new Bitwise();
//        checkt.oddevenbit();

        TernaryOp shubhk= new TernaryOp();
        shubhk.oddevenTer();



    }
}

class BillChecker {
    public void shubhamk() {
        Scanner number = new Scanner(System.in);
        System.out.println("Enter electrical units: ");
        int units = number.nextInt();
        int billAmount = 0;

        if (units <= 50) {
            billAmount = units * 7;
        } else if (units <= 150) {
            billAmount = units * 8;
        } else if (units <= 250) {
            billAmount = units * 12;
        } else {
            billAmount = units * 15;
        }

        int additionalCharge = (billAmount * 20) / 100;
        int total = billAmount + additionalCharge;

        System.out.println("The unit amount is: " + billAmount);
        System.out.println("The additional charge is: " + additionalCharge);
        System.out.println("The total electrical bill amount is: " + total);
    }
}

class Logical {
    public boolean kakde() {
        Scanner number = new Scanner(System.in);
        System.out.println("Enter your email: ");
        String email = number.nextLine();
        System.out.println("Enter your password: ");
        int pass = number.nextInt();

        if (email.equals("shubhkakde@gmail.com") && pass == 12345) {
            System.out.println("Login successful");
            return true;
        } else {
            System.out.println("Login unsuccessful");
            return false;
        }
    }
}


class  member {
    public void discout() {
        Scanner number = new Scanner(System.in);
        System.out.println(" how many rupese you have: ");
        int value = number.nextInt();
        int checkvalue = 5000;
        System.out.println("you are  name : ");
        String name = number.nextLine();

        if (value == checkvalue) {
            System.out.println("you have 5000 rs");
            if (name == "Shubham") {
                System.out.println(" congralation  you got 30% discount");
            } else {
                System.out.println(" congralation  you got 5% discount");
            }
        } else {
            System.out.println("you don't have 500rs");


        }
    }
}

 class Profitloss{
    public void orinal(){
        Scanner number= new Scanner(System.in);
        System.out.println("enter you original price ");
        int originalprice= number.nextInt();
    System.out.println(" enter you selling price");
        int sellingprice= number.nextInt();
        if (originalprice<sellingprice){
            System.out.println(" You have profit of "+(originalprice-sellingprice));

        }else if(originalprice>sellingprice ){
            System.out.println(" You have loss of "+(originalprice-sellingprice));
        }else {
            System.out.println(" You have no  loss and no profit ");
        }


    }
 }

 class Checknum{
    public void oddeven(){
        Scanner number=new Scanner(System.in);
        System.out.println("enter you number");
        int check=number.nextInt();
        if (check%2==0){
            System.out.println("the number is even"+check);
        }else {
            System.out.println("the number is odd");
        }

    }
 }


 class Bitwise{
    public void oddevenbit(){
        Scanner number=new Scanner(System.in);
        System.out.println("enter you number");
        int check=number.nextInt();
        if ((check & 1)==0){
            System.out.println("num ber is even "+check);


        }else {
            System.out.println("the number is odd"+check);
        }

    }
 }

  class  BudgetCal{

    public void  calculator(){
        Scanner number =new Scanner(System.in);
        int budget=5000;
        System.out.println("enter your ammout ");
        int spedingamouunt=number.nextInt();


    }
  }

class TernaryOp {
    public void oddevenTer() {
        Scanner number = new Scanner(System.in);
        System.out.print("Enter your number: ");
        int input = number.nextInt();
        String result = (input % 2 == 0) ? "The number is even" : "The number is odd";
        System.out.println("The output is: " + result);


    }
}