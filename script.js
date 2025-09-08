let a = [2, -2, -4, 9, 80, 76, 89];
let sum = 0;
for (let i = 0; i < a.lenght; i++) {
  if (a[i] > 0) {
    sum = sum + a[i];
  }
}

console.log(sum);
