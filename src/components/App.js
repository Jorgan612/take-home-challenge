import React, { Component } from 'react';
import '../css/App.css';
import StoryContainer from './StoryContainer';
import { getHomeStories } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      searchPhrase: '',
      filteredArticle: []
    }
  }

  componentDidMount() {
    getHomeStories()
    .then(data => this.setState({stories: [...data.results]}))
    .catch(error => console.log(error))
  } 

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.searchTitle(this.state.searchPhrase);
  }

  searchTitle(search) {
    const searchedTitle = this.state.stories.filter((story) => {
      const lowerCaseTitle = story.title.toLowerCase();
      return lowerCaseTitle.includes(search.toLowerCase());
    })
    this.setState({filteredArticle: searchedTitle});
  }

  render() {
   return ( <div className='app-div'>
      <nav className='app-top-nav'>
        <h1 className='nav-title'>Top Stories</h1>
        <div className='filter-div'>
          <input className='input-field' type='text' name='searchPhrase' value={this.state.searchPhrase} placeholder='Search By Title' onChange={event => this.handleChange(event)} />
        </div>
      </nav>
      {this.state.filteredArticle.length > 0 ? <StoryContainer stories={this.state.filteredArticle} /> : <StoryContainer stories={this.state.stories}/>}
    </div>
   )
  }
}

export default App;
