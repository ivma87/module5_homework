let arr = ["apple", "orange", "strawberry", 2, 3, 4, 5, 6, 7, 8, 9, "apple", "orange", "strawberry"];
let xTrue = 0;

arr.forEach(function (item, index, array) {
    let i = 0;
    for (let i = 0; i < arr.length - index - 1; i++)
        if (item === arr[i + 1 + index]) xTrue++
});

if (xTrue > 0) xTrue = true
else xTrue = false;

console.log(xTrue);