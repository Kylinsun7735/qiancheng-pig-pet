// 小钎猪 · Scriptable 桌宠（完全离线版）
// 使用：Scriptable → + 新建脚本 → 粘贴全部 → 命名"小钎猪"
// 组件：桌面长按 → + → Scriptable → 选尺寸 → 选"小钎猪"

// ========== 内嵌头像（离线，无需联网）==========
const PET_B64 = "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SwVTnPH8C9KpLbuOiTlWGeM85qxdLua/3tjAY/jvFXbTULUQRr5652qMZ79KudWUXZCUEzOWFk5UToT9ajQJ/aKGSJtygyNu4L45A/Stv7fZlR/pKZOep9Kz5pIptTlMMhkAtmBK8j159v64qVXlLQfs4rU7+7+Mviqa2WGO306JlPyuUeTbwBwrMRnivO7mea5uJLi4leWWRizuxyWJOSajoq4UoU/hViqlapU+N3CiiitDIKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFRmR1dThlIIPoRTzFGJI5msTNFIORHu4fccj8scVHSqzKCFZgD1wcZqWr6jHTHTVYiPS5iQeDuIGab9mRrvc1m9rDGhZhLkEtg7QO/UU/z5/8AnvL0x989KjJJ6kn6mk4t7/kJaD/M3SO0ihhIfnHrzmljhRCwk083Kbv3ckWTkZ4zjv7VHQCR0JH0pta3QEm6zJCLo8jMp5AByPrTLeMwrNO0PkM7bYkJOQuDu4/IZNOaaZgoaWQheFBY8fSmEknJJJpcre/5ArLYKKKKsAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z";
const PET_IMG = Image.fromData(Data.fromBase64String(PET_B64));

// ========== 语录 ==========
const QUOTES = [
  "我始终相信坚持可以给人力量，热爱可抵岁月漫长",
  "圆满。拿到我想要的冠军吧",
  "破局密码就是整个队伍团结一致",
  "一起加油，顶峰相见",
  "小钎猪驾到～通通闪开！",
  "帅是一种感觉，你品品",
  "别摸头啦，会长不高的",
  "一波流！冲！",
  "兄弟们，团结就是力量",
  "保持状态，冲冲冲",
  "今天也要元气满满",
  "想我了就戳戳我"
];

const MOODS = [
  "状态超好，一起冲",
  "有点困，想休息",
  "饿了饿了",
  "今天也要元气满满",
  "准备开黑",
  "训练中勿扰",
  "想念钎宝们"
];

// ========== 小组件构建 ==========
async function buildWidget(size) {
  let widget = new ListWidget()
  widget.backgroundColor = new Color("#0f1221")
  
  // 渐变背景
  let grad = new LinearGradient()
  grad.colors = [new Color("#0f1221"), new Color("#1a1f3a")]
  grad.locations = [0, 1]
  widget.backgroundGradient = grad

  let mood = MOODS[Math.floor(Math.random()*MOODS.length)]
  let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]

  if (size === "small") {
    let row = widget.addStack()
    row.centerAlignContent()
    let img = row.addImage(PET_IMG)
    img.imageSize = new Size(58, 58)
    img.cornerRadius = 12
    row.addSpacer(8)
    let col = row.addStack()
    col.layoutVertically()
    let name = col.addText("小钎猪")
    name.font = Font.boldSystemFont(14)
    name.textColor = Color.white()
    let m = col.addText(mood)
    m.font = Font.systemFont(9)
    m.textColor = new Color("#a5b4fc")
    m.lineLimit = 2
    
  } else if (size === "medium") {
    let row = widget.addStack()
    row.centerAlignContent()
    let img = row.addImage(PET_IMG)
    img.imageSize = new Size(82, 82)
    img.cornerRadius = 16
    row.addSpacer(14)
    let col = row.addStack()
    col.layoutVertically()
    let name = col.addText("小钎猪 · DYG")
    name.font = Font.boldSystemFont(15)
    name.textColor = Color.white()
    let q = col.addText("「" + quote + "」")
    q.font = Font.systemFont(11)
    q.textColor = new Color("#c7d2fe")
    q.lineLimit = 3
    q.minimumScaleFactor = 0.8
    
  } else {
    let row = widget.addStack()
    row.centerAlignContent()
    let img = row.addImage(PET_IMG)
    img.imageSize = new Size(90, 90)
    img.cornerRadius = 18
    row.addSpacer(14)
    let name = row.addText("小钎猪 · DYG 钎城")
    name.font = Font.boldSystemFont(16)
    name.textColor = Color.white()
    
    widget.addSpacer(8)
    let q = widget.addText("「" + quote + "」")
    q.font = Font.systemFont(13)
    q.textColor = new Color("#c7d2fe")
    q.lineLimit = 4
    
    widget.addSpacer(6)
    let m = widget.addText("✨ " + mood)
    m.font = Font.systemFont(11)
    m.textColor = new Color("#fbbf24")
  }
  
  // 点击弹出完整界面
  widget.url = "scriptable:///run?scriptName=" + encodeURIComponent("小钎猪")
  
  return widget
}

