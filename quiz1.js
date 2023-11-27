
//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let PipeAndCisterns = document.getElementById("Pipe-And-Cisterns");
let Probability = document.getElementById("Probability");
let ProblemOnAges = document.getElementById("Problem-On-Ages");
let ProfitAndLoss = document.getElementById("Profit-And-Loss");
let cscore = document.getElementById("curr-question");
let headings = document.getElementById("heading");
let paragraph =  document.getElementsByClassName("question");
let uname = document.getElementById("input-user-name");
let questionCount;
let scoreCount = 0;
let count = 0;
let countdown;
let a;


  
  //////// arrays////////////
  
const quizArray = [
  {
    id: "0",
    question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
    options: ["5 min", "9 min", "10 min", "15 min"],
    correct: "9 min",
  },
  {
    id: "1",
    question: "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
    options: ["6 hours", "10 hours", "15 hours", "30 hours"],
    correct: "15 hours",
  },
  {
    id: "2",
    question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
    options: ["60 gallons", "100 gallons", "120 gallons", "180 gallons"],
    correct: "120 gallons",
  },
  {
    id: "3",
    question: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    options: ["20 h", "25 h", "35 h", "Cannot be determined"],
    correct: "35 h",
  },
  {
    id: "4",
    question: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
    options: ["1 h", "2 h", "6 h", "8 h"],
    correct: "6 h",
  },
  {
    id: "5",
    question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
    options: ["12 min", "15 min", "25 min", "50 min"],
    correct: "12 min",
  },
  {
    id: "6",
    question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
    options: ["12 min 20 sec", "11 min 45 sec", "12 min 30 sec", "14 min 40 sec"],
    correct: "14 min 40 sec",
  },
  {
    id: "7",
    question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
    options: ["81 min", "108 min", "144 min", "192 min"],
    correct: "144 min",
  },
  {
    id: "8",
    question: "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
    options: ["15 min", "20 min", "27 min", "30 min"],
    correct: "30 min",
  },
  {
    id: "9",
    question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
    options: ["3 hrs 15 min", "3 hrs 45 min", "4 hrs", "4 hrs 45 min"],
    correct: "3 hrs 45 min",
  },
];

