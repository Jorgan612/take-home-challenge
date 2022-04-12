import '../css/Story.css';


const Story = ({img, title, abstract, url}) => {
  return (
      <a className='story-anchor-tag' href={url}>
        <div className="story-card">
            <img className='story-thumbnail' src={img.url} alt='thumbnail'/>
            <div className='story-title-abstact-div'>
              <h1>{title}</h1>
              <p>{abstract}</p>
            </div>
        </div>
      </a>
  )
}

export default Story;