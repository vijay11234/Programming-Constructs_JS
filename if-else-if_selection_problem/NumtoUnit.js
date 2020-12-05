let x = prompt("Enter the value: ");
document.write(x);

let NumUnit=1;
let NumTen=10;
let NumHundred=100;

if ( x == NumUnit )
     console.log("Unit");
else if ( x == NumTen )
     console.log("Ten");
else if ( x == NumHundred )
     console.log("Hundred");
else
     console.log("Thousand");