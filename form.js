// Global Variables
let students = [];

// entry function

function dataFunction() {
  // showing first page only
  document.getElementById("page-one").hidden = false;
  document.getElementById("show").hidden = true;
}

// showing second page only

// inputing data
function inputData() {
  console.log("inputData--");
  let information = {};
  information["firstName"] = document.getElementById("first-name").value;

  information["lastName"] = document.getElementById("last-name").value;

  information["contactNo"] = document.getElementById("contact-no").value;
  information["emailID"] = document.getElementById("email-id").value;

  information["addressl1"] = document.getElementById("address-l1").value;

  information["addressl2"] = document.getElementById("address-l2").value;

  information["addressl3"] = document.getElementById("address-l3").value;

  students.push(information);

  console.log("STUDENT--", students, information);
}

function listFunction() {
  console.log("listFunction");
  document.getElementById("page-one").hidden = true;
  document.getElementById("show").hidden = false;

  for (let i = 0; i < students.length; i++) {
    let obj = students[i];

    //Show data
    //html = obj.firstName

    //TAKE GLOBAL ARRAY
    //ADD HTML TO IT
    // SHOW IT

    // document.getElementById("name").innerHTML = obj.firstName + obj.lastName;

    // document.getElementById("contact").innerHTML = obj.contactNo;
    // document.getElementById("mail").innerHTML = obj.emailID;
    // document.getElementById("address").innerHTML =
    //   obj.addressl1 + obj.addressl2 + obj.addressl3;
  }
}

//     let  arrayOfStudent = [];
//     let student = {};
//      let i = 0;
//      while(i < 3){

//        student["firstName"] = prompt("Enter First Name =");
//       student["LastName"] = prompt("Enter Last Name = ");
//      arrayOfStudent.push(student)
//       i++;
//      }
//     ;

//    let j = 0;
//    while(j < arrayOfStudent.length){

//       let a = arrayOfStudent[j]

//        j++;
//        console.log("First Name =" , a.firstName , "Last Name =" , a.LastName);
//    }

// listing
// data storage

// clearing input
function clearFunction() {}
// submitision of input data

window.onload = function () {
  dataFunction();
};