(function(){

    'use strict';

    var $start = document.querySelector('[data-js="startBtn"]');
    var $next = document.querySelector('[data-js="nextBtn"]');
    var $points = document.querySelector('[data-js="points"]');
    var $quiz = document.querySelector('[data-js="quiz"]');
    var $question = document.querySelector('[data-js="question"]');
    var $label = document.querySelectorAll('[data-js="label"]');
    var $optionsArr = document.querySelectorAll('[name="options"]');
    var questions = [
        {
            question: '01 - Inside which HTML element do we put the JavaScript?',
            choices: [
                '<javascript>',
                '<scripting>',
                '<script>',
                '<js>'
            ],
            answer: 2
        },
        {
            question: '02 - What is the correct JavaScript syntax to change the content of the HTML element below?' +
            '<p id="demo">This is a demonstration.</p>',
            choices: [
                'document.getElement("p").innerHTML = "Hello World!";',
                '#demo.innerHTML = "Hello World!";',
                'document.getElementById("demo").innerHTML = "Hello World!";',
                'document.getElementByName("p").innerHTML = "Hello World!";'
            ],
            answer: 1
        },
        {
            question: '03 - Where is the correct place to insert a JavaScript?',
            choices: [
                'The <head> section',
                'Both the <head> section and the <body> section are correct',
                'The <body> section',
                'Iyah'
            ],
            answer: 2
        },
        {
            question: '04 - What is the correct syntax for referring to an external script called "xxx.js"?',
            choices: [
                '<script name="xxx.js">',
                '<script src="xxx.js">',
                '<script href="xxx.js">',
                '<script href"xxx.js">'
            ],
            answer: 1
        }
    ];

    var app = (function appController() {

        var point = 0;
        var quest;
        return {
            init: function init() {
                $start.addEventListener('click', app.startHandle);
            },

            startHandle: function startHandle() {
                $quiz.style.visibility = 'visible';
                $quiz.style.opacity = '1';
                $quiz.style.height = 'auto';
                document.querySelector('.container').removeChild($start);
                app.questionsHandle();
            },

            questionsHandle: function questionsHandle() {

                console.log(questions.length);

                quest = questions.shift();

                $question.textContent = quest.question;

                $label.forEach(function (atual, index, array) {
                    atual.textContent = quest.choices.shift();
                });

                $optionsArr.forEach(function(atual, index) {
                    atual.setAttribute('value', index)
                });

                $next.addEventListener('click', app.choiceHandle);

            },

            choiceHandle: function choiceHandle() {
                if (quest.answer == document.querySelector('[name="options"]:checked').value) {
                    $points.textContent = point += 1;
                }

                $optionsArr.forEach(function(atual, index) {
                    atual.checked = false;
                });

                if (questions.length > 0) {
                    app.questionsHandle();
                } else {
                    $quiz.style.visibility = 'hidden';
                    $quiz.style.opacity = '0';
                }

            }
        };

    })();

    app.init();

})();
