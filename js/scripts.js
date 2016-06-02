// #number
//
// jquery animate::rotate(number)
//
// #declare num variable
//
// #condintional to add or substract for nums intial value according to user input
//
// #conditional to test if num range is within a certain range
//
// #optional jqury animation using num as unit

$(function(){
  // $('form').submit(function(event) {});
  $('form').submit(function(event) {
    event.preventDefault();

    var guns = parseInt($('#gun-control').val());
    var war = parseInt($('#war').val());
    var drugs = parseInt($('#drug-control').val());

    var result = guns + war + drugs;

    if (result >= -6 && result <= -3){
      alert(result);
    }
    else if (result > -3 && result <0){
      alert(result);
    }
    else if (result === 0){
      alert(result);
    }
    else if (result > 0 && result <= 3){
      alert(result);
    }
    else if (result > 3 && result <= 6){
      alert(result);
    }


  });
});
