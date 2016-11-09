// begin business logic
function Traveler(travelPlace, travelMode, travelAccom, travelAct, traveler) {
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
  this.travelerUser = [];
}

Traveler.prototype.addMode = function() {
  var travelModeArray = ["Plane", "Train", "Boat", "Car", "Bus"];
  for(var i = 0; i < travelModeArray.length; i++)  {
    if (this.travelMode === travelModeArray[0]) {
      $("#modeOne").text("Fly hello");
      $("#modeTwo").text("Fly 2 hello");
    } else if (this.travelMode === travelModeArray[1]) {
      $("#modeOne").text("train hello");
      $("#modeTwo").text("train 2 hello");
    } else if (this.travelMode === travelModeArray[2]) {
      $("#modeOne").text("boat hello");
      $("#modeTwo").text("boat 2 hello");
    } else if (this.travelMode === travelModeArray[3]) {
      $("#modeOne").text("car hello");
      $("#modeTwo").text("car 2 hello");
    } else if (this.travelMode === travelModeArray[4]) {
      $("#modeOne").text("bus hello");
      $("#modeTwo").text("bus 2 hello");
    }
  }
}

Traveler.prototype.addAccom = function() {
  var travelAccomArray = ["Hotel", "Hostel/Guesthouse", "Camping", "Friends/Relatives"];
  for(var i = 0; i < travelAccomArray.length; i++)  {
    if (this.travelAccom === travelAccomArray[0]) {
      $("#accOne").text("Hotel hello");
      $("#accTwo").text("Hotel 2 hello");
    } else if (this.travelAccom === travelAccomArray[1]) {
      $("#accOne").text("Hostel hello");
      $("#accTwo").text("Hostel 2 hello");
    } else if (this.travelAccom === travelAccomArray[2]) {
      $("#accOne").text("Camp hello");
      $("#accTwo").text("Camp 2 hello");
    } else if (this.travelAccom === travelAccomArray[3]) {
      $("#accOne").text("Friend hello");
      $("#accTwo").text("Friend 2 hello");
    }
  }
}

Traveler.prototype.addAct = function() {
  var travelActArray = ["Sightseeing", "Outdoor Activities", "Dining", "Shopping"];
  for(var i = 0; i < travelActArray.length; i++)  {
    if (this.travelAct === travelActArray[0]) {
      $("#actOne").text("sight hello");
      $("#actTwo").text("sight 2 hello");
    } else if (this.travelAct === travelActArray[1]) {
      $("#actOne").text("outdoor hello");
      $("#actTwo").text("outdoor 2 hello");
    } else if (this.travelAct === travelActArray[2]) {
      $("#actOne").text("dining hello");
      $("#actTwo").text("dining 2 hello");
    } else if (this.travelAct === travelActArray[3]) {
      $("#actOne").text("shop hello");
      $("#actTwo").text("shop 2 hello");
    }
  }
}


// Front End

$(document).ready(function() {
  $("form#userTravelType").submit(function(event){
    event.preventDefault();

    var who = $('#who input:checkbox:checked').val();
    var where = $('#where').val();
    var how = $('#how input:radio:checked').val();
    var staying = $('#staying input:radio:checked').val();
    var activities = $('#activities input:radio:checked').val();

    var newTraveler = new Traveler(where, how, staying, activities);

    $('#who input:checkbox:checked').each(function() {
      who = $(this).val();
      newTraveler.travelerUser.push(who);
    });

    newTraveler.addMode();
    newTraveler.addAccom();
    newTraveler.addAct();

    // $(".pageOne").hide();

    if(newTraveler.travelerUser.length != 0) {
      $(".pageTwo").show();
    }


    console.log(newTraveler.travelerUser);
    console.log(newTraveler.travelMode);
    console.log(newTraveler.travelAccom);
    console.log(newTraveler.travelAct);

    $("#sentenceUser").text(newTraveler.travelerUser + " traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);
  //
  // });

  // $(function() {
  //   $("form.multiselect").submit(function(event) {
  //     event.preventDefault();
  //     $(".multiselect").append("<label><input type='checkbox' class='custom' value=''/><span> HelloWorld</span></label>");
  //   });
  // });

  // $(function(){
  //   $('input:checkbox').on('change',function(){
  //       if($(this).is(':checked')){
  //           $(this).siblings('span').css('text-decoration','line-through');
  //       }else{
  //           $(this).siblings('span').css('text-decoration','none');
  //       }
  //     };
  // };
  });
});
