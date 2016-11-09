// begin business logic
function Traveler(travelPlace, travelMode, travelAccom, travelAct, traveler) {
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
  this.travelerUser = [];
}

var travelerList = "";

Traveler.prototype.travelerList = function() {
  for(var i = 0; i < this.travelerUser.length; i++) {
    travelerList += "<li>" + this.travelerUser[i]+ "</li>";
  }
}


Traveler.prototype.addMode = function() {
  var travelModeArray = ["Plane", "Train", "Boat", "Car", "Bus"];
  var travelModePlane = "plane";
  var travelModeTrain = "";
  var travelModeBoat = "";
  var travelModeCar = "";
  var travelModeBus = "";

  for(var i = 0; i < travelModeArray.length; i++)  {
    if (this.travelMode === travelModeArray[i]) {
      return travelModeArray[i];
    }
  }
}


// var travelerSentencePage = [];

// Traveler.prototype.travelerSentence = function () {
//   for(var i = 0; i < this.travelerUser.length; i++) {
//     travelerSentencePage += "this.travelerUser[i]";
//     console.log(travelerSentencePage);
//   }
// } <----- delete?

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

    newTraveler.travelerList();
    newTraveler.addMode();

    // $(".outputs").show();
    $(".list-who").html(travelerList);
    $(".list-where").text(newTraveler.travelPlace);
    $(".list-how").text(newTraveler.travelMode);
    $(".list-staying").text(newTraveler.travelAccom);
    $(".list-activities").text(newTraveler.travelAct);

    console.log(newTraveler.addMode());

    if (newTraveler.addMode() === "Plane") {
      return  $(".multiselect").append("<label><input type='checkbox' class='custom' value=''/><span> HelloWorld</span></label>");
    };

  });

  //move to checklist.html page
  $("#to-next-page").click(function() {
    var who = $('#who input:checkbox:checked').val();
    var where = $('#where').val();
    var how = $('#how input:radio:checked').val();
    var staying = $('#staying input:radio:checked').val();
    var activities = $('#activities input:radio:checked').val();

    var newTraveler = new Traveler(where, how, staying, activities);

    $('#who input:checkbox:checked').each(function() {
      who = $(this).val();
      newTraveler.travelerUser.push(who);
      return newTraveler.travelerUser;
    });
    $(".pageOne").hide();

    if(newTraveler.travelerUser.length != 0) {
      $(".pageTwo").show();
    }

    newTraveler.travelerList();
    // newTraveler.travelerSentence();
    // console.log(newTraveler);
    $("#sentenceUser").text(newTraveler.travelerUser + " traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);

  });

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
