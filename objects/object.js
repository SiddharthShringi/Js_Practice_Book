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
        resultObj.finalReault = (resultObj.maths === 'Pass' || resultObj.physics=== 'Pass' || resultObj.chemistry === 'Pass') ? 'Pass' : 'Fail';
        return resultObj;
    }

    return student;
}


//Another way of creating a object

let studentFunction = {
    total: function() {
        let sum = 0;
        for (let value of Object.values(this.marks)){
            sum += value;
        }
        return sum;
    },

    percent: function() {
        return this.total()/Object.values(this.marks).length;
    },

    result: function() {
        resultObj = {}
        resultObj.maths = (student.marks.maths>=40) ? 'Pass' : 'Fail';
        resultObj.physics = (student.marks.physics>=40) ? 'Pass' : 'Fail';
        resultObj.chemistry = (student.marks.chemistry>=40) ? 'Pass' : 'Fail';
        resultObj.finalReault = (resultObj.maths === 'Pass' || resultObj.physics=== 'Pass' || resultObj.chemistry === 'Pass') ? 'Pass' : 'Fail';
        return resultObj;
    }
}

// function studentObject(p, c, m) {
//     let newStudent = Object.create(studentFunction);
//     newStudent.physics = p;
//     newStudent.maths = m;
//     newStudent.chemistry = c;
//     return newStudent;
// }



// Object with prototype
function User(p,c,m) {
    this.physics = p;
    this.maths = m;
    this.chemistry = c;
}

User.prototype.total = function() {
    return (this.physics + this.chemistry + this.maths);
}