// ========== 完整 App 界面 ==========
async function runFullApp() {
  let b64img = "data:image/jpeg;base64," + PET_B64
  let html = `<!DOCTYPE html><html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>小钎猪</title>
<style>
body{margin:0;padding:0;background:linear-gradient(180deg,#0f1221,#1a1f3a);
     display:flex;flex-direction:column;min-height:100vh;
     font-family:-apple-system,"PingFang SC",sans-serif;color:#fff}
.top{padding:20px;text-align:center}
.name{font-size:20px;font-weight:800}
.sub{font-size:12px;opacity:0.6}
.stage{flex:1;display:flex;flex-direction:column;align-items:center;
       justify-content:center;padding:20px}
.pet{width:200px;height:200px;object-fit:contain;
     animation:bob 3s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
.bubble{background:#fff;color:#1a1f3a;padding:12px 18px;border-radius:18px;
        border-bottom-left-radius:4px;font-size:14px;font-weight:600;
        margin-bottom:16px;max-width:280px;text-align:center}
.btns{padding:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.btn{background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.15);
     border-radius:16px;padding:14px 0;text-align:center;font-size:13px;
     font-weight:600;cursor:pointer}
.btn:active{transform:scale(0.92)}
.btn .em{font-size:22px;display:block;margin-bottom:4px}
</style></head><body>
<div class="top"><div class="name">小钎猪 <span class="sub">· DYG 钎城</span></div></div>
<div class="stage">
  <div class="bubble" id="bubble">今天也要冲冲冲～</div>
  <img class="pet" id="pet" src="${b64img}">
</div>
<div class="btns">
  <div class="btn" onclick="say()"><span class="em">🎤</span>说句话</div>
  <div class="btn" onclick="pat()"><span class="em">🫶</span>摸摸头</div>
  <div class="btn" onclick="play()"><span class="em">⚡</span>一起冲</div>
  <div class="btn" onclick="sleep()"><span class="em">🌙</span>休息下</div>
</div>
<script>
const Q = ${QUOTES};
const bubble = document.getElementById('bubble');
const pet = document.getElementById('pet');
function rand(x){ return x[Math.floor(Math.random()*x.length)]; }
function show(t){ bubble.textContent = t; }
function say(){ show(rand(Q)); }
function pat(){ show('别摸头啦，会长不高的～'); }
function play(){ show('一波流！冲！'); pet.style.animation='jump 0.5s ease-in-out 4'; }
function sleep(){ show('z z z 晚安'); }
</script></body></html>`
  
  let web = new WebView()
  await web.loadHTML(html)
  await web.present(true)
}

// ========== 主入口 ==========
async function main() {
  if (config.runsInWidget) {
    let size = config.widgetFamily || "medium"
    let widget = await buildWidget(size)
    Script.setWidget(widget)
    Script.complete()
  } else {
    await runFullApp()
  }
}

main()
