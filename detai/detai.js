document.addEventListener("DOMContentLoaded", () => {
  // 検索ボックスと履歴項目を取得
  const searchInput = document.getElementById("search-input");
  const historyItems = document.querySelectorAll(".history-list li");

  // 検索ボックスの入力に応じて履歴をフィルタリングする
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase(); // 検索キーワードを取得（小文字に変換）
    historyItems.forEach((item) => {
      const itemText = item.textContent.toLowerCase(); // 履歴項目のテキストを小文字に変換
      if (itemText.includes(query)) {
        item.style.display = "block"; // キーワードに一致する項目を表示
      } else {
        item.style.display = "none"; // 一致しない項目を非表示
      }
    });
  });

  // 履歴項目をクリックしたときの動作
  historyItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(`履歴項目 "${item.textContent}" がクリックされました。`);
      searchInput.value = item.textContent; // 履歴項目の内容を検索ボックスに設定
    });
  });
});