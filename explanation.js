// コンテンツデータを定義
const contents = {
    "1": `
    	<div class="title">
			<h1>Javaの基礎知識</h1>
			<p>説明</p>
		</div>

        <h3>Javaとは</h3>
        <div class="char">
        	Javaとは、世界中にたくさんの開発者がいる有名な言語です。<br>
        	大規模システム、Webアプリケーション、スマートフォンアプリなど、
        	Javaはあなたの周りの様々な場所で活躍しています。<br>
        	(なお、JavaとJavaScriptは全くの無関係ですので、混同しないようにしましょう。)
        </div>

        <h3>Javaを動かしてみよう</h3>
        <div class="char">
        	それでは早速、Javaのコードを動かしてみましょう。
        	難しいことはありません。<br>まずは、文字を表示します。
        	Main.javaというファイルのSystem.out.println()<br>
        	上記の()の中に文字を書くと、コンソールという画面にその文字が表示されます。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println("Hello World")</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
        		<code>Hello World</code>
        	</div>
        </div>
        
        <h3>文字列</h3>
        <div class="char">
        	文字をコンソールに出力することができました。<br>
        	先ほど出力した"Hello World"は、プログラミングの世界では<b>文字列</b>と呼ばれます。<br>
        	文字列は<b>ダブルクォーテーション(")</b>で囲んで挙げる必要があります。<br>
        	" "で囲んでいないとコードが動かなくなります。
        </div>
        <div class="code">
	        <h5>ダブルクォーテーションで囲む</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println("Hello World")<br><br>
        		//↓エラー発生<br>
        		System.out.println(Hello World)</code>
        	</div>
        </div>
        
        <h3>出力の命令</h3>
        <div class="char">
        	先ほど用いた<b>System.out.println()</b>というのは、「()の中身を出力(表示)」という「命令」です。
        	プログラミングでは、このようにコンピュータに様々な命令をし処理を行わせます。
        	このレッスンではSystem.out.println()を何度も使うので覚えておきましょう。
        	なお、printlnの「l」は<b>小文字のエル</b>です。注意しましょう。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println("Hello World")</code>
        		<p>「()の中身を出力せよ」</p>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>Hello World</code>
        		<p>コードの()の中身が出力(表示)される</p>
        	</div>
        </div>
        
        <h3>Javaの構造</h3>
        <div class="char">
        	main.javaには、出力の命令以外にもコードが書かれています。<br>
        	これらは下記図のように、「クラス」「メソッド」「メソッド内の処理」に分けられます。<br>
        	今はそれぞれの意味を理解する必要はありません。<br>
        	このレッスンでは処理部分にコードを書く、ということだけ押さえておきましょう。
        </div>
        <div class="code">
        	<h5>Javaの構造</h5>
        	<div class="code-box">
        		<div class="code-section class-block">
        			<p class="code-label">クラス部分</p>
      				<code>class Main {</code>
      				<div class="code-section method-block">
      					<p class="code-label">メソッド部分</p>
      					<code>public static void main(String[] args) {</code>
      					<div class="code-section process-block">
      						<p class="code-label">処理部分</p>
      						<code>// ここにコード（命令）を書く</code>
      					</div>
      					<code>}</code>
      				</div>
      				<code>}</code>
      			</div>
      		</div>
      	</div>

      	<h3>セミコロン</h3>
      	<div class="char">
      		Javaでは文の終わりに<b>セミコロン(;)</b>を付けなければなりません。<br>
      		これを忘れるとコードが動かなくなるので、注意しましょう。
        </div>
        <div class="code">
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println("Hello World");</code>
        		<p>文末にセミコロン！</p>
        	</div>
        </div>
        
        <h3>コメントの書き方</h3>
        <div class="char">
        	コード内にはコメントを下記ことができます。<br>
        	コメントはコードが実行される時にすべて無視されるので、
        	メモなどを残しておくことができます。<br>
        	下記図のように「//」と書くことで、そこから行末までがコメントと見なされます。
        </div>
        <div class="code">
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>//この部分はコメント<br>
        		System.out.println("Hello World");</code>
        	</div>
        </div>
        
        <h3>数値</h3>
        <div class="char">
        	プログラミングでは、数値を扱うこともできます。<br>
        	数値は文字列と違い、<b>ダブルクォーテーションで囲みません。</b><br>
        	数値は下記図のように、数学と同じ記号を用いて、足し算と引き算が可能です。<br>
        	記号はすべて半角で記述します。<br>
        	また、記号の前後の半角スペースはなくても構いませんが、入れた方がコードが見やすくなります。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println(3);<br>
        		System.out.println(5 + 2);<br>
        		System.out.println(8 - 5);</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>3<br>
	        	7<br>
	        	3</code>
        	</div>
        </div>
        
        <h3>文字列と数値の違い</h3>
        <div class="char">
        	プログラミングの世界では、文字列と数値は異なるものです。<br>
        	例えば文字列の"3"と数値の3(""で囲まない)は別物として扱われます。<br>
        	また下記図のように、5 + 2は7になりますが、
        	"5 + 2"はそのまま「5 + 2」とい文字列として出力されます。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println(5 + 2);<br>
        		System.out.println("5 + 2");</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>7<br>
	        	5 + 2</code>
        	</div>
        </div>
        
        <h3>その他の計算</h3>
        <div class="char">
        	数値は足し算・引き算以外にも計算ができます。<br>
        	掛け算が「*」(アスタリスク)、割り算は「/」(スラッシュ)を用います。<br>
        	また、「%」(パーセント)で、割り算の余りを計算することができます。<br>
        	この3つの記号は数学で用いるものと少し違いますので、しっかり覚えましょう。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println(3 * 2);<br>
        		System.out.println(6 / 2);<br>
        		System.out.println(8 % 5);</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>6<br>
	        	3<br>
	        	3<br>
	        	↑8÷5は1余り3</code>
        	</div>
        </div>
        
        <h3>文字列の連結</h3>
        <div class="char">
        	数値の足し算と違い、文字列を「足し算」すると、
        	下記図のように<b>連結</b>することができます。<br>
        	よって下記図にもあるように、"5" + "3"は2つの文字列を連結し、
        	"53"となります。<br>
        	ここからも数値と文字列の違いがよくわかります。<br>
        	数値と文字列の違いは常に意識していきましょう。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>System.out.println("Ninja" + "Wanko");<br>
        		System.out.println("5" + "3");<br>
        		System.out.println(5 + 3);</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>NinjaWanko<br>
	        	53<br>
	        	8</code>
        	</div>
        </div>
    `,
    "2": `
        <div class="title">
			<h1>Javaの基礎知識</h1>
			<p>説明</p>
		</div>

        <h3>データ型</h3>
        <div class="char">
        	これまで文字列や数値という言葉で値の種類を説明してきましたが、
        	これらは「<b>データ型</b>」と呼ばれます。<br>
        	まずは下記図で<b>文字列</b>と<b>整数</b>のデータ型を覚えましょう。<br>
        	Stringは文字の並び、intは整数(integer)を意味する英語です。<br>
        	なおString型のSは大文字、int型のiは小文字である点に注意しましょう。<br>
        	(この違いの理由はまだ気にしないでください)
        </div>
        <div class="code">
        	<h5>データ型</h5>
        	<div class="code-box">
        		<code>"Hello Workd (文字列)<br>
        		String型 ※Sは大文字<br>
        		3 (整数)<br>
        		int型 ※iは小文字</code>
        	</div>
        </div>

        <h3>変数とは</h3>
        <div class="char">
        	ここから<b>変数</b>について学習します。<br>
        	難しく聞こえますが、データ(値)を入れておく<b>箱</b>だと思いましょう。<br>
        	またその箱(変数)には名前(変数名)がついており、
        	その名前を用いて何時でも変数から値を取り出すことができます。<br>
        	変数はプログラミングの必須の知識なので、しっかり理解していきましょう。
        </div>

        <h3>変数の定義</h3>
        <div class="char">
        	変数を使うには、まず変数を「定義」する必要があります。<br>
        	変数を定義することで値をいれる箱が作られます。<br>
        	Javaで変数を定義するためには①変数に入れる値の<b>データ型</b>を指定する。<br>
        	②<b>変数の名前</b>を決める、という2つが必要です。
        </div>
        <div class="code">
        	<h5>int型の変数定義</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>int number;<br>
        		①データ型　②変数名</code>
        	</div>
        	<h5>String型の変数定義</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
	        	<code>String name;<br>
        		①データ型　②変数名</code>
        	</div>
        </div>
        
        <h3>値の代入</h3>
        <div class="char">
        	変数を定義したら変数に値を入れます。これを<b>代入</b>と呼びます。<br>
        	「<b>変数名 = 値</b>」とするだけで代入することができます。<br>
        	「=」はプログラミングにおいて、右の値を左のものに代入するという意味です。<br>
        	数学のイコールのように「同じ」を意味するものではありません。
        </div>
        <div class="code">
        	<h5>値の代入</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>int number;<br>
        		number = 3;<br>
        		numberという変数に「3(数値)」を代入</code>
        	</div>
        	<h5>String型の変数定義</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
	        	<code>String name;<br>
        		name = "Sato";<br>
        		nameという変数に「Sato(文字列)」を代入</code>
        	</div>
        </div>
        
        <h3>変数から値を取り出す</h3>
        <div class="char">
        	変数から値を取り出すのは難しくありません。<br>
        	下記図では、System.out.println()の()に変数を入れると、
        	変数の中に入っている値が出力されているのがわかります。<br>
        	変数は値を一時的に入れる箱に過ぎず、変数に対して何らかの処理を行うと、<br>
        	変数から値が取り出されて処理が行われます。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>int number;<br>
        		number = 10;
        		System.out.println(number);<br><br>
        		String name;<br>
        		name = "Sato";
        		System.out.println(name);</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>10<br>
	        	Sato</code>
        	</div>
        </div>
        
        <h3>変数の初期化</h3>
        <div class="char">
        	下記図の「int number = 3;」「String text = "Hello World";」のように、
        	変数の値の代入は変数定義と同時に行うことができます。<br>
        	変数定義と同時に値を代入することが<b>変数の初期化</b>と呼びます。
        </div>
        <div class="code">
        	<h5>変数の初期化</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>int number = 3;<br>
        		int型の変数numberを定義し、3を代入<br><br>
        		String text = "Hello World";<br>
        		※変数の定義と同時に値を代入(=変数の初期化)</code>
        	</div>
        </div>

/* 2025/07/23 */
        <h3>int型変数の計算</h3>
        <div class="char">
        	数値が入った変数なら、数値と同様に計算が可能です。<br>
        	数値と変数の計算も変数同士の計算もできます。
        </div>
        <div class="code">
        	<h5>コード</h5>
        	<div class="code-box">
        		<div class="code-header">main.java</div>
        		<code>int number;<br>
        		number = 10;
        		System.out.println(number);<br><br>
        		String name;<br>
        		name = "Sato";
        		System.out.println(name);</code>
        	</div>
        	<h5>出力結果</h5>
        	<div class="code-box">
        		<div class="code-header">コンソール</div>
	        	<code>10<br>
	        	Sato</code>
        	</div>
        </div>
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