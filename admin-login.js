app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'secure123') {
    req.session.admin = true;
    res.redirect('/admin-dashboard.html');
  } else {
    res.send('Invalid credentials');
  }
});
