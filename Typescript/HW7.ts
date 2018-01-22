function exeOperation(param = Math.floor, ...numbers:number[]):number {
    return numbers.reduce((sum, cur) => {
         return sum+param(cur)
     },0)
 }
 exeOperation(undefined, 3.1, 7.9, 8.5)
 
 function double(num:number):number
 {
     return Math.pow(num,2)
 }
 exeOperation(double, 4, 7, 8);