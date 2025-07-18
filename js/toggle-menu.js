// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.width = '100%';
    header.style.zIndex = '1000';

// ヘッダーの高さ分だけmainに余白を追加（重なり防止）
    const main = document.querySelector('main');
    const headerHeight = header.offsetHeight;
    main.style.marginTop = headerHeight + 'px';
});
