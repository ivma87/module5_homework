let num = +prompt('Enter number for even check');
let checkResult;
if (typeof num !== 'number') { checkResult = 'You\'ve entered not a number' }
else if (isNaN(num)) { checkResult = 'And again, you\'ve entered not a number' }
else {
    checkResult = num % 2 !== 0 ? 'odd' : 'even'
};
console.log(checkResult);