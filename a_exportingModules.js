 export var color = "red";
 export function setName(newName){
    color = newName;
 }
 let name  = "Sanvika"

 export const magicNumber = 7;

 export function sum(num1 , num2){
    return num1 + num2;
 }

 export class Rectanngle {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
 }

 function substract(num1,num2){
    return num1 - num2;
 }

 function multiply(num1,num2){
    return num1 * num2;
 }

 export { substract , multiply }
