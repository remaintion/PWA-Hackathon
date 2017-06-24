import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import About from './about'
import Home from './home'
import Header from './header'
import './App.css';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </LocaleProvider>
    );
  }
}

export default App
