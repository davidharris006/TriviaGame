$(document).ready(function () {

    var questions = ["q1?", "q2?", "q3?", "q4?",]
    var rightanswers= ["true", "false", "false", "true"]
    var useranswers= [];
    var correct = 0;
    function createdivs() {
        for (i = 0; i < questions.length; i++) {

            $("#quiz").append('<div id="question-' + i + '"></div>');

        }
    };
    function createquestions() {
        createdivs();
        for (i = 0; i < questions.length; i++) {
            $("#question-" + i).append(questions[i] + "<br>");
            $('#question-' + i).append('<input type="radio" name="q' + i + '" id="tf'+ i +'" value="true"> true <br>')
            $('#question-' + i).append('<input type="radio" name="q' + i + '" id="tf'+ i +'" value="false"> false <br>')
        }
        setTimeout(gradequiz, 4*60*1000)
    };
    function gradequiz(){
        useranswers = []
        for (let j = 0; j < questions.length; j++){
          var answerforquestion =  $('#tf'+ j +':checked').val()
          useranswers.push(answerforquestion);
        }
        for (let i =0; i<useranswers.length; i++){
            if(useranswers[i]=== rightanswers[i]){
                correct++
            }
        }
        console.log(useranswers);
        return useranswers;
    }
    $("#submit").on("click", function(){
        gradequiz();
        // console.log(useranswers)
    })
    createquestions();
});
