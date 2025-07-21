const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is an Express.js app deployed on AWS Elastic Beanstalk!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
