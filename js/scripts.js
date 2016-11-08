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

// Traveler.prototype.generateChecklist = function() {
//   for(var index = 0; index < travelMode.length; index++)
//     if(newtravelMode === "Plane")
// }

$(document).ready(function() {
  $("#checklist").click(function(event) {
  event.preventDefault();

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


// $("body").append("<div>A div element with some text</div> ");
//

// $(".divcls").append("<div><label>New Checkbox</label>: <input type='checkbox' name='checktest' value='checkbox' >Checkbox</div>");
