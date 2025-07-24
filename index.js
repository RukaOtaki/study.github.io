// main.js に追加（または新規作成）
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    // 外部リンクやアンカーリンク（#）は無視
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;

    link.addEventListener('click', function (e) {
      e.preventDefault(); // 即時遷移を防止
      const targetUrl = this.href;

      document.body.classList.add('fade-out'); // フェードアウト発火

      setTimeout(() => {
        window.location = targetUrl;
      }, 600); // CSSと同じ0.6秒後に遷移
    });
  });
});
