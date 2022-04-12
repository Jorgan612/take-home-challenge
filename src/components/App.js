import React, { Component } from 'react';
import '../css/App.css';
import StoryContainer from './StoryContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  render() {
   return ( <div className='app-div'>
      <nav className='app-top-nav'>
        <h1 className='nav-title'>Top Stories</h1>
        <div className='sort-button-div'>
          <button className='sort-button'>Sort by...</button>
        </div>
      </nav>
      <StoryContainer />
    </div>
   )
  }
}

export default App;
