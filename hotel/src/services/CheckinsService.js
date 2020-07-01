const baseURL = 'http://localhost:3000/api/checkins/'

export default {

  getCheckins() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postCheckins(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }


}