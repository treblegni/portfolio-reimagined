import axios from 'axios'
const baseURL = 'https://api.github.com'

export default (req,res) => {
  if (req.method == 'GET') {
    axios({
      method: 'GET',
      url: baseURL + `/repos/${req.query.user}/${req.query.repo}`,
      type: 'json'
    })
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(err => res.send('Bad Query'))
  }
  if (req.method == 'POST') {
    res.send('Post Not Supported!')
  }
}