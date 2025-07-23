function changeContent(title, description, link) {
  const photo = document.querySelector('.photo');
  const textContent = document.querySelector('.text-content');

  if (photo && textContent) {
    // 写真エリアを隠す
    photo.classList.add('hidden');

    // テキストエリアを表示
    textContent.classList.remove('hidden');

    // タイトルを更新（タイトル部分にはHTMLタグを含まない）
    document.getElementById('title').textContent = title;

    // 説明文にHTMLタグを反映する
    document.getElementById('description').innerHTML = description;

    // リンクを更新
    const linkElement = document.getElementById('link');
    linkElement.textContent = 'START';
    linkElement.href = link;
  } else {
    console.error('写真またはテキストエリアが見つかりません');
  }
}