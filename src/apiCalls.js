export const getHomeStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nnTj1udUADHTwBXzSBVq5x2thE5K1KFb')
  .then(response => response.json())
  .then(data => data)
}