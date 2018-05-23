const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //use heroku dynamic env port number
app.use(express.static(publicPath)); //create a express app
app.get('*',(req,res) => {
  res.sendFile(path.join(publicPath,'index.html'));
}); //if the user is not in public director, just give him index.html
app.listen(port, () => {
  console.log('Server is up');
});
