const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'express-gitops-demo', test:"101" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
