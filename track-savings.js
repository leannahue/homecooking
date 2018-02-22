var FUCK = {Bike: 400, car: 800};

$(document).ready(function() {
  var goalname = '';
  var goalmoney = 0;

  $('#modal-submit').click(function() {
    goalmoney = $('#monetary_input').val();
    goalname = $('#wishlist_input').val();
    if(!goalname) {
      goalname = "Monetary: ";
    }
    if(!goalmoney && goalname) {
      var preset = FUCK[goalname];
      if(preset) {
        goalmoney = FUCK[goalname];
      }
    }
    console.log('goalmoney is: ' + goalmoney);
    $('#mymodal').modal('hide');
    $('#progressshiz').css({visibility: "visible"})
    $('#goalnames').html(goalname + ": ");
    $('#goalmoneys').html("of $" + goalmoney);
    var prc = Math.round(128.67 * 100 / goalmoney);
    if(prc > 100) {
      prc = 100;
    }
    $('#goalpercentage').html(prc);
    $('#dawae').css({width: prc + "%"})
  })

})


function showdropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
}


