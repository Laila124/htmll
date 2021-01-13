var sum =2+2;
var sub = 2-2;
var mult = 2*2;
var divi= 10/5;

alert("2+2="+sum);
alert("2-2="+sub);
alert("2*2="+mult);
alert("10/5="+divi);
 

var numone = prompt ("enter the first number: ");
var numtow = prompt ("enter the second number: ");
var operation = prompt ("defin the operation as following: + ,- ,* ,/ ");

calculation(operation);

function calculation(operation) {
if (operation == "+") {
    sum ();
}else if (operation == "-") {
    sub ();
    
} if (operation == "*") {
    multe();
}if (operation == "/") {
    divition ();
} else {
    alert ("refresh the page and enter the operation");
    
}     

}
function sum () {
    var sumtotal = parseInt (numone) + parseInt(numtow);
    alert (sumtotal);
}

function sub () {
    var subtotal = parseInt (numone)- parseInt (numtow);
    alert (subtotal);
}

function multe () {
var multetotal = parseInt (numone) * parseInt (numtow);
alert (multetotal);
}

function divition() {
    var divitotal = parseInt (numone) / parseInt (numtow);
    alert (divitotal);
}