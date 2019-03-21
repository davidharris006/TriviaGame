$(document).ready(function(){

var questions =["q1?","q2?","q3?","q4?",]
function createdivs(){
for (i = 0; i < questions.length; i++){

    $("#quiz").append('<div id="question-'+ i +'"></div>');

}
};
function createquestions(){
createdivs();
for (i=0; i< questions.length;i++){
    $("#question-"+ i).append(questions[i] + "<br>");
    $('#question-'+ i).append('<input type="radio" name="q'+ i+'" value="true"> true <br>')
    $('#question-'+ i).append('<input type="radio" name="q'+ i+'" value="false"> false <br>')
}
};
createquestions();
});
