function Traveler(traveler, travelPlace, travelMode, travelAccom, travelAct) {
  this.travelerUser = [];
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
}

// Traveler.prototype.userInput() = function() {
//
// }

// Traveler.prototype.generateUserChecklist = function() {
//   if(this.travelerUser.length = 0) {
//     (".multiselect").show();
//   }
// }

// Traveler.prototype.generateChecklist() = function() {
//   for(var index = 0; index < travelMode.length; index++)
//     if(travelMode === "Plane")
// }

$(document).ready(function() {
  $("#checklist").click(function(event) {
  event.preventDefault();

  alert("hello world");

  var newTraveler = new Traveler(newTraveler, newTravelPlace, newTravelMode, newTravelAccom, newTravelAct);

  var newTravelerUser = [];
  var newTravelPlace = "";
  var newTravelMode = [];
  var newTravelAccom = [];
  var newTravelAct = [];

  var newGenerateUserChecklist = Traveler.generateUserChecklist;
    if(newTravelerUser.length === 0) {
      $(".multiselect").show();
    }


  });
});
