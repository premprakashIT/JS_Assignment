// function PrintPage(){
//     window.print();
// }

function bodyload(){
    //1.................................Using java script with values and dom hierarchy chain.................

    // window.document.images[0].src="eye.jpg";
    // window.document.forms[0].elements[1].value="Register";
    // window.document.forms[1].elements[1].value="Login";


    //2...............using javascript with name of elements
    // pic.src="eye.jpg";
    // frmRegister.btnRegister.value="Register";
    // frmLogin.btnLogin.value="Login"; 


    //3..............using javascript with id of elements

    // document.getElementById("pic").src="eye.jpg";
    // document.getElementById("btnRegister").value="Register";
    // document.getElementById("btnLogin").value="Login";

    //4................QuerySelector()

    document.querySelector("#pic").src="eye.jpg";
    document.querySelector("#btnRegister").value="Register";
    document.querySelector("#btnLogin").value="Login";


}