const probibility = [
               { 
                 id: '0',
                 question: 'What is the probability of rolling a six on a fair six-sided die?',
                 options: ['1/6','1/3','1/4'],
                 correct: '1/6'
               },
               {
                 id: '1',
                 question: 'If two fair coins are tossed, what is the probability of getting at least one head?',
                 options: ['1/2','1/3','3/4','3/8'],
                 correct: '3/4'
               },
               {
                 id: '2',
                 question: 'A deck of playing cards contains 52 cards. What is the probability of drawing a red card?',
                 options: ['1/2','1/4','1/3','1/5'],
                 correct: '1/2'
               },
               {
                 id: '3',
                 question: 'In a bag, there are 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of drawing a blue marble?',
                 options: ['1/10','3/10','1/5','2/5'],
                 correct: '3/10'
               },
             
               {
                 id: '4',
                 question: 'A spinner is divided into 8 equal sections numbered from 1 to 8. What is the probability of landing on an even number?',
                 options: ['1/4','1/2','3/8','5/8'],
                 correct: '1/2'
               },
               {
                 id: '5',
                 question: 'In a class, there are 25 boys and 15 girls. If a student is randomly selected, what is the probability of selecting a boy?',
                 options: ['1/2','5/8','5/9','3/8'],
                 correct: '5/8'
               },
               {
                 id: '6',
                 question: 'A bag contains 4 red balls and 6 green balls. If two balls are drawn without replacement, what is the probability of drawing two green balls?',
                 options: ['1/5','3/10','3/8','1/3'],
                 correct: '3/8'
               },
               {
                 id: '7',
                 question: 'A box contains 10 chocolates, of which 4 are dark chocolates and 6 are milk chocolates. If two chocolates are randomly selected with replacement, what is the probability of getting a dark chocolate and then a milk chocolate?',
                 options: ['2/5','3/10','2/15','4/15'],
                 correct: '4/15'
               },
               {
                 id: '8',
                 question: 'A fair six-sided die is rolled twice. What is the probability of getting a sum of 7?',
                 options: ['1/12','1/6','1/3','5/36'],
                 correct: '5/36'
               },
               {
                 id: '9',
                 question: 'In a bag, there are 8 blue marbles and 4 red marbles. If two marbles are drawn without replacement, what is the probability of drawing a blue marble and then a red marble?',
                 options: ['4/33','8/33','1/6','2/9'],
                 correct: '8/33'
               }
 ];

             const problemages= [
               {
                 id: '0',
                 question: 'The sum of the present ages of John and Lisa is 48. Five years ago, John was three times as old as Lisa. What is Lisas present age?',
                 options: ['12 years','15 years','18 years','20 years'],
                 correct: '18 years'
               },
               {
                 id: '1',
                 question: 'Ten years ago, the ratio of Alices age to Bobs age was 3:5. If the sum of their present ages is 56, how old is Alice now?',
                 options: ['20 years','24 years','28 years','32 years'],
                 correct: '32 years'
               },
               {
                 id: '2',
                 question: 'The present age of a father is three times the age of his son. If the sum of their ages is 48, what is the son`s present age?',
                 options: ['12 years','14 years','16 years','18 years'],
                 correct: '12 years'
               },
               {
                 id: '3',
                 question: 'Five years ago, the ratio of Sarah`s age to her daughter`s age was 4:1. If the sum of their present ages is 40, how old is Sarah?',
                 options: ['24 years','28 years','32 years','36 years'],
                 correct: '28 years'
               },
               {
                 id: '4',
                 question: 'The sum of the ages of three friends is 72. If the ratio of their ages is 2:3:4, how old is the youngest friend?',
                 options: ['12 years','16 years','20 years','24 years'],
                 correct: '12 years'
               },
               {
                 id: '5',
                 question: 'Ten years ago, the age of a father was four times the age of his son. If the father is now twice as old as his son, what is the present age of the son?',
                 options: ['10 years','15 years','20 years','25 years'],
                 correct: '15 years'
               },
               {
                 id: '6',
                 question: 'The sum of the present ages of Jane and Mark is 30. Four years ago, the ratio of their ages was 3:2. How old is Jane now?',
                 options: ['8 years','10 years','12 years','14 years'],
                 correct: '12 years'
               },
               {
                 id: '7',
                 question: 'Five years ago, the age of a mother was seven times the age of her daughter. If the present age of the mother is 35, what is the present age of the daughter?',
                 options: ['5 years','7 years','9 years','11 years'],
                 correct: '7 years'
               },
               {
                 id: '8',
                 question: 'The sum of the ages of a grandfather and his grandson is 100. The grandfather is five times older than the grandson. How old is the grandson?',
                 options: ['10 years','12 years','15 years','20 years'],
                 correct: '10 years'
               },
               {
                 id: '9',
                 question: 'Three years ago, the age of a father was four times the age of his son. If the father is now three times as old as his son, what is the present age of the son?',
                 options: ['6 years','9 years','12 years','15 years'],
                 correct: '12 years'
               }
             ];

             const profitloss = [
               {
                 id: '0',
                 question: 'A shopkeeper sells a shirt for ₹500, making a profit of 25%. What was the cost price of the shirt?',
                 options: ['₹400','₹450','₹550','₹600'],
                 correct: '₹450'
               },
               {
                 id: '1',
                 question: 'A bike is sold for ₹12000 at a loss of 20%. What was the cost price of the bike?',
                 options: ['₹9000','₹10000','₹13000','₹15000'],
                 correct: '₹13000'
               },
               {
                 id: '2',
                 question: 'A trader bought 100 pens for ₹200. If he sells each pen for ₹3, what is his percentage profit?',
                 options: ['50%','100%','150%','200%'],
                 correct: '100%'
               },
               {
                 id: '3',
                 question: 'A product is marked for sale at ₹800, which includes a markup of 25% on the cost price. What is the cost price of the product?',
                 options: ['₹600','₹640','₹660','₹700'],
                 correct: '₹660'
               },
               {
                 id: '4',
                 question: 'A laptop is bought for ₹8000 and sold for ₹7000. What is the loss percentage?',
                 options: ['12.5%','10%','7.5%','5%'],
                 correct: '12.5%'
               },
               {
                 id: '5',
                 question: 'A retailer buys a box of chocolates for ₹500 and sells it at a markup of 20%. If he sells each chocolate for ₹3, how many chocolates are there in the box?',
                 options: ['16','20','24','30'],
                 correct: '24'
               },
               {
                 id: '6',
                 question: 'A pair of shoes is sold for ₹600, making a profit of 20%. What was the cost price of the shoes?',
                 options: ['₹450','₹480','₹500','₹520'],
                 correct: '₹480'
               },
               {
                 id: '7',
                 question: 'A watch is sold at a discount of 15% for ₹850. What was the marked price of the watch?',
                 options: ['₹900','₹1000','₹1050','₹1150'],
                 correct: '₹1050'
               },
               {
                 id: '8',
                 question: 'A vendor bought a box of apples for ₹400. If he wants to make a 25% profit, at what price should he sell each apple?',
                 options: ['₹0.50','₹0.60','₹0.75','₹1.00'],
                 correct: '₹0.75'
               },
               {
                 id: '9',
                 question: 'A car is sold for ₹150000, resulting in a loss of 10%. What was the cost price of the car?',
                 options: ['₹165000','₹169000','₹167000','₹164000'],
                 correct: '₹165000'
               }
             ];


             restart.addEventListener("click", () => {
              scoreContainer.classList.add("hide");
              displayContainer.classList.remove("hide");
              if(a = quizArray){ 
                initial(quizArray);
            }

              if(a =probibility){
                displayContainer.classList.remove("hide");
                scoreContainer.classList.add("hide");
                initial(probibility);}

              if(a = problemages){
                displayContainer.classList.remove("hide");
                scoreContainer.classList.add("hide");
                initial(problemages);}
                
              if(a =profitloss){
                displayContainer.classList.remove("hide");
                scoreContainer.classList.add("hide"); 
                initial(profitloss);
              }             
              });          
