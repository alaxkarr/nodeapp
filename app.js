const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use(express.static('public')); // to set the path for css

app.get('/', async (req, res) => {
  res.send('App is running');
});

// Set the views directory to the folder where your EJS template is located
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Set EJS as the view engine

// views
app.get('/signin', async (req, res) => {
  res.render('signin');
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
