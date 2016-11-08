
// begin business logic


function Traveler(travelPlace, traveler, travelMode, travelAccom, travelAct) {
  this.travelPlace = travelPlace;
  this.travelerUser = traveler;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
}


// Traveler.prototype.userInput() = function() {
//
// }



// Front End

$(document).ready(function() {
  $("button.disable").prop("disabled", true);
  $(document).on("click", ":submit", function(e) {
    var where = $(".where option").val();
    // var who = $(".who button").val()
    var how = $(".how button").val();
    var staying = $(".staying button").val();
    var activities = $(".activities button").val();
    var who = $("button#adult").val();
    // var how = $(this).val();
    // var staying = $(this).val();
    // var activities = $(this).val();

    // var how = $("button#adult").val();
    // var staying = $("button#adult").val();
    // var activities = $("button#adult").val();
    //
    var newTraveler = new Traveler(where, who, how, staying, activities);

    // $("button").each(function() {
    //   var how = $(this).val();
    //   newTraveler.travelerMode.push(how);
    // });
    //
    // $("button").each(function() {
    //   var staying = $(this).val();
    //   newTraveler.travelerAccom.push(staying);
    // });
    //
    // $("button").val().each(function() {
    //   var activities = $(this).val();
    //   newTraveler.travelAct.push(activities);
    // });
    console.log(newTraveler);
    $("ul.output-list").append("<li>" + newTraveler.travelerUser + "</li>" + "<li>" + newTraveler.travelPlace + "</li>" + "<li>" + newTraveler.travelMode + "</li>" + "<li>" + newTraveler.travelAccom + "</li>" + "<li>" + newTraveler.travelAct + "</li>");
  });

});
