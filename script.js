// ボタンとメッセージの要素を取得
const button = document.getElementById("push-button");
const message = document.getElementById("message");

// ボタンを押した後に表示するメッセージ
const messages = [
    "今日も一日お疲れさま。",
    "日本の前進",
    "日本をもっと知りたい。一緒にどう？",
    "東京バナナ買って帰ろう",
    "ジンギスカン",
    "あついよたこやき",
    "きりたんぽっ",
    "海外旅行より、日本だろ！",
    "Thank you、謝謝より、ありがとう！！！"
];

// ボタンが押されたときの処理
button.addEventListener("click", function () {

    // ランダムな番号を生成
    const randomIndex = Math.floor(Math.random() * messages.length);

    // メッセージを変更
    message.textContent = messages[randomIndex];

});
