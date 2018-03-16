let express = require('express');
let app = express();
let PORT = 5555;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
  });

