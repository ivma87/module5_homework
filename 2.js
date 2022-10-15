let x = true;

switch (typeof x) {
    case 'number':
        console.log('x - число');
        break;
    case 'boolean':
        console.log('х - логический тип');
        break;
    case 'string':
        console.log('х - строка');
        break;
    default:
        console.log('результат не равен числам 1,2,3');
};
