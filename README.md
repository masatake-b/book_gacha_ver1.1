##### AIに聞くときの例
以下をコピペして、理想の内容を言う（隠しファイルは作成しないことに注意）

### 以下がindex.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>おすすめ本選出アプリ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>おすすめ本選出アプリ</h1>
        <div class="mode-selection">
            <a href="gacha.html" class="btn">ガチャを回す</a>
            <a href="recommendation.html" class="btn">おすすめを投稿する</a>
        </div>
    </div>
</body>
</html>

### 以下がgacha.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>本ガチャ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>本ガチャ</h1>
        <div class="gacha-controls">
            <div class="select-group">
                <label for="genre">ジャンル:</label>
                <select id="genre">
                    <option value="novel">小説</option>
                    <option value="biz">教養</option>
                    <option value="prac">実用</option>
                </select>
            </div>
            <div class="select-group">
                <label for="sub-genre">サブジャンル:</label>
                <select id="sub-genre">
                    <!-- JavaScriptで動的に生成 -->
                </select>
            </div>
            <button id="gacha-btn" class="btn">本ガチャを回す</button>
        </div>
        <div id="result-area" class="result-area" style="display:none;">
            <h2>おすすめの本はこちら！</h2>
            <div id="book-result">
                <p><strong>書名:</strong> <span id="book-title"></span></p>
                <p><strong>おすすめコメント:</strong> <span id="book-comment"></span></p>
                <p><strong>紹介者:</strong> <span id="book-recommender"></span></p>
            </div>
            <div class="result-actions">
                <button id="retry-btn" class="btn">もう一度回す？</button>
                <a id="buy-link" href="#" target="_blank" class="btn btn-buy">購入する？</a>
            </div>
        </div>
         <a href="index.html">トップに戻る</a>
    </div>
    <script src="script.js"></script>
</body>
</html>

### 以下がrecommendation.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>おすすめ本の投稿</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>おすすめ本の投稿</h1>
        <form id="recommend-form">
            <div class="form-group">
                <label for="title">本のタイトル:</label>
                <input type="text" id="title" required>
            </div>
             <div class="form-group">
                <label for="rec-genre">ジャンル:</label>
                <select id="rec-genre">
                    <option value="novel">小説</option>
                    <option value="biz">教養</option>
                    <option value="prac">実用</option>
                </select>
            </div>
             <div class="form-group">
                <label for="rec-sub-genre">サブジャンル:</label>
                <select id="rec-sub-genre">
                    <!-- JavaScriptで動的に生成 -->
                </select>
            </div>
            <div class="form-group">
                <label for="comment">おすすめ理由:</label>
                <textarea id="comment" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="recommender">SNSアカウント名（任意）:</label>
                <input type="text" id="recommender">
            </div>
             <div class="form-group">
                <label for="url">購入リンク:</label>
                <input type="url" id="url" required>
            </div>
            <button type="submit" class="btn">投稿内容を確認する</button>
        </form>
        <div id="confirm-area" style="display:none;">
            <h2>投稿内容の確認</h2>
            <div id="confirm-details"></div>
            <button id="submit-btn" class="btn">送信する</button>
            <button id="back-btn" class="btn">修正する</button>
        </div>
        <div id="done-area" style="display:none;">
            <p>投稿が完了し、ガチャに追加されました！</p>
            <a href="index.html" class="btn">トップに戻る</a>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

### 以下がstyle.css
body {
    font-family: sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    text-align: center;
    color: #0056b3;
}

.mode-selection {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.btn {
    display: inline-block;
    background: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
}

.btn:hover {
    background: #0056b3;
}

.btn-buy {
    background: #28a745;
}

.btn-buy:hover {
    background: #1e7e34;
}

/* ガチャページ & 投稿ページ */
.gacha-controls, #recommend-form {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.select-group, .form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

select, input[type="text"], input[type="url"], textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.result-area, #confirm-area, #done-area {
    margin-top: 30px;
    padding: 20px;
    background: #e9ecef;
    border-radius: 5px;
    text-align: center;
}

