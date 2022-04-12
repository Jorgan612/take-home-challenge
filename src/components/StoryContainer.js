import Story from './Story';
import '../css/StoryContainer.css';


const StoryContainer = ({stories}) => {
  console.log('stories prop in storycontainer ----', stories)
  const homePageStories = stories.map((story) => {
    return (
      <Story
        title={story.title}
        abstract={story.abstract}
        publishedDate={story.published_date}
      />
    )
  }) 
  return (
    <section className='story-container-section'>
      {homePageStories}
    </section>
  )
} 

export default StoryContainer;