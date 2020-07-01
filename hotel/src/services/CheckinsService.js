const baseURL = 'http://localhost:3000/api/checkins/'

export default {

  getCheckings() {
    return fetch(baseURL)
    .then(res => res.json())
  }
}