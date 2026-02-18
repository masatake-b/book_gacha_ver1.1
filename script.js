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
            <p><strong>購入リンク:</strong> ${formData.url || '(入力なし)'}</p>
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
