$(document.ready).ready(readyNow);

let numOne = $('#numberOne').val();
let numTwo = $('#numberTwo').val();
let operator = $('#typeIn');

let numsToCalculate = {numberOne: numOne, numberTwo: numTwo, operator: operator };


     
          function readyNow () {
         console.log('JS is ready');
        $('#equals').on('click', function(){
            console.log(  'on click' );
            // capture user input & store in an object
            let numsToSend = {
                numberOne: $( '#numberOne' ).val(),
                numberTwo: $( '#numberTwo' ).val(),
                operator: $( '#typeIn' )
            }; // end objectToSend
            console.log( 'objectToSend:', numsToSend ); 
            // send object to server with AJAX
            $.ajax({
                type: 'POST',
                url: '/mathButton',
                data: numsToSend
            }).done( function( response ){
                console.log( 'back from POST with:', response );
                getAnswer();
            }); // end ajax
            // display answer on DOM
        }); // end doMathButton on click

        function getAnswer(){
            $.ajax({
                type: 'GET',
                url: '/answer'
            }).done( function( response ){
                console.log( 'back from GET with:', response );
                let outputDiv = $( '#history' );
                outputDiv.empty();
                outputDiv.append( response.answer );
                getHistory();
            }); // end get answer
        } // end getAnswer
    }



function getHistory(){
    // ajax call to /history
    $.ajax({
        type: 'GET',
        url: '/history'
    }).done( function( response ){
        console.log( response );
        // target the output element
        let outputElement = $( '#history' );
        outputElement.empty();
        for( let i = 0; i<response.length; i++ ) {
            console.log(  response[i] );
            let outputString = '<li>';
            outputString += response[i].x + ' ';
            outputString += response[i].type + ' ';
            outputString += response[i].y;
            outputString += '</li>';
            outputElement.append( outputString );
        } //end for
    }); //end ajax
    // display history on DOM
}
          