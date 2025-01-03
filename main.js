const quiz = [
  {
    question: '運転者は、「」及び円滑な運行の確保並びに乗客サービスに努めなければならない。',
    answers: ['輸送の安全','乗客の安全','健康の維持','定時運行'],
    correct: '輸送の安全'
  } ,{
    question:'第３条　運転者は、この心得に定めるもののほか、法令及び通達等を遵守し、及び「」の職務上の命令に従わなければならない。',
    answers: ['運行管理者','営業所長','上司','警察官' ],
    correct:'上司'
  }, {
    question:'運転者は、自動車を安全に運行するために十分な知識及び「」を習得し、保有しなければならない。',
    answers: ['安全意識','運転技術','技能','テクニック' ],
    correct:'技能'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


const setupQuiz = () => {
 document.getElementById('js-question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;

 while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }
}

setupQuiz();

const clickHandler = (e) => {
if(quiz[quizIndex].correct === e.target.textContent){
   window.alert('正解！');
    score++;
   } else {
   window.alert('不正解！');
   }

     quizIndex++;

     if(quizIndex < quizLength){
     setupQuiz();
     } else {
     window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
}
};


//ボタンをクリックしたら正誤判定

let handlerIndex = 0;

while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
  });
  handlerIndex++
  }

