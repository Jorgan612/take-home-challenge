import React, { Component } from 'react';
import '../css/App.css';
import StoryContainer from './StoryContainer';
import { getHomeStories } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    getHomeStories()
    .then(data => this.setState({stories: data.results}))
  } 

  render() {
   return ( <div className='app-div'>
      <nav className='app-top-nav'>
        <h1 className='nav-title'>Top Stories</h1>
        <div className='sort-button-div'>
          <button className='sort-button'>Sort by...</button>
        </div>
      </nav>
      <StoryContainer stories={this.state.stories}/>
    </div>
   )
  }
}

export default App;
