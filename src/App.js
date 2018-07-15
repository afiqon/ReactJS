import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ModuleList from './component/moduleList';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <div className="container" style={{'marginTop':'2em'}}>
              <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ ModuleList } />
                    <Route path='/login' component={ ModuleList } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
            </div>
      </div>
    );
  }
}

export default App;