#book-result p {
    text-align: left;
}

.result-actions {
    margin-top: 20px;
}

#confirm-details {
    text-align: left;
    margin-bottom: 20px;
}

### 以下がscript.js
document.addEventListener('DOMContentLoaded', () => {
    // ページを判定して初期化関数を呼び出す
    if (document.querySelector('#gacha-btn')) {
        initGachaPage();
    }
    if (document.querySelector('#recommend-form')) {
        initRecommendPage();
    }
});

// ジャンルとサブジャンルの定義
const subGenres = {
    novel: { name: "小説", "mystery-suspense": "ミステリー・サスペンス", "love": "恋愛", "sf-fantasy": "SF・ファンタジー", "history-period": "歴史・時代", "horror": "ホラー" },
    biz: { name: "教養", "thought-philosophy": "思想・哲学", "business": "ビジネス", "art-design": "アート・芸術", "self-help": "自己啓発" },
    prac: { name: "実用", "parenting": "育児書", "cooking": "料理本", "health": "健康本" }
};

// ----- 共通関数 -----

// ジャンル選択に応じてサブジャンルの選択肢を更新する関数
function updateSubGenreOptions(genreSelectId, subGenreSelectId) {
    const genreSelect = document.getElementById(genreSelectId);
    const subGenreSelect = document.getElementById(subGenreSelectId);
    
    genreSelect.addEventListener('change', () => {
        const selectedGenre = genreSelect.value;
        subGenreSelect.innerHTML = ''; // サブジャンルをクリア
        
        for (const key in subGenres[selectedGenre]) {
            if (key !== 'name') {
                 const option = document.createElement('option');
                 option.value = key;
                 option.textContent = subGenres[selectedGenre][key];
                 subGenreSelect.appendChild(option);
            }
        }
    });
    // 初期表示用にイベントを手動で発火
    genreSelect.dispatchEvent(new Event('change'));
}

