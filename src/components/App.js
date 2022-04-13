import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../css/App.css';
import StoryContainer from './StoryContainer';
import { getHomeStories } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      searchPhrase: ''
    }
  }

  componentDidMount() {
    getHomeStories()
    .then(data => this.setState({stories: data.results}))
  } 

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
   return ( <div className='app-div'>
      <nav className='app-top-nav'>
        <h1 className='nav-title'>Top Stories</h1>
        <div className='filter-div'>
          <input className='input-field' type='text' name='searchPhrase' value={this.state.searchPhrase} placeholder='Search By Title' onChange={event => this.handleChange(event)} />
        </div>
      </nav>
      <StoryContainer stories={this.state.stories}/>
      {/* <Routes>
        <Route path='/details' element={<StoryDetails />}
      </Routes> */}
    </div>
   )
  }
}

export default App;
