import axios from 'axios'

export function queryBrewery (query) {
  console.log('looking for that fency beer')
  const term = query.replace(/\s/, '+') // replaces spaces in the query link
  const URL = 'http://localhost:4000/search/' + term

  return axios.get(URL).then(res => {
    console.log(`axios got this: ${res}`)
    let beers = res.data.map(beer => beer)
    return beers
  })
}

export function queryCart (query) {
  console.log('looking in the cart')
  const URL = 'http://localhost:4000/search'

  return axios.get(URL).then(res => {
    console.log(`axios got this: ${res}`)
    return res.data
  })
}
