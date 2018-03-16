let express = require('express');
let app = express();
let PORT = 5555;

app.use(express.static('server/public'));

app.listen(PORT, function(){
    console.log('listening on port', PORT);
  });

    