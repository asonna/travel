// begin business logic
function Traveler(travelPlace, travelMode, travelAccom, travelAct, traveler) {
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
  this.travelerUser = [];
}

Traveler.prototype.addMode = function() {
  var checkRoute = "Check route for adverse conditions and closures";
  var checkTicket = "Reconfirm ticket & check-in procedure with ticket provider";
  var travelModeArray = ["Plane", "Train", "Boat", "Car", "Bus"];
  for(var i = 0; i < travelModeArray.length; i++)  {
   if (this.travelMode === travelModeArray[3]) {
     $("#modeOne").text(checkRoute);
     $("#modeTwo").text("Fill gas & oil, get safety check");
    } else if (this.travelMode === travelModeArray[i]) {
      $("#modeOne").text(checkRoute);
      $("#modeTwo").text(checkTicket);
    }
  }
}

Traveler.prototype.addAccom = function() {
  var travelAccomArray = ["Hotel", "Hostel/Guesthouse", "Camping", "Friends/Relatives"];
  var bookConfirm = " Book at site and confirm check-in time"
  var convert = " Ask about converters for electronics-voltage and/or plugs"
  for(var i = 0; i < travelAccomArray.length; i++)  {
    if (this.travelAccom === travelAccomArray[0] || this.travelAccom === travelAccomArray[1]) {
      $("#accOne").text(bookConfirm);
      $("#accTwo").text(convert);
    } else if (this.travelAccom === travelAccomArray[2]) {
      $("#accOne").text(bookConfirm);
      $("#accTwo").text(" Sleeping bag, air mattress & pillow, patch kit");
    } else if (this.travelAccom === travelAccomArray[3]) {
      $("#accOne").text(" Confirm time and method of arrival");
      $("#accTwo").text(" Confirm anticipated sleeping and eating arrangements");
    }
  }
}

// Travel.prototype.vaccination = function() {
//
//   contArray
//
//   for(var i=0; i < contArray.length; i++) {
//     if (this.cont === contArray.length[i]) {
//       $(".vaccination-hide").show();
//     }
//   }
// }

// Front End

$(document).ready(function() {
  $("form#userTravelType").submit(function(event){
    event.preventDefault();

    // $(".pageOne").hide();

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


    if(newTraveler.travelerUser.length != 0) {
      $(".pageTwo").show();
    }

    $("#sentenceUser").text(newTraveler.travelerUser + " traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);

 });

 $(function() {
   $("form.multiselect-tp").submit(function(event) {
     event.preventDefault();
     var tpCheckbox = $(".tp").val();
     $("#list-tp").append("<label><input type='checkbox' class='custom' value=''><span>" + tpCheckbox + "</span></label><br>");
     $(".tp").val("");
   });
 });
 $(function() {
   $("form.multiselect-hp").submit(function(event) {
     event.preventDefault();
      var hpCheckbox = $(".hp").val();
     $("#list-hp").append("<label><input type='checkbox' class='custom' value=''/><span>" + hpCheckbox + "</span></label><br>");
     $(".hp").val("");
   });
 });
  $(function() {
    $("form.multiselect-v").submit(function(event) {
      event.preventDefault();
      var vCheckbox = $(".v").val();
      $("#list-v").append("<label><input type='checkbox' class='custom' value=''/><span>" + vCheckbox + "</span></label><br>");
      $(".v").val("");
    });
  });

  $(function(){
    $('input:checkbox').on('change',function(){
      if($(this).is(':checked')){
          $(this).siblings('span').css('text-decoration','line-through');
      }else{
          $(this).siblings('span').css('text-decoration','none');
      }
    });
  });
});
