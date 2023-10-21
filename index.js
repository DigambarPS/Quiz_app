var nextbtn = document.getElementById('nextbtn');
var qno = document.getElementById('qno');
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var time = document.getElementById('time');
var displayScore = document.getElementById('score');
var timediv = document.getElementById('timer');
var score = 0;
var red = 'rgb(255,200,200)';
var lightgreen = 'rgb(144,238,144)';
var i = 0;
var t;

var data = [
    {
        num: '1',
        question: 'What is capital city of India?',
        op1: 'Mumbai',
        op2: 'Kolkata',
        op3: 'New Delhi',
        op4: 'Bangalore',
        answer: 'New Delhi'
    },
    {
        num: '2',
        question: 'What is national flower of India?',
        op1: 'Lotus',
        op2: 'Sunflower',
        op3: 'Rose',
        op4: 'Dalia',
        answer: 'Lotus'
    },
    {
        num: '3',
        question: 'Who was the first Prime Minister of India?',
        op1: 'Rajendra Prasad',
        op2: 'Mahatma Gandhi',
        op3: 'Pt. Jawaharlal Nehru',
        op4: 'Sardar Vallabhbhai Patel',
        answer: 'Pt. Jawaharlal Nehru'
    },
    {
        num: '4',
        question: 'Which is the national sport of India?',
        op1: 'Cricket',
        op2: 'Football',
        op3: 'Kabaddi',
        op4: 'Hockey',
        answer: 'Hockey',
    },
    {
        num: '5',
        question: 'Where is Taj Mahal located in India?',
        op1: 'Lucknow',
        op2: 'Agra',
        op3: 'Amritsar',
        op4: 'Chennai',
        answer: 'Agra'
    },
    {
        num: '6',
        question: 'Who is Sachin Tendulkar?',
        op1: 'Indian Hockey player',
        op2: 'Indian Football player',
        op3: 'Indian Cricket player',
        op4: 'Indian Marathon Runner',
        answer: 'Indian Cricket player'
    },
    {
        num: '7',
        question: 'What is the capital city of Goa?',
        op1: 'Panaji',
        op2: 'Margao',
        op3: 'Vasco',
        op4: 'Ponda',
        answer: 'Panaji'
    },
    {
        num: '8',
        question: 'Who is popularly known as the '+"'"+'Iron Man'+"'"+' of India?',
        op1: 'Mahatma Gandhi',
        op2: 'Bhagat Singh',
        op3: 'Bipin Chandra Pal',
        op4: 'Sardar Vallabhbhai Patel',
        answer: 'Sardar Vallabhbhai Patel'
    },
    {
        num: '9',
        question: 'Who is current Prime Minister of India?',
        op1: 'Amit Shah',
        op2: 'Droupadi Murmu',
        op3: 'Ramnath Kovind',
        op4: 'Narendra Modi',
        answer: 'Narendra Modi'
    },
    {
        num: '10',
        question: 'Who is known as the '+"'"+'Father Of Nation'+"'"+' in India?',
        op1: 'Bhagat Singh',
        op2: 'Mahatma Gandhi',
        op3: 'Bipin Chandra Pal',
        op4: 'Rajendra Prasad',
        answer: 'Mahatma Gandhi'
    }
];

//quiz start
start();

function start() {
    score=0;
    qno.innerText = data[i].num;
    question.innerText = data[i].question;
    option1.innerText = data[i].op1;
    option2.innerText = data[i].op2;
    option3.innerText = data[i].op3;
    option4.innerText = data[i].op4;
    t=20;
    startTimer(t);
    
    //if option 1 is pressed
    option1.addEventListener('click', checkOption1)

    //if option 2 is pressed
    option2.addEventListener('click', checkOption2)

    //if option 3 is pressed
    option3.addEventListener('click', checkOption3)

    //if option 4 is pressed
    option4.addEventListener('click', checkOption4)

    //if next button is pressed
    nextbtn.addEventListener("click", checkNextBtn)
}

//countdown timer
function timer() {
    t--;
    time.innerText = t;
}

    // Stops Timer
