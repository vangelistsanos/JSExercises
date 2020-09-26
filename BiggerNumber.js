/* Simple function that compares two numbers */
function findBiggerNumber(a,b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        return 'No valid input.... need both arguments to be numeric ....'
    }

    if (a>b) {
        return a + ' is bigger than ' + b
    } else if (a<b) {
        return a + ' is smaller than ' + b
    } else {
        return a + ' and ' + b + ' are equal'
    }
}


console.log(findBiggerNumber(3,3))


