
const Story = ({title, abstract, publishedDate}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{abstract}</p>
      <p>{publishedDate}</p>
    </div>
  )
}

export default Story;