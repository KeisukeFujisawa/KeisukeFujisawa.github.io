// ====== ユーティリティ ======
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// ====== 問題データ（例） ======
let quiz = [
  { question:'（交通局HP）地下鉄南北線の新型車両は「　」系である', answers: ['2000','3000','4000','5000'], correct:'3000' },
  { question:'（交通局HP）仙台市交通局では、「　」年11月25日に仙台市電が開業しました。', answers: ['1925','1926','1935','1936'], correct:'1926' },
  { question:'第３条 運転者は、この心得に定めるもののほか、法令及び通達等を遵守し、及び「　」の職務上の命令に従わなければならない。', answers: ['運行管理者','営業所長','上司','警察官'], correct:'上司' },
    { question:'第４条 運転者は、「　」及び円滑な運行の確保並びに乗客サービスに努めなければならない。', answers: ['輸送の安全','乗客の安全','健康の維持','定時運行'], correct:'輸送の安全' },
  { question:'第５条 運転者は、自動車を安全に運行するために十分な知識及び「　」を習得し、保有しなければならない。', answers: ['安全意識','運転技術','技能','テクニック'], correct:'技能' },
  { question:'第６条 運転者は、自動車の運行の安全を確保するため、「　」の内容を熟知しなければならない。', answers: ['執務心得','運行指示表','運転基準図','バス事故対応マニュアル'], correct:'運転基準図' },
  { question:'第８条（１８） 交通局の職員以外の者に自動車を運転させないこと。ただし、「　」など業務上必要な場合は、この限りでない。', answers: ['営業所長','運行管理者','自動車整備の委託業者','警察官'], correct:'自動車整備の委託業者' },
  { question:'第１１条（１）運転者は、休暇を取得し、又は欠勤しようとするときは、事前に所定の届出書により、「　」の承認を得なければならない。', answers: ['運行管理者','営業所長','営業副所長','業務課'], correct:'営業所長' },
  { question:'第１３条 運転者は、「　」の指導監督に従わなければならない。', answers: ['運行管理者','営業所長','営業副所長','業務課'], correct:'運行管理者' },
  { question:'第１４条 運転者は、「　」により、自動車を安全に運行することができないときは、運転業務に従事してはならない。', answers: ['健康の状態','心身の状態','疾病・私傷','睡眠不足'], correct:'心身の状態' },
  { question:'乗務中に携帯しなければならないものとして、第１６条で指定されていないものを選べ。', answers: ['職員証','時計','乗務記録簿','携帯電話'], correct:'携帯電話' },
  { question:'第２１条（１） 運転者は、常に「　」に努めるとともに、自動車を良好な状態に保ち、別に定める「エコドライブマニュアル」により、安全かつ経済的な運転をしなければならない。', answers: ['安全運転','運転技術の向上','丁寧な接客','定時運行'], correct:'運転技術の向上' },
  { question:'第２１条（２） 運転者は、事故の発生を未然に防止するため、常に最新の注意を払い慎重な運転を心掛けるとともに、健康に留意し、「　」の保持に努めなければならない。', answers: ['良好な体調','健全な精神','職務遂行の意志','高い倫理観'], correct:'健全な精神' },
  { question:'第２５条（１）運転者は、運行指示表に基づき、自動車を運行させなければならない。ただし、災害等が発生した場合又は「　」の指示があった場合は、この限りでない。', answers: ['運行管理者又は営業所長','営業所長若しくは警察官','警察官若しくは運行管理者','誘導員'], correct:'警察官若しくは運行管理者' },
  { question:'第２５条（５）運転者は、運行に遅れが生じた場合であっても、「　」をしてはならない', answers: ['回復運転','制限速度の超過','早発','未済発車'], correct:'制限速度の超過' },
  { question:'第２７条（２） 運転者は、火災現場、事故現場等の付近を通過する場合においては、「　」の指示に従わなければならない。', answers: ['運行管理者','営業所長','運行管理者又は警察官','現場の消防員又は警察官'], correct:'現場の消防員又は警察官' },
  { question:'第２８条（２）（中略）やむを得ず自動車を後退させるときは、「　」などして後方の安全を確認しなければならない。', answers: ['運行管理者に連絡する','周囲の協力を得る','運転者が下車する','乗客の協力を得る'], correct:'運転者が下車する' },
  { question:'第３２条（４） 運転者は、自転車が車道を通行しているときは、自動車を「　」させ、その動向を見極め、安全を確認した後、安全な距離を保持し通過しなければならない。', answers: ['減速又は進路変更','徐行又は進路変更','一時停止又は減速','一時停止又は徐行'], correct:'一時停止又は徐行' },
  { question:'第３９条　運転者は、「　」し、車内事故防止に努めなければならないこの場合において、特に高齢者、身体障害者等に配慮しなければならない。', answers: ['適宜マイクを使用','円滑に発進','乗客の動向を注視','ミラーを注視'], correct:'乗客の動向を注視' },
  { question:'第３３条 運転者は、自動車を停留所に接近させるときは、乗降客の有無にかかわらず、「　」で進行しなければならない。', answers: ['安全な速度','停留所で停止できる速度','徐行','最徐行'], correct:'停留所で停止できる速度' },
  { question:'第４１条（２）運転者は、自動車を発進し、又は停車しようとするときは、円滑に自動車を発進し、又は「　」し、車内事故防止に努めなければならない。', answers: ['緩やかに減速','緩やかに停止','緩やかに制動','安全に停車'], correct:'緩やかに制動' },
  { question:'第４２条　運転者は、勾配箇所において自動車から離れるとき、又は安全な運行に支障のある箇所を通過するときは、「　」させなければならない。', answers: ['車両を減速','徐行又は一時停止','最徐行','乗客を降車'], correct:'乗客を降車' },
  { question:'第４３条 運転者は、勾配箇所においては、その長短、路面状況及び自動車の総重量等を考慮し、「　」及び速度で運転しなければならない。', answers: ['適切な変速操作','滑らかな変速操作','緩やかな制動','緩やかな発進'], correct:'適切な変速操作' },
  { question:'第４４条　運転者は、下り勾配箇所においては、その手前から自動車の速度を減速させ、エンジンブレーキ及びフットブレーキ等を併用し、運転しなければならない。この場合において、「　」は避けなければならない。', answers: ['エンジンブレーキの多用','フットブレーキの多用','警音器の使用','急ブレーキ'], correct:'フットブレーキの多用' },
  { question:'第４５条　運転者は、上り勾配箇所において自動車を発進するときは、原則として駐車ブレーキを使用し、「　」させないよう発進しなければならない。', answers: ['エンジンを停止','急発進','後退','乗客を転倒'], correct:'エンジンを停止' },
  { question:'第４７条　運転者は、見通しの悪いカーブを通過するときは、必ず自動車を「　」させ、左側通行の原則を遵守し、かつ、憶測による運転をしてはならない。', answers: ['減速','徐行','徐行又は一時停止','最徐行'], correct:'徐行' },
  { question:'第４８条（１） 運転者は、道路工事の行われている箇所、路面に凹凸のある箇所又は路面が軟弱な箇所を運行するときは、必ず「　」しなければならない。', answers: ['減速','徐行','徐行又は一時停止','最徐行'], correct:'徐行' },
  { question:'第４８条（２）運転者は、水たまり、泥地等の箇所を通過するときは、通行人等に泥水等を飛散させないように「　」しなければならない。', answers: ['減速','徐行','徐行又は一時停止','最徐行'], correct:'徐行' },
  { question:'第４９条 運転者は、道路幅員の狭い箇所で他の車両と行き違うときは、「　」しなければならない。', answers: ['減速','徐行','徐行又は一時停止','最徐行'], correct:'徐行' },
  { question:'第５１条 運転者は、路肩（路肩が明らかでない道路にあっては、路端から「　」m幅の部分、トンネル、橋梁又は高価の道路にあってはo.25m幅の部分をいう。）その他運行に支障がある箇所を通行してはならない。', answers: ['0.25','0.3','0.5','0.75'], correct:'0.5' },
  { question:'第５６条 運転者は、運行中に自動車の故障を発見したときは、「　」、運行管理者に報告し、その指示に従わなければならない。', answers: ['乗客に状況を説明し','直ちに車両を停車させ','エンジンを切り','周囲の安全を確認し'], correct:'直ちに車両を停車させ' },
  { question:'第５９条　運転者は、常に「　」を的確に把握し、乗客輸送に万全を期すとともに、自動車の安全を確保し、被害を未然に防止するよう努めなければならない。', answers: ['道路状況','気象状況','道路工事等の情報','災害への対応'], correct:'気象状況' },
  { question:'第６０条 運転者は、「　」が予想されるときは、担当路線の状況等について、運行管理者から予め指示を受けて出庫しなければならない。', answers: ['交通渋滞','異常気象','災害','道路工事'], correct:'異常気象' },
  { question:'第６６条（１） 運転者は、自動車に火災が発生した場合は、直ちに停車するとともに、その旨を冷静沈着に乗客に告げ、全ての扉（非常口扉を含む）を開け、後続車両及び対抗車両等に十分注意し、「　」しなければならない。', answers: ['消防に通報','運行管理者に連絡','消火器等による消化活動を','乗客を安全な場所に避難誘導'], correct:'乗客を安全な場所に避難誘導' },
  { question:'第６８条　運転者は、親切、丁寧かつ公平な接客に努めるとともに、「　」にあたらなければならない。', answers: ['定時運行','車内事故の防止','車内の乗客の整理','適切な運賃の授受'], correct:'車内の乗客の整理' },
  { question:'第７３条　運転者は、乗客が車内に持ち込む物品に十分注意し、危険物のおそれがあるときは、その内容物を確認しなければならない。この場合において、「危険物品の車内持ち込み禁止等」に該当するときは、「　」しなければならない。', answers: ['運行管理者に連絡','乗車できない理由を説明','持ち込みを拒絶','警察等に通報'], correct:'持ち込みを拒絶' },
  { question:'（バス事故対応等マニュアル）前車が急停車しても、これに追突するのを避けることのできる適切な車間距離を保つこと。又、停車時は前者との車間距離を可能な限り「」以上あけること。', answers: ['1.0m','1.5m','2.0m','2.5m'], correct:'2.5m' },
  { question:'（バス事故対応等マニュアル）事故発生時の対応で、一番最初にするべき行動はどれか。', answers: ['警察への通報','営業所へ連絡','負傷者の確認','現場の安全確保'], correct:'負傷者の確認' },
  { question:'（接客マニュアル）次のうち、尊敬語でないものを選べ。', answers: ['見るーごらんになる','言うーおっしゃる','いるーおる','行くーいらっしゃる'], correct:'いるーおる' },
  { question:'（トラブル対応マニュアル）運行中に風速「　」を超える暴風に遭遇したときは、運転を一時見合わせ、運行管理者に無線で報告し、指示を受ける', answers: ['15m','20m','30m','40m'], correct:'20m' },
  { question:'（バス停留所発着時における安全確保のためのマニュアル）バス事故の「　」％はバスの車内で発生', answers: ['21','31','41','51'], correct:'31' },
  { question:'（バス停留所発着時における安全確保のためのマニュアル）車内事故の原因は「発着時の不注意（着席未確認等」が最も多く約「　」%', answers: ['45','55','65','75'], correct:'45' },
  { question:'（バス停留所発着時における安全確保のためのマニュアル）車内事故の負傷者は約83.4%が女性で、約「　」%が60歳以上の高齢者', answers: ['48','58','68','78'], correct:'48' },
  { question:'（バス停留所発着時における安全確保のためのマニュアル）『子どもは動く「　」』と言われるように、衝動的かつ突発的な危険行為をしますので、車内・乗車前・降車後の行動に注意が必要です。', answers: ['青信号','黄色信号','赤信号','危険物'], correct:'赤信号' },
  { question:'（バス停留所発着時における安全確保のためのマニュアル）降車するお客様が、「①」を確認する。乗車するお客様が、「②」を確認する', answers: ['①ステップから降りたこと ②席に着いたこと','①ステップから降りたこと ②完全にフロアに上がったこと','①バスから完全に離れたこと ②席に着いたこと','①バスから完全に離れたこと ②完全にフロアに上がったこと'], correct:'①バスから完全に離れたこと ②完全にフロアに上がったこと' },
  { question:'（エコドライブマニュアル）経済速度は、一般道では「　」km/hが目安です。', answers: ['20〜50','20〜60','30〜50','30〜60'], correct:'30〜60' },
  { question:'（エコドライブマニュアル）速度に応じて、素早いギアチェンジを心がけましょう。およそ、「　」rpmの範囲（グリーンゾーン内）です。', answers: ['1000〜1500','1000〜2000','1500〜2000','1500〜1800'], correct:'1000〜1500' },
  { question:'第28条によれば、原則として自動車を後退させるには「　」の誘導が必要である。', answers: ['乗客','整備士','誘導員又は添乗員','営業所長'], correct:'誘導員又は添乗員' },
     { 
    question:'第9条によれば、運転者は当日乗務した内容を「　」に正確に記入しなければならない。',
    answers: ['日報','乗務記録簿','勤務表','点呼簿'],
    correct:'乗務記録簿'
  },
  { 
    question:'第10条によれば、運転者及び添乗員は貸与された「　」を着用し、端正な容姿を心掛けなければならない。',
    answers: ['制服・制帽・名札','私服','運転免許証','腕章'],
    correct:'制服・制帽・名札'
  },
  { 
    question:'第11条によれば、運転者が休暇や欠勤をするときは、事前に「　」の承認を得なければならない。',
    answers: ['営業所長','乗客','同僚','添乗員'],
    correct:'営業所長'
  },
  { 
    question:'第12条によれば、運転者は私金を「　」に使用してはならない。',
    answers: ['両替や精算','自分の食事','家族への送金','貯金'],
    correct:'両替や精算'
  },
  { 
    question:'第13条によれば、運転者は「　」の指導監督に従わなければならない。',
    answers: ['運行管理者','整備士','添乗員','営業所長'],
    correct:'運行管理者'
  },
  { 
    question:'第14条によれば、心身の状態により自動車を安全に運行できないときは「　」に従事してはならない。',
    answers: ['点検業務','運転業務','清掃業務','整備業務'],
    correct:'運転業務'
  },
  { 
    question:'第15条によれば、運転者は出勤時に「　」による検査で酒気を帯びていないことを確認されなければならない。',
    answers: ['血液検査','アルコール検知器','呼気確認','医師診断'],
    correct:'アルコール検知器'
  },
  { 
    question:'第16条によれば、運転者が常に携帯しなければならないのは「　」である。',
    answers: ['運転免許証','運行指示表','筆記用具','ICカード'],
    correct:'運行指示表'
  },
  { 
    question:'第17条によれば、運転者は運行開始前に「　」に基づいて日常点検を確実に行わなければならない。',
    answers: ['日常点検票','健康診断票','勤務表','出庫簿'],
    correct:'日常点検票'
  },
  { 
    question:'第18条によれば、乗務終了後の終業点呼では「　」による検査を受けなければならない。',
    answers: ['血圧測定','アルコール検知器','心電図','呼吸器検査'],
    correct:'アルコール検知器'
  },{ 
    question:'第19条によれば、運転者は自動車を運行するときは「　」を正確に表示しなければならない。',
    answers: ['運行時刻','行き先','車両番号','運転者名'],
    correct:'行き先'
  },
  { 
    question:'第19条によれば、自動車を回送するときは、行き先を「　」と表示しなければならない。',
    answers: ['回送','運休','臨時','休止'],
    correct:'回送'
  },
  { 
    question:'第20条によれば、乗務を交替する運転者は、運行状況や車両状況などを「　」に引き継がなければならない。',
    answers: ['運行管理者','新たに乗務する運転者','添乗員','営業所長'],
    correct:'新たに乗務する運転者'
  },
  { 
    question:'第21条によれば、運転者は別に定める「　」により、安全かつ経済的な運転をしなければならない。',
    answers: ['安全運転マニュアル','エコドライブマニュアル','整備基準書','交通法規集'],
    correct:'エコドライブマニュアル'
  },
  { 
    question:'第22条によれば、運転者は道路状況に応じた適切な速度で運転するとともに、法令で指定された「　」を超えてはならない。',
    answers: ['最高速度','最低速度','標準速度','制限時間'],
    correct:'最高速度'
  },
  { 
    question:'第23条によれば、他の車両の直後を進行する際は、追突を避けられるよう「　」を保持しなければならない。',
    answers: ['車間距離','速度制御','ハザードランプ','進路変更'],
    correct:'車間距離'
  },
  { 
    question:'第24条によれば、交差点等で右左折するときは「　」や一旦停止を行い、安全を確認しなければならない。',
    answers: ['徐行','加速','急発進','信号無視'],
    correct:'徐行'
  },
  { 
    question:'第25条によれば、運転者は運行時刻に著しく遅れが生じた場合、速やかに「　」に報告しなければならない。',
    answers: ['整備士','営業所長','運行管理者','添乗員'],
    correct:'運行管理者'
  },
  { 
    question:'第26条によれば、運転者は運行指示表に定める起点の発車時刻前に「　」させてはならない。',
    answers: ['発進','停車','減速','点検'],
    correct:'発進'
  },
  { 
    question:'第28条によれば、原則として自動車を後退させるには「　」の誘導が必要である。',
    answers: ['乗客','整備士','誘導員又は添乗員','営業所長'],
    correct:'誘導員又は添乗員'
  }
];

