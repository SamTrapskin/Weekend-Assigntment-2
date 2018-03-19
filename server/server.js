let express = require('express');
let app = express();
let bodyParser = require('body-parser')
const PORT = 5555;
let numbersIn = [];
numbersIn.push();
app.use(bodyParser.urlencoded({exteded:true}))
app.use(express.static('server/public'));




app.post('/calculate', (req,res)=> {
  let calculate = req.body;

  
 // numbersIn.push(req.body);
 

  console.log(req.body);
  res.sendStatus(200);

});
console.log(numbersIn);



app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });

  app.get( (req, res) =>{
    function doTheMath () {
    if('#plus' === '+') 
    console.log((numOne+numTwo));
    else if('#minus' === '-') 
    console.log((numOne - numTwo));
    else if('#divide' === '/') 
    console.log((numOne / numTwo));
    else if('#mult' === '*') 
    console.log((numOne * numTwo))
      res.send(doTheMath);
    }
  });