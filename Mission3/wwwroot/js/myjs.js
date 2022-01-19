//this takes the info from the webpage and calculates the final grades based on percentages given
$("#calGrade").click(function () {
    //get the input from the page
    let assigGrade = $("#assigScore").val();
    let assigQuiz = $("#quizScore").val();
    let assigExam = $("#examScore").val();
    let assigIntex = $("#intexScore").val();
    let assigGroup = $("#groupScore").val();

    //make sure there is a value
    if (assigQuiz == "") {
        assigQuiz = 0;
    }
    if (assigIntex == "") {
        assigIntex = 0;
    }
    if (assigGroup == "") {
        assigGroup = 0;
    }
    if (assigGrade == "") {
        assigGrade = 0;
    }
    if (assigExam == 0) {
        assigExam = 0;
    }

    //calculate the final grade 
    let finalScore = assigGrade * 0.55;
    finalScore += assigQuiz * 0.10;
    finalScore += assigExam * 0.20;
    finalScore += assigIntex * 0.10;
    finalScore += assigGroup * 0.05;

    //assign a letter grade to go with the finalScore
    let letterGrade = "";
    if (finalScore >= 94) {
        letterGrade = "A"
    }
    else if (finalScore >= 90) {
        letterGrade = "A-"
    }
    else if (finalScore >= 87) {
        letterGrade = "B+"
    }
    else if (finalScore >= 84) {
        letterGrade = "B"
    }
    else if (finalScore >= 80) {
        letterGrade = "B-"
    }
    else if (finalScore >= 77) {
        letterGrade = "C+"
    }
    else if (finalScore >= 74) {
        letterGrade = "C"
    }
    else if (finalScore >= 70) {
        letterGrade = "C-"
    }
    else if (finalScore >= 67) {
        letterGrade = "D+"
    }
    else if (finalScore >= 64) {
        letterGrade = "D"
    }
    else if (finalScore >= 60) {
        letterGrade = "D-"
    }
    else if (finalScore < 60) {
        letterGrade = "E"
    }

    //hide the form  
    document.getElementById("theForm").style.display = "none"

    //put the calculated values in and show that div
    $("#fScore").html(finalScore.toString().concat("%. Letter Grade: ", letterGrade));
    $("#qScore").html(assigQuiz.toString().concat("%"));
    $("#aScore").html(assigGrade.toString().concat("%"));
    $("#eScore").html(assigExam.toString().concat("%"));
    $("#iScore").html(assigIntex.toString().concat("%"));
    $("#gScore").html(assigGroup.toString().concat("%"));
    document.getElementById("displayR").style.display = "block"
});

