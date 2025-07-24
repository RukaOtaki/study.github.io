// コンテンツデータを定義
const contents = {
    "1": `
    	<div class="title">
			<h1>Javaの基礎知識</h1>
			<p>説明</p>
		</div>

		<h3>Javaに触れてみよう</h3>
		
        <h4>Javaとは</h4>
        <div class="section">
        	<div class="char">
        		Javaとは、世界中にたくさんの開発者がいる有名な言語です。<br>
        		大規模システム、Webアプリケーション、スマートフォンアプリなど、
        		Javaはあなたの周りの様々な場所で活躍しています。<br>
        		(なお、JavaとJavaScriptは全くの無関係ですので、混同しないようにしましょう。)
        	</div>
        </div>

        <h4>Javaを動かしてみよう</h4>
        <div class="section">
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
        </div>
        
        <h3>Javaの基本・文字列</h3>
        <h4>文字列</h4>
        <div class="section">
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
        			<code>
       					System.out.println("Hello World")<br><br>
       					<span>//↓エラー発生</span><br>
       					System.out.println(Hello World)
       				</code>
        		</div>
        	</div>
        </div>
        
        <h4>出力の命令</h4>
        <div class="section">
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
        </div>
        
        <h4>Javaの構造</h4>
        <div class="section">
        	<div class="char">
        		main.javaには、出力の命令以外にもコードが書かれています。<br>
        		これらは下記図のように、「クラス」「メソッド」「メソッド内の処理」に分けられます。<br>
        		今はそれぞれの意味を理解する必要はありません。<br>
        		このレッスンでは処理部分にコードを書く、ということだけ押さえておきましょう。
        	</div>
        	<div class="code">
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
      	</div>

      	<h4>セミコロン</h4>
      	<div class="section">
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
        </div>
        
        <h4>コメントの書き方</h4>
        <div class="section">
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
        </div>
        
        <h3>数値</h3>
        <div class="section">
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
	        		<code>
	        			3<br>
	        			7<br>
	        			3
	        		</code>
        		</div>
        	</div>
        </div>
        
        <h4>文字列と数値の違い</h4>
        <div class="section">
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
	        		<code>
	        			7<br>
	        			5 + 2
	        		</code>
        		</div>
        	</div>
        </div>
        
        <h3>数値の計算</h3>
        <div class="section">
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
        			<code>
        				System.out.println(3 * 2);<br>
        				System.out.println(6 / 2);<br>
        				System.out.println(8 % 5);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			6<br>
	        			3<br>
	        			3<br>
	        			<span>↑8÷5は1余り3</span>
	        		</code>
        		</div>
        	</div>
        </div>
        
        <h3>文字列の連結</h3>
        <div class="section">
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
        			<code>
        				System.out.println("Ninja" + "Wanko");<br>
        				System.out.println("5" + "3");<br>
        				System.out.println(5 + 3);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			NinjaWanko<br>
	        			53<br>
	        			8
	        		</code>
        		</div>
       		</div>
        </div>
    `,
    "2": `
        <div class="title">
			<h1>Javaの基礎知識</h1>
			<p>説明</p>
		</div>

        <h3>変数の定義</h3>
        <h4>データ型</h4>
        <div class="section">
        	<div class="char">
        		これまで文字列や数値という言葉で値の種類を説明してきましたが、
        		これらは「<b>データ型</b>」と呼ばれます。<br>
        		まずは下記図で<b>文字列</b>と<b>整数</b>のデータ型を覚えましょう。<br>
        		Stringは文字の並び、intは整数(integer)を意味する英語です。<br>
        		なおString型のSは大文字、int型のiは小文字である点に注意しましょう。<br>
        		(この違いの理由はまだ気にしないでください)
        	</div>
        	<div class="code">
        		<div class="card-box">
        			<p>
        				"Hello Workd (文字列)<br>
        				String型 <span>※Sは大文字</span><br>
        				3 (整数)<br>
        				int型 <span>※iは小文字</span>
        			</p>
        		</div>
        	</div>
        </div>

        <h4>変数とは</h4>
        <div class="section">
        	<div class="char">
        		ここから<b>変数</b>について学習します。<br>
        		難しく聞こえますが、データ(値)を入れておく<b>箱</b>だと思いましょう。<br>
        		またその箱(変数)には名前(変数名)がついており、
        		その名前を用いて何時でも変数から値を取り出すことができます。<br>
        		変数はプログラミングの必須の知識なので、しっかり理解していきましょう。
        	</div>
        </div>

        <h4>変数の定義</h4>
        <div class="section">
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
        			<code>
        				int number;<br>
        				<span>①データ型　②変数名</span>
        			</code>
        		</div>
        		<h5>String型の変数定義</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
	        		<code>
	        			String name;<br>
        				<span>①データ型　②変数名</span>
        			</code>
        		</div>
        	</div>
        </div>
        
        <h4>値の代入</h4>
        <div class="section">
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
        			<code>
        				int number;<br>
        				number = 3;<br>
        				<span>numberという変数に「3(数値)」を代入</span>
        			</code>
        		</div>
        		<h5>String型の変数定義</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
	        		<code>
	        			String name;<br>
        				name = "Sato";<br>
        				<span>nameという変数に「Sato(文字列)」を代入</span>
        			</code>
        		</div>
      		</div>
        </div>
        
        <h4>変数から値を取り出す</h4>
        <div class="section">
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
        			<code>
        				int number;<br>
        				number = 10;
        				System.out.println(number);<br><br>
        				String name;<br>
        				name = "Sato";
        				System.out.println(name);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			10<br>
	        			Sato
	        		</code>
        		</div>
        	</div>
        </div>

		<h3>変数を使ってみよう</h3>
        <h4>変数の初期化</h4>
        <div class="section">
        	<div class="char">
        		下記図の「int number = 3;」「String text = "Hello World";」のように、
        		変数の値の代入は変数定義と同時に行うことができます。<br>
        		変数定義と同時に値を代入することが<b>変数の初期化</b>と呼びます。
        	</div>
        	<div class="code">
        		<h5>変数の初期化</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				int number = 3;<br>
        				<span>int型の変数numberを定義し、3を代入</span><br><br>
        				String text = "Hello World";<br>
        				<span>※変数の定義と同時に値を代入(=変数の初期化)</span>
        			</code>
        		</div>
        	</div>
        </div>

        <h4>int型変数の計算</h4>
        <div class="section">
        	<div class="char">
        		数値が入った変数なら、数値と同様に計算が可能です。<br>
        		数値と変数の計算も変数同士の計算もできます。
       		</div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				int number1 = 10;<br>
        				System.out.println(number1 + 3);<br><br>
        				int number2 = 5;<br>
        				System.out.println(number1 + number2);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			13<br>
	        			15
	        		</code>
        		</div>
        	</div>
        </div>
        
        <h4>String型変数の連結</h4>
        <div class="section">
        	<div class="char">
        		同様に文字列の入った変数であれば、文字列と同様に、文字列の連結を行うことが可能です。<br>
        		なお文字列が入っているからといって変数にダブルクォーテーションを付けてはいけません。<br>
        		付けてしまうと、変数ではなく文字列として扱われてしまうので、注意しましょう。
       		</div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				String greeting = "こんにちは";<br>
        				System.out.println(greeting + "佐藤さん");<br><br>
        				int name = "鈴木さん";<br>
        				System.out.println(greeting + name);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			こんにちは佐藤さん<br>
	        			こんにちは鈴木さん<br><br>
	        			<span>※変数に""をつけない</span>
	        		</code>
        		</div>
        	</div>
        </div>
        
        <h3>変数の更新</h3>
        <div class="section">
        	<div class="char">
        		また変数は、中に入っている値を変更することもできます。<br>
        		一度値を代入した変数に、その後再び値を代入すると、<br>
        		後で代入した値によって変数の中身が上書きされます。<br>
        		下記図では、変数を途中で上書きしたことによって、出力結果が変わっています。
       		</div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				String name = "Sato";<br>
        				System.out.println(name);<br><br>
        				name = "Suzuki";<br>
        				System.out.println(name);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code>
	        			Sato<br>
	        			Suzuki
	        		</code>
        		</div>
        	</div>
       	</div>
        
        <h4>更新時の注意点</h4>
        <div class="section">
        	<div class="char">
        		変数numberを上書きするために、下記図のように
        		「int number = 5;」とするとエラーになります。<br>
        		これは、変数名の前にデータ型をつけると変数を定義しようとしますが、<br>
        		同じ処理内で同一名の変数を定義できないためです。<br>
        		上書きするときはデータ型を付けないように注意しましょう。
        	</div>
        	<div class="code">
        		<h5>間違った値の更新方法</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				int number = 3;<br>
        				：<br>
        				int number = 5;<br>
        				<span>新しい変数を定義しようとしているが、<br>
        				「同一名の変数は定義できない」ためエラーになる</span>
        			</code>
        		</div>
        		<h5>正しい値の更新方法</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				int number = 3;<br>
        				：<br>
        				number = 5;<br>
        				<span>値を更新するときはデータ型を付けない！</span>
        			</code>
        		</div>
        	</div>
        </div>
        
        <h3>自己代入</h3>
        <div class="section">
        	<div class="char">
        		変数Xに3が入っている時、Xの値に2を足して5に上書きしたい場合はどうすれば良いでしょうか。<br>
        		この場合は、下記図のように変数Xと2を足して、また変数Xに代入します。<br>
        		不思議な式に見えますが、プログラミングでは「=」は代入なので問題はありません。<br>
        		よく使うので覚えておきましょう。<br>
        		また、このような代入を<b>自己代入</b>と呼びます。
       		</div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				int X = 3;<br>
        				System.out.println(X);<br><br>
        				X = X + 2;<br>
        				<span>変数Xの値「3」に2を足したものをXに代入</span><br>
        				System.out.println(X);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
	        		<code
	        			>3<br>
	        			5
	        		</code>
        		</div>
       		</div>
       	</div>
        
        <h4>自己代入の省略した書き方</h4>
        <div class="section">
        	<div class="char">
        		自己代入には省略した書き方があります。
        		よく使いますので、下記図をしっかり覚えましょう。
       	 </div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				X = X + 10;  →  X += 10;<br>
        				X = X - 10;  →  X -= 10;<br>
        				X = X * 10;  →  X *= 10;<br>
        				X = X / 10;  →  X /= 10;<br>
        				X = X % 10;  →  X %= 10;
        			</code>
        		</div>
        	</div>
        </div>
        
        <h4>1を足す、1を引く</h4>
        <div class="section">
        	<div class="char">
        		変数に1を足す、もしくは1を引く場合はさらなる省略形が存在します。
        		「<b>++</b>」という記号は変数に「1を足す」という意味です。
        		変数Xに対してX++とするのは、X += 1と同じ意味になります。
        		反対に「<b>--</b>」とすると「1を引く」ことができます。
        		便利な書き方なのでぜひ覚えておきましょう。
        	</div>
        	<div class="code">
        		<h5>値が1のときだけさらに省略して書ける</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				X = X + 10;  →  X += 10;  →  X++;<br>
        				X = X - 10;  →  X -= 10;  →  X--;
        			</code>
        		</div>
        	</div>
        </div>
        
        <h3>変数の役割と注意点</h3>
        <h4>なぜ変数を使うのか</h4>
        <div class="section">
        	<div class="char">
        		なぜ変数を使うのでしょうか？<br>
        		実際に開発するときには、プログラムの中にありとあらゆる値が登場します。<br>
        		開発者はそれらを間違いがないように整理し、わかりやすくコードを書き、
        		そしてすぐに変更できるようにしなければなりません。<br>
        		それを助けるための1つの仕組みが変数です。
       		</div>
       		<div class="code">
        		<h5>なぜ変数を使うのか？</h5>
        		<div class="card-box">
        			<p>
        				1.なんのデータかわかりやすい<br>
        				2.同じデータを繰り返し使える<br>
        				3.変更に対応しやすい
        			</p>
        		</div>
        	</div>
        </div>
        
        <h4>変数の役割</h4>
        <div class="section">
        	<div class="char">
        		変数の使いどころを見てみましょう。<br>
        		下記図1のように、重複する箇所が多い場合は図2のように変数にしておくと便利です。<br>
        		この文章が後で変更になったとしても、変数を用いていればその変数に代入する文字列を一か所変更するだけで対応することができます。、
       		</div>
        	<div class="code">
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				System.out.println("Aさん、ProgateでJavaをマスターしましょう");<br>
        				System.out.println("Bさん、ProgateでJavaをマスターしましょう");<br>
        				System.out.println("Cさん、ProgateでJavaをマスターしましょう");<br>
        				<span>「Java」の部分を「プログラミング」に書き換えるなら<br>
        				3箇所すべて変更しなければならない</span>
        			</code>
        		</div>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				String text = "ProgateでJavaをマスターしましょう"<br>
        				System.out.println("Aさん、" + text);<br>
        				System.out.println("Bさん、" + text);<br>
        				System.out.println("Cさん、" + text);<br>
        				<span>「Java」の部分を「プログラミング」に書き換えるなら<br>
        				代入する文字列を1箇所変更するだけで良い</span>
        			</code>
        		</div>
        	</div>
        </div>
        
        <h4>変数の注意点</h4>
        <div class="section">
        	<div class="char">
        		変数にはいくつか決まりがあります。<br>
        		変数名は基本的に自由に決められますが、
        		Javaでは下記図のような決まりがあります。<br>
        		「userName」のように2語以上の変数名を使うときは、
        		単語の一を大文字にして区切りましょう。<br>
        		この記述法を<b>キャメルケース</b>と呼びます。
       		</div>
        	<div class="code">
        		<h5>良い例</h5>
        		<div class="card-box">
        			<p>
        				date … 英単語を用いる<br>
        				userName … 2語以上の場合は大文字で区切る(キャメルケース)
        			</p>
        		</div>
        		<h5>悪い例</h5>
        		<div class="card-box">
        			<p>
        				× 1name … 数字始まり<br>
        				△ first_name … アンダーバー(スネークケース)<br>
        				△ namae … ローマ字<br>
        				△ 名前 … 日本語<br><br>
        				<span>×：エラーが出る △：望ましくない</span>
        			</p>
        		</div>
        	</div>
        </div>
        
        <h4>変数名</h4>
        <div class="section">
        	<div class="char">
        		変数名を決めるときにまず大事なのは、
        		なんのデータを入れる変数なのかわかりやすい変数名を付けることです。<br>
        		何の値が入っている変数化わかりにくい名前は、コードが読みにくくなり、
        		ミスを生む原因となります。<br>
        		わかりやすい変数名をつけるよう心がけましょう。
        	</div>
        	<div class="code">
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				×中に入っている値を意味しない変数名<br>
        				String number = "Sato";<br><br>
        				〇中にどんな値が入っているかを把握しやすい変数名<br>
        				String lastName = "Sato";
        			</code>
        		</div>
        	</div>
        </div>
        
        <h3>小数を扱おう</h3>
        <h4>double型(小数)</h4>
        	<div class="section">
        		<div class="char">
        			これまで数値は、int型(整数)しか使ってきませんでしたが、
        			<b>小数</b>を表すデータ型も存在します。<br>
        			その一つが<b>double型</b>です。重要なデータ型なので覚えておきましょう。<br>
        			またJavaの世界にはまだ多くのデータ型が存在します。<br>
        			興味のある人は、「Java データ型」といった具合に調べてみてください。
        		</div>
        		<div class="code">
        		<h5>数値のデータ型</h5>
        		<div class="card-box">
        			<p>
        				int型 … 5(整数)<br>
        				double型 … 3.14(小数)
        			</p>
        		</div>
        	</div>
        </div>
        
        <h4>double型の変数</h4>
        <div class="section">
        	<div class="char">
        		整数とは「3」「-39」のように小数点以下を持たない数です。<br>
        		対して小数とは「3.28」「-5.7」のように<b>小数点以下を持つ数</b>になります。<br>
        		大きさは同じでも3はint型ですが、3.0はdouble型になります。<br>
        		int型と同様に変数の定義ではデータ型にdoubleを指定します。
       		</div>
       		<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				double number = 5.28;<br>
        				System.out.println(number);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
        			<code>5.28</code>
        		</div>
        	</div>
        </div>
        
        <h4>小数同士の計算</h4>
        <div class="section">
        	<div class="char">
        		double型も数値ですので下記図のように計算が可能です。
       		</div>
        	<div class="code">
        		<h5>コード</h5>
        		<div class="code-box">
        			<div class="code-header">main.java</div>
        			<code>
        				double number1 = 8.5;<br>
        				double number2 = 3.4;<br>
        				System.out.println(number1 + number2);<br>
        				System.out.println(number1 - number2);
        			</code>
        		</div>
        		<h5>出力結果</h5>
        		<div class="code-box">
        			<div class="code-header">コンソール</div>
        			<code>
        				11.9<br>
        				5.1
        			</code>
        		</div>
        	</div>
        </div>
    `,
    "3": `
        <h4>条件分岐</h4>
        <p>条件分岐はif文やswitch文を使い、条件に応じて処理を切り替えます。</p>
    `,
    "4": `
        <h4>繰り返し処理(for文の詳細)</h4>
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