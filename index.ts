const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi pulsa otomatis!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