// 本のデータを取得する関数（localStorage優先、なければJSONから読み込む）
async function getBooks() {
    const localBooksStr = localStorage.getItem('booksData');
    let books = localBooksStr ? JSON.parse(localBooksStr) : null;

    if (!books) {
        try {
            const response = await fetch('books.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            books = await response.json();
            localStorage.setItem('booksData', JSON.stringify(books));
        } catch (error) {
            console.error('本のデータの読み込みに失敗しました:', error);
            return null;
        }
    }
    return books;
}

// ----- ガチャページ用スクリプト -----
function initGachaPage() {
    updateSubGenreOptions('genre', 'sub-genre');
    
    const gachaBtn = document.getElementById('gacha-btn');
    const retryBtn = document.getElementById('retry-btn');

    gachaBtn.addEventListener('click', runGacha);
    retryBtn.addEventListener('click', runGacha);
}

// ガチャを実行し、結果を表示する関数
async function runGacha() {
    const booksData = await getBooks();
    if (!booksData) return;

    const selectedGenre = document.getElementById('genre').value;
    const selectedSubGenre = document.getElementById('sub-genre').value;
    
    const bookList = booksData[selectedGenre][selectedSubGenre];

    if (!bookList || bookList.length === 0) {
        alert('このジャンルの本はまだ登録されていません。');
        return;
    }

    const randomIndex = Math.floor(Math.random() * bookList.length);
    const selectedBook = bookList[randomIndex];

    // 結果を表示エリアに設定
    document.getElementById('book-title').textContent = selectedBook.title;
    document.getElementById('book-comment').textContent = selectedBook.comment;
    document.getElementById('book-recommender').textContent = selectedBook.recommender || '匿名';
    document.getElementById('buy-link').href = selectedBook.url;
    
    document.getElementById('result-area').style.display = 'block';
}

// ----- おすすめ投稿ページ用スクリプト -----
function initRecommendPage() {
    updateSubGenreOptions('rec-genre', 'rec-sub-genre');

    const form = document.getElementById('recommend-form');
    const confirmArea = document.getElementById('confirm-area');
    const submitBtn = document.getElementById('submit-btn');
    const backBtn = document.getElementById('back-btn');
    
    let formData = {}; // フォームデータを一時保存する変数

    // フォーム送信時の処理（確認画面へ）
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        formData = {
            title: document.getElementById('title').value,
            genre: document.getElementById('rec-genre').value,
            subGenre: document.getElementById('rec-sub-genre').value,
            comment: document.getElementById('comment').value,
            recommender: document.getElementById('recommender').value,
            url: document.getElementById('url').value
        };
        
        // 確認画面に詳細を表示
        document.getElementById('confirm-details').innerHTML = `
            <p><strong>タイトル:</strong> ${formData.title}</p>
            <p><strong>ジャンル:</strong> ${subGenres[formData.genre].name} - ${subGenres[formData.genre][formData.subGenre]}</p>
            <p><strong>おすすめ理由:</strong> ${formData.comment}</p>
            <p><strong>SNSアカウント名:</strong> ${formData.recommender || '(入力なし)'}</p>
            <p><strong>購入リンク:</strong> ${formData.url}</p>
        `;

        form.style.display = 'none';
        confirmArea.style.display = 'block';
    });

    // 「修正する」ボタンの処理
    backBtn.addEventListener('click', () => {
        confirmArea.style.display = 'none';
        form.style.display = 'flex';
    });

    // 「送信する」ボタンの処理
    submitBtn.addEventListener('click', async () => {
        const booksData = await getBooks();
        if (!booksData) {
            alert("データの処理に失敗しました。");
            return;
        }

        const newBook = {
            title: formData.title,
            comment: formData.comment,
            recommender: formData.recommender,
            url: formData.url
        };
        
        // 新しい本をデータに追加
        booksData[formData.genre][formData.subGenre].push(newBook);
        
        // 更新されたデータをlocalStorageに保存
        localStorage.setItem('booksData', JSON.stringify(booksData));
        
        // 完了画面を表示
        confirmArea.style.display = 'none';
        document.getElementById('done-area').style.display = 'block';
    });
}

### 以下がbooks.json
document.addEventListener('DOMContentLoaded', () => {
    // ページを判定して初期化関数を呼び出す
    if (document.querySelector('#gacha-btn')) {
        initGachaPage();
    }
    if (document.querySelector('#recommend-form')) {
        initRecommendPage();
    }
});

// ジャンルとサブジャンルの定義
const subGenres = {
    novel: { name: "小説", "mystery-suspense": "ミステリー・サスペンス", "love": "恋愛", "sf-fantasy": "SF・ファンタジー", "history-period": "歴史・時代", "horror": "ホラー" },
    biz: { name: "教養", "thought-philosophy": "思想・哲学", "business": "ビジネス", "art-design": "アート・芸術", "self-help": "自己啓発" },
    prac: { name: "実用", "parenting": "育児書", "cooking": "料理本", "health": "健康本" }
};

// ----- 共通関数 -----

// ジャンル選択に応じてサブジャンルの選択肢を更新する関数
function updateSubGenreOptions(genreSelectId, subGenreSelectId) {
    const genreSelect = document.getElementById(genreSelectId);
    const subGenreSelect = document.getElementById(subGenreSelectId);
    
    genreSelect.addEventListener('change', () => {
        const selectedGenre = genreSelect.value;
        subGenreSelect.innerHTML = ''; // サブジャンルをクリア
        
        for (const key in subGenres[selectedGenre]) {
            if (key !== 'name') {
                 const option = document.createElement('option');
                 option.value = key;
                 option.textContent = subGenres[selectedGenre][key];
                 subGenreSelect.appendChild(option);
            }
        }
    });
    // 初期表示用にイベントを手動で発火
    genreSelect.dispatchEvent(new Event('change'));
}

