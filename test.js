var test = ( parm ) => {
  parm.name ="a";
  parm = {
    name: "b"
  };
};

p = {
  name: "c"
};
test(p);

console.log(p.name);

var ary = ["a","b","c"];
var removed = ary.splice(1, 1, "3","4","5");

console.log(ary)