// ====== 状態変数 ======
let quizLength = 0;
let quizIndex = 0;
let score = 0;

let incorrectQuestions = []; // 不正解だけ保存
let round = 1;               // 1: 初回, 2: 再挑戦
let firstRoundCorrect = 0;
let firstRoundTotal = 0;

// 回答ボタン（既存の4ボタンを想定）
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// ====== 画面セットアップ ======
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
};

// ====== ラウンド終了処理 ======
const finishRound = () => {
  if (round === 1) {
    // 初回ラウンド終了
    firstRoundCorrect = score;
    if (incorrectQuestions.length > 0) {
      const retry = window.confirm(
        `終了！初回の正解数は ${firstRoundCorrect}/${firstRoundTotal} でした。\n` +
        `不正解 ${incorrectQuestions.length} 問に再挑戦しますか？`
      );
      if (retry) {
        // 再挑戦を開始：不正解だけで第2ラウンド
        quiz = shuffle(incorrectQuestions);
        quizLength = quiz.length;
        quizIndex = 0;
        incorrectQuestions = [];
        score = 0; // 再挑戦のスコアを別カウント
        round = 2;
        setupQuiz();
        return;
      }
    }
    // 不正解が0、または再挑戦しない場合は終了
    window.alert(`終了！初回の成績は ${firstRoundCorrect}/${firstRoundTotal} でした。`);
  } else {
    // 第2ラウンド（再挑戦）終了
    const retryCorrect = score;
    window.alert(
      `終了！\n` +
      `初回：${firstRoundCorrect}/${firstRoundTotal}\n` +
      `再挑戦：${retryCorrect}/${quizLength}`
    );
  }
};

// ====== クリック処理 ======
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！　正解は「' + quiz[quizIndex].correct + '」');
    if (round === 1) {
      // 不正解だった問題を保存（再挑戦用）
      incorrectQuestions.push(quiz[quizIndex]);
    } else {
      // さらに再々挑戦を許可したい場合はここで push する
      // incorrectQuestions.push(quiz[quizIndex]);
    }
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    finishRound();
  }
};

// ====== 回答ボタンへのイベント登録（選択後に実行） ======
function attachAnswerHandlers() {
  for (let i = 0; i < buttonLength; i++) {
    $button[i].addEventListener('click', clickHandler);
  }
}

// ====== 出題数選択UI（オーバーレイ） ======
function showNumSelect() {
  // オーバーレイ生成
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,.4);
    display: grid; place-items: center; z-index: 9999; padding: 16px;
  `;

  // ボックス
  const box = document.createElement('div');
  box.style.cssText = `
    background: #fff; border-radius: 12px; padding: 24px; max-width: 420px; width: min(92vw, 420px);
    box-shadow: 0 10px 30px rgba(0,0,0,.2); font-family: system-ui, sans-serif; text-align: center;
  `;
  box.innerHTML = `
    <h2 style="margin:0 0 12px; font-size: 20px;">出題数を選んでください</h2>
    <p style="margin:0 0 16px; color:#555; font-size:14px;">10問 / 20問 / 30問 / 全部</p>
  `;

  // ボタン群
  const btnWrap = document.createElement('div');
  btnWrap.style.cssText = `display: grid; gap: 10px; grid-template-columns: repeat(2, 1fr);`;

  const options = [
    { label: '10問', value: 10 },
    { label: '20問', value: 20 },
    { label: '30問', value: 30 },
    { label: '全部', value: 'all' },
  ];

  options.forEach(opt => {
    const b = document.createElement('button');
    b.textContent = opt.label;
    b.style.cssText = `
      padding: 12px 10px; border-radius: 10px; border: 1px solid #ddd; background: #f7f7f7;
      cursor: pointer; font-size: 16px;
    `;
    b.onmouseenter = () => (b.style.background = '#eee');
    b.onmouseleave = () => (b.style.background = '#f7f7f7');
    b.onclick = () => startWith(opt.value);
    btnWrap.appendChild(b);
  });

  box.appendChild(btnWrap);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // 選択された出題数で開始
  function startWith(selected) {
    // 状態をリセット
    quizIndex = 0;
    score = 0;
    incorrectQuestions = [];
    round = 1;

    // 出題数決定（不足時は最大数に丸める）
    const requested = selected === 'all' ? quiz.length : selected;
    if (selected !== 'all' && requested > quiz.length) {
      alert(`選んだ数（${requested}問）より問題数が少ないため、${quiz.length}問で出題します。`);
    }
    const count = Math.min(requested, quiz.length);

    // シャッフル＆切り出し
    quiz = shuffle(quiz).slice(0, count);
    quizLength = quiz.length;
    firstRoundTotal = quizLength;

    // オーバーレイを外してクイズ開始
    overlay.remove();
    setupQuiz();
    attachAnswerHandlers();
  }
}

// ====== エントリポイント ======
showNumSelect();
