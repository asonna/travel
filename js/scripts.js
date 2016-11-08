
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


    $(".output").show();
    $(".list-who").append(travelerList);
    $(".list-where").text(newTraveler.travelPlace);
    $(".list-how").text(newTraveler.travelMode);
    $(".list-staying").text(newTraveler.travelAccom);
    $(".list-activities").text(newTraveler.travelAct);
  });

  //move to checklist.html page
  $("button#to-next-page").click(function(event) {
    event.preventDefault();

    window.location.href="https://www.google.com/";
    return false;

  

  })
});
