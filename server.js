const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getTweets } = require('./twitter');


getTweets('nodejs', 5)
  .then(tweets => {
    console.log(tweets);
  })
  .catch(err => {
    console.error(err);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
