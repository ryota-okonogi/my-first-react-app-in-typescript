import { type } from 'os';
import React from 'react'; // Reactライブラリ
import ReactDOM from 'react-dom'; // ReactDOM = Reactの機能に関連するライブラリ
import App from './App'; // Appというモジュール(自作のモジュール) => コンポーネント(HTMLを表示するための部品) // './App' => Appコンポーネントの存在場所

// type Foo = JSX.IntrinsicAttributes; // IntrinsicAttributesの定義元を確認したコード

// インポートしたReactDOMの機能を利用してrenderメソッドを実行している
ReactDOM.render(<App message="Hello, React!"/>, // 「[props] APPコンポーネント(App.tsx)側にデータを渡している」
document.getElementById('root')
); // renderメソッドで、「HTML(index.html)上にある'root'というidが振られているDOMを <App /> に置き換える」ということをやっている。
