let numbers = [];
function elements()
{
  const input = document.getElementById("array").value;
  numbers = input.split(",").map((num) => parseFloat(num.trim()))

}

function result(text) 
{
  document.getElementById("result").innerText = text;
}

function sort() 
{
elements();
  result("Sorted: " + numbers.sort((a,b)=>a-b));
}
function add(){
  elements();
  let sum = numbers.reduce((acc,n)=>acc+n,0);
  result("Add: "+sum);
}
function reverse() 
{
elements();
  let rev=numbers.reverse()
  result("Reversed:"+ rev);
}

function even() 
{
elements();
  let e=numbers.filter((num)=>num%2===0)
  result("Evens Numbers: " + e);
}

function odd() 
{
elements();
  let o=numbers.filter((num)=>num%2!==0)
  result("Odd Numbers: " + o);
}

function findMax() 
{
elements();
let max=0;
numbers.forEach((ma)=>{
    if(ma>max)
        max=ma;
});
result("Max: "+max);
}

function findMin() 
{
elements();
let min=numbers[0];
numbers.forEach((mi)=>{
    if(mi<min)
        min=mi;
});
result("Min: "+min);
}

function avg()
{
  elements();
  let avg=numbers.reduce((acc,num)=>acc+num,0)/numbers.length;
  result("Average: "+avg)
}
