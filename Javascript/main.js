$(document).ready(function () {

    var questions = ["1) There are Penguins in Australia?", "2) Penguins are the first bird named \"Penguin\"?", "3) Penguins are not Mammals?", "4) Penguins don't have knees?", "5) Penguins have fur instead of feathers?", "6) Penguins can dive over 200m below the surface of the water?", "7) There are gay Penguin?", "8) There is a species of Penguin that can fly?", "9) There are  more than 15 species of Penguin?", "10) There are less than 15 species of Penguin?"]
    var rightanswers = ["true", "false", "true", "false", "false", "true", "true", "false", "true", "false"]
    var useranswers = [];
    var correct = 0;
    var timeleft;
    var timervalue = 60 * 2;
    var clockRunning = false;
    function createdivs() {
        var formcreater = $('<form id ="quiz"></form>')
        $('.container').append(formcreater);
        for (i = 0; i < questions.length; i++) {

            $("#quiz").append('<div id="question-' + i + '" class="questionsdivs"></div>');

        }
    };
    function createquestions() {
        createdivs();
        createbuttons();
        timeleft = setTimeout(gradequiz, 120000) //2 Min timer
        for (i = 0; i < questions.length; i++) {
            $("#question-" + i).append(questions[i] + "<br>");
            $('#question-' + i).append('<input type="radio" name="q' + i + '" id="tf' + i + '" value="true"> true <br>').css("background-color", "rgba(255, 255, 255, 0.658)").css("border", "2px solid black").css("margin", "5px").css("padding", "5px")
            $('#question-' + i).append('<input type="radio" name="q' + i + '" id="tf' + i + '" value="false"> false <br>')
        }

    };

    function gradequiz() {
        useranswers = []
        correct = 0;
        for (let j = 0; j < questions.length; j++) {
            var answerforquestion = $('#tf' + j + ':checked').val()
            useranswers.push(answerforquestion);
        }
        for (let i = 0; i < useranswers.length; i++) {
            if (useranswers[i] === rightanswers[i]) {
                correct++
            }

        }
        clearInterval(intervalId);
        clockRunning = false;
        alert(correct + '/' + questions.length);
        console.log(useranswers)
        return useranswers;

    }
    function count() {
        timervalue--
        var timeleft = timeConverter(timervalue)

        $('#timer').text(timeleft)
        console.log(timeleft)
    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
    function createbuttons() {
        var submitbutton = $('<button id="submit">Submit</button>')
        var resetbutton = $('<button id="reset">Reset</button>')
        $('.container').append(submitbutton)
        $('.container').append(resetbutton)
    }
    $(document).on('click', '#submit', function () {
        gradequiz();
        clearTimeout(timeleft);
        $('.container').empty()
        $('.gifdiv').append('<img src="https://media1.giphy.com/media/Uo0CJ8l5kVh2E/giphy.gif?cid=3640f6095c95d85938655a3767c73957" alt="">')
        clearInterval(intervalId);
        clockRunning = false;
        timervalue = 120;
        $('#timer').empty();
        // console.log(useranswers)
    })

    $(document).on('click', '#reset', function () {
        clearTimeout(timeleft);
        $('.container').empty()
        $('.gifdiv').append('<img src="https://media1.giphy.com/media/Uo0CJ8l5kVh2E/giphy.gif?cid=3640f6095c95d85938655a3767c73957" alt="">')
        clearInterval(intervalId);
        clockRunning = false;
        timervalue = 120;
        $('#timer').empty();
        // console.log(useranswers)
    })
    $('#start').click(function () {
        $('.container').empty()
        createquestions();
        $('.gifdiv').empty()
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }

    })
});
// $(document).on('click', '#submit',function ())
// $(document).on('click', '.fClick', function(){ 
//     alert("hey!");
// }); 