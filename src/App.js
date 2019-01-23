import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>Dogs list</title>
        
        </header>
        <main>
        <DogsListContainer/>
        

        </main>


      </div>
    );
  }
}

export default App;
