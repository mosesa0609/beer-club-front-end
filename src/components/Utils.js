import axios from 'axios'

export function queryBrewery (query) {
  console.log('looking for that fency beer')
  const term = query.replace(/\s/, '+') // replaces spaces in the query link
  const URL = 'https://dbc-project3-backend.herokuapp.com/search/' + term

  return axios.get(URL).then(res => {
    console.log(`axios got this: ${res}`)
    let beers = res.data.map(beer => beer)
    return beers
  })
}
