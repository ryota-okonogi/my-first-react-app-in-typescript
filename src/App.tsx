import React from 'react';
import Counter from './Conter';

// interfaceを使って再利用性を持たせる
interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => { // const App = 関数 // Appコンポーネント => 関数(function)コンポーネントと呼ばれている, 最終的にHTMLとして表示される部品。
  // const { message } = props; // JSの分割代入(messageだけを取り出している)
  return <div><Counter /></div>; // return文 =>「HTMLとしてどういった内容が表示されるか？」が書いてある。
}; // <div>React Starter Kit in TypeScript</div>; => JSXという特殊なフォーマットのJavaScript = トランスパイル(変換工程)を経て、HTMLの要素となって、最終的にブラウザに表示される

App.defaultProps = {
  message: 'Hello, defaultProps!',

};

export default App;
