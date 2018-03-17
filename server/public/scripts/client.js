$(document.ready).ready(readyNow);

function readyNow () {
    console.log('JS is ready');
     $('#plus').on ('click ', addNums);

}

        function addNums () {
            let x = $('#numberOne').val();
            let y = $('#numberTwo').val();
            let numbersToAdd = {
                    x: x,
                    y: y,
                    type: "Add"
                 };

                 x + y;
                
             
            $.ajax({
                type: 'POST',
                data: numbersToAdd,
                url:'/number'
            }).done(function(response){
                    console.log('SUCCESS!');
            }).fail(function(response){
                alert('something went wrong...');
            })
           console.log(parseInt(x + y));
        }
        function showCalcHistory () {
        $.ajax({
            type: "GET",
            url: '/number'
          }).done(function(response){
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
        //   }
          