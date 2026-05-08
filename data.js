// ================================================================
// 32 篇 · 160 句 — 旅遊英文教材
// 修改/新增句子請直接編輯此檔，不需動主程式
// ================================================================
const VOLUMES = [
  { id: 1, title: '第一卷 · 內功心法', subtitle: '出國前的基本功' },
  { id: 2, title: '第二卷 · 機場江湖', subtitle: '搭機通關全攻略' },
  { id: 3, title: '第三卷 · 飯店風雲', subtitle: '住宿大小事' },
  { id: 4, title: '第四卷 · 美食天堂', subtitle: '吃飯喝咖啡' },
  { id: 5, title: '第五卷 · 通行四海', subtitle: '交通與問路' },
  { id: 6, title: '第六卷 · 快意江湖', subtitle: '購物玩樂訪友' },
  { id: 7, title: '第七卷 · 綠草球場', subtitle: '高爾夫江湖事' },
];

const LEVELS = [
  // === 卷 1 內功心法 ===
  { id: 1, vol: 1, icon: '🌅', boss: '🚶', bossName: '街頭路人', title: '早晚問安', desc: '一日的開始與結束', phrases: [
    { en: 'Good morning!', zh: '早安', scenario: '早上見面' },
    { en: 'Good night!', zh: '晚安', scenario: '睡前道別' },
    { en: 'Have a nice day!', zh: '祝你今天愉快', scenario: '出門時' },
    { en: 'Take care!', zh: '保重', scenario: '道別關心', tip: '比 goodbye 更有人情味' },
    { en: 'See you later!', zh: '待會見', scenario: '短暫離開' },
  ]},
  { id: 2, vol: 1, icon: '🙏', boss: '👵', bossName: '鄰居阿嬤', title: '基本禮貌', desc: '請、謝謝、不好意思', phrases: [
    { en: 'Please.', zh: '請', scenario: '有求於人' },
    { en: 'Thank you so much.', zh: '非常謝謝你', scenario: '別人幫大忙' },
    { en: 'You are welcome.', zh: '不客氣', scenario: '人家謝你時' },
    { en: 'Excuse me.', zh: '不好意思', scenario: '攔人問事/借過/小錯', tip: '萬用詞，比 sorry 用更多' },
    { en: 'After you.', zh: '您先請', scenario: '進門/上電梯禮讓', tip: '跟陌生人也很常用' },
  ]},
  { id: 3, vol: 1, icon: '👤', boss: '🥳', bossName: '派對主人', title: '自我介紹', desc: '初次見面說的話', phrases: [
    { en: 'My name is Chu.', zh: '我姓朱', scenario: '介紹姓氏' },
    { en: 'I am from Taiwan.', zh: '我從台灣來', scenario: '對方問你哪裡人' },
    { en: 'Nice to meet you.', zh: '很高興認識你', scenario: '初次見面' },
    { en: 'I am 65 years old.', zh: '我 65 歲', scenario: '對方問年齡' },
    { en: 'I am retired.', zh: '我退休了', scenario: '對方問你工作' },
  ]},
  { id: 4, vol: 1, icon: '🔢', boss: '🛒', bossName: '路邊小販', title: '數字時間', desc: '時間數字常用句', phrases: [
    { en: 'About thirty minutes.', zh: '大約 30 分鐘', scenario: '說明時間範圍' },
    { en: 'What time is it?', zh: '現在幾點？', scenario: '問時間' },
    { en: 'See you at seven.', zh: '七點見', scenario: '約時間' },
    { en: 'Half an hour.', zh: '半小時', scenario: '描述時間長短' },
    { en: 'Right now, please.', zh: '現在馬上', scenario: '請求立刻處理' },
  ]},
  { id: 5, vol: 1, icon: '🆘', boss: '👮', bossName: '警察先生', title: '求救應急', desc: '出狀況時要會說', phrases: [
    { en: 'Help me, please!', zh: '請救救我', scenario: '緊急求助' },
    { en: 'Call the police!', zh: '叫警察', scenario: '遇到危險' },
    { en: 'I need a doctor.', zh: '我需要醫生', scenario: '身體不舒服' },
    { en: 'It is an emergency.', zh: '這是緊急狀況', scenario: '事態緊急' },
    { en: 'Where is the hospital?', zh: '醫院在哪？', scenario: '需要找醫院' },
  ]},

  // === 卷 2 機場江湖 ===
  { id: 6, vol: 2, icon: '🛫', boss: '👩‍✈️', bossName: '報到櫃台姐姐', title: '報到登機', desc: '機場第一站', phrases: [
    { en: 'Where do I check in?', zh: '我在哪裡報到？', scenario: '進機場找櫃台' },
    { en: 'This is my passport.', zh: '這是我的護照', scenario: '出示護照' },
    { en: 'Just one bag, please.', zh: '一個行李托運', scenario: '報到時' },
    { en: 'Window seat, please.', zh: '請給我窗邊座位', scenario: '選位置' },
    { en: 'What time do we board?', zh: '我們幾點登機？', scenario: '問登機時間' },
  ]},
  { id: 7, vol: 2, icon: '🛂', boss: '🛂', bossName: '海關大叔', title: '海關通關', desc: '入境基本問答', phrases: [
    { en: 'I am here on vacation.', zh: '我來度假', scenario: '海關問來幹嘛' },
    { en: 'I will stay for two weeks.', zh: '我待兩週', scenario: '海關問待幾天' },
    { en: 'Visiting my friend.', zh: '來看朋友', scenario: '說明來意' },
    { en: 'Nothing to declare.', zh: '沒有要申報的', scenario: '海關問有沒有申報' },
    { en: 'Here is my address.', zh: '這是我的地址', scenario: '海關問住哪' },
  ]},
  { id: 8, vol: 2, icon: '🛃', boss: '👮‍♂️', bossName: '海關問答官', title: '海關問答', desc: '海關問深一點', phrases: [
    { en: 'I will stay at a hotel.', zh: '我住飯店', scenario: '對方問住哪' },
    { en: 'About two thousand US dollars.', zh: '大約兩千美金', scenario: '對方問帶多少錢' },
    { en: 'This is my first time here.', zh: '我第一次來', scenario: '對方問來過沒' },
    { en: 'Could you say that again?', zh: '可以再說一次嗎？', scenario: '聽不清楚', tip: '聽不懂時超實用，多用！' },
    { en: 'Sorry, I do not understand.', zh: '不好意思，我聽不懂', scenario: '完全聽不懂' },
  ]},
  { id: 9, vol: 2, icon: '🧳', boss: '🧳', bossName: '行李員', title: '行李問題', desc: '行李丟了怎麼辦', phrases: [
    { en: 'Where is my luggage?', zh: '我的行李在哪？', scenario: '行李沒出現' },
    { en: 'I lost my suitcase.', zh: '我行李不見了', scenario: '行李遺失' },
    { en: 'This is not mine.', zh: '這不是我的', scenario: '拿錯行李' },
    { en: 'It is a black bag.', zh: '是黑色的包包', scenario: '描述行李' },
    { en: 'Please help me find it.', zh: '請幫我找', scenario: '請求協助' },
  ]},
  { id: 10, vol: 2, icon: '✈️', boss: '💁‍♀️', bossName: '空服員', title: '機上需求', desc: '飛機上的基本需求', phrases: [
    { en: 'May I have water?', zh: '可以給我水嗎？', scenario: '口渴' },
    { en: 'I feel cold.', zh: '我覺得冷', scenario: '冷氣太強' },
    { en: 'Where is the toilet?', zh: '廁所在哪？', scenario: '找廁所' },
    { en: 'The chicken, please.', zh: '我要雞肉', scenario: '選餐點' },
    { en: 'Could I have a blanket?', zh: '可以給我毯子嗎？', scenario: '想要毯子' },
  ]},
  { id: 11, vol: 2, icon: '🪑', boss: '👨‍✈️', bossName: '空少', title: '機上小事', desc: '飛機上的小狀況', phrases: [
    { en: 'Could I have some coffee?', zh: '可以給我咖啡嗎？', scenario: '機上飲料' },
    { en: 'The headphones do not work.', zh: '耳機壞了', scenario: '設備故障' },
    { en: 'How do I turn on the light?', zh: '燈怎麼開？', scenario: '想看書' },
    { en: 'May I change my seat?', zh: '可以換位子嗎？', scenario: '位子有問題' },
    { en: 'When will we land?', zh: '什麼時候降落？', scenario: '快到了沒' },
  ]},

  // === 卷 3 飯店風雲 ===
  { id: 12, vol: 3, icon: '🏨', boss: '💁', bossName: '飯店櫃台', title: '入住飯店', desc: '辦理入住手續', phrases: [
    { en: 'I have a reservation.', zh: '我有訂房', scenario: '到櫃台說' },
    { en: 'Under the name Chu.', zh: '訂位姓朱', scenario: '說預訂名字' },
    { en: 'For three nights.', zh: '住三晚', scenario: '說明住幾晚' },
    { en: 'What time is checkout?', zh: '幾點退房？', scenario: '問退房時間' },
    { en: 'What is my room number?', zh: '我房號幾號？', scenario: '問房號' },
  ]},
  { id: 13, vol: 3, icon: '🛏️', boss: '🧹', bossName: '房務阿姨', title: '房內設施', desc: 'Wifi、毛巾、早餐', phrases: [
    { en: "What's the Wifi password?", zh: '無線網路密碼是什麼？', scenario: '問網路密碼' },
    { en: 'The air conditioner does not work.', zh: '冷氣壞了', scenario: '冷氣有問題' },
    { en: 'Could I have more towels?', zh: '可以多給毛巾嗎？', scenario: '需要毛巾' },
    { en: 'Where is the breakfast?', zh: '早餐在哪？', scenario: '找早餐' },
    { en: 'What time is breakfast?', zh: '早餐幾點？', scenario: '問時間' },
  ]},
  { id: 14, vol: 3, icon: '🛠️', boss: '🔧', bossName: '維修先生', title: '客房問題', desc: '東西壞了要客訴', phrases: [
    { en: 'The room is too cold.', zh: '房間太冷', scenario: '房間溫度' },
    { en: 'The toilet will not flush.', zh: '馬桶不通', scenario: '馬桶有問題' },
    { en: 'Could you send someone?', zh: '可以派人來嗎？', scenario: '需要服務' },
    { en: 'It smells bad in here.', zh: '裡面有怪味', scenario: '房間有味道' },
    { en: 'Can I change rooms?', zh: '可以換房嗎？', scenario: '想換房' },
  ]},
  { id: 15, vol: 3, icon: '🛎️', boss: '🛎️', bossName: '大廳禮賓', title: '飯店服務', desc: '寄行李、叫車、健身', phrases: [
    { en: 'Can I leave my bags here?', zh: '可以把行李寄放在這嗎？', scenario: '退房後逛街' },
    { en: 'Please call a taxi.', zh: '請幫我叫車', scenario: '需要計程車' },
    { en: 'Where is the gym?', zh: '健身房在哪？', scenario: '想運動' },
    { en: 'Is breakfast free?', zh: '早餐免費嗎？', scenario: '問費用' },
    { en: 'I need an iron, please.', zh: '我需要熨斗', scenario: '燙衣服' },
  ]},
  { id: 16, vol: 3, icon: '🔑', boss: '💼', bossName: '結帳經理', title: '退房結帳', desc: '結束住宿', phrases: [
    { en: 'I am checking out.', zh: '我要退房', scenario: '到櫃台' },
    { en: 'Here is my key.', zh: '鑰匙還你', scenario: '交還房卡' },
    { en: 'May I have the bill?', zh: '帳單給我看', scenario: '看帳單' },
    { en: 'I think there is a mistake.', zh: '我覺得這裡好像算錯了', scenario: '對帳發現問題' },
    { en: 'Thank you for everything.', zh: '謝謝這幾天的照顧', scenario: '離開前道謝' },
  ]},

  // === 卷 4 美食天堂 ===
  { id: 17, vol: 4, icon: '🍽️', boss: '👋', bossName: '領台姐姐', title: '餐廳訂位', desc: '進餐廳第一句', phrases: [
    { en: 'A table for two, please.', zh: '兩個人的位子', scenario: '一進門' },
    { en: 'We have a reservation.', zh: '我們有訂位', scenario: '已經訂過位' },
    { en: 'By the window, please.', zh: '靠窗的位子', scenario: '指定窗邊' },
    { en: 'Could we sit away from the restroom?', zh: '我們不想坐在廁所附近', scenario: '禮貌指定位子', tip: '比直接說「不要」更得體' },
    { en: 'How long is the wait?', zh: '請問大概要候位多久？', scenario: '客滿要等' },
  ]},
  { id: 18, vol: 4, icon: '📋', boss: '🤵', bossName: '服務生', title: '開始點餐', desc: '看菜單、推薦', phrases: [
    { en: 'May I see the menu?', zh: '看一下菜單', scenario: '坐下後' },
    { en: 'What do you recommend?', zh: '你推薦什麼？', scenario: '不知道吃什麼' },
    { en: 'I will have this one.', zh: '我要這個', scenario: '指著菜單' },
    { en: 'A glass of water, please.', zh: '一杯水', scenario: '要水' },
    { en: 'No food allergies.', zh: '我沒有食物過敏', scenario: '對方問過敏' },
  ]},
  { id: 19, vol: 4, icon: '🥩', boss: '👨‍🍳', bossName: '主廚', title: '主菜選擇', desc: '熟度、口味、調整', phrases: [
    { en: 'Medium rare, please.', zh: '五分熟', scenario: '牛排熟度' },
    { en: 'Not too spicy.', zh: '不要太辣', scenario: '辣度' },
    { en: 'Sauce on the side, please.', zh: '請把沾醬另外放', scenario: '醬料分開', tip: '老外餐廳很常這樣點' },
    { en: 'My friend will order first.', zh: '讓我朋友先點餐', scenario: '禮讓朋友' },
    { en: 'Can we share this dish?', zh: '我們可以分這道菜嗎？', scenario: '兩人分一份' },
  ]},
  { id: 20, vol: 4, icon: '😋', boss: '👴', bossName: '隔壁桌阿伯', title: '用餐中', desc: '加東西、稱讚', phrases: [
    { en: 'This is delicious!', zh: '好好吃！', scenario: '稱讚' },
    { en: 'Could I have more salt, please?', zh: '可以加點鹽嗎？', scenario: '味道淡' },
    { en: 'Could I have ketchup?', zh: '可以給番茄醬嗎？', scenario: '吃薯條' },
    { en: 'One more glass, please.', zh: '再來一杯', scenario: '要續杯' },
    { en: 'No, thank you.', zh: '不用了，謝謝你', scenario: '禮貌推辭' },
  ]},
  { id: 21, vol: 4, icon: '💳', boss: '💳', bossName: '收銀員', title: '結帳買單', desc: '付款、小費', phrases: [
    { en: 'The check, please.', zh: '請結帳', scenario: '吃完要走' },
    { en: 'Together, please.', zh: '一起算', scenario: '一張帳單' },
    { en: 'Separate checks, please.', zh: '分開算', scenario: '各付各的' },
    { en: 'Can I pay by card?', zh: '可以刷卡嗎？', scenario: '問付款方式' },
    { en: 'Is the tip included?', zh: '小費有含嗎？', scenario: '看帳單' },
  ]},
  { id: 22, vol: 4, icon: '☕', boss: '☕', bossName: '咖啡店員', title: '咖啡時光', desc: '進咖啡店點咖啡', phrases: [
    { en: 'A pour-over, please.', zh: '我要一杯手沖咖啡', scenario: '點手沖黑咖啡', tip: 'pour-over 是手沖，店員都聽得懂' },
    { en: 'Hot, not iced.', zh: '熱的，不要冰', scenario: '溫度' },
    { en: 'No sugar, please.', zh: '不要糖', scenario: '黑咖啡不加糖' },
    { en: 'To go, please.', zh: '外帶', scenario: '不內用' },
    { en: 'May I use the restroom?', zh: '可以借廁所嗎？', scenario: '上廁所' },
  ]},

  // === 卷 5 通行四海 ===
  { id: 23, vol: 5, icon: '🚖', boss: '🚖', bossName: '計程車司機', title: '搭計程車', desc: '叫車、報地址', phrases: [
    { en: 'Could you call a taxi for me?', zh: '可以幫我叫計程車嗎？', scenario: '請人叫車', tip: '說 for me 才不會被誤聽成「叫我『計程車』」' },
    { en: 'To this address, please.', zh: '到這個地址', scenario: '上車後' },
    { en: 'How much will it cost?', zh: '大概多少錢？', scenario: '上車前問' },
    { en: 'Stop here, please.', zh: '停這裡', scenario: '到目的地' },
    { en: 'Keep the change.', zh: '不用找了', scenario: '下車' },
  ]},
  { id: 24, vol: 5, icon: '🚇', boss: '🎫', bossName: '售票員', title: '地鐵公車', desc: '買票、轉車', phrases: [
    { en: 'Where is the subway?', zh: '地鐵站在哪？', scenario: '找捷運站' },
    { en: 'One one-way ticket, please.', zh: '一張單程車票', scenario: '買票' },
    { en: 'Which train should I take?', zh: '我該搭哪一班車？', scenario: '指著站名問' },
    { en: 'Where do I change?', zh: '在哪裡轉車？', scenario: '需要轉乘' },
    { en: 'Is this the right train?', zh: '這是對的車嗎？', scenario: '不確定' },
  ]},
  { id: 25, vol: 5, icon: '🗺️', boss: '🗺️', bossName: '熱心路人', title: '問路指路', desc: '迷路或找地方', phrases: [
    { en: 'Excuse me, where is the station?', zh: '不好意思，車站在哪？', scenario: '攔人問路' },
    { en: 'How do I get there?', zh: '怎麼去？', scenario: '問怎麼走' },
    { en: 'Is it far from here?', zh: '很遠嗎？', scenario: '問距離' },
    { en: 'Can I walk there?', zh: '可以走路嗎？', scenario: '問交通方式' },
    { en: 'I am lost, please help.', zh: '我迷路了', scenario: '走丟' },
  ]},

  // === 卷 6 快意江湖 ===
  { id: 26, vol: 6, icon: '💎', boss: '💎', bossName: '免稅店小姐', title: '機場免稅', desc: '免稅店買禮物', phrases: [
    { en: 'Where is the duty-free shop?', zh: '免稅店在哪？', scenario: '找免稅店' },
    { en: 'May I see this one?', zh: '可以看這個嗎？', scenario: '看商品' },
    { en: 'Is this on sale?', zh: '這個在打折嗎？', scenario: '問折扣' },
    { en: 'Is this the duty-free price?', zh: '這是退稅後的價格嗎？', scenario: '確認免稅價', tip: '免稅店標的價可能含稅或不含稅，問清楚再買' },
    { en: 'May I have a bag, please?', zh: '給我袋子，謝謝', scenario: '要袋子' },
  ]},
  { id: 27, vol: 6, icon: '🛍️', boss: '👗', bossName: '服飾店員', title: '逛街購物', desc: '看、試穿、買單', phrases: [
    { en: 'I am just looking, thanks.', zh: '我只是看看', scenario: '店員來問' },
    { en: 'Do you have a smaller size?', zh: '有小一號嗎？', scenario: '尺寸不對' },
    { en: 'Can I try this on?', zh: '可以試穿嗎？', scenario: '想試穿' },
    { en: 'Is there a discount?', zh: '有打折嗎？', scenario: '殺價' },
    { en: 'I will pay by credit card.', zh: '我刷卡付款', scenario: '結帳' },
  ]},
  { id: 28, vol: 6, icon: '📷', boss: '🎤', bossName: '導遊', title: '觀光景點', desc: '門票、地圖、拍照', phrases: [
    { en: 'Where can I get a map?', zh: '哪裡有地圖？', scenario: '要地圖' },
    { en: 'What time does it open?', zh: '幾點開門？', scenario: '問營業時間' },
    { en: 'How much is the ticket?', zh: '門票多少？', scenario: '買門票' },
    { en: 'Is there a tour in Chinese?', zh: '有中文導覽嗎？', scenario: '聽不懂英文' },
    { en: 'Could you take a photo for me?', zh: '可以幫我拍張照嗎？', scenario: '請人拍照', tip: 'for me 才完整' },
  ]},
  { id: 29, vol: 6, icon: '🚨', boss: '🚓', bossName: '警察伯伯', title: '緊急狀況', desc: '錢包丟了、被偷', phrases: [
    { en: 'I lost my wallet.', zh: '錢包不見了', scenario: '掉東西' },
    { en: 'Someone stole my phone.', zh: '我手機被偷了', scenario: '被偷' },
    { en: 'Where is the police station?', zh: '警察局在哪？', scenario: '需要報案' },
    { en: 'I need to call my family.', zh: '我要打給家人', scenario: '聯絡家人' },
    { en: 'Please call this number.', zh: '請打這個號碼', scenario: '給人打電話' },
  ]},
  { id: 30, vol: 6, icon: '💬', boss: '👋', bossName: '江湖過客', title: '萍水相逢', desc: '陌生人寒暄聊天', phrases: [
    { en: 'Beautiful day, isn\'t it?', zh: '今天天氣真好對吧？', scenario: '萬用開場', tip: '老外最常用的 small talk 開場白' },
    { en: 'Yes, very nice.', zh: '是啊，真不錯', scenario: '附和對方' },
    { en: 'Are you on vacation?', zh: '你也來度假嗎？', scenario: '聊聊對方' },
    { en: 'Where are you from?', zh: '你從哪裡來的？', scenario: '問對方家鄉' },
    { en: 'Nice talking to you.', zh: '很高興跟你聊天', scenario: '結束對話前說' },
  ]},

  // === 卷 7 綠草球場 ===
  { id: 31, vol: 7, icon: '⛳', boss: '🧢', bossName: '球僮 Mike', title: '球場日常', desc: '跟球僮的對話', phrases: [
    { en: 'Which club do you recommend?', zh: '你建議用幾號桿？', scenario: '問球僮選桿', tip: '球僮最常被問的就是這句' },
    { en: 'How far to the pin?', zh: '旗桿還有多遠？', scenario: '問距離' },
    { en: 'Did you see where it went?', zh: '你看到球往哪去了嗎？', scenario: '球打偏了找球' },
    { en: 'Nice shot!', zh: '好球！', scenario: '同組打好球時' },
    { en: 'Thank you, this is for you.', zh: '謝謝，這給你', scenario: '結束時給小費' },
  ]},
  { id: 32, vol: 7, icon: '🏌️', boss: '👨‍⚖️', bossName: '球場規則官', title: '球場規則', desc: 'OB、放球、找球', phrases: [
    { en: 'I lost my ball.', zh: '我球不見了', scenario: '球找不到' },
    { en: 'Is it out of bounds?', zh: '出界了嗎？', scenario: 'OB 確認', tip: 'out of bounds 就是 OB' },
    { en: 'Can I take a drop here?', zh: '可以在這裡放球嗎？', scenario: '請示放球位置' },
    { en: 'Is this a one-stroke penalty?', zh: '罰一桿嗎？', scenario: '確認罰則' },
    { en: "I'll play a provisional ball.", zh: '我打一顆暫定球', scenario: '球可能 OB 時', tip: '怕找不到球先打一顆備用' },
  ]},
];

