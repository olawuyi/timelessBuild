import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'


// start part 1 of the express configuration
const port = 3000;
const app = express();
// end part 1 of the express configuration

// start of the webpack configuration
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
// end of the webpack configuration

// start part 2 of the express configuration
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'))
});

app.get('/users', function (req, res) {
  res.json([
    { id: 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { id: 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { id: 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
})
// end part 2 of the express configuration