//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count++;
    timeLeft.innerHTML = `${count}s`;
    if (count == 300) {
      displayContainer.classList.add("hide");
     scoreContainer.classList.remove("hide");
      userScore.innerHTML =
      uname.value + " " + "your result is : " + scoreCount + "<br>" + "Your score is " + scoreCount + " out of " + "10" +"<br>" + "Total Time Taken:"+ count + "<br>" + "Total question :" + a.length + "<br>" +  "Attempt :"+ questionCount + "<br>" + "Wrong :" + (questionCount - scoreCount) + "<br>" + "Percentage :"+ scoreCount*100/a.length  ;
       }
       
    
  }, 1000);
  
};
//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == 10) {
      //hide question container and display score

       displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
      // //user score
       userScore.innerHTML =  uname.value + " " + "your result is : " + scoreCount + "<br>" + "Your score is " + scoreCount + " out of " + "10" +"<br>" + "Total Time Taken:"+ count + "<br>" + "Total question :" + "10" + "<br>" +  "Attempt :"+ questionCount + "<br>" + "Wrong :" + (questionCount - scoreCount) + "<br>" + "Percentage :"+ scoreCount*100/10  ;
    }else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " / " + "10";
      //display quiz
      quizDisplay(questionCount);
    
    }
    
  })
);



