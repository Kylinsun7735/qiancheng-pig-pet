// 小钎猪 · Scriptable 离线桌宠
// 新建脚本 → 粘贴 → 命名"小钎猪"

const PET_B64 = "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";
const PET_IMG = Image.fromData(Data.fromBase64String(PET_B64));

const QUOTES = [
  "热爱可抵岁月漫长",
  "圆满，拿冠军吧",
  "团结一致就能赢",
  "一起加油顶峰相见",
  "小钎猪驾到通通闪开",
  "帅是一种感觉",
  "别摸头会长不高",
  "一波流冲",
  "团结就是力量",
  "保持状态冲冲冲",
  "今天也要元气满满",
  "想我了就戳戳我"
];

const MOODS = [
  "状态超好一起冲",
  "有点困想休息",
  "饿了饿了",
  "元气满满",
  "准备开黑",
  "训练中勿扰",
  "想念钎宝们"
];

async function buildWidget(size) {
  let w = new ListWidget()
  w.backgroundColor = new Color("#0f1221")
  let g = new LinearGradient()
  g.colors = [new Color("#0f1221"), new Color("#1a1f3a")]
  g.locations = [0, 1]
  w.backgroundGradient = g

  let mood = MOODS[Math.floor(Math.random()*MOODS.length)]
  let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]

  if (size === "small") {
    let r = w.addStack()
    r.centerAlignContent()
    let img = r.addImage(PET_IMG)
    img.imageSize = new Size(54, 54); img.cornerRadius = 12
    r.addSpacer(6)
    let c = r.addStack(); c.layoutVertically()
    let n = c.addText("小钎猪"); n.font = Font.boldSystemFont(13); n.textColor = Color.white()
    let m = c.addText(mood); m.font = Font.systemFont(9); m.textColor = new Color("#a5b4fc"); m.lineLimit = 2
  } else if (size === "medium") {
    let r = w.addStack()
    r.centerAlignContent()
    let img = r.addImage(PET_IMG)
    img.imageSize = new Size(76, 76); img.cornerRadius = 14
    r.addSpacer(10)
    let c = r.addStack(); c.layoutVertically()
    let n = c.addText("小钎猪 · DYG"); n.font = Font.boldSystemFont(14); n.textColor = Color.white()
    let q = c.addText("「" + quote + "」"); q.font = Font.systemFont(11); q.textColor = new Color("#c7d2fe")
    q.lineLimit = 3; q.minimumScaleFactor = 0.8
  } else {
    let r = w.addStack()
    r.centerAlignContent()
    let img = r.addImage(PET_IMG)
    img.imageSize = new Size(86, 86); img.cornerRadius = 16
    r.addSpacer(10)
    let n = r.addText("小钎猪 · DYG"); n.font = Font.boldSystemFont(15); n.textColor = Color.white()
    w.addSpacer(6)
    let q = w.addText("「" + quote + "」"); q.font = Font.systemFont(12); q.textColor = new Color("#c7d2fe"); q.lineLimit = 4
    w.addSpacer(4)
    let m = w.addText("✨ " + mood); m.font = Font.systemFont(11); m.textColor = new Color("#fbbf24")
  }
  w.url = "scriptable:///run?scriptName=" + encodeURIComponent("小钎猪")
  return w
}

async function runFullApp() {
  let b64img = "data:image/jpeg;base64," + PET_B64
  let Q = JSON.stringify(QUOTES)
  let html = "<!DOCTYPE html><html><head>" +
    "<meta charset='utf-8'><meta name='viewport' content='width=device-width'>" +
    "<title>小钎猪</title>" +
    "<style>" +
    "body{margin:0;background:linear-gradient(180deg,#0f1221,#1a1f3a);display:flex;flex-direction:column;min-height:100vh;font-family:-apple-system,'PingFang SC',sans-serif;color:#fff;text-align:center}" +
    ".top{padding:18px}.name{font-size:20px;font-weight:800}.sub{font-size:12px;opacity:0.6}" +
    ".stage{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}" +
    ".pet{width:180px;height:180px;animation:bob 3s ease-in-out infinite}" +
    "@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}" +
    "@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}" +
    ".bubble{background:#fff;color:#1a1f3a;padding:12px 18px;border-radius:18px;border-bottom-left-radius:4px;font-size:14px;font-weight:600;margin-bottom:14px;max-width:260px}" +
    ".btns{padding:18px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}" +
    ".btn{background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:14px 0;font-size:13px;font-weight:600;cursor:pointer}" +
    ".btn .em{font-size:20px;display:block;margin-bottom:3px}" +
    "</style></head><body>" +
    "<div class='top'><div class='name'>小钎猪 <span class='sub'>· DYG</span></div></div>" +
    "<div class='stage'>" +
    "<div class='bubble' id='bubble'>今天也要冲冲冲～</div>" +
    "<img class='pet' id='pet' src='" + b64img + "'>" +
    "</div>" +
    "<div class='btns'>" +
    "<div class='btn' onclick='say()'><span class='em'>🎤</span>说句话</div>" +
    "<div class='btn' onclick='pat()'><span class='em'>🫶</span>摸摸头</div>" +
    "<div class='btn' onclick='play()'><span class='em'>⚡</span>一起冲</div>" +
    "<div class='btn' onclick='sleep()'><span class='em'>🌙</span>休息下</div>" +
    "</div>" +
    "<script>" +
    "var Q=" + Q + ";" +
    "var b=document.getElementById('bubble');var p=document.getElementById('pet');" +
    "function r(x){return x[Math.floor(Math.random()*x.length)]}" +
    "function say(){b.textContent=r(Q)}" +
    "function pat(){b.textContent='别摸头会长不高'}" +
    "function play(){b.textContent='一波流冲';p.style.animation='jump .5s ease-in-out 4'}" +
    "function sleep(){b.textContent='z z z 晚安'}" +
    "<\/script></body></html>"
  let wv = new WebView()
  await wv.loadHTML(html)
  await wv.present(true)
}

async function main() {
  if (config.runsInWidget) {
    let w = await buildWidget(config.widgetFamily || "medium")
    Script.setWidget(w); Script.complete()
  } else {
    await runFullApp()
  }
}
main()
