class Scratch {
    public static void main(String[] args) {
        Tshirt shubham = new Tshirt("black");
        shubham.setChar();

        
        shubham.setName("shubham", "mediam");


    }
}

class Tshirt{
    String clientName ;
    String tShirtColour = "yellow";
    String companyLogo = "enjoy Programming ";
    String tShirstSize ;

    Tshirt(String color){
     System.out.println("welcome to enjoy programming");
     clientName = "tenco";
     tShirtColour = "pink";


    }

    void setName(String username, String Size){
        clientName= username;
        tShirstSize = Size;

    }
     void  setChar(){
        System.out.println("the student name is "+clientName );
         System.out.println("the Tshirt colour  "+tShirtColour );
         System.out.println("the Tshirt complany name   "+companyLogo );
         System.out.println("the Tshirt colour  "+ tShirstSize );

     }

}