//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator(a) {
  //randomly sort questions
  a.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of a ) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " / 10"  ;
    //question
   
     let question_DIV = document.createElement("p");
     question_DIV.classList.add("question");
     question_DIV.innerHTML = i.question;
     div.appendChild(question_DIV);
     //options
     if(a == quizArray){
     div.innerHTML += `
     <button class="option-div" onclick="checker(this,quizArray)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this,quizArray)">${i.options[1]}</button>
       <button class="option-div" onclick="checker(this,quizArray)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this,quizArray)">${i.options[3]}</button>
     `;
     }
     if(a == probibility){
     div.innerHTML += `
     <button class="option-div" onclick="checker(this,probibility)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this,probibility)">${i.options[1]}</button>
       <button class="option-div" onclick="checker(this,probibility)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this,probibility)">${i.options[3]}</button>
     `;
     }
     if(a == problemages){
      div.innerHTML += `
      <button class="option-div" onclick="checker(this,problemages)">${i.options[0]}</button>
       <button class="option-div" onclick="checker(this,problemages)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this,problemages)">${i.options[2]}</button>
         <button class="option-div" onclick="checker(this,problemages)">${i.options[3]}</button>
      `;
      }
      if(a == profitloss){
        div.innerHTML += `
        <button class="option-div" onclick="checker(this,profitloss)">${i.options[0]}</button>
         <button class="option-div" onclick="checker(this,profitloss)">${i.options[1]}</button>
          <button class="option-div" onclick="checker(this,profitloss)">${i.options[2]}</button>
           <button class="option-div" onclick="checker(this,profitloss)">${i.options[3]}</button>
        `;
        }
     quizContainer.appendChild(div);
  }
}
//Checker Function to check if option is correct or not
function checker(userOption,a) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution == a[questionCount].correct) {
    
    userOption.classList.add("correct");
    scoreCount++;
    cscore.innerHTML = "score: " + scoreCount;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == a[questionCount].correct){
        
        element.classList.add("correct");
      };
     });
  }
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}
 
//initial setup
function initial(a) {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 0;
  clearInterval(countdown);
  timerDisplay();
  quizCreator(a);
  quizDisplay(questionCount);
}
//////// function for user validity/////////
 function myfunc1(){
  let vali = document.getElementById("input-user-name");
  if (vali === ""){
    alert("Please Enter Your Name First");
    return false;
  }
 else{
  return true;
 }
 }
//when user click on button to select the type of question

PipeAndCisterns.addEventListener("click", () => {
let vali = document.getElementById("input-user-name").value;
if (vali == ""){
  alert("Please Enter Your Name First");
  return;
}

startScreen.classList.add("hide");
 displayContainer.classList.remove("hide");
 headings.innerHTML = 'Pipe And Cisterns';
               initial(quizArray);
  
});

Probability.addEventListener("click", () => {  
 vali = document.getElementById("input-user-name").value;
if (vali == ""){
  alert("Please Enter Your Name First");
  return;
}       
               startScreen.classList.add("hide");
               displayContainer.classList.remove("hide");
                 headings.innerHTML = 'Probability';
               initial(probibility);
             });


ProblemOnAges.addEventListener("click", () => {
 vali = document.getElementById("input-user-name").value;
if (vali == ""){
  alert("Please Enter Your Name First");
  return;
}
               startScreen.classList.add("hide");
               displayContainer.classList.remove("hide");
                 headings.innerHTML = 'Problem On Ages';
               initial(problemages);
});

ProfitAndLoss.addEventListener("click", () => {
  vali = document.getElementById("input-user-name").value;
if (vali == ""){
  alert("Please Enter Your Name First");
  return;
}
               startScreen.classList.add("hide");
               displayContainer.classList.remove("hide");
                 headings.innerHTML = 'Profit And Loss';
               initial(profitloss);
             });
            
             
//hide quiz and display start screen
window.onload = () => {
               startScreen.classList.remove("hide");
               displayContainer.classList.add("hide");
             };
