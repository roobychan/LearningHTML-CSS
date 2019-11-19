# Javascript

## Parameter passed by value

```javascript
var test = (parm) => {
  parm.name ="a";
  parm = {
    name: "b"
  }
}

p = {
  name: "c"
}
test(p);

console.log(p.name);
```

## Array.splice

1. Start position
1. Delete length
1. insert elements

Return deleted elements

```javascript
var ary = ["a","b","c"];
var removed = ary.splice(1, 1, "3","4","5");
```

## Array Iteration

1. every  
  Return true if check on every elements returns true
1. fliter  
  Return the array with all elements returns true
1. forEach
1. map  
  Return the array the each element returns
1. some  
  Return true if check on any elements returns true

## Array Aggreation

```javascript
var values = [1,2,3,4,5];
var sum = values.reduce((prev, cur, index, array)=>{
  return prev + cur;
});
```

## Function

+ arguments.callee (Not allowed in strict mode) 
+ caller
+ this
+ length  
  number of parameters
+ prototype 
