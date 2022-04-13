import '../css/Story.css';


const Story = ({title, abstract, url}) => {
  return (
      <a className='story-anchor-tag' href={url} target="_blank" rel='noreferrer'>
        <div className="story-card">
              <h1>{title}</h1>
              <p>{abstract}</p>
        </div>
      </a>
  )
}

export default Story;