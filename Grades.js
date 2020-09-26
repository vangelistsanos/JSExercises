function ranking(score) {

    if (typeof score !== 'number') {
        return 'Not a valid score'
    }

    let grade = '';

    if (score < 20) {
        grade = 'F'
    } else if (score < 40) {
        grade = 'D'
    } else if (score < 60) {
        grade = 'C'
    } else if (score < 80) {
        grade = 'B'
    } else if (score <= 100) {
        grade = 'A'
    } else {
        grade = 'Something Superb !!!!'
    }

    return grade;

}


console.log(ranking(30));
console.log(ranking(60));
console.log(ranking(90));
console.log(ranking(150));
console.log(ranking('adssadasd'));