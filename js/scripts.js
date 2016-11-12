// begin business logic
function Traveler(travelPlace, travelMode, travelAccom, travelAct, traveler) {
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
  this.travelerUser = [];
}

Traveler.prototype.addMode = function() {
  var checkRoute = " Check route for adverse conditions and closures";
  var checkTicket = " Reconfirm ticket & check-in procedure with ticket provider";
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

    if ($('#who input.adult:checkbox:checked').length <= 0){
      alert("Come back when you are older or can talk.")
    } else {
      $(".pageOne").hide();

      var continent = $("option:selected").attr("class");
      console.log(continent);

      if (continent === "AS") {
        $(".turb").show();
        $(".typ").show();
        $(".jbe").show();
        $("div#background2").css("background-image", "url(img/AS.jpg)");
      } else if (continent === "AF") {
          $(".typ").show();
          $("div#background2").css("background-image", "url(img/AF.jpg)");
      } else if (continent === "SA") {
          $(".typ").show();
          $("div#background2").css("background-image", "url(img/SA.jpg)");
      } else if (continent === "OC") {
          $(".typ").show();
          $("div#background2").css("background-image", "url(img/OC.jpg)");
      } else if (continent === "AN") {
        $("div#background2").css("background-image", "url(img/AN.jpg)");
      } else if (continent === "EU") {
        $("div#background2").css("background-image", "url(img/EU.jpg)");
      } else if (continent === "NA") {
        $("div#background2").css("background-image", "url(img/NA.jpg)");
      }

      newTraveler.addMode();
      newTraveler.addAccom();

      if(newTraveler.travelerUser.length != 0) {
        $(".pageTwo").show();
        $("#changeCheck").show();
      }

      $("#sentenceUser").text(newTraveler.travelerUser + " traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);

      if (newTraveler.travelPlace === ("Afghanistan" || "Turkey" || "Egypt"  || "Saudi Arabia" || "Syrian Arab Republic" || "Iran" || "Iraq")) {
        $("div#background2").css("background-image", "url(img/ME.jpg)");
      } else if (newTraveler.travelPlace === "Japan") {
        $("div#background2").css("background-image", "url(img/JP.jpg)");
      } else if (newTraveler.travelPlace === "Korea") {
        $("div#background2").css("background-image", "url(img/KR.jpg)");
      } else if (newTraveler.travelPlace === ("Thailand" || "Myanmar" || "Lao")) {
        $("div#background2").css("background-image", "url(img/TH.jpg)");
      } else if (newTraveler.travelPlace === "Cameroon") {
        $("div#background2").css("background-image", "url(img/CR.jpg)");
      }

    };
  });




   $("form.multiselect-tp").submit(function(event) {
     event.preventDefault();
     var tpCheckbox = $(".tp").val();
     $("#list-tp").append("<br><label class='appendCheckbox'><input type='checkbox' class='custom' value=''><span>" + " " + tpCheckbox + "</span></label>");
     $(".tp").val("");
   });

   $("form.multiselect-hp").submit(function(event) {
     event.preventDefault();
      var hpCheckbox = $(".hp").val();
     $("#list-hp").append("<label class='appendCheckbox'><input type='checkbox' class='custom' value=''/><span>" + " " + hpCheckbox + "</span></label><br>");
     $(".hp").val("");
   });

  $("form.multiselect-v").submit(function(event) {
    event.preventDefault();
    var vCheckbox = $(".v").val();
    $("#list-v").append("<br><label class='appendCheckbox'><input type='checkbox' class='custom' value=''/><span>" + " " + vCheckbox + "</span></label>");
    $(".v").val("");
  });

  $("form.multiselect-dc").submit(function(event) {
    event.preventDefault();
    var dcCheckbox = $(".dc").val();
    $("#list-dc").append("<label class='appendCheckbox'><input type='checkbox' class='custom' value=''><span>" + " " + dcCheckbox + "</span></label><br>");
    $(".dc").val("");
  });

  $("form.multiselect-mc").submit(function(event) {
    event.preventDefault();
     var mcCheckbox = $(".mc").val();
    $("#list-mc").append("<label class='appendCheckbox'><input type='checkbox' class='custom' value=''/><span>" + " " + mcCheckbox + "</span></label><br>");
    $(".mc").val("");
  });

  $("form.multiselect-bpc").submit(function(event) {
    event.preventDefault();
    var bpcCheckbox = $(".bpc").val();
    $("#list-bpc").append("<label class='appendCheckbox'><input type='checkbox' class='custom' value=''><span>" + " " + bpcCheckbox + "</span></label><br>");
    $(".bpc").val("");
  });

  $("form.multiselect-ac").submit(function(event) {
    event.preventDefault();
     var acCheckbox = $(".ac").val();
    $("#list-ac").append("<label class='appendCheckbox'><input type='checkbox' class='custom' value=''/><span>" + " " + acCheckbox + "</span></label><br>");
    $(".ac").val("");
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


  $("#changeCheck").click(function(event) {
    $(".pageOne").toggle();
    $(".pageTwo").toggle();
    $("#changeCheck").hide();
    $(".appendCheckbox").hide();
  });
});
