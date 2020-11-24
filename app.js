//  ejercicio Fizz Buzz

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
,26,27,28,29,30,35,40,45,50,55,60,65,70,75,80,85,90,91,92,93,93,94,95,96,97,98,99,100];

for (i = 0; i < numeros.length; i++){
if ((numeros[i]% 3 === 0) && (numeros[i]% 5 === 0))
{
    console.log("Buzz");
}    else if ((numeros[i]% 5 === 0)){
console.log("Fizz");
}   else if ((numeros[i]% 3 === 0)){
    console.log("La Nacion");// Fizz Buzz
}
}