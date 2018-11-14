function createStudentData(p,c,m) {
    number = {
        maths: m,
        physics: p,
        chemistry: c
    };
    student = {};
    student.marks = number;
    student.totalMarks = function() {
        let sum = 0;
        for (value of Object.values(student.marks)) {
            sum = sum + value
        }
        return sum;
    }
    student.percentage = function() {
        return student.totalMarks()/Object.values(student.marks).length;
    }
    student.result = function() {
        const r = (student.percentage()>=40) ? 'Pass' : 'Fail';
        return r;
    }

    return student;
}


