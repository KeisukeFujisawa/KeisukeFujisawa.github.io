const quiz = [
    {
        question: 'Q1. 第３条 運転者は、この心得に定めるもののほか、法令及び通達等を遵守し、及び「」の職務上の命令に従わなければならない。',
        choices: [
            '運行管理者',
            '営業所長',
            '上司',
            '警察官'
        ],
        correct: '上司'
    },
    {
         question: 'Q2. 運転者は、「」及び円滑な運行の確保ならびに乗客サービスに努めなければならない',
        choices: [
            '輸送の安全',
            '乗客の安全',
            '事故の防止',
            '定時運行'
        ],
        correct: '輸送の安全'
    },
    {
        question: 'Q3. 第５条 運転者は、自動車を安全に運行するために十分な知識及び「」を習得し、保有しなければならない',
        choices: [
            '運転技術',
            '技能',
            '安全意識',
            'ドライビングテクニック'
        ],
        correct: '技能'
    },
    {
        question: 'Q4. 第６条 運転者は、自動車の運行の安全を確保するため、「」の内容を熟知しなければならない。',
        choices: [
            '運転基準図',
            '執務心得',
            '運行指示表',
            'バス事故対応マニュアル'
        ],
        correct: '運転基準図'
    },
    {
        question: 'Q5. 第８条（１８）交通局の職員以外の者に自動車を運転させないこと。ただし、「」など業務上必要な場合は、この限りでない。',
        choices: [
            '運行管理者',
            '警察官',
            '営業所長',
            '自動車整備の委託業者'
        ],
        correct: '自動車整備の委託業者'
    },
    {
        question: 'Q6. 第１１条（１）運転者は、休暇を取得し、又は欠勤しようとするときは、事前に所定の届出書により、「」の承認を得なければならない',
        choices: [
            '運行管理者',
            '営業所長',
            '',
            ''
        ],
        correct: '営業所長'
    },
    {
        question: 'Q7. 第１１条（２）運転者は、勤務日に急病等により出勤できなくなったときは、原則として出勤時刻「」までに運行管理者に連絡をし、承認を得なければならない。',
        choices: [
            '１０分前',
            '３０分前',
            '１時間前',
            '前日'
        ],
        correct: '１時間前'
    },
    {
         question: 'Q8. 第２０条 乗り継ぎダイヤ担当運転者又は疾病等により常務を交替する運転者は、「」に乗務を交替しなければならない。',
        choices: [
            '円滑かつ迅速',
            '円滑かつ的確',
            '迅速かつ適切',
            '適切かつ明確'
        ],
        correct: '円滑かつ迅速'
    },
    {
        question: 'Q9. 第２１条（１）運転者は、常に「」に努めるとともに、自動車を良好な状態に保ち、別に定める「エコドライブマニュアル」により、安全かつ経済的な運転をしなければならない。',
        choices: [
            '運転技術の向上',
            '丁寧な接客',
            '安全運転',
            '定時運行'
        ],
        correct: '運転技術の向上'
    },
    {
        question: 'Q10. 第２５条（１）運転者は、運行指示表に基づき、自動車を運行させなければならない。ただし、災害等が発生した場合又は「」の指示があった場合は、この限りでない。',
        choices: [
            '運行管理者若しくは営業所長',
            '営業所長若しくは警察官',
            '警察官若しくは運行管理者',
            '誘導員'
        ],
        correct: '警察官若しくは運行管理者'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