// ================================================================
// 段位、成就、鼓勵語 - 金庸江湖風（依進度化身不同主角）
// ================================================================
const RANKS = [
  { min: 0,  name: '江湖新人',           icon: '🥷', greeting: '初入江湖，路漫漫其修遠' },
  { min: 1,  name: '華山小弟子',         icon: '⛰️', greeting: '紫霞神功初窺，劍法漸熟' },
  { min: 4,  name: '桃花島後生',         icon: '🌸', greeting: '黃老邪冷眼相看，盼君精進' },
  { min: 8,  name: '令狐沖',             icon: '🍶', greeting: '獨孤九劍·無招勝有招' },
  { min: 12, name: '神鵰大俠 楊過',      icon: '🦅', greeting: '黯然銷魂掌大成，劍氣沖霄' },
  { min: 16, name: '明教教主 張無忌',    icon: '🔥', greeting: '九陽神功大成·乾坤大挪移' },
  { min: 20, name: '北俠 郭靖',          icon: '🏹', greeting: '降龍十八掌——俠之大者，為國為民' },
  { min: 24, name: '北喬峰',             icon: '🐲', greeting: '丐幫幫主，一掌震天，無人能擋' },
  { min: 28, name: '武當 張三豐',        icon: '☯️', greeting: '太極化勁，返璞歸真，武林泰斗' },
  { min: 32, name: '劍魔 獨孤求敗',      icon: '⚔️', greeting: '縱橫江湖三十餘載，敵盡皆服' },
];

function getRank(completedCount, allThreeStar) {
  if (completedCount === LEVELS.length && allThreeStar) {
    return { name: '武林盟主', icon: '👑', greeting: '通九陽、破九陰、集五絕於一身——金庸傳奇！' };
  }
  let rank = RANKS[0];
  for (const r of RANKS) if (completedCount >= r.min) rank = r;
  return rank;
}

const VOL_LEVELS = {
  1: [1,2,3,4,5],
  2: [6,7,8,9,10,11],
  3: [12,13,14,15,16],
  4: [17,18,19,20,21,22],
  5: [23,24,25],
  6: [26,27,28,29,30],
  7: [31,32]
};

const ACHIEVEMENTS = [
  { id: 'first',    name: '初試啼聲', desc: '初次過招得勝',    icon: '⚔️', check: s => Object.values(s.levelStars).some(v => v > 0) },
  { id: 'streak3',  name: '初心不忘', desc: '連修煉 3 日',     icon: '🔥', check: s => s.streak >= 3 },
  { id: 'streak7',  name: '七日苦修', desc: '連修煉 7 日',     icon: '💪', check: s => s.streak >= 7 },
  { id: 'streak30', name: '朝乾夕惕', desc: '連修煉 30 日',    icon: '🏆', check: s => s.streak >= 30 },
  { id: 'vol1',     name: '九陽神功', desc: '第一卷大成 · 內功心法', icon: '☯️', check: s => VOL_LEVELS[1].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol2',     name: '凌波微步', desc: '第二卷大成 · 機場江湖', icon: '👣', check: s => VOL_LEVELS[2].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol3',     name: '金鐘罩體', desc: '第三卷大成 · 飯店風雲', icon: '🛡️', check: s => VOL_LEVELS[3].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol4',     name: '北冥神功', desc: '第四卷大成 · 美食天堂', icon: '🥢', check: s => VOL_LEVELS[4].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol5',     name: '神行百變', desc: '第五卷大成 · 通行四海', icon: '🏃', check: s => VOL_LEVELS[5].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol6',     name: '笑傲江湖', desc: '第六卷大成 · 快意江湖', icon: '🍶', check: s => VOL_LEVELS[6].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'vol7',     name: '打狗棒法', desc: '第七卷大成 · 綠草球場', icon: '🌳', check: s => VOL_LEVELS[7].every(id => (s.levelStars[id]||0) > 0) },
  { id: 'all',      name: '武林盟主', desc: '通關全部 32 篇',  icon: '👑', check: s => LEVELS.every(l => (s.levelStars[l.id]||0) > 0) },
  { id: 'allmax',   name: '獨孤求敗', desc: '所有篇章拿三星',  icon: '🌟', check: s => LEVELS.every(l => (s.levelStars[l.id]||0) === 3) },
  { id: 'daily5',   name: '朝練暮修', desc: '完成 5 次日課',   icon: '📅', check: s => (s.dailyChallengesDone||0) >= 5 },
];

const ENCOURAGEMENTS = [
  '降龍十八掌！', '獨孤九劍！', '黯然銷魂掌！', '九陽神功！',
  '乾坤大挪移！', '六脈神劍！', '凌波微步！', '玉女心經！',
  '九陰真經！', '彈指神通！', '一陽指破！', '太極化勁！',
  '👍 出神入化', '👏 渾然天成', '招式精妙'
];
const FAIL_MESSAGES = ['招式未熟', '氣不夠順', '心法尚淺', '回去再練', '差一點功夫'];
