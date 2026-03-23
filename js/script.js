document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('js-menu-trigger');
    const body = document.body;

    // ハンバーガーメニューのクリックイベント
    trigger.addEventListener('click', () => {
        // bodyにクラスをつけ外ししてCSSで制御
        body.classList.toggle('menu-open');
    });

    const pageTopBtn = document.getElementById('js-pagetop');

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        // 300px以上スクロールしたらボタンを表示、それ以外は非表示
        if (window.scrollY > 300) {
            pageTopBtn.classList.add('is-show');
        } else {
            pageTopBtn.classList.remove('is-show');
        }
    });

    // ボタンクリック時の挙動
    pageTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロール
        });
    });

    // メニューリンクをクリックしたら閉じる（ページ内リンク対策）
    const navLinks = document.querySelectorAll('#js-mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    });

});