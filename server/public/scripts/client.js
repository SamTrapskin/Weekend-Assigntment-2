$(document.ready).ready(readyNow);
let plus = '+';
let minus = '-';
let times =  '*';
let divide = '/';
let numOne = $('#numberOne').val();
let numTwo = $('#numberTwo').val();
//let add = $('#plus');
let calculated = {numberOne: numOne, numberTwo: numTwo};


     
          function readyNow () {
         console.log('JS is ready');
        $('#plus').on('click', submitNumbers);
         }
          
      

        // $.ajax({
        // type: 'POST',
        // data: calculated,
        // url:'/calculated',
        //     }).done(function(response){
        //             console.log('SUCCESS!');
        //     }).fail(function(response){
        //         alert('something went wrong...');
        //     })
            ////

function submitNumbers() {
    let numOne = $('#numberOne').val();
    let numTwo = $('#numberTwo').val();
    let calculate = {numberOne: numOne, numberTwo: numTwo};
    $.ajax({
        type: 'post',
        data: calculate,
        url: '/calculate'
    }).done(function(response) {
        // our response from a POST will just be '200' success
        console.log('SUCCESS!');
        // Refresh our game list
        
    }).fail(function(response) {
        alert('Something went wrong...');
    })
}
        
        
      




















            ///
        function showCalcHistory () {
        $.ajax({
            type: "GET",
            url: '/number'
          }).done(function(){
            appendToDom(response);
          })
        }

        function appendToDom(showCalcHistory){
            $('#answerHistory').empty();
            
              let tr = $("<tr></tr>");
              tr.append('<td>' + num1+num2 + '</td>');
             
              $('#answerHistory').append(tr);
              
            }
        





        // function numsMinus () {
        //     num1 - num2
        // }

        // function numsMult () {
        //     num1 * num2
        // }

        // function numsDivide () {
        //     num1 / num2
        // }
        // function getAddAnswer() {
        //     $.ajax({
        //       type: 'GET',
        //       url: '/addition',
        //     }).done(function(response) {
        //         console.log("SUCCESS!!!");
        //         // append products to the dom
        //         addProductsToDOM(response);
        //     }).fail(function(response) {
        //         // notify the user
        //         alert('request failed');
        //       }
        //     );
        //   }
        //   function addNumbersToDOM(products) {
        //     for(let i = 0; i < products.length; i += 1) {
        //       // append to the dom
        //     }
        //   