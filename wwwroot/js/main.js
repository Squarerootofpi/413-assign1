var submit = $("#submitgradepercent");

/**
 * Submition listener, just generates the gradereport
 * */
submit.click( function () { //fix this in jquery
    console.log("starting click");
    generateGradeReport();
    console.log("printing");
});

// These are the grade weights.
const assignmentWeight = .5;
const groupProjectWeight = .1;
const quizWeight = .1;
const examWeight = .2;
const intexWeight = .1;

const failInputError = "One of more values were invalid (usually negative)!!! Try again!";
/*
Assignments
Group Projects
Quizzes
Exams
Intex
*/
function generateGradeReport() {
    try {
        let finalPercent = getFinalPercentCalculation();
        let letterGrade = getLetterGrade(finalPercent);
        alert("Final Grade is " + letterGrade + " with a percent of " + finalPercent.toString() + "%.");
    }
    catch (err) {
        alert(err)
        return;
    }
}

/**
 * gets the final percent calculation, throws error if bad input.
 * */
function getFinalPercentCalculation() {
    let scoreAssignments = $("#Assignments").val();
    let scoreGroupProjects = $("#GroupProjects").val();
    let scoreQuizzes = $("#Quizzes").val();
    let scoreExams = $("#Exams").val();
    let scoreIntexs = $("#Intex").val();
    console.log(scoreAssignments);
    console.log(scoreGroupProjects);
    console.log(scoreQuizzes);
    console.log(scoreExams);
    console.log(scoreIntexs);
    if (
        (!isValidGradePercent(scoreAssignments)) ||
        (!isValidGradePercent(scoreGroupProjects)) ||
        (!isValidGradePercent(scoreQuizzes)) ||
        (!isValidGradePercent(scoreExams)) ||
        (!isValidGradePercent(scoreIntexs))
    )
    {
        throw failInputError;
    }
    return (
        assignmentWeight * scoreAssignments +
        groupProjectWeight * scoreGroupProjects + 
        quizWeight * scoreQuizzes + 
        examWeight * scoreExams +
        intexWeight * scoreIntexs
        );
}

/**
 * Gets a letter grade from a percent
 * @param {number} number
 */
function getLetterGrade(number) {
    var grade = 'Calculation failed'
    if (number >= 93) { grade = 'A' } else
    if (number >= 90) { grade = 'A-' } else
    if (number >= 87) { grade = 'B+' } else
    if (number >= 83) { grade = 'B' } else
    if (number >= 80) { grade = 'B-' } else
    if (number >= 77) { grade = 'C+' } else
    if (number >= 73) { grade = 'C' } else
    if (number >= 70) { grade = 'C-' } else
    if (number >= 67) { grade = 'D+' } else
    if (number >= 63) { grade = 'D' } else
    if (number >= 60) { grade = 'D-' } else
    { grade = 'E' }
    return grade;
}
/**
 * These are the grade scales. 
 */
/*
'A'	 93
'A-' 90
'B+' 87
'B'	 83
'B-' 80
'C+' 77
'C'	 73
'C-' 70
'D+' 67
'D'	 63
'D-' 60
'E'	 0 */

/**
 * checks if a percent is valid
 * Currently anything less than 0 is valid: we allow greater than 100% because of extra credit. 
 * */
function isValidGradePercent(num) {
    console.log("isvalid:",num);
    l = (num > 1 && num <= 100);
    console.log(l);
    return l;
}