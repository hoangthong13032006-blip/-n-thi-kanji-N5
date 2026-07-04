// Kanji N5 Database (140 words, 14 lessons)
const KANJI_DATABASE = [
  // Lesson 1 (Trang 2 PDF)
  { id: 1, kanji: "雨", hiragana: "あめ", meaning: "mưa", lesson: 1 },
  { id: 2, kanji: "お父さん", hiragana: "おとうさん", meaning: "bố (của người khác)", lesson: 1 },
  { id: 3, kanji: "書く", hiragana: "かく", meaning: "viết", lesson: 1 },
  { id: 4, kanji: "二つ", hiragana: "ふたつ", meaning: "hai cái", lesson: 1 },
  { id: 5, kanji: "小さい", hiragana: "ちいさい", meaning: "nhỏ, bé", lesson: 1 },
  { id: 6, kanji: "飲む", hiragana: "のむ", meaning: "uống", lesson: 1 },
  { id: 7, kanji: "南", hiragana: "みなみ", meaning: "phía nam", lesson: 1 },
  { id: 8, kanji: "少ない", hiragana: "すくない", meaning: "ít", lesson: 1 },
  { id: 9, kanji: "土曜日", hiragana: "どようび", meaning: "thứ bảy", lesson: 1 },
  { id: 10, kanji: "休む", hiragana: "やすむ", meaning: "nghỉ ngơi", lesson: 1 },

  // Lesson 2 (Trang 3 PDF)
  { id: 11, kanji: "道", hiragana: "みち", meaning: "con đường, tuyến đường", lesson: 2 },
  { id: 12, kanji: "後ろ", hiragana: "うしろ", meaning: "phía sau", lesson: 2 },
  { id: 13, kanji: "立つ", hiragana: "たつ", meaning: "đứng", lesson: 2 },
  { id: 14, kanji: "お姉さん", hiragana: "おねえさん", meaning: "chị gái (của người khác)", lesson: 2 },
  { id: 15, kanji: "中", hiragana: "なか", meaning: "bên trong", lesson: 2 },
  { id: 16, kanji: "百人", hiragana: "ひゃくにん", meaning: "100 người", lesson: 2 },
  { id: 17, kanji: "高校", hiragana: "こうこう", meaning: "trường trung học phổ thông (cấp 3)", lesson: 2 },
  { id: 18, kanji: "九時", hiragana: "くじ", meaning: "9 giờ", lesson: 2 },
  { id: 19, kanji: "来る", hiragana: "くる", meaning: "đến (động từ)", lesson: 2 },
  { id: 20, kanji: "安い", hiragana: "やすい", meaning: "rẻ", lesson: 2 },

  // Lesson 3 (Trang 4 PDF)
  { id: 21, kanji: "歌う", hiragana: "うたう", meaning: "hát", lesson: 3 },
  { id: 22, kanji: "六百円", hiragana: "ろっぴゃくえん", meaning: "600 yên", lesson: 3 },
  { id: 23, kanji: "天気", hiragana: "てんき", meaning: "thời tiết", lesson: 3 },
  { id: 24, kanji: "上", hiragana: "うえ", meaning: "phía trên", lesson: 3 },
  { id: 25, kanji: "忙しい", hiragana: "いそがしい", meaning: "bận rộn", lesson: 3 },
  { id: 26, kanji: "黒い", hiragana: "くろい", meaning: "màu đen", lesson: 3 },
  { id: 27, kanji: "水", hiragana: "みず", meaning: "nước", lesson: 3 },
  { id: 28, kanji: "行く", hiragana: "いく", meaning: "đi", lesson: 3 },
  { id: 29, kanji: "妹", hiragana: "いもうと", meaning: "em gái (của mình)", lesson: 3 },
  { id: 30, kanji: "取る", hiragana: "とる", meaning: "lấy, cầm, chụp ảnh", lesson: 3 },

  // Lesson 4 (Trang 5 PDF)
  { id: 31, kanji: "会社", hiragana: "かいしゃ", meaning: "công ty", lesson: 4 },
  { id: 32, kanji: "午後", hiragana: "ごご", meaning: "buổi chiều (PM)", lesson: 4 },
  { id: 33, kanji: "一か月", hiragana: "いっかげつ", meaning: "1 tháng", lesson: 4 },
  { id: 34, kanji: "五分", hiragana: "ごふん", meaning: "5 phút", lesson: 4 },
  { id: 35, kanji: "新しい", hiragana: "あたらしい", meaning: "mới", lesson: 4 },
  { id: 36, kanji: "言う", hiragana: "いう", meaning: "nói", lesson: 4 },
  { id: 37, kanji: "四月", hiragana: "しがつ", meaning: "tháng 4", lesson: 4 },
  { id: 38, kanji: "お金", hiragana: "おかね", meaning: "tiền bạc", lesson: 4 },
  { id: 39, kanji: "外国", hiragana: "がいこく", meaning: "nước ngoài", lesson: 4 },
  { id: 40, kanji: "弟", hiragana: "おとうと", meaning: "em trai (của mình)", lesson: 4 },

  // Lesson 5 (Trang 6 PDF)
  { id: 41, kanji: "女の子", hiragana: "おんなのこ", meaning: "bé gái, con gái", lesson: 5 },
  { id: 42, kanji: "十人", hiragana: "じゅうにん", meaning: "10 người", lesson: 5 },
  { id: 43, kanji: "起きる", hiragana: "おきる", meaning: "thức dậy, thức", lesson: 5 },
  { id: 44, kanji: "来週", hiragana: "らいしゅう", meaning: "tuần sau", lesson: 5 },
  { id: 45, kanji: "五つ", hiragana: "いつつ", meaning: "5 cái", lesson: 5 },
  { id: 46, kanji: "長い", hiragana: "ながい", meaning: "dài", lesson: 5 },
  { id: 47, kanji: "目", hiragana: "め", meaning: "mắt", lesson: 5 },
  { id: 48, kanji: "学校", hiragana: "がっこう", meaning: "trường học", lesson: 5 },
  { id: 49, kanji: "図書館", hiragana: "としょかん", meaning: "thư viện", lesson: 5 },
  { id: 50, kanji: "北側", hiragana: "きたがわ", meaning: "phía bắc", lesson: 5 },

  // Lesson 6 (Trang 7 PDF)
  { id: 51, kanji: "お兄さん", hiragana: "おにいさん", meaning: "anh trai (của người khác)", lesson: 6 },
  { id: 52, kanji: "白い", hiragana: "しろい", meaning: "màu trắng", lesson: 6 },
  { id: 53, kanji: "三本", hiragana: "さんぼん", meaning: "3 chai, 3 cái (vật dài)", lesson: 6 },
  { id: 54, kanji: "大学", hiragana: "だいがく", meaning: "trường đại học", lesson: 6 },
  { id: 55, kanji: "魚", hiragana: "さかな", meaning: "cá", lesson: 6 },
  { id: 56, kanji: "入口", hiragana: "いりぐち", meaning: "lối vào, cửa vào", lesson: 6 },
  { id: 57, kanji: "話す", hiragana: "はなす", meaning: "nói chuyện, trò chuyện", lesson: 6 },
  { id: 58, kanji: "男の子", hiragana: "おtこのこ", hiragana_correct: "おとこのこ", meaning: "bé trai, con trai", lesson: 6 }, // OCR correction
  { id: 59, kanji: "お米", hiragana: "おこめ", meaning: "gạo, cơm", lesson: 6 },
  { id: 60, kanji: "高い", hiragana: "たかい", meaning: "cao, đắt", lesson: 6 },

  // Lesson 7 (Trang 8 PDF)
  { id: 61, kanji: "お国", hiragana: "おくに", meaning: "đất nước (kính ngữ)", lesson: 7 },
  { id: 62, kanji: "半分", hiragana: "はんぶん", meaning: "một nửa", lesson: 7 },
  { id: 63, kanji: "空港", hiragana: "くうこう", meaning: "sân bay", lesson: 7 },
  { id: 64, kanji: "月曜日", hiragana: "げつようび", meaning: "thứ hai", lesson: 7 },
  { id: 65, kanji: "八百円", hiragana: "はっぴゃくえん", meaning: "800 yên", lesson: 7 },
  { id: 66, kanji: "空", hiragana: "そら", meaning: "bầu trời", lesson: 7 },
  { id: 67, kanji: "売る", hiragana: "うる", meaning: "bán", lesson: 7 },
  { id: 68, kanji: "南口", hiragana: "みなみぐち", meaning: "cổng nam", lesson: 7 },
  { id: 69, kanji: "お母さん", hiragana: "おかあさん", meaning: "mẹ (của người khác)", lesson: 7 },
  { id: 70, kanji: "赤い", hiragana: "あかい", meaning: "màu đỏ", lesson: 7 },

  // Lesson 8 (Trang 9 PDF)
  { id: 71, kanji: "山", hiragana: "やま", meaning: "núi", lesson: 8 },
  { id: 72, kanji: "古い", hiragana: "ふるい", meaning: "cũ", lesson: 8 },
  { id: 73, kanji: "先月", hiragana: "せんげつ", meaning: "tháng trước", lesson: 8 },
  { id: 74, kanji: "四つ", hiragana: "よっつ", meaning: "4 cái", lesson: 8 },
  { id: 75, kanji: "外", hiragana: "そと", meaning: "bên ngoài", lesson: 8 },
  { id: 76, kanji: "新聞", hiragana: "しんぶん", meaning: "báo, tờ báo", lesson: 8 },
  { id: 77, kanji: "火曜日", hiragana: "かようび", meaning: "thứ ba", lesson: 8 },
  { id: 78, kanji: "何人", hiragana: "なんにん", meaning: "mấy người", lesson: 8 },
  { id: 79, kanji: "電気", hiragana: "でんき", meaning: "điện, đèn điện", lesson: 8 },
  { id: 80, kanji: "六本", hiragana: "ろっぽん", meaning: "6 chai, 6 cái (vật dài)", lesson: 8 },

  // Lesson 9 (Trang 10 PDF)
  { id: 81, kanji: "絵", hiragana: "え", meaning: "tranh, bức tranh", lesson: 9 },
  { id: 82, kanji: "先生", hiragana: "せんせい", meaning: "thầy cô giáo, bác sĩ", lesson: 9 },
  { id: 83, kanji: "買う", hiragana: "かう", meaning: "mua", lesson: 9 },
  { id: 84, kanji: "同じ", hiragana: "おなじ", meaning: "giống nhau", lesson: 9 },
  { id: 85, kanji: "夫", hiragana: "おっと", meaning: "chồng (của mình)", lesson: 9 },
  { id: 86, kanji: "三十日", hiragana: "さんじゅうにち", meaning: "ngày 30 / 30 ngày", lesson: 9 },
  { id: 87, kanji: "暗い", hiragana: "くらい", meaning: "tối, u ám", lesson: 9 },
  { id: 88, kanji: "鳥", hiragana: "とり", meaning: "con chim", lesson: 9 },
  { id: 89, kanji: "七つ", hiragana: "ななつ", meaning: "7 cái", lesson: 9 },
  { id: 90, kanji: "前", hiragana: "まえ", meaning: "phía trước / trước đây", lesson: 9 },

  // Lesson 10 (Trang 11 PDF)
  { id: 91, kanji: "食べる", hiragana: "たべる", meaning: "ăn", lesson: 10 },
  { id: 92, kanji: "飲み物", hiragana: "のみもの", meaning: "thức uống, đồ uống", lesson: 10 },
  { id: 93, kanji: "帰る", hiragana: "かえる", meaning: "trở về", lesson: 10 },
  { id: 94, kanji: "小学校", hiragana: "しょうがっこう", meaning: "trường tiểu học", lesson: 10 },
  { id: 95, kanji: "お寺", hiragana: "おてら", meaning: "chùa, ngôi chùa", lesson: 10 },
  { id: 96, kanji: "明るい", hiragana: "あかるい", meaning: "sáng sủa, tươi sáng", lesson: 10 },
  { id: 97, kanji: "五千円", hiragana: "ごせんえん", meaning: "5000 yên", lesson: 10 },
  { id: 98, kanji: "今週", hiragana: "こんしゅう", meaning: "tuần này", lesson: 10 },
  { id: 99, kanji: "石", hiragana: "いし", meaning: "đá, hòn đá", lesson: 10 },
  { id: 100, kanji: "四人", hiragana: "よにん", meaning: "4 người", lesson: 10 },

  // Lesson 11 (Trang 12 PDF)
  { id: 101, kanji: "森", hiragana: "もり", meaning: "rừng, rừng rậm", lesson: 11 },
  { id: 102, kanji: "二か月", hiragana: "にかげつ", meaning: "2 tháng", lesson: 11 },
  { id: 103, kanji: "元気", hiragana: "げんき", meaning: "khỏe mạnh", lesson: 11 },
  { id: 104, kanji: "大きい", hiragana: "おおきい", meaning: "to, lớn", lesson: 11 },
  { id: 105, kanji: "間", hiragana: "あいだ", meaning: "ở giữa / khoảng thời gian", lesson: 11 },
  { id: 106, kanji: "左", hiragana: "ひだり", meaning: "bên trái", lesson: 11 },
  { id: 107, kanji: "友達", hiragana: "ともだち", meaning: "bạn bè, bạn", lesson: 11 },
  { id: 108, kanji: "読む", hiragana: "よむ", meaning: "đọc", lesson: 11 },
  { id: 109, kanji: "北口", hiragana: "きたぐち", meaning: "cổng bắc", lesson: 11 },
  { id: 110, kanji: "秋", hiragana: "あき", meaning: "mùa thu", lesson: 11 },

  // Lesson 12 (Trang 13 PDF)
  { id: 111, kanji: "午前", hiragana: "ごぜん", meaning: "buổi sáng (AM)", lesson: 12 },
  { id: 112, kanji: "入る", hiragana: "はいる", meaning: "đi vào, bước vào", lesson: 12 },
  { id: 113, kanji: "医者", hiragana: "いしゃ", meaning: "bác sĩ", lesson: 12 },
  { id: 114, kanji: "電車", hiragana: "でんしゃ", meaning: "tàu điện", lesson: 12 },
  { id: 115, kanji: "上着", hiragana: "うわぎ", meaning: "áo khoác ngoài, áo ấm", lesson: 12 },
  { id: 116, kanji: "町", hiragana: "まち", meaning: "thị trấn, khu phố", lesson: 12 },
  { id: 117, kanji: "月", hiragana: "つき", meaning: "mặt trăng / tháng", lesson: 12 },
  { id: 118, kanji: "九日", hiragana: "ここのか", meaning: "ngày mồng 9 / 9 ngày", lesson: 12 },
  { id: 119, kanji: "多い", hiragana: "おおい", meaning: "nhiều", lesson: 12 },
  { id: 120, kanji: "買い物", hiragana: "かいもの", meaning: "mua sắm, việc mua đồ", lesson: 12 },

  // Lesson 13 (Trang 14 PDF)
  { id: 121, kanji: "日曜日", hiragana: "にちようび", meaning: "chủ nhật", lesson: 13 },
  { id: 122, kanji: "店", hiragana: "みぜ", hiragana_correct: "みせ", meaning: "cửa hàng, tiệm", lesson: 13 }, // OCR correction
  { id: 123, kanji: "声", hiragana: "こえ", meaning: "giọng nói, tiếng", lesson: 13 },
  { id: 124, kanji: "西側", hiragana: "にしがわ", meaning: "phía tây", lesson: 13 },
  { id: 125, kanji: "八時", hiragana: "はちじ", meaning: "8 giờ", lesson: 13 },
  { id: 126, kanji: "花", hiragana: "はな", meaning: "hoa, bông hoa", lesson: 13 },
  { id: 127, kanji: "六月", hiragana: "ろくがつ", meaning: "tháng 6", lesson: 13 },
  { id: 128, kanji: "食べ物", hiragana: "たべもの", meaning: "thức ăn, đồ ăn", lesson: 13 },
  { id: 129, kanji: "東", hiragana: "ひがし", meaning: "phía đông", lesson: 13 },
  { id: 130, kanji: "八日", hiragana: "ようか", meaning: "ngày mồng 8 / 8 ngày", lesson: 13 },

  // Lesson 14 (Trang 15 PDF)
  { id: 131, kanji: "家", hiragana: "いえ", meaning: "nhà, gia đình", lesson: 14 },
  { id: 132, kanji: "電話", hiragana: "でんわ", meaning: "điện thoại", lesson: 14 },
  { id: 133, kanji: "学生", hiragana: "がくせい", meaning: "học sinh, sinh viên", lesson: 14 },
  { id: 134, kanji: "出口", hiragana: "でぐち", meaning: "lối ra, cửa ra", lesson: 14 },
  { id: 135, kanji: "今年", hiragana: "ことし", meaning: "năm nay", lesson: 14 },
  { id: 136, kanji: "冬", hiragana: "ふゆ", meaning: "mùa đông", lesson: 14 },
  { id: 137, kanji: "六回", hiragana: "ろっかい", meaning: "6 lần", lesson: 14 },
  { id: 138, kanji: "上手", hiragana: "じょうず", meaning: "giỏi, khéo léo", lesson: 14 },
  { id: 139, kanji: "お茶", hiragana: "おちゃ", meaning: "trà, nước trà", lesson: 14 },
  { id: 140, kanji: "見る", hiragana: "みる", meaning: "nhìn, xem, quan sát", lesson: 14 }
];

// Normalize database object to resolve any OCR issues transparently
KANJI_DATABASE.forEach(item => {
  if (item.hiragana_correct) {
    item.hiragana = item.hiragana_correct;
  }
});

// App State Management
const STATE = {
  view: 'dashboard', // dashboard, flashcards, quiz, dictionary
  soundEnabled: true,
  favorites: JSON.parse(localStorage.getItem('kanji_favorites') || '[]'),
  stats: JSON.parse(localStorage.getItem('kanji_stats') || JSON.stringify({
    totalAnswers: 0,
    correctAnswers: 0,
    streak: 0,
    lastStudyDate: null,
    completedQuizzes: 0
  })),
  quiz: {
    questions: [],
    currentIndex: 0,
    score: 0,
    settings: {
      lesson: 'all', // 'all' or lesson number (1-14)
      mode: 'kanji-to-hiragana', // kanji-to-hiragana, hiragana-to-kanji, kanji-to-meaning, meaning-to-kanji
      count: 10 // 10, 20, 50, all
    },
    answered: false,
    selectedOption: null
  },
  flashcard: {
    lesson: 'all',
    currentIndex: 0,
    filteredCards: [],
    isFlipped: false
  },
  dictionary: {
    searchQuery: '',
    lessonFilter: 'all',
    favoriteFilter: false
  }
};

// HTML Elements Cache
let elements = {};

document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  elements = {
    // Navigation
    navDashboard: document.getElementById('nav-dashboard'),
    navFlashcards: document.getElementById('nav-flashcards'),
    navQuiz: document.getElementById('nav-quiz'),
    navDictionary: document.getElementById('nav-dictionary'),
    
    // Screens
    screenDashboard: document.getElementById('screen-dashboard'),
    screenFlashcards: document.getElementById('screen-flashcards'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenDictionary: document.getElementById('screen-dictionary'),
    
    // Theme toggle
    themeToggleBtn: document.getElementById('theme-toggle'),
    soundToggleBtn: document.getElementById('sound-toggle'),
    
    // Dashboard Stats
    statStreak: document.getElementById('stat-streak'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statTotalReviews: document.getElementById('stat-total-reviews'),
    statFavoritesCount: document.getElementById('stat-favorites-count'),
    
    // Flashcard UI
    fcLessonSelect: document.getElementById('fc-lesson-select'),
    fcCard: document.getElementById('fc-card'),
    fcFrontKanji: document.getElementById('fc-front-kanji'),
    fcBackHiragana: document.getElementById('fc-back-hiragana'),
    fcBackMeaning: document.getElementById('fc-back-meaning'),
    fcBackKanji: document.getElementById('fc-back-kanji'),
    fcPrevBtn: document.getElementById('fc-prev-btn'),
    fcNextBtn: document.getElementById('fc-next-btn'),
    fcSpeakBtn: document.getElementById('fc-speak-btn'),
    fcFavoriteBtn: document.getElementById('fc-favorite-btn'),
    fcProgressText: document.getElementById('fc-progress-text'),
    fcProgressBar: document.getElementById('fc-progress-bar'),
    
    // Quiz Config
    quizLessonSelect: document.getElementById('quiz-lesson-select'),
    quizModeSelect: document.getElementById('quiz-mode-select'),
    quizCountSelect: document.getElementById('quiz-count-select'),
    quizStartBtn: document.getElementById('quiz-start-btn'),
    
    // Quiz Play Room
    quizSetupArea: document.getElementById('quiz-setup-area'),
    quizPlayArea: document.getElementById('quiz-play-area'),
    quizResultsArea: document.getElementById('quiz-results-area'),
    
    quizProgressText: document.getElementById('quiz-progress-text'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),
    quizQuestionText: document.getElementById('quiz-question-text'),
    quizOptionsContainer: document.getElementById('quiz-options-container'),
    quizFeedbackArea: document.getElementById('quiz-feedback-area'),
    quizNextBtn: document.getElementById('quiz-next-btn'),
    
    // Quiz Results
    resultsScoreText: document.getElementById('results-score-text'),
    resultsAccuracyText: document.getElementById('results-accuracy-text'),
    resultsMessageText: document.getElementById('results-message-text'),
    resultsHomeBtn: document.getElementById('results-home-btn'),
    resultsRetryBtn: document.getElementById('results-retry-btn'),
    
    // Dictionary
    dictSearchInput: document.getElementById('dict-search-input'),
    dictLessonSelect: document.getElementById('dict-lesson-select'),
    dictFavFilterBtn: document.getElementById('dict-fav-filter-btn'),
    dictGrid: document.getElementById('dict-grid')
  };

  // Setup Event Listeners
  setupNavigation();
  setupSettingsToggles();
  setupDashboard();
  setupFlashcards();
  setupQuiz();
  setupDictionary();
  
  // Initial Theme Load
  initTheme();
  
  // Render Dashboard
  updateDashboardStats();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('kanji_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  elements.themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('kanji_theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  // Sound Setup
  const savedSound = localStorage.getItem('sound_enabled');
  if (savedSound !== null) {
    STATE.soundEnabled = savedSound === 'true';
  }
  updateSoundIcon();
  
  elements.soundToggleBtn.addEventListener('click', () => {
    STATE.soundEnabled = !STATE.soundEnabled;
    localStorage.setItem('sound_enabled', STATE.soundEnabled);
    updateSoundIcon();
  });
}

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    elements.themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  } else {
    elements.themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }
}

function updateSoundIcon() {
  if (STATE.soundEnabled) {
    elements.soundToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  } else {
    elements.soundToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x"><path d="M11 5 6 9H2v6h4l5 4V5z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`;
  }
}

// Navigation System
function setupNavigation() {
  const navItems = [
    { btn: elements.navDashboard, target: 'dashboard', screen: elements.screenDashboard },
    { btn: elements.navFlashcards, target: 'flashcards', screen: elements.screenFlashcards },
    { btn: elements.navQuiz, target: 'quiz', screen: elements.screenQuiz },
    { btn: elements.navDictionary, target: 'dictionary', screen: elements.screenDictionary }
  ];
  
  navItems.forEach(item => {
    item.btn.addEventListener('click', () => {
      // Set active nav
      navItems.forEach(n => n.btn.classList.remove('active'));
      item.btn.classList.add('active');
      
      // Hide all screens
      navItems.forEach(n => {
        n.screen.classList.remove('active');
        n.screen.style.display = 'none';
      });
      
      // Show target screen
      item.screen.style.display = 'block';
      setTimeout(() => {
        item.screen.classList.add('active');
      }, 50);
      
      STATE.view = item.target;
      
      // Screen specific trigger
      if (item.target === 'dashboard') {
        updateDashboardStats();
      } else if (item.target === 'flashcards') {
        initFlashcards();
      } else if (item.target === 'dictionary') {
        renderDictionary();
      }
    });
  });
}

function setupSettingsToggles() {
  // Place holder if additional overall settings are needed
}

// Speak Japanese Text (Web Speech API)
function speakJapanese(text) {
  if (!STATE.soundEnabled) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any currently playing audio
    const cleanText = text.replace(/お[父姉兄母]さん/, (match) => {
      // Clean up common words if pronunciation requires custom tuning, Web Speech handles standard characters well.
      return match;
    }).replace(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+/g, (m) => m);
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8; // Slightly slow rate for Japanese learners
    window.speechSynthesis.speak(utterance);
  }
}

// UI Sound Effects (Beeps)
function playQuizSound(type) {
  if (!STATE.soundEnabled) return;
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    if (type === 'correct') {
      // Double upbeat tone
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc1.type = 'sine';
      osc2.type = 'sine';
      
      osc1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      osc1.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      
      gain.gain.setValueAtTime(0.1, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      osc1.connect(gain);
      gain.connect(audioContext.destination);
      
      osc1.start();
      osc1.stop(audioContext.currentTime + 0.3);
    } else if (type === 'wrong') {
      // Flat low drone
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150.00, audioContext.currentTime); // Low frequency
      osc.frequency.linearRampToValueAtTime(110.00, audioContext.currentTime + 0.25);
      
      gain.gain.setValueAtTime(0.15, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      osc.connect(gain);
      gain.connect(audioContext.destination);
      
      osc.start();
      osc.stop(audioContext.currentTime + 0.3);
    } else if (type === 'success') {
      // Ascending major chord sweep
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.08);
        
        gain.gain.setValueAtTime(0.08, audioContext.currentTime + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + index * 0.08 + 0.4);
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start(audioContext.currentTime + index * 0.08);
        osc.stop(audioContext.currentTime + index * 0.08 + 0.45);
      });
    }
  } catch (e) {
    console.error("Audio API not supported or blocked", e);
  }
}

// -------------------------------------------------------------
// DASHBOARD VIEW LOGIC
// -------------------------------------------------------------
function setupDashboard() {
  // Any dashboard interactive elements (like custom resetting or quick links)
  document.getElementById('quick-study-btn').addEventListener('click', () => {
    elements.navFlashcards.click();
  });
  
  document.getElementById('quick-quiz-btn').addEventListener('click', () => {
    elements.navQuiz.click();
  });
}

function updateDashboardStats() {
  // Calculate accuracy
  const total = STATE.stats.totalAnswers || 0;
  const correct = STATE.stats.correctAnswers || 0;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  // Calculate active streak
  updateStreak();
  
  // Update HTML elements
  elements.statStreak.textContent = `${STATE.stats.streak} ngày`;
  elements.statAccuracy.textContent = `${accuracy}%`;
  elements.statTotalReviews.textContent = total;
  elements.statFavoritesCount.textContent = STATE.favorites.length;
}

function updateStreak() {
  const today = new Date().toDateString();
  const lastStudy = STATE.stats.lastStudyDate;
  
  if (lastStudy) {
    const lastDate = new Date(lastStudy);
    const timeDiff = new Date(today) - lastDate;
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (diffDays > 1) {
      // Streak broken
      STATE.stats.streak = 0;
    }
  } else {
    STATE.stats.streak = 0;
  }
  
  saveStats();
}

function incrementStreak() {
  const today = new Date().toDateString();
  const lastStudy = STATE.stats.lastStudyDate;
  
  if (lastStudy !== today) {
    if (lastStudy) {
      const lastDate = new Date(lastStudy);
      const timeDiff = new Date(today) - lastDate;
      const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Increment streak
        STATE.stats.streak += 1;
      } else if (diffDays > 1) {
        // Reset and set to 1
        STATE.stats.streak = 1;
      }
    } else {
      STATE.stats.streak = 1;
    }
    
    STATE.stats.lastStudyDate = today;
    saveStats();
  }
}

function saveStats() {
  localStorage.setItem('kanji_stats', JSON.stringify(STATE.stats));
}

// -------------------------------------------------------------
// FLASHCARDS VIEW LOGIC
// -------------------------------------------------------------
function setupFlashcards() {
  // Populate lesson filters
  elements.fcLessonSelect.innerHTML = '<option value="all">Tất cả bài học (1-14)</option>';
  for (let i = 1; i <= 14; i++) {
    elements.fcLessonSelect.innerHTML += `<option value="${i}">Bài ${i} (Trang ${i+1} PDF)</option>`;
  }
  
  elements.fcLessonSelect.addEventListener('change', (e) => {
    STATE.flashcard.lesson = e.target.value;
    initFlashcards();
  });
  
  elements.fcCard.addEventListener('click', (e) => {
    // Prevent flip if clicked on controls (favorite/speak icon)
    if (e.target.closest('.card-btn')) return;
    
    STATE.flashcard.isFlipped = !STATE.flashcard.isFlipped;
    if (STATE.flashcard.isFlipped) {
      elements.fcCard.classList.add('flipped');
      // Speak on flip to back
      const card = STATE.flashcard.filteredCards[STATE.flashcard.currentIndex];
      if (card) {
        speakJapanese(card.kanji);
      }
    } else {
      elements.fcCard.classList.remove('flipped');
    }
  });
  
  elements.fcPrevBtn.addEventListener('click', () => {
    if (STATE.flashcard.currentIndex > 0) {
      STATE.flashcard.currentIndex--;
      showFlashcard();
    }
  });
  
  elements.fcNextBtn.addEventListener('click', () => {
    if (STATE.flashcard.currentIndex < STATE.flashcard.filteredCards.length - 1) {
      STATE.flashcard.currentIndex++;
      showFlashcard();
    }
  });
  
  elements.fcSpeakBtn.addEventListener('click', () => {
    const card = STATE.flashcard.filteredCards[STATE.flashcard.currentIndex];
    if (card) {
      speakJapanese(card.kanji);
    }
  });
  
  elements.fcFavoriteBtn.addEventListener('click', () => {
    const card = STATE.flashcard.filteredCards[STATE.flashcard.currentIndex];
    if (card) {
      toggleFavorite(card.id);
      updateFavoriteBtnUI(card.id);
    }
  });
}

function initFlashcards() {
  // Filter vocabulary
  const lesson = STATE.flashcard.lesson;
  if (lesson === 'all') {
    STATE.flashcard.filteredCards = [...KANJI_DATABASE];
  } else {
    const lessonNum = parseInt(lesson);
    STATE.flashcard.filteredCards = KANJI_DATABASE.filter(item => item.lesson === lessonNum);
  }
  
  // Shuffle cards optionally, but standard is keep order first
  STATE.flashcard.currentIndex = 0;
  showFlashcard();
}

function showFlashcard() {
  const card = STATE.flashcard.filteredCards[STATE.flashcard.currentIndex];
  
  // Reset flipped state
  STATE.flashcard.isFlipped = false;
  elements.fcCard.classList.remove('flipped');
  
  if (!card) {
    // Empty state
    elements.fcFrontKanji.textContent = "Hết thẻ";
    elements.fcBackHiragana.textContent = "";
    elements.fcBackMeaning.textContent = "";
    elements.fcBackKanji.textContent = "";
    elements.fcProgressText.textContent = "0/0";
    elements.fcProgressBar.style.width = "0%";
    return;
  }
  
  // Populate texts
  elements.fcFrontKanji.textContent = card.kanji;
  elements.fcBackKanji.textContent = card.kanji;
  elements.fcBackHiragana.textContent = card.hiragana;
  elements.fcBackMeaning.textContent = card.meaning;
  
  // Update progress
  const total = STATE.flashcard.filteredCards.length;
  const current = STATE.flashcard.currentIndex + 1;
  elements.fcProgressText.textContent = `${current}/${total}`;
  elements.fcProgressBar.style.width = `${(current / total) * 100}%`;
  
  // Update buttons
  elements.fcPrevBtn.disabled = STATE.flashcard.currentIndex === 0;
  elements.fcNextBtn.disabled = STATE.flashcard.currentIndex === total - 1;
  
  // Update favorite button icon state
  updateFavoriteBtnUI(card.id);
  
  // Trigger study event tracker
  incrementStreak();
}

function toggleFavorite(id) {
  const index = STATE.favorites.indexOf(id);
  if (index > -1) {
    STATE.favorites.splice(index, 1);
  } else {
    STATE.favorites.push(id);
  }
  localStorage.setItem('kanji_favorites', JSON.stringify(STATE.favorites));
  updateDashboardStats();
}

function updateFavoriteBtnUI(id) {
  const isFav = STATE.favorites.includes(id);
  if (isFav) {
    elements.fcFavoriteBtn.classList.add('active');
    elements.fcFavoriteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  } else {
    elements.fcFavoriteBtn.classList.remove('active');
    elements.fcFavoriteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
}

// -------------------------------------------------------------
// QUIZ PLAY ROOM LOGIC
// -------------------------------------------------------------
function setupQuiz() {
  // Populate lesson filters
  elements.quizLessonSelect.innerHTML = '<option value="all">Tất cả bài học (1-14)</option>';
  for (let i = 1; i <= 14; i++) {
    elements.quizLessonSelect.innerHTML += `<option value="${i}">Bài ${i} (Trang ${i+1} PDF)</option>`;
  }
  
  // Start Quiz Button
  elements.quizStartBtn.addEventListener('click', () => {
    STATE.quiz.settings.lesson = elements.quizLessonSelect.value;
    STATE.quiz.settings.mode = elements.quizModeSelect.value;
    STATE.quiz.settings.count = elements.quizCountSelect.value;
    
    startQuiz();
  });
  
  // Results buttons
  elements.resultsHomeBtn.addEventListener('click', () => {
    elements.quizResultsArea.style.display = 'none';
    elements.quizSetupArea.style.display = 'block';
    elements.navDashboard.click();
  });
  
  elements.resultsRetryBtn.addEventListener('click', () => {
    elements.quizResultsArea.style.display = 'none';
    startQuiz();
  });
  
  elements.quizNextBtn.addEventListener('click', () => {
    goToNextQuestion();
  });
}

function startQuiz() {
  // Filter database based on settings
  let pool = [];
  const lesson = STATE.quiz.settings.lesson;
  if (lesson === 'all') {
    pool = [...KANJI_DATABASE];
  } else {
    const lessonNum = parseInt(lesson);
    pool = KANJI_DATABASE.filter(item => item.lesson === lessonNum);
  }
  
  if (pool.length === 0) {
    alert("Không tìm thấy từ vựng nào trong bài học được lựa chọn!");
    return;
  }
  
  // Shuffle the pool to select questions
  shuffleArray(pool);
  
  // Determine question count
  let count = STATE.quiz.settings.count;
  if (count === 'all') {
    count = pool.length;
  } else {
    count = Math.min(parseInt(count), pool.length);
  }
  
  // Slice to select questions
  const quizItems = pool.slice(0, count);
  
  // Build quiz state
  STATE.quiz.questions = quizItems.map(item => {
    return {
      word: item,
      choices: generateChoices(item, pool, STATE.quiz.settings.mode)
    };
  });
  
  STATE.quiz.currentIndex = 0;
  STATE.quiz.score = 0;
  
  // Toggle Areas
  elements.quizSetupArea.style.display = 'none';
  elements.quizPlayArea.style.display = 'block';
  elements.quizResultsArea.style.display = 'none';
  
  // Load first question
  loadQuestion();
  incrementStreak();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate 4 multiple choices including the correct answer
function generateChoices(targetItem, pool, mode) {
  let correctAnswer = "";
  let choicesField = "";
  
  switch (mode) {
    case 'kanji-to-hiragana':
      correctAnswer = targetItem.hiragana;
      choicesField = 'hiragana';
      break;
    case 'hiragana-to-kanji':
      correctAnswer = targetItem.kanji;
      choicesField = 'kanji';
      break;
    case 'kanji-to-meaning':
      correctAnswer = targetItem.meaning;
      choicesField = 'meaning';
      break;
    case 'meaning-to-kanji':
      correctAnswer = targetItem.kanji;
      choicesField = 'kanji';
      break;
  }
  
  // Filter pool to find candidates (exclude correct answer)
  let candidatePool = pool.filter(item => {
    if (choicesField === 'hiragana') return item.hiragana !== correctAnswer;
    if (choicesField === 'kanji') return item.kanji !== correctAnswer;
    if (choicesField === 'meaning') return item.meaning !== correctAnswer;
    return true;
  });
  
  // If candidate pool is too small, use full database
  if (candidatePool.length < 3) {
    candidatePool = KANJI_DATABASE.filter(item => {
      if (choicesField === 'hiragana') return item.hiragana !== correctAnswer;
      if (choicesField === 'kanji') return item.kanji !== correctAnswer;
      if (choicesField === 'meaning') return item.meaning !== correctAnswer;
      return true;
    });
  }
  
  // Shuffle candidates
  shuffleArray(candidatePool);
  
  // Pick 3 distractor choices
  const distractorChoices = candidatePool.slice(0, 3).map(item => {
    return choicesField === 'hiragana' ? item.hiragana 
         : choicesField === 'kanji' ? item.kanji 
         : item.meaning;
  });
  
  // Merge and shuffle
  const finalChoices = [correctAnswer, ...distractorChoices];
  
  // Ensure uniqueness in final choices (should be unique anyway, but just in case)
  const uniqueChoices = [...new Set(finalChoices)];
  while (uniqueChoices.length < 4) {
    // Fail-safe: add more random choices
    const fallbackItem = KANJI_DATABASE[Math.floor(Math.random() * KANJI_DATABASE.length)];
    const val = choicesField === 'hiragana' ? fallbackItem.hiragana 
              : choicesField === 'kanji' ? fallbackItem.kanji 
              : fallbackItem.meaning;
    if (!uniqueChoices.includes(val)) {
      uniqueChoices.push(val);
    }
  }
  
  shuffleArray(uniqueChoices);
  return uniqueChoices;
}

function loadQuestion() {
  const qState = STATE.quiz;
  const current = qState.questions[qState.currentIndex];
  
  qState.answered = false;
  qState.selectedOption = null;
  
  // Update progress
  const totalCount = qState.questions.length;
  const currentNum = qState.currentIndex + 1;
  elements.quizProgressText.textContent = `Câu hỏi ${currentNum}/${totalCount}`;
  elements.quizProgressBar.style.width = `${((currentNum - 1) / totalCount) * 100}%`;
  
  // Set question display based on mode
  const mode = qState.settings.mode;
  let qText = "";
  
  if (mode === 'kanji-to-hiragana' || mode === 'kanji-to-meaning') {
    qText = current.word.kanji;
  } else if (mode === 'hiragana-to-kanji') {
    qText = current.word.hiragana;
  } else if (mode === 'meaning-to-kanji') {
    qText = current.word.meaning;
  }
  
  elements.quizQuestionText.textContent = qText;
  
  // Speak the Japanese word automatically if it's hiragana-to-kanji or kanji-to-*
  if (mode === 'kanji-to-hiragana' || mode === 'kanji-to-meaning' || mode === 'hiragana-to-kanji') {
    speakJapanese(current.word.kanji);
  }
  
  // Render options
  elements.quizOptionsContainer.innerHTML = '';
  current.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn glass-card';
    btn.innerHTML = `
      <span class="option-label">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${choice}</span>
    `;
    btn.addEventListener('click', () => handleChoiceSelection(choice, btn));
    elements.quizOptionsContainer.appendChild(btn);
  });
  
  // Reset feedback
  elements.quizFeedbackArea.style.display = 'none';
  elements.quizNextBtn.style.display = 'none';
}

function handleChoiceSelection(choice, optionButton) {
  const qState = STATE.quiz;
  if (qState.answered) return; // Prevent double clicking
  
  qState.answered = true;
  qState.selectedOption = choice;
  
  const current = qState.questions[qState.currentIndex];
  let correctChoice = "";
  
  switch (qState.settings.mode) {
    case 'kanji-to-hiragana':
      correctChoice = current.word.hiragana;
      break;
    case 'hiragana-to-kanji':
      correctChoice = current.word.kanji;
      break;
    case 'kanji-to-meaning':
      correctChoice = current.word.meaning;
      break;
    case 'meaning-to-kanji':
      correctChoice = current.word.kanji;
      break;
  }
  
  const isCorrect = choice === correctChoice;
  
  // Update stats
  STATE.stats.totalAnswers += 1;
  if (isCorrect) {
    STATE.stats.correctAnswers += 1;
    qState.score += 1;
    playQuizSound('correct');
    
    // Add success class
    optionButton.classList.add('correct');
    optionButton.classList.add('pulse-anim');
  } else {
    playQuizSound('wrong');
    
    // Add wrong class to selected, correct class to actual answer
    optionButton.classList.add('incorrect');
    optionButton.classList.add('shake-anim');
    
    // Find the correct button and mark it green
    const buttons = elements.quizOptionsContainer.querySelectorAll('.quiz-option-btn');
    buttons.forEach(btn => {
      const textSpan = btn.querySelector('.option-text');
      if (textSpan && textSpan.textContent === correctChoice) {
        btn.classList.add('correct');
      }
    });
  }
  
  saveStats();
  
  // Show detailed feedback card
  showQuestionFeedback(isCorrect, current.word);
  
  // Show next button
  elements.quizNextBtn.style.display = 'inline-flex';
}

function showQuestionFeedback(isCorrect, wordItem) {
  elements.quizFeedbackArea.style.display = 'block';
  
  const feedbackCard = elements.quizFeedbackArea.querySelector('.feedback-card');
  if (isCorrect) {
    feedbackCard.className = 'feedback-card correct-feedback';
    feedbackCard.innerHTML = `
      <div class="feedback-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <span>Chính xác! Rất tốt.</span>
      </div>
      <div class="feedback-body">
        <h3 class="feedback-kanji">${wordItem.kanji}</h3>
        <p class="feedback-details">Đọc là: <strong>${wordItem.hiragana}</strong> | Nghĩa: <em>${wordItem.meaning}</em></p>
      </div>
    `;
  } else {
    feedbackCard.className = 'feedback-card incorrect-feedback';
    feedbackCard.innerHTML = `
      <div class="feedback-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        <span>Sai rồi! Hãy ghi nhớ nhé.</span>
      </div>
      <div class="feedback-body">
        <h3 class="feedback-kanji">${wordItem.kanji}</h3>
        <p class="feedback-details">Đọc là: <strong>${wordItem.hiragana}</strong> | Nghĩa: <em>${wordItem.meaning}</em></p>
      </div>
    `;
  }
}

function goToNextQuestion() {
  const qState = STATE.quiz;
  qState.currentIndex += 1;
  
  if (qState.currentIndex < qState.questions.length) {
    loadQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  const qState = STATE.quiz;
  
  // Save stats completed quizzes
  STATE.stats.completedQuizzes += 1;
  saveStats();
  
  // Hide play area, show results area
  elements.quizPlayArea.style.display = 'none';
  elements.quizResultsArea.style.display = 'block';
  
  // Populate statistics
  const score = qState.score;
  const total = qState.questions.length;
  const accuracy = Math.round((score / total) * 100);
  
  elements.resultsScoreText.textContent = `${score}/${total}`;
  elements.resultsAccuracyText.textContent = `${accuracy}%`;
  
  let msg = "";
  if (accuracy === 100) {
    msg = "Xuất sắc! Bạn đã trả lời đúng hoàn toàn các câu hỏi 🎉";
    triggerConfetti();
    playQuizSound('success');
  } else if (accuracy >= 80) {
    msg = "Tuyệt vời! Bạn nắm vững lượng kiến thức này rất tốt 👍";
    playQuizSound('success');
  } else if (accuracy >= 50) {
    msg = "Khá tốt! Hãy ôn tập lại để đạt điểm tối đa nhé 💪";
  } else {
    msg = "Hãy ôn tập nhiều hơn nữa để củng cố kiến thức nhé 📚";
  }
  
  elements.resultsMessageText.textContent = msg;
}

// -------------------------------------------------------------
// DICTIONARY / STUDY ROOM LOGIC
// -------------------------------------------------------------
function setupDictionary() {
  // Populate lesson filters
  elements.dictLessonSelect.innerHTML = '<option value="all">Tất cả bài học</option>';
  for (let i = 1; i <= 14; i++) {
    elements.dictLessonSelect.innerHTML += `<option value="${i}">Bài ${i}</option>`;
  }
  
  // Setup filter triggers
  elements.dictSearchInput.addEventListener('input', (e) => {
    STATE.dictionary.searchQuery = e.target.value.toLowerCase().trim();
    renderDictionary();
  });
  
  elements.dictLessonSelect.addEventListener('change', (e) => {
    STATE.dictionary.lessonFilter = e.target.value;
    renderDictionary();
  });
  
  elements.dictFavFilterBtn.addEventListener('click', () => {
    STATE.dictionary.favoriteFilter = !STATE.dictionary.favoriteFilter;
    if (STATE.dictionary.favoriteFilter) {
      elements.dictFavFilterBtn.classList.add('active');
    } else {
      elements.dictFavFilterBtn.classList.remove('active');
    }
    renderDictionary();
  });
}

function renderDictionary() {
  const query = STATE.dictionary.searchQuery;
  const lesson = STATE.dictionary.lessonFilter;
  const favOnly = STATE.dictionary.favoriteFilter;
  
  let list = [...KANJI_DATABASE];
  
  // Filter by Lesson
  if (lesson !== 'all') {
    const lessonNum = parseInt(lesson);
    list = list.filter(item => item.lesson === lessonNum);
  }
  
  // Filter by Favorite
  if (favOnly) {
    list = list.filter(item => STATE.favorites.includes(item.id));
  }
  
  // Filter by search query
  if (query) {
    list = list.filter(item => {
      return item.kanji.toLowerCase().includes(query) || 
             item.hiragana.toLowerCase().includes(query) || 
             item.meaning.toLowerCase().includes(query);
    });
  }
  
  // Clear list
  elements.dictGrid.innerHTML = '';
  
  if (list.length === 0) {
    elements.dictGrid.innerHTML = `
      <div class="empty-state-card glass-card">
        <p>Không tìm thấy từ vựng nào khớp với bộ lọc.</p>
      </div>
    `;
    return;
  }
  
  // Render grid
  list.forEach(item => {
    const isFav = STATE.favorites.includes(item.id);
    const card = document.createElement('div');
    card.className = 'vocab-card glass-card';
    card.innerHTML = `
      <div class="vocab-card-header">
        <span class="vocab-lesson-tag">Bài ${item.lesson}</span>
        <button class="vocab-fav-btn ${isFav ? 'active' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </button>
      </div>
      <div class="vocab-card-main">
        <h2 class="vocab-kanji">${item.kanji}</h2>
        <p class="vocab-hiragana">${item.hiragana}</p>
        <p class="vocab-meaning">${item.meaning}</p>
      </div>
      <div class="vocab-card-actions">
        <button class="vocab-audio-btn flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          Nghe phát âm
        </button>
      </div>
    `;
    
    // Add Event Listeners inside card
    card.querySelector('.vocab-fav-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(item.id);
      renderDictionary(); // re-render to update classes/lists
    });
    
    card.querySelector('.vocab-audio-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      speakJapanese(item.kanji);
    });
    
    elements.dictGrid.appendChild(card);
  });
}

// -------------------------------------------------------------
// CELEBRATION CONFETTI EFFECT
// -------------------------------------------------------------
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  const colors = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#22c55e', '#84cc16', '#eab308', '#f97316'];
  const confettiCount = 150;
  const confettis = [];
  
  class Confetti {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height - 20;
      this.size = Math.random() * 8 + 4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedY = Math.random() * 3 + 4;
      this.speedX = Math.random() * 3 - 1.5;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 10 - 5;
    }
    
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotationSpeed;
      if (this.y > height) {
        this.y = -20;
        this.x = Math.random() * width;
      }
    }
    
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }
  
  for (let i = 0; i < confettiCount; i++) {
    confettis.push(new Confetti());
  }
  
  let animationFrame;
  let framesRun = 0;
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    confettis.forEach(c => {
      c.update();
      c.draw();
    });
    framesRun++;
    
    if (framesRun < 240) { // animate for 4 seconds
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }
  
  animate();
}
