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

var travelerSentencePage = [];

Traveler.prototype.travelerSentence = function () {
  for(var i = 0; i < this.travelerUser.length; i++) {
    travelerSentencePage += "this.travelerUser[i]";
    console.log(travelerSentencePage);
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

    // $(".outputs").show();
    $(".list-who").html(travelerList);
    $(".list-where").text(newTraveler.travelPlace);
    $(".list-how").text(newTraveler.travelMode);
    $(".list-staying").text(newTraveler.travelAccom);
    $(".list-activities").text(newTraveler.travelAct);
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

    alert(newTraveler.travelerUser.length);
    if(newTraveler.travelerUser.length != 0) {
      $(".pageTwo").show();
    }

    newTraveler.travelerList();
    newTraveler.travelerSentence();
    // console.log(newTraveler);
    $("#sentenceUser").text(newTraveler.travelerUser + " traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);

  });

  $(function() {
    $("#button2").submit(function() {
      $(".multiselect").append("<label><input type='checkbox' class='custom' value=''/><span> HelloWorld</span></label>");
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
