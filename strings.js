//Write a JavaScript function to check whether an `input` is a string or not.
let string = prompt("Ingresa una string"); //Siempre dará cadena porque el prompt siempre arroja una cadena a menos que se convierta el valor
if(typeof(string) != "number"){
    console.log("Es una cadena");
}else{
    console.log("Es un numero")
}


//Implement the slice method for returning the word “apples”.
let txt = "I eat apples the whole day";
console.log(txt.slice(6,12));

//Implement the correct String method for replacing the word “Hello” with the word “Hi”.
let txt2 = "Hello world!";
console.log(txt2.replace('Hello', 'Hi'));
//Convert the txt value to uppercase.
console.log(txt2.toUpperCase());
//Convert the txt value to lowercase.
console.log(txt2.toLowerCase());
