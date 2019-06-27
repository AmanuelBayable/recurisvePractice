

//input(base,exponent)
//output power of base to exponent
function power (base,expo){
  if (expo === 1)return 1;
  return base * power(base, expo-1);
  }

//input int
// output factorial int* (int-1) * (int
function factorial(x){
  if (x === 0) return 1;
  return x * factorial(x-1);
}

//input array of Num
//output product of all

function productOfArray(arr){
  if (arr.length === 0){return 1};
  arr[0] * productOfArray(arr.slice(1));
}

//input int
//output sum of all the num from 0 to int

function sum(x){
  if(x === 0){return 0};
  return x + sum(x-1);
}

//input num
//output numth fibonnaci sequence

function fib(x) {
  if (x <= 2){return 1};
  return fib(x-2) + fib(x-1);
}
