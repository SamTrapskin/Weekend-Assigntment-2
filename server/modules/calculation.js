let calculation = function (numsToCalculate){
    let answer = 0;
    if( numsToCalculate.typeIn === '+' ){
        answer = Number( numberOne) + Number( numberTwo );
    }
    else if( numsToCalculate.typeIn === '*' ){
        answer = Number( numberOne ) * Number( numberTwo);
    } // end *
    else if( numsToCalculate.typeIn === '/' ){
        answer = Number( numberOne) / Number( numberTwo);
    } //end /
    else {
        answer = Number( numberOne) + Number( numberTwo );
    } // end default +
    return answer;    
} // end calculate

  
    module.exports = calculation;


