/* let a = 2
while (a <= 100) {
    if (a == 2 || a == 3 || a == 5 || a == 7) {
        console.log(a++);
        continue
    }
    else if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {
        a++
        continue
    }
    console.log(a++);
} */


/* let a = []
for(let i = 0; i <= 9; console.log(a.push(i++))) {} */



let a = ''
for (let i = 1; i <= 20; i++) {
    console.log(a += 'x');
}

