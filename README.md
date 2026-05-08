# 爸爸闖江湖 · 英文修煉

> 給 65 歲爸爸出國旅遊用的英文學習 PWA。武俠主題闖關 + 跟著老師念，讓長輩敢開口、有信心。

## 特色

- **160 句旅遊英文**，分 7 卷 32 篇（問安、機場、飯店、餐廳、交通、購物、高爾夫）
- **真人語音示範**：原生 Web Speech API，可切換美式 / 澳式，正常速 + 超慢速
- **每日試煉**：自動從錯題池抽題複習，60% 弱句 + 40% 隨機
- **武俠 gamification**：星數、段位（華山小弟子 → 武林盟主）、成就（降龍十八掌、獨孤九劍…）
- **離線可用**：純前端、無後端、PWA 可安裝到手機主畫面
- **長輩友善**：emoji 為主的 UI、寬鬆評分機制、字體可透過瀏覽器內建縮放放大

## 線上體驗

push 到 GitHub Pages 後可在 `https://<你的帳號>.github.io/<repo>/` 直接玩。

## 檔案結構

```
.
├── index.html       主程式（HTML + CSS + JS）
├── data.js          教材資料（160 句、段位、成就、鼓勵語）— 修改/新增句子改這裡
├── manifest.json    PWA 設定
└── README.md
```

刻意保持簡單：純前端、無 build tool、無外部依賴，雙擊 index.html 就能跑。

## 在本機開啟

直接用瀏覽器打開 `index.html` 即可（建議 Chrome 或 Safari，Firefox 對 Web Speech 支援差）。

## 部署到 GitHub Pages

1. 把這個資料夾推到 GitHub repo
2. Repo Settings → Pages → Source 選 `main` branch / `(root)`
3. 等一下，網址就會在 `https://<帳號>.github.io/<repo>/`

## 修改 / 新增句子

打開 [data.js](data.js)，找到對應的 `LEVELS` 區塊，新增或修改句子即可：

```js
{ en: 'Excuse me.', zh: '不好意思', scenario: '攔人問事', tip: '萬用詞，比 sorry 用更多' }
```

- `en` 英文
- `zh` 中文翻譯
- `scenario` 使用情境（會在學習頁顯示）
- `tip` 選填，給長輩的小提示

## 設計筆記

- **錯題池複習**：使用者通關後，每日試煉會優先抽他答錯過的句子，類似 Anki 的間隔重複。
- **不做語音辨識評分**：iOS Safari 對 Web Speech API 支援很差，且長輩比起被機器評分，更需要的是反覆聽老師念、自己跟著默念。改用「老師示範 + 學會就下一句」的步調，反而更貼近長輩學習節奏。
- **不刻意追求重構**：1 個 HTML + 1 個 data.js + 1 個 manifest，方便長輩家屬接手維護。

## 授權

MIT — 歡迎拿去改成你家長輩的版本。