function stopTimer(){
    clearInterval(timeChecker);
}

 //starts timer
    function startTimer(n){
        timediv.style.backgroundColor = 'lightblue';
        timediv.style.color = 'black';
        t=n;
        timeChecker = setInterval(() => {
            if(t>0)
                timer();
            if(t<10)
            {
                timediv.style.backgroundColor = 'red';
                timediv.style.color = 'white';
            }
            if(t==0){
                option1.removeEventListener('click', checkOption1);
                option2.removeEventListener('click', checkOption2);
                option3.removeEventListener('click', checkOption3);
                option4.removeEventListener('click', checkOption4);
                if (option1.innerText == data[i].answer) {
                    option1.style.backgroundColor = lightgreen;
                    option2.disabled = true;
                    option3.disabled = true;
                    option4.disabled = true;
                }
                else if (option2.innerText == data[i].answer) {
                    option2.style.backgroundColor = lightgreen;
                    option1.disabled = true;
                    option3.disabled = true;
                    option4.disabled = true;
                }
                else if(option3.innerText == data[i].answer){
                    option3.style.backgroundColor = lightgreen;
                    option1.disabled = true;
                    option2.disabled = true;
                    option4.disabled = true;
                }else{
                    option4.style.backgroundColor = lightgreen;
                    option1.disabled = true;
                    option2.disabled = true;
                    option3.disabled = true;
                }
            }
        }, 1000);
    }

    
    // check option 1
    function checkOption1(){
        if (this.innerHTML == data[i].answer) {
            // console.log('correct');
            stopTimer();
            score += 1;
            displayScore.innerText = score;
            this.style.backgroundColor = lightgreen;
            this.removeEventListener('click', checkOption1);
            option2.disabled = true;
            option3.disabled = true;
            option4.disabled = true;
        }
        else {
            // console.log('wrong');
            stopTimer();
            this.style.backgroundColor = red;
            if (option2.innerText == data[i].answer) {
                option2.style.backgroundColor = lightgreen;
                option2.removeEventListener('click', checkOption2);
                option3.disabled = true;
                option4.disabled = true;
            }
            else if (option3.innerText == data[i].answer) {
                option3.style.backgroundColor = lightgreen;
                option3.removeEventListener('click', checkOption3);
                option2.disabled = true;
                option4.disabled = true;
            }
            else {
                option4.style.backgroundColor = lightgreen;
                option4.removeEventListener('click', checkOption4);
                option2.disabled = true;
                option3.disabled = true;
            }
        }
    }

    // check option 2
    function checkOption2(){
        if (this.innerHTML == data[i].answer) {
            // console.log('correct');
            stopTimer();
            score += 1;
            displayScore.innerText = score;
            this.style.backgroundColor = lightgreen;
            this.removeEventListener('click', checkOption2);
            option1.disabled = true;
            option3.disabled = true;
            option4.disabled = true;
        }
        else {
            stopTimer();
            // console.log('wrong');
            this.style.backgroundColor = red;
            if (option1.innerText == data[i].answer) {
                option1.style.backgroundColor = lightgreen;
                option1.removeEventListener('click', checkOption1);
                option3.disabled = true;
                option4.disabled = true;
            }
            else if (option3.innerText == data[i].answer) {
                option3.style.backgroundColor = lightgreen;
                option3.removeEventListener('click', checkOption3);
                option1.disabled = true;
                option4.disabled = true;
            }
            else {
                option4.style.backgroundColor = lightgreen;
                option4.removeEventListener('click', checkOption4);
                option1.disabled = true;
                option3.disabled = true;
            }
        }
    }


    //check option 3
    function checkOption3(){
        if (this.innerHTML == data[i].answer) {
            stopTimer();
            // console.log('correct');
            score += 1;
            displayScore.innerText = score;
            this.style.backgroundColor = lightgreen;
            this.removeEventListener('click', checkOption3);
            option1.disabled = true;
            option2.disabled = true;
            option4.disabled = true;
        }
        else {
            stopTimer();
            // console.log('wrong');
            this.style.backgroundColor = red;
            if (option1.innerText == data[i].answer) {
                option1.style.backgroundColor = lightgreen;
                option1.removeEventListener('click', checkOption1);
                option2.disabled = true;
                option4.disabled = true;
            }
            else if (option2.innerText == data[i].answer) {
                option2.style.backgroundColor = lightgreen;
                option2.removeEventListener('click', checkOption2);
                option1.disabled = true;
                option4.disabled = true;
            }
            else {
                option4.style.backgroundColor = lightgreen;
                option4.removeEventListener('click', checkOption4);
                option1.disabled = true;
                option2.disabled = true;
            }
        }
    }

    // check option 4
    function checkOption4(){
        if (this.innerHTML == data[i].answer) {
            stopTimer();
            // console.log('correct');
            score += 1;
            displayScore.innerText = score;
            this.style.backgroundColor = lightgreen;
            option4.removeEventListener('click', checkOption4);
            option1.disabled = true;
            option2.disabled = true;
            option3.disabled = true;
        }
        else {
            stopTimer();
            // console.log('wrong');
            this.style.backgroundColor = red;
            if (option1.innerText == data[i].answer) {
                option1.style.backgroundColor = lightgreen;
                option1.removeEventListener('click', checkOption1);
                option2.disabled = true;
                option3.disabled = true;
            }
            else if (option2.innerText == data[i].answer) {
                option2.style.backgroundColor = lightgreen;
                option2.removeEventListener('click', checkOption2);
                option1.disabled = true;
                option3.disabled = true;
            }
            else {
                option3.style.backgroundColor = lightgreen;
                option3.removeEventListener('click', checkOption3);
                option1.disabled = true;
                option2.disabled = true;
            }
        }
    }

    function checkNextBtn(){
        option1.addEventListener('click', checkOption1)
        option2.addEventListener('click', checkOption2)
        option3.addEventListener('click', checkOption3)
        option4.addEventListener('click', checkOption4)
        stopTimer();
        time.innerText = '20';
        t=20;
        startTimer(t);
        i += 1;
        if (option1.disabled == true || option2.disabled == true || option3.disabled == true || option4.disabled == true) {
            option1.disabled = false;
            option2.disabled = false;
            option3.disabled = false;
            option4.disabled = false;
            option1.style.backgroundColor = 'white';
            option2.style.backgroundColor = 'white';
            option3.style.backgroundColor = 'white';
            option4.style.backgroundColor = 'white';

            if (i < data.length-1) {
                // console.log('if')
                qno.innerText = data[i].num;
                question.innerText = data[i].question;
                option1.innerText = data[i].op1;
                option2.innerText = data[i].op2;
                option3.innerText = data[i].op3;
                option4.innerText = data[i].op4;
            }
            else if (i == data.length-1) {
                // console.log('else')
                qno.innerText = data[i].num;
                question.innerText = data[i].question;
                option1.innerText = data[i].op1;
                option2.innerText = data[i].op2;
                option3.innerText = data[i].op3;
                option4.innerText = data[i].op4;
                nextbtn.remove();
            }
        }
        else if(option1.disabled == false && option2.disabled == false && option3.disabled == false && option4.disabled == false){
            alert('Please select an option');
            i-=1;
        }
    }