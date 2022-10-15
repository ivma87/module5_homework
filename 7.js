let arr = ["apple", "orange", "strawberry", 2, 3, 4, 5, 6, 7, 8, 9, "apple", "orange", "strawberry", NaN];
let evenQantity = 0;
let oddQantity = 0;
let nullQantity = 0;

arr.forEach(function (item, index, array) {
    if (typeof item !== 'number') { }
    else if (isNaN(item)) { }
    else if (typeof item == 'null') {
        nullQantity++
    } else {
        item % 2 !== 0 ? oddQantity++ : evenQantity++
    }
});
console.log(`Arr contains: 
${oddQantity} odd elements,
${evenQantity} even elements,
${nullQantity} null elements.`);
