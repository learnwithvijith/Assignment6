let n = 10; 
let a = 0, b = 1, next;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  next = a + b;
  console.log(next);
  a = b;
  b = next;
}
