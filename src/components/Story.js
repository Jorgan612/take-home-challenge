import '../css/Story.css';


const Story = ({img, title, abstract, publishedDate}) => {
  return (
    <div className="story-card">
      <img className='story-thumbnail' src={img.url} alt='thumbnail'/>
      <div className='story-title-abstact-div'>
        <h1>{title}</h1>
        <p>{abstract}</p>
        {/* <p>{publishedDate}</p> */}
      </div>
    </div>
  )
}

export default Story;