const quiz = [
  {
    question:'第３条　運転者は、この心得に定めるもののほか、法令及び通達等を遵守し、及び「」の職務上の命令に従わなければならない。',
    answers: ['運行管理者','営業所長','上司','警察官' ],
    correct:'上司'
  },{
    question: '第４条　運転者は、「」及び円滑な運行の確保並びに乗客サービスに努めなければならない。',
    answers: ['輸送の安全','乗客の安全','健康の維持','定時運行'],
    correct: '輸送の安全'
  },{
    question:'第５条　運転者は、自動車を安全に運行するために十分な知識及び「」を習得し、保有しなければならない。',
    answers: ['安全意識','運転技術','技能','テクニック' ],
    correct:'技能'
  },{
    question:'第６条　運転者は、自動車の運行の安全を確保するため、「」の内容を熟知しなければならない。',
    answers: ['執務心得','運行指示表','運転基準図','バス事故対応マニュアル' ],
    correct:'運転基準図'
  },{
    question:'第８条（１８） 交通局の職員以外の者に自動車を運転させないこと。ただし、「」など業務上必要な場合は、この限りでない。',
    answers: ['営業所長','運行管理者','自動車整備の委託業者','警察官' ],
    correct:'自動車整備の委託業者'
  },{
    question:'第１１条（１）運転者は、休暇を取得し、又は欠勤しようとするときは、事前に所定の届出書により、「」の承認を得なければならない。',
    answers: ['運行管理者','営業所長','営業副所長','業務課' ],
    correct:'営業所長'
  },{
    question:'第１３条　運転者は、「」の指導監督に従わなければならない。',
    answers: ['運行管理者','営業所長','営業副所長','業務課' ],
    correct:'運行管理者'
  },{
    question:'第１４条　運転者は、「」により、自動車を安全に運行することができないときは、運転業務に従事してはならない。',
    answers: ['健康の状態','心身の状態','疾病・私傷','睡眠不足' ],
    correct:'心身の状態'
  },{
    question:'乗務中に携帯しなければならないものとして、第１６条で指定されていないものを選べ。',
    answers: ['職員証','時計','乗務記録簿','携帯電話' ],
    correct:'携帯電話'
  },{
    question:'第２１条（１） 運転者は、常に「」に努めるとともに、自動車を良好な状態に保ち、別に定める「エコドライブマニュアル」により、安全かつ経済的な運転をしなければならない。',
    answers: ['安全運転','運転技術の向上','丁寧な接客','定時運行' ],
    correct:'運転技術の向上'
  },{
    question:'第２１条（２） 運転者は、事故の発生を未然に防止するため、常に最新の注意を払い慎重な運転を心掛けるとともに、健康に留意し、「」の保持に努めなければならない。',
    answers: ['良好な体調','健全な精神','職務遂行の意志','高い倫理観' ],
    correct:'健全な精神'
  },{
    question:'第２５条（１）運転者は、運行指示表に基づき、自動車を運行させなければならない。ただし、災害等が発生した場合又は「」の指示があった場合は、この限りでない。',
    answers: ['運行管理者又は営業所長','営業所長若しくは警察官','警察官若しくは運行管理者','誘導員' ],
    correct:'警察官若しくは運行管理者'
  },{
    question:'第２５条（５）運転者は、運行に遅れが生じた場合であっても、「」をしてはならない',
    answers: ['回復運転','制限速度の超過','早発','未済発車' ],
    correct:'制限速度の超過'
  },{
    question:'第２７条（２） 運転者は、火災現場、事故現場等の付近を通過する場合においては、「」の指示に従わなければならない。',
    answers: ['運行管理者','営業所長','運行管理者又は警察官','現場の消防員又は警察官' ],
    correct:'現場の消防員または警察官'
  },{
    question:'第２８条（２）（中略）やむを得ず自動車を後退させるときは、「」などして後方の安全を確認しなければならない。',
    answers: ['運行管理者に連絡する','周囲の協力を得る','運転者が下車する','乗客の協力を得る' ],
    correct:'運転者が下車する'
  },{
    question:'第３２条（４） 運転者は、自転車が車道を通行しているときは、自動車を「」させ、その動向を見極め、安全を確認した後、安全な距離を保持し通過しなければならない。',
    answers: ['減速又は進路変更','徐行又は進路変更','一時停止又は減速','一時停止又は徐行' ],
    correct:'一時停止又は徐行'
  },{
    question:'第３９条　運転者は、「」し、車内事故防止に努めなければならないこの場合において、特に高齢者、身体障害者等に配慮しなければならない。',
    answers: ['適宜マイクを使用','円滑に発進','乗客の動向を注視','ミラーを注視' ],
    correct:'乗客の動向を注視'
  },{
    question:'第３３条　運転者は、自動車を停留所に接近させるときは、乗降客の有無にかかわらず、「」で進行しなければならない。',
    answers: ['安全な速度','停留所で停止できる速度','徐行','最徐行' ],
    correct:'停留所で停止できる速度'
  },{
    question:'第４１条（２）運転者は、自動車を発進し、又は停車しようとするときは、円滑に自動車を発進し、又は「」し、車内事故防止に努めなければならない。',
    answers: ['緩やかに減速','緩やかに停止','緩やかに制動','安全に停車' ],
    correct:'緩やかに制動'
  },{
    question:'第４２条　運転者は、勾配箇所において自動車から離れるとき、又は安全な運行に支障のある箇所を通過するときは、「」させなければならない。',
    answers: ['車両を減速','徐行又は一時停止','最徐行','乗客を降車' ],
    correct:'乗客を降車'
  },{
    question:'第４３条　運転者は、勾配箇所においては、その長短、路面状況及び自動車の総重量等を考慮し、「」及び速度で運転しなければならない。',
    answers: ['適切な変速操作','滑らかな変速操作','緩やかな制動','緩やかな発進' ],
    correct:'適切な変速操作'
  },{
    question:'第４４条　運転者は、下り勾配箇所においては、その手前から自動車の速度を減速させ、エンジンブレーキ及びフットブレーキ等を併用し、運転しなければならない。この場合において、「」は避けなければならない。',
    answers: ['エンジンブレーキの多用','フットブレーキの多用','警音器の使用','急ブレーキ' ],
    correct:'フットブレーキの多用'
  },{
    question:'第４５条　運転者は、上り勾配箇所において自動車を発進するときは、原則として駐車ブレーキを使用し、「」させないよう発進しなければならない。',
    answers: ['エンジンを停止','急発進','後退','乗客を転倒' ],
    correct:'エンジンを停止'
  },{
    question:'第４７条　運転者は、見通しの悪いカーブを通過するときは、必ず自動車を「」させ、左側通行の原則を遵守し、かつ、憶測による運転をしてはならない。',
    answers: ['減速','徐行','徐行又は一時停止','最徐行' ],
    correct:'徐行'
  },{
    question:'第４８条（１） 運転者は、道路工事の行われている箇所、路面に凹凸のある箇所又は路面が軟弱な箇所を運行するときは、必ず「」しなければならない。',
    answers: ['減速','徐行','徐行又は一時停止','最徐行' ],
    correct:'徐行'
  },{
    question:'第４８条（２）運転者は、水たまり、泥地等の箇所を通過するときは、通行人等に泥水等を飛散させないように「」しなければならない。',
    answers: ['減速','徐行','徐行又は一時停止','最徐行' ],
    correct:'徐行'
  },{
    question:'第４９条　運転者は、道路幅員の狭い箇所で他の車両と行き違うときは、「」しなければならない。',
    answers: ['減速','徐行','徐行又は一時停止','最徐行' ],
    correct:'徐行'
  },{
    question:'第５１条　運転者は、路肩（路肩が明らかでない道路にあっては、路端から「」幅の部分、トンネル、橋梁又は高価の道路にあっては０．２５メートル幅の部分をいう。）その他運行に支障がある箇所を通行してはならない。',
    answers: ['０．２５メートル','０．３メートル','０．５メートル','０．７５メートル' ],
    correct:'０．５メートル'
  },{
    question:'第５６条　運転者は、運行中に自動車の故障を発見したときは、「」、運行管理者に報告し、その指示に従わなければならない。',
    answers: ['乗客に状況を説明し','直ちに車両を停車させ','エンジンを切り','周囲の安全を確認し' ],
    correct:'直ちに車両を停車させ'
  },{
    question:'第５９条　運転者は、常に「」を的確に把握し、乗客輸送に万全を期すとともに、自動車の安全を確保し、被害を未然に防止するよう努めなければならない。',
    answers: ['道路状況','気象状況','道路工事等の情報','災害への対応' ],
    correct:'気象状況'
  },{
    question:'第６０条　運転者は、「」が予想されるときは、担当路線の状況等について、運行管理者から予め指示を受けて出庫しなければならない。',
    answers: ['交通渋滞','異常気象','災害','道路工事' ],
    correct:'異常気象'
  },{
    question:'第６６条（１） 運転者は、自動車に火災が発生した場合は、直ちに停車するとともに、その旨を冷静沈着に乗客に告げ、全ての扉（非常口扉を含む）を開け、後続車両及び対抗車両等に十分注意し、「」しなければならない。',
    answers: ['消防に通報','運行管理者に連絡','消火器等による消化活動を','乗客を安全な場所に避難誘導' ],
    correct:'乗客を安全な場所に避難誘導'
  },{
    question:'第６８条　運転者は、親切、丁寧かつ公平な接客に努めるとともに、「」にあたらなければならない。',
    answers: ['定時運行','車内事故の防止','車内の乗客の整理','適切な運賃の授受' ],
    correct:'車内の乗客の整理'
  },{
    question:'第７３条　運転者は、乗客が車内に持ち込む物品に十分注意し、危険物のおそれがあるときは、その内容物を確認しなければならない。この場合において、「危険物品の車内持ち込み禁止等」に該当するときは、「」しなければならない。',
    answers: ['運行管理者に連絡','乗車できない理由を説明','持ち込みを拒絶','警察等に通報' ],
    correct:'持ち込みを拒絶'
  },{
    question:'（バス事故対応等マニュアル）前車が急停車しても、これに追突するのを避けることのできる適切な車間距離を保つこと。又、停車時は前者との車間距離を可能な限り「」以上あけること。',
    answers: ['1.0m','1.5m','2.0m','2.5m' ],
    correct:'2.5m'
  },{
    question:'（バス事故対応等マニュアル）事故発生時の対応で、一番最初にするべき行動はどれか。',
    answers: ['警察への通報','営業所へ連絡','負傷者の確認','現場の安全確保' ],
    correct:'負傷者の確認'
  },{
    question:'（接客マニュアル）次のうち、尊敬語でないものを選べ。',
    answers: ['見るーごらんになる','言うーおっしゃる','いるーおる','行くーいらっしゃる' ],
    correct:'いるーおる'
  },{
    question:'（トラブル対応マニュアル）運行中に風速「」を超える暴風に遭遇したときは、運転を一時見合わせ、運行管理者に無線で報告し、指示を受ける',
    answers: ['15m','20m','30m','40m' ],
    correct:'20m'
  },{
    question:'（バス停留所発着時における安全確保のためのマニュアル）バス事故の「」％はバスの車内で発生',
    answers: ['21','31','41','51' ],
    correct:'31'
  },{
    question:'（バス停留所発着時における安全確保のためのマニュアル）車内事故の原因は「発着時の不注意（着席未確認等」が最も多く約「」%',
    answers: ['45','55','65','75' ],
    correct:'45'
  },{
    question:'（バス停留所発着時における安全確保のためのマニュアル）車内事故の負傷者は約83.4%が女性で、約「」%が60歳以上の高齢者',
    answers: ['48','58','68','78' ],
    correct:'48'
  },{
    question:'（バス停留所発着時における安全確保のためのマニュアル）『子どもは動く「」』と言われるように、衝動的かつ突発的な危険行為をしますので、車内・乗車前・降車後の行動に注意が必要です。',
    answers: ['青信号','黄色信号','赤信号','危険物' ],
    correct:'赤信号'
  },{
    question:'（バス停留所発着時における安全確保のためのマニュアル）降車するお客様が、「①」を確認する。乗車するお客様が、「②」を確認する',
    answers: ['①ステップから降りたこと ②席に着いたこと','①ステップから降りたこと ②完全にフロアに上がったこと','①バスから完全に離れたこと ②席に着いたこと','①バスから完全に離れたこと ②完全にフロアに上がったこと' ],
    correct:'①バスから完全に離れたこと ②完全にフロアに上がったこと'
  },{
    question:'（エコドライブマニュアル）経済速度は、一般道では「」km/hが目安です。',
    answers: ['20〜50','20〜60','30〜50','30〜60' ],
    correct:'30〜60'
  },{
    question:'（エコドライブマニュアル）速度に応じて、素早いギアチェンジを心がけましょう。およそ、「」rpmの範囲（グリーンゾーン内）です。',
    answers: ['1000〜1500','1000〜2000','1500〜2000','1500〜1800' ],
    correct:'1000〜1500'
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
   window.alert('不正解！　正解は「' + quiz[quizIndex].correct + '」');
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

