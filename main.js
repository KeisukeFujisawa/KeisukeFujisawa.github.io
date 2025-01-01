const quiz = [
    {
        question: '第３条 運転者は、この心得に定めるもののほか、法令及び通達等を遵守し、及び「」の職務上の命令に従わなければならない。',
        choices: [
            '運行管理者',
            '営業所長',
            '上司',
            '警察官'
        ],
        correct: '上司'
    },
    {
         question: '第４条 運転者は、「」及び円滑な運行の確保ならびに乗客サービスに努めなければならない',
        choices: [
            '輸送の安全',
            '乗客の安全',
            '事故の防止',
            '定時運行'
        ],
        correct: '輸送の安全'
    },
    {
        question: '第５条 運転者は、自動車を安全に運行するために十分な知識及び「」を習得し、保有しなければならない',
        choices: [
            '運転技術',
            '技能',
            '安全意識',
            'ドライビングテクニック'
        ],
        correct: '技能'
    },
    {
        question: '第６条 運転者は、自動車の運行の安全を確保するため、「」の内容を熟知しなければならない。',
        choices: [
            '運転基準図',
            '執務心得',
            '運行指示表',
            'バス事故対応マニュアル'
        ],
        correct: '運転基準図'
    },
    {
        question: '第８条（１８）交通局の職員以外の者に自動車を運転させないこと。ただし、「」など業務上必要な場合は、この限りでない。',
        choices: [
            '運行管理者',
            '警察官',
            '営業所長',
            '自動車整備の委託業者'
        ],
        correct: '自動車整備の委託業者'
    },
    {
        question: '第１１条（１）運転者は、休暇を取得し、又は欠勤しようとするときは、事前に所定の届出書により、「」の承認を得なければならない',
        choices: [
            '運行管理者',
            '営業所長',
            '',
            ''
        ],
        correct: '営業所長'
    },
    {
        question: '第１１条（２）運転者は、勤務日に急病等により出勤できなくなったときは、原則として出勤時刻「」までに運行管理者に連絡をし、承認を得なければならない。',
        choices: [
            '１０分前',
            '３０分前',
            '１時間前',
            '前日'
        ],
        correct: '１時間前'
    },
    {
         question: '第２０条 乗り継ぎダイヤ担当運転者又は疾病等により常務を交替する運転者は、「」に乗務を交替しなければならない。',
        choices: [
            '円滑かつ迅速',
            '円滑かつ的確',
            '迅速かつ適切',
            '適切かつ明確'
        ],
        correct: '円滑かつ迅速'
    },
    {
        question: '第２１条（１）運転者は、常に「」に努めるとともに、自動車を良好な状態に保ち、別に定める「エコドライブマニュアル」により、安全かつ経済的な運転をしなければならない。',
        choices: [
            '運転技術の向上',
            '丁寧な接客',
            '安全運転',
            '定時運行'
        ],
        correct: '運転技術の向上'
    },
    {
        question: '第２５条（１）運転者は、運行指示表に基づき、自動車を運行させなければならない。ただし、災害等が発生した場合又は「」の指示があった場合は、この限りでない。',
        choices: [
            '運行管理者若しくは営業所長',
            '営業所長若しくは警察官',
            '警察官若しくは運行管理者',
            '誘導員'
        ],
        correct: '警察官若しくは運行管理者'
    },
    {
        question: '第２５条（５）運転者は、運行に遅れが生じた場合であっても、「」をしてはならない',
        choices: [
            '回復運転',
            '制限速度の超過',
            '早発',
            '未済発車'
        ],
        correct: '制限速度の超過'
    },
     {
        question: '第２７条　運転者は、火災現場、事故現場等の付近を通過する場合においては、「」の指示に従わなければならない。',
        choices: [
            '運行管理者',
            '営業所長',
            '運行管理者又は警察官',
            '現場の消防員又は警察官'
        ],
        correct: '現場の消防員又は警察官'
    },
     {
        question: '第２８条　（中略）やむを得ず自動車を後退させるときは、「」などして後方の安全を確認しなければならない。',
        choices: [
            '運転者が下車する',
            '運行管理者に連絡する',
            '周囲の協力を得る',
            '乗客の協力を得る'
        ],
        correct: '運転者が下車する'
    },
     {
        question: '第３２条　運転者は、自転車が車道を通行しているときは、自動車を「」させ、その動向を見極め、安全を確認した後、安全な距離を保持し通過しなければならない。',
        choices: [
            '減速又は進路変更',
            '徐行又は進路変更',
            '一時停止又は減速',
            '一時停止又は徐行'
        ],
        correct: '一時停止又は徐行'
    },
     {
        question: '第３９条　運転者は、「」し、車内事故防止に努めなければならないこの場合において、特に高齢者、身体障害者等に配慮しなければならない。。',
        choices: [
            '適宜マイクを使用',
            '円滑に発進',
            '乗客の動向を注視',
            'ミラーを注視'
        ],
        correct: '乗客の動向を注視'
    },
     {
        question: '第４１条（２）運転者は、自動車を発信し、又は停車しようとするときは、円滑に自動車を発信し、又は「」し、車内事故防止に努めなければならない。',
        choices: [
            '緩やかに停止',
            '緩やかに制動',
            '緩やかに減速',
            '安全に停車'
        ],
        correct: '緩やかに制動'
    },
     {
        question: '第４４条　運転者は、下り勾配箇所においては、その手前から自動車の速度を減速させ、エンジンブレーキ及びフットブレーキ等を併用し、運転しなければならない。この場合において、「」は避けなければならない。',
        choices: [
            'エンジンブレーキの多用',
            'フットブレーキの多用',
            '警音器の使用',
            '急ブレーキ'
        ],
        correct: 'フットブレーキの多用'
    },
     {
        question: '第４７条　運転者は、見通しの悪いカーブを通過するときは、必ず自動車を「」させ、左側通行の原則を遵守し、かつ、憶測による運転をしてはならない。',
        choices: [
            '減速',
            '徐行',
            '徐行又は一時停止',
            '最徐行'
        ],
        correct: '徐行'
    },
       {
        question: '第４８条（１）　運転者は、道路工事の行われている箇所、路面に凹凸のある箇所又は路面が軟弱な箇所を運行するときは、必ず「」しなければならない。',
        choices: [
            '減速',
            '徐行',
            '徐行又は一時停止',
            '最徐行'
        ],
        correct: '徐行'
    },
    {
        question: '第４８条（２）運転者は、水たまり、泥地等の箇所を通過するときは、通行人等に泥水等を飛散させないように「」しなければならない。',
        choices: [
            '減速',
            '徐行',
            '徐行又は一時停止',
            '最徐行'
        ],
        correct: '徐行'
    },
    {
        question: '第４９条　運転者は、道路幅員の狭い箇所で他の車両と行き違うときは、「」しなければならない。',
        choices: [
            '減速',
            '徐行',
            '徐行又は一時停止',
            '最徐行'
        ],
        correct: '徐行'
    },
    {
        question: '第５６条　運転者は、運行中に自動車の故障を発見したときは、「」、運行管理者に報告し、その指示に従わなければならない。',
        choices: [
            '乗客に状況を説明し',
            '直ちに車両を停車させ',
            'エンジンを切り',
            '周囲の安全を確認し'
        ],
        correct: '直ちに車両を停車させ'
    },
    {
        question: '第６６条（１）　運転者は、自動車に火災が発生した場合は、直ちに停車するとともに、その旨を冷静沈着に乗客に告げ、全ての扉（非常口扉を含む）を開け、後続車両及び対抗車両等に十分注意し、「」しなければならない。',
        choices: [
            '運行管理者に連絡',
            '消防に通報',
            '消化器等による消化活動を',
            '乗客を安全な場所に避難誘導'
        ],
        correct: '乗客を安全な場所に避難誘導'
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