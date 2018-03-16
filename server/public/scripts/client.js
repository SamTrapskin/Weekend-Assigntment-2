$(document.ready).ready(readyNow);

function readyNow () {
    console.log('JS is ready');
     $('#plus').on ('click ')
}

        function Addnums () {
            num1 + num2 
        }

        function numsMinus () {
            num1 - num2
        }

        function numsMult () {
            num1 * num2
        }

        function numsDivide () {
            num1 / num2
        }
        function getAddAnswer() {
            $.ajax({
              type: 'GET',
              url: '/addition',
            }).done(function(response) {
                console.log("SUCCESS!!!");
                // append products to the dom
                addProductsToDOM(response);
            }).fail(function(response) {
                // notify the user
                alert('request failed');
              }
            );
          }
          function addNumbersToDOM(products) {
            for(let i = 0; i < products.length; i += 1) {
              // append to the dom
            }
          }
          