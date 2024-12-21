import { Component } from 'react';
import './app.scss';
import AppButton from '../app-button/app-button';
import AppCounter from '../app-counter/app-conuter';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppCounter />
      </div>
    );
  }
}
