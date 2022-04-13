import Story from './Story';
import '../css/StoryContainer.css';


const StoryContainer = ({stories}) => {
  const homePageStories = stories.map((story) => {
    return (
      <Story
        title={story.title}
        abstract={story.abstract}
        publishedDate={story.published_date}
        url={story.url}
        key={story.title}
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