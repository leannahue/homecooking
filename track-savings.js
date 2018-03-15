var items = {Bike: 400, Car: 800};

$(document).ready(function() {
  var goalname = '';
  var goalmoney = 0;


  $('#modal-submit').click(function() {
    goalmoney = $('#monetary_input').val();
    goalname =  $('#wishlist_input').val();
    goalname= goalname.substr(0,1).toUpperCase() + goalname.substr(1).toLowerCase();
    if(!goalname) {
      goalname = "Monetary";
    }


    if(!goalmoney && goalname) {
      var preset = items[goalname];
      if(preset) {
        goalmoney = items[goalname];
      }
    }
    console.log('goalmoney is: ' + goalmoney);
    $('#mymodal').modal('hide');
    // $('#progressshiz').css({visibility: "visible", position: "relative"});
    $('#goalnames').html(goalname + ": ");
    $('#goalmoneys').html("your goal for $" + goalmoney);
    var prc = Math.round(160.00 * 100 / goalmoney);
    if(prc > 100) {
      prc = 100;
    }
    $('#goalpercentage').html(prc + "%");
    $('#dawae').css({width: prc + "%"})

    if(goalmoney === 0) {
      $('#button-label').html("Set a goal!")
    } else {
      console.log(goalmoney);
      $('#button-label').html("Edit goal!")
    }

  })


})


var uparrow = false;

function showdropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
    if (uparrow) {
      uparrow= false;
      document.getElementById("dropdownbtn").innerHTML= "keyboard_arrow_down" ;
    }
    else{
      uparrow = true;
      document.getElementById("dropdownbtn").innerHTML= "keyboard_arrow_up" ;
    }

}
