function createStudentData(p,c,m) {
    const number = {
        maths: m,
        physics: p,
        chemistry: c
    };
    student = {};
    student.marks = number;
    student.totalMarks = function() {
        let sum = 0;
        for (let value of Object.values(student.marks)) {
            sum = sum + value
        }
        return sum;
    }
    student.percentage = function() {
        return student.totalMarks()/Object.values(student.marks).length;
    }
    student.result = function() {
        resultObj = {}
        resultObj.maths = (student.marks.maths>=40) ? 'Pass' : 'Fail';
        resultObj.physics = (student.marks.physics>=40) ? 'Pass' : 'Fail';
        resultObj.chemistry = (student.marks.chemistry>=40) ? 'Pass' : 'Fail';
        resultObj.finalReault = (resultObj.maths || resultObj.physics || resultObj.chemistry === 'Fail') ? 'Fail' : 'Pass';
        return resultObj;
    }

    return student;
}


