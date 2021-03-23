const axios = require('axios')

axios
  .post('https://localhost:3000/data', {
    todo: 'measure:35'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })