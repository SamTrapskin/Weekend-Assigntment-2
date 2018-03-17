let express = require('express');
let app = express();
const PORT = 5555;
app.use(bodyPareser.urlencoded({exteded:true}))
app.use(express.static('server/public'));

app.post('/number', (req,res)=> {
  let numbersToAdd = req.body;
  console.log(req.body);
  res.sendStatus(200);
});


app.listen(PORT, function(){
    console.log('listening on port', PORT);
  });

    