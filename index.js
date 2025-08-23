const express = require('express');
const path = require('path');
const app = express();
const port = 3000;



app.use(express.static('food'));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'food', 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'food', 'menu.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'food', 'gallery.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'food', 'about.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'food', 'contact.html'));
});


app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
