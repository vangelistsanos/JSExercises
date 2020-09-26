sum = 0;
for (x = 1; x <= 10; x++) {
sum += Math.pow(x,2);
}

console.log('FOR LOOP SUM ' +sum)


sum = 0
x = 0;
while (x <= 10) {
    sum += Math.pow(x,2);
    x++;
}

console.log('WHILE LOOP SUM ' + sum)


sum = 0;
x = 0;
do {
    sum += Math.pow(x,2);
    x++;
} while (x<=10)

console.log('DO LOOP SUM ' + sum)