// 本のデータを取得する関数（localStorage優先、なければJSONから読み込む）
async function getBooks() {
    const localBooksStr = localStorage.getItem('booksData');
    let books = localBooksStr ? JSON.parse(localBooksStr) : null;

    if (!books) {
        try {
            const response = await fetch('books.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            books = await response.json();
            localStorage.setItem('booksData', JSON.stringify(books));
        } catch (error) {
            console.error('本のデータの読み込みに失敗しました:', error);
            return null;
        }
    }
    return books;
}

// ----- ガチャページ用スクリプト -----
function initGachaPage() {
    updateSubGenreOptions('genre', 'sub-genre');
    
    const gachaBtn = document.getElementById('gacha-btn');
    const retryBtn = document.getElementById('retry-btn');

    gachaBtn.addEventListener('click', runGacha);
    retryBtn.addEventListener('click', runGacha);
}

// ガチャを実行し、結果を表示する関数
async function runGacha() {
    const booksData = await getBooks();
    if (!booksData) return;

    const selectedGenre = document.getElementById('genre').value;
    const selectedSubGenre = document.getElementById('sub-genre').value;
    
    const bookList = booksData[selectedGenre][selectedSubGenre];

    if (!bookList || bookList.length === 0) {
        alert('このジャンルの本はまだ登録されていません。');
        return;
    }

    const randomIndex = Math.floor(Math.random() * bookList.length);
    const selectedBook = bookList[randomIndex];

    // 結果を表示エリアに設定
    document.getElementById('book-title').textContent = selectedBook.title;
    document.getElementById('book-comment').textContent = selectedBook.comment;
    document.getElementById('book-recommender').textContent = selectedBook.recommender || '匿名';
    document.getElementById('buy-link').href = selectedBook.url;
    
    document.getElementById('result-area').style.display = 'block';
}

// ----- おすすめ投稿ページ用スクリプト -----
function initRecommendPage() {
    updateSubGenreOptions('rec-genre', 'rec-sub-genre');

    const form = document.getElementById('recommend-form');
    const confirmArea = document.getElementById('confirm-area');
    const submitBtn = document.getElementById('submit-btn');
    const backBtn = document.getElementById('back-btn');
    
    let formData = {}; // フォームデータを一時保存する変数

    // フォーム送信時の処理（確認画面へ）
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        formData = {
            title: document.getElementById('title').value,
            genre: document.getElementById('rec-genre').value,
            subGenre: document.getElementById('rec-sub-genre').value,
            comment: document.getElementById('comment').value,
            recommender: document.getElementById('recommender').value,
            url: document.getElementById('url').value
        };
        
        // 確認画面に詳細を表示
        document.getElementById('confirm-details').innerHTML = `
            <p><strong>タイトル:</strong> ${formData.title}</p>
            <p><strong>ジャンル:</strong> ${subGenres[formData.genre].name} - ${subGenres[formData.genre][formData.subGenre]}</p>
            <p><strong>おすすめ理由:</strong> ${formData.comment}</p>
            <p><strong>SNSアカウント名:</strong> ${formData.recommender || '(入力なし)'}</p>
            <p><strong>購入リンク:</strong> ${formData.url}</p>
        `;

        form.style.display = 'none';
        confirmArea.style.display = 'block';
    });

    // 「修正する」ボタンの処理
    backBtn.addEventListener('click', () => {
        confirmArea.style.display = 'none';
        form.style.display = 'flex';
    });

    // 「送信する」ボタンの処理
    submitBtn.addEventListener('click', async () => {
        const booksData = await getBooks();
        if (!booksData) {
            alert("データの処理に失敗しました。");
            return;
        }

        const newBook = {
            title: formData.title,
            comment: formData.comment,
            recommender: formData.recommender,
            url: formData.url
        };
        
        // 新しい本をデータに追加
        booksData[formData.genre][formData.subGenre].push(newBook);
        
        // 更新されたデータをlocalStorageに保存
        localStorage.setItem('booksData', JSON.stringify(booksData));
        
        // 完了画面を表示
        confirmArea.style.display = 'none';
        document.getElementById('done-area').style.display = 'block';
    });
}
