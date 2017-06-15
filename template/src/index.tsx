import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route,} from 'react-router-dom';
import Header from './components/header';
import Details from './pages/details';
import Home from './pages/home';
import dingtalk = require('weex-dingtalk');
import './css/index.css';

interface AppProps{
  children: React.ReactNode
}
console.log(dingtalk);

class App extends React.Component<AppProps,undefined>{
  render(): JSX.Element{
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App>
      <Route exact path="/" component={ Home }></Route>
      <Route path="/details" component={ Details }></Route>
    </App>
  </HashRouter>,
  document.getElementById("root")
);