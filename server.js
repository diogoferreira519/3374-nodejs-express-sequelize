const app = require('./src/app.js');
require('dotenv').config();
const PORT = 1234;

app.listen(PORT, () => {
  console.log('servidor escutando!');
});
  