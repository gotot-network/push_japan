const button = document.getElementById("push-button");
const message = document.getElementById("message");

const language = navigator.language.toLowerCase().startsWith("ja")
    ? "ja"
    : "en";

// 言語ごとのテキスト
const translations = {
    ja: {
        title: "今日のボタン",
        description: "意味は自分で生み出すもの",
        alreadyPushed: "また明日、日本は進化する。",
        messages: [
            "今日も一日お疲れさま。",
	    "日本の前進",
	    "日本をもっと知りたい。一緒にどう？",
	    "東京バナナ買って帰ろう",
	    "ジンギスカン",
	    "あついよたこやき",
	    "きりたんぽっ",
	    "海外旅行より、日本だろ！",
	    "Thank you、謝謝より、ありがとう！！！" 
        ]
    },

    en: {
        title: "Today's Button.",
        description: "Meaning isn't found — it's created.",
        alreadyPushed: "Tomorrow, Japan evolves yet again.",
        messages: [
            "Great job today.",
            "Japan, Moving Forward",
            "I want to explore Japan more. Care to join?",
            "Gotta grab some Tokyo Banana on the way home.",
            "Jingisukan (Hokkaido-style grilled mutton)"
	    "Piping hot takoyaki!",
	    "Kiritanpo!",
	    "Forget traveling abroad — it’s all about Jan",
	    "More than 'Thank you' or 'Xièxiè' — it’s ARI",
        ]
    }
};

function getToday() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function checkPushed() {
    return localStorage.getItem("pushedDate") === getToday();
}

button.addEventListener("click", function () {

    if (checkPushed()) {
        return;
    }

    localStorage.setItem("pushedDate", getToday());
    
    const messages = translations[language].messages;
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    button.disabled = true;
});

// 初期表示
function initialize() {
    const text = translations[language];

    document.documentElement.lang = language;

    document.getElementById("title").textContent = text.title;
    document.getElementById("description").textContent = text.description;

    if (checkPushed()) {
        button.disabled = true;
        message.textContent = text.alreadyPushed;
    } else {
        message.textContent = text.description;
    }
}

initialize();
