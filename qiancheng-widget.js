// 小钎猪 · Scriptable v4（图片存本地文件）
// === 安装步骤 ===
// 1. Files App 打开 Scriptable → Documents 文件夹 → 新建 images 文件夹
// 2. 把 pet.jpg 丢进 images 文件夹
// 3. Scriptable 新建脚本，粘贴本代码，命名"小钎猪"

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

// 从本地文件读取图片
function getPetImage() {
  const fm = FileManager.iCloud()
  const path = fm.joinPath(fm.documentsDirectory(), "images/pet.jpg")
  if (fm.fileExists(path)) {
    try { return fm.readImage(path) } catch(e) {}
  }
  // 备用：沙盒路径
  const fm2 = FileManager.local()
  const path2 = fm2.joinPath(fm2.documentsDirectory(), "images/pet.jpg")
  if (fm2.fileExists(path2)) {
    try { return fm2.readImage(path2) } catch(e) {}
  }
  return null
}

async function buildWidget(size) {
  let w = new ListWidget()
  w.backgroundColor = new Color("#0f1221")
  let g = new LinearGradient()
  g.colors = [new Color("#0f1221"), new Color("#1a1f3a")]
  g.locations = [0, 1]
  w.backgroundGradient = g

  let img = getPetImage()
  let mood = MOODS[Math.floor(Math.random()*MOODS.length)]
  let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]

  if (size === "small") {
    if (img) {
      let i = w.addImage(img); i.imageSize = new Size(54, 54); i.cornerRadius = 12
      w.addSpacer(4)
    }
    let n = w.addText("小钎猪"); n.font = Font.boldSystemFont(13); n.textColor = Color.white()
    let m = w.addText(mood); m.font = Font.systemFont(9); m.textColor = new Color("#a5b4fc")
  } else if (size === "medium") {
    let r = w.addStack(); r.centerAlignContent()
    if (img) {
      let i = r.addImage(img); i.imageSize = new Size(76, 76); i.cornerRadius = 14
      r.addSpacer(10)
    }
    let c = r.addStack(); c.layoutVertically()
    let n = c.addText("小钎猪 · DYG"); n.font = Font.boldSystemFont(14); n.textColor = Color.white()
    let q = c.addText("「" + quote + "」"); q.font = Font.systemFont(11); q.textColor = new Color("#c7d2fe")
    q.lineLimit = 3; q.minimumScaleFactor = 0.8
  } else {
    let r = w.addStack(); r.centerAlignContent()
    if (img) {
      let i = r.addImage(img); i.imageSize = new Size(86, 86); i.cornerRadius = 16
      r.addSpacer(10)
    }
    let n = r.addText("小钎猪 · DYG"); n.font = Font.boldSystemFont(15); n.textColor = Color.white()
    w.addSpacer(6)
    let q = w.addText("「" + quote + "」"); q.font = Font.systemFont(12); q.textColor = new Color("#c7d2fe"); q.lineLimit = 4
    w.addSpacer(4)
    let m = w.addText("✨ " + mood); m.font = Font.systemFont(11); m.textColor = new Color("#fbbf24")
  }
  w.url = "scriptable:///run?scriptName=" + encodeURIComponent("小钎猪")
  w.refreshAfterDate = new Date(Date.now() + 60*60*1000) // 每小时刷新
  return w
}

async function main() {
  if (config.runsInWidget) {
    Script.setWidget(await buildWidget(config.widgetFamily || "medium"))
    Script.complete()
  } else {
    // 直接显示语录弹窗，不依赖 WebView
    let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]
    let alert = new Alert()
    alert.title = "小钎猪"
    alert.message = quote
    alert.addDestructiveAction("好的")
    await alert.present()
  }
}

main()
