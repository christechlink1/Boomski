const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET = 'mysecret';

let users = [];
let bookings = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email exists' });
  users.push({ email, password });
  res.json({ message: 'Registered successfully' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

app.post('/api/book', (req, res) => {
  const { user, from, to, date } = req.body;
  bookings.push({ user, from, to, date, status: 'pending' });
  res.json({ message: 'Booking added' });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

