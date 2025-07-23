// コンテンツデータを定義
const contents = {
    "1": `
        <h3>Javaの基礎知識</h3>
        <p>変数は値を保持するために使用され、データ型は値の種類を表します。</p>
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>特徴</th>
                    <th>内容</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>it</td>
                    <td>整数を扱うデータ型</td>
                    <td>int number = 10;</td>
                </tr>
                <tr>
                    <td>double</td>
                    <td>小数を扱うデータ型</td>
                    <td>double price = 99.99;</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>文字列を扱うデータ型</td>
                    <td>String name = "Hello";</td>
                </tr>
                <tr>
                    <td>boolean</td>
                    <td>真偽値を扱うデータ型</td>
                    <td>boolean isTrue = true;</td>
                </tr>
            </tbody>
        </table>
    `,
    "2": `
        <h3>変数とデータ型</h3>
        <p>変数は値を保持するために使用され、データ型は値の種類を表します。</p>
    `,
    "3": `
        <h3>条件分岐</h3>
        <p>条件分岐はif文やswitch文を使い、条件に応じて処理を切り替えます。</p>
    `,
    "4": `
        <h3>繰り返し処理(for文の詳細)</h3>
        <p>繰り返し処理はfor文やwhile文を使い、同じ処理を繰り返します。</p>
    `
};

// クエリパラメータからtopicを取得して内容を表示
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search); // クエリパラメータ解析
    const topic = urlParams.get("topic"); // "topic"パラメータを取得

    // 詳細内容を動的に挿入
    const contentDiv = document.getElementById("content");
    if (contents[topic]) {
        contentDiv.innerHTML = contents[topic]; // コンテンツに対応する内容を挿入
    } else {
        contentDiv.innerHTML = "<p>選択された項目の詳細は現在ありません。</p>"; // パラメータが不正な場合
    }
};