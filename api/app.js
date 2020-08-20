const express = require('express');
const Twitter = require('./utils/twitter');
require('dotenv').config();


const app = express();
const port = 3000;

const twitter = new Twitter();

app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const count = req.query.count;
   console.log(process.env.TWITTER_API_TOKEN);
    twitter.get(query, count)
    .then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})