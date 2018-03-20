let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let calculation = require( './modules/calculation.js' );
const PORT = 5555;
let numbersIn = [];
let initialAnswer = 0
numbersIn.push();
app.use(bodyParser.urlencoded({exteded:true}))
app.use(express.static('server/public'));




app.post('/calculate', (req,res)=> {
  let numsToCalculate = req.body;

  
 // numbersIn.push(req.body);
 

  console.log(req.body);
  res.sendStatus(200);

});



app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });
  app.get( '/answer', function( req, res ){
    res.send( { answer: mostRecentAnswer } );
}); // end /answer GET

app.post( '/mathButton', function( req, res ){
    console.log( 'in /mathButton POST:', req.body );
    // send req.body to calculate module & hold answer in global variable
    mostRecentAnswer = calculate( req.body );
    // save this request in the calculate history
    calculateHistory.push( req.body );
    console.log( 'answer:', mostRecentAnswer );
    res.sendStatus( 200 );
}); // end /doMath POST

app.get( '/history', function( req, res ){
  console.log( 'in /history GET' );
  res.send( getHistory );
}); //end /history 