// Note when this program was originally written, it was connected to a user named thebuddha3. Since then, that user no longer exists.
// This program had to be changed to remove all references to that user. As a quick note, thebuddha3 was associated with
// promise5, promise6, and ourContent3

$(document).ready(function() {

  //determine if kaitlyn is online or not
  //ajax call #1 get kaitlyn status
  var kaitlynOnline = "";
  var kaitlynStatus = "";
  var kaitlynLogoLocation = "";

  var promise1 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/kaitlyn/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data1A) {
      //if stream status is null, that means the user is offline
      if (data1A["stream"] === null) {
        kaitlynOnline = false;
      } else {
        kaitlynOnline = true;
      }
    }
  }); //end of ajax 1a. end of promise 1

  //get kaitlyn's status and logo location
  var promise2 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/kaitlyn/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data) {
      //get kaitlyn's logo URL
      kaitlynLogoLocation = data["logo"];
      //get kaitlyn's status
      kaitlynStatus = data["status"];
    }
  }); //end of ajax 1b. end of promise 2

  //determine if freecodecamp is online or not
  var freecodecampOnline = "";
  var freecodecampStatus = "";
  var freecodecampLogoLocation = "";

  var promise3 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/freecodecamp/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(dataB) {
      //if stream status is null, that means the user is offline
      if (dataB["stream"] === null) {
        freecodecampOnline = false;
      } else {
        freecodecampOnline = true;
      }
    }
  }); //end of ajax 2a. End of promise 3

  //get fcc's status and logo location
  var promise4 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/freecodecamp/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data2) {
      //get freecodecamp's logo URL
      freecodecampLogoLocation = data2["logo"];

      //get freecodecamp's status
      freecodecampStatus = data2["status"];
    }
  }); //end of ajax 2b. End of promise 4

  // //determine if thebuddha3 is online or not
  // var thebuddha3Online = "";
  // var thebuddha3Status = "";
  // var thebuddha3LogoLocation = "";
  //
  // var promise5 = $.ajax({
  //   url: "https://api.twitch.tv/kraken/streams/thebuddha3/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
  //   dataType: "jsonp",
  //   success: function(dataC) {
  //     //if stream status is null, that means the user is offline
  //     if (dataC["stream"] === null) {
  //       thebuddha3Online = false;
  //     } else {
  //       thebuddha3Online = true;
  //     }
  //   }
  // }); //end of ajax 3a. End of promise 5
  //
  //
  // //get thebuddha3's status and logo location
  // var promise6 = $.ajax({
  //   url: "https://api.twitch.tv/kraken/channels/thebuddha3/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
  //   dataType: "jsonp",
  //   success: function(data3) {
  //     //get thebuddha3's logo URL
  //     thebuddha3LogoLocation = data3["logo"];
  //
  //     //get thebuddha3's status
  //     thebuddha3Status = data3["status"];
  //   }
  // }); //end of ajax 3b. End of promise 6

  //determine if esl_sc2 is online or not
  var esl_sc2Online = "";
  var esl_sc2Status = "";
  var esl_sc2LogoLocation = "";

  var promise7 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/esl_sc2/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(dataD) {
      //if stream status is null, that means the user is offline
      if (dataD["stream"] === null) {
        esl_sc2Online = false;
      } else {
        esl_sc2Online = true;
      }
    }
  }); //end of ajax 4a. End of promise 7

  //get esl_sc2's status and logo location
  var promise8 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/esl_sc2/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data4) {
      //get esl_sc2's logo URL
      esl_sc2LogoLocation = data4["logo"];

      //get esl_sc2's status
      esl_sc2Status = data4["status"];
    }
  }); //end of ajax 4b. End of promise 8


  //determine if cretetion is online or not
  var cretetionOnline = "";
  var cretetionStatus = "";
  var cretetionLogoLocation = "";

  var promise9 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/cretetion/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(dataE) {
      //if stream status is null, that means the user is offline
      if (dataE["stream"] === null) {
        cretetionOnline = false;
      } else {
        cretetionOnline = true;
      }
    }
  }); //end of ajax 5a. End of promise 9

  //get cretetion's status and logo location
  var promise10 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/cretetion/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data5) {
      //get esl_sc2's logo URL
      cretetionLogoLocation = data5["logo"];

      //get esl_sc2's status
      cretetionStatus = data5["status"];
    }
  }); //end of ajax 5b. End of promise 10

  var ogamingsc2Online = "";
  var ogamingsc2Status = "";
  var ogamingsc2LogoLocation = "";

  //determine if ogamingsc2 is online or not
  var promise11 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/ogamingsc2/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(dataF) {
      //if stream status is null, that means the user is offline
      if (dataF["stream"] === null) {
        ogamingsc2Online = false;
      } else {
        ogamingsc2Online = true;
      }
    }
  }); //end of ajax 6a. End of promise 11

  //get ogamingsc2's status and logo location
  var promise12 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/ogamingsc2/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data6) {
      //get ogamingsc2's logo URL
      ogamingsc2LogoLocation = data6["logo"];

      //get ogamingsc2's status
      ogamingsc2Status = data6["status"];
    }
  }); //end of ajax 6b. End of promise 12

  //determine if tsm_dyrus is online or not
  //https://www.twitch.tv/tsm_dyrus
  var tsm_dyrusOnline = "";
  var tsm_dyrusStatus = "";
  var tsm_dyrusLogoLocation = "";
  var promise13 = $.ajax({
    url: "https://api.twitch.tv/kraken/streams/tsm_dyrus/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(dataG) {
      //if stream status is null, that means the user is offline
      if (dataG["stream"] === null) {
        tsm_dyrusOnline = false;
      } else {
        tsm_dyrusOnline = true;
      }
    }
  }); //end of ajax 7a. End of promise 13

  //get tsm_dyrus's status and logo location
  var promise14 = $.ajax({
    url: "https://api.twitch.tv/kraken/channels/tsm_dyrus/?client_id=il34xta96fbc6y37enbp1nedjjof0x",
    dataType: "jsonp",
    success: function(data7) {
      //get tsm_dyrus's logo URL
      tsm_dyrusLogoLocation = data7["logo"];

      //get tsm_dyrus's status
      tsm_dyrusStatus = data7["status"];
    }
  }); //end of ajax 7b. End of promise 14


  //function that makes sure that we don't duplicate data and that after ever click of a different button, results from the last click are "forgotten"
  function clearAllData() {
    $("#ourContent1").html("").css("background-color,transparent");
    $("#ourContent2").html("").css("background-color,transparent");
    $("#ourContent3").html("").css("background-color,transparent");
    $("#ourContent4").html("").css("background-color,transparent");
    $("#ourContent5").html("").css("background-color,transparent");
    $("#ourContent6").html("").css("background-color,transparent");
    $("#ourContent7").html("").css("background-color,transparent");

    $("#ourContent1").empty();
    $("#ourContent2").empty();
    $("#ourContent3").empty();
    $("#ourContent4").empty();
    $("#ourContent5").empty();
    $("#ourContent6").empty();
    $("#ourContent7").empty();

    $("#ourContent1").show();
    $("#ourContent2").show();
    $("#ourContent3").show();
    $("#ourContent4").show();
    $("#ourContent5").show();
    $("#ourContent6").show();
    $("#ourContent7").show();
  }

  //for some reason I must call this before showAllUsers()
  $("#allUsersButton").click(showAllUsers);

  function showAllUsers() {
    clearAllData();

    //.when calls all the ajax's and .then does a function in the order I want. If I didn't have .when and .then, often I could not predict which items would go in what order if I had multiple ajax calls.
    // $.when(promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
    $.when(promise1, promise2, promise3, promise4, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
      //************************************************************************************
      //now for kaitlyn
      if ($(window).width() > 800) {
        $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (kaitlynOnline == true) {
        $("#ourContent1").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/kaitlyn' target='_blank'> kaitlyn is online</a> </strong>");
        if ($(window).width() > 800) {
          $("#ourContent1").append(kaitlynStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent1").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent1").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/kaitlyn' target='_blank'> kaitlyn</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent1").append(kaitlynStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent1").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent1").css("text-align", "center");

      //************************************************************************************
      //now for freecodecamp
      if ($(window).width() > 800) {
        $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (freecodecampOnline == true) {
        $("#ourContent2").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/freecodecamp' target='_blank'> freecodecamp is online</a> </strong>");
        if ($(window).width() > 800) {
          $("#ourContent2").append(freecodecampStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent2").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent2").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/freecodecamp' target='_blank'> freecodecamp</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent2").append(freecodecampStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent2").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent2").css("text-align", "center");

      //************************************************************************************
      //now for thebuddha3
      // if ($(window).width() > 800) {
      //   $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      // } else {
      //   $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      // }
      // if (thebuddha3Online == true) {
      //   $("#ourContent3").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/thebuddha3' target='_blank'> thebuddha3</a> is online </strong>");
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append(thebuddha3Status).css("background-color", "LightGreen");
      //   } else {
      //     $("#ourContent3").css("background-color", "LightGreen");
      //   }
      // } else {
      //   $("#ourContent3").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/thebuddha3' target='_blank'> thebuddha3</a> is offline </strong>");
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append(thebuddha3Status).css("background-color", "#FF7B77");
      //   } else {
      //     $("#ourContent3").css("background-color", "#FF7B77");
      //   }
      // }
      // $("#ourContent3").css("text-align", "center");
      //************************************************************************************
      //now for esl_sc2
      if ($(window).width() > 800) {
        $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (esl_sc2Online == true) {
        $("#ourContent4").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/esl_sc2' target='_blank'> esl_sc2</a> is online </strong>");
        if ($(window).width() > 800) {
          $("#ourContent4").append(esl_sc2Status).css("background-color", "LightGreen");
        } else {
          $("#ourContent4").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent4").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/esl_sc2' target='_blank'> esl_sc2</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent4").append(esl_sc2Status).css("background-color", "#FF7B77");
        } else {
          $("#ourContent4").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent4").css("text-align", "center");

      //************************************************************************************
      //now for cretetion
      if ($(window).width() > 800) {
        $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (cretetionOnline == true) {
        $("#ourContent5").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/cretetion' target='_blank'> cretetion is online</a> </strong>");
        if ($(window).width() > 800) {
          $("#ourContent5").append(cretetionStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent5").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent5").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/cretetion' target='_blank'> cretetion</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent5").append(cretetionStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent5").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent5").css("text-align", "center");

      //************************************************************************************
      //now for ogamingsc2
      if ($(window).width() > 800) {
        $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (ogamingsc2Online == true) {
        $("#ourContent6").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/ogamingsc2' target='_blank'> ogamingsc2</a> is online </strong>");
        if ($(window).width() > 800) {
          $("#ourContent6").append(ogamingsc2Status).css("background-color", "LightGreen");
        } else {
          $("#ourContent6").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent6").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/ogamingsc2' target='_blank'> ogamingsc2</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent6").append(ogamingsc2Status).css("background-color", "#FF7B77");
        } else {
          $("#ourContent6").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent6").css("text-align", "center");
      //************************************************************************************
      //now for tsm_dyrus
      if ($(window).width() > 800) {
        $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='80' align='center'>"); //.css("align","center");
      } else {
        $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='40' align='left'>"); //.css("align","left");
      }
      if (tsm_dyrusOnline == true) {
        $("#ourContent7").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/tsm_dyrus' target='_blank'> tsm_dyrus is online</a> </strong>");
        if ($(window).width() > 800) {
          $("#ourContent7").append(tsm_dyrusStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent7").css("background-color", "LightGreen");
        }
      } else {
        $("#ourContent7").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/tsm_dyrus' target='_blank'> tsm_dyrus</a> is offline </strong>");
        if ($(window).width() > 800) {
          $("#ourContent7").append(tsm_dyrusStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent7").css("background-color", "#FF7B77");
        }
      }
      $("#ourContent7").css("text-align", "center");
    }); //end of .when
  } //end of showAllUsers()


  $("#onlineUsersButton").click(onlyOnlineUsers);

  function onlyOnlineUsers() {
    clearAllData();

    //.when calls all the ajax's and .then does a function in the order I want. If I didn't have .when and .then, often I could not predict which items would go in what order if I had multiple ajax calls.
    // $.when(promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
    $.when(promise1, promise2, promise3, promise4, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
      //************************************************************************************

      //#1 kaitlyn
      //************************************************************************************
      if (kaitlynOnline == true) {

        if ($(window).width() > 800) {
          $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent1").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/kaitlyn' target='_blank'> kaitlyn</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent1").append(kaitlynStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent1").css("background-color", "LightGreen");
        }
        $("#ourContent1").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent1").hide();
      }
      //*************************************************************************************

      //#2 freecodecamp
      //************************************************************************************
      if (freecodecampOnline == true) {

        if ($(window).width() > 800) {
          $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent2").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/freecodecamp' target='_blank'> freecodecamp</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent2").append(freecodecampStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent2").css("background-color", "LightGreen");
        }
        $("#ourContent2").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent2").hide();
      }
      //*************************************************************************************

      //#3 thebuddha3
      //************************************************************************************
      // if (thebuddha3Online == true) {
      //
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='80' align='center'>");
      //   } else {
      //     $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='40' align='left'>");
      //   }
      //
      //   $("#ourContent3").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/thebuddha3' target='_blank'> thebuddha3</a> is online </strong>");
      //
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append(thebuddha3Status).css("background-color", "LightGreen");
      //   } else {
      //     $("#ourContent3").css("background-color", "LightGreen");
      //   }
      //   $("#ourContent3").css("text-align", "center");
      // }
      // //hide element since user is offline
      // else {
      //   $("#ourContent3").hide();
      // }
      //*************************************************************************************

      //#4 esl_sc2
      //************************************************************************************
      if (esl_sc2Online == true) {

        if ($(window).width() > 800) {
          $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent4").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/esl_sc2' target='_blank'> esl_sc2</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent4").append(esl_sc2Status).css("background-color", "LightGreen");
        } else {
          $("#ourContent4").css("background-color", "LightGreen");
        }
        $("#ourContent4").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent4").hide();
      }
      //*************************************************************************************

      //#5 cretetion
      //************************************************************************************
      if (cretetionOnline == true) {

        if ($(window).width() > 800) {
          $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent5").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/cretetion' target='_blank'> cretetion</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent5").append(cretetionStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent5").css("background-color", "LightGreen");
        }
        $("#ourContent5").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent5").hide();
      }
      //*************************************************************************************

      //#6 ogamingsc2
      //************************************************************************************
      if (ogamingsc2Online == true) {

        if ($(window).width() > 800) {
          $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent6").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/ogamingsc2' target='_blank'> ogamingsc2</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent6").append(ogamingsc2Status).css("background-color", "LightGreen");
        } else {
          $("#ourContent6").css("background-color", "LightGreen");
        }
        $("#ourContent6").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent6").hide();
      }
      //*************************************************************************************

      //#7 tsm_dyrus
      //************************************************************************************
      if (tsm_dyrusOnline == true) {

        if ($(window).width() > 800) {
          $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent7").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/tsm_dyrus' target='_blank'> tsm_dyrus</a> is online </strong>");

        if ($(window).width() > 800) {
          $("#ourContent7").append(tsm_dyrusStatus).css("background-color", "LightGreen");
        } else {
          $("#ourContent7").css("background-color", "LightGreen");
        }
        $("#ourContent7").css("text-align", "center");
      }
      //hide element since user is offline
      else {
        $("#ourContent7").hide();
      }
      //*************************************************************************************
    }); //end of .when
  } //end of onlyOnlineUsers()

  $("#offlineUsersButton").click(onlyOfflineUsers);

  //onlyOfflineUsers() and onlyOnlineUsers() have only a few differences
  function onlyOfflineUsers() {
    // $.when(promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
    $.when(promise1, promise2, promise3, promise4, promise7, promise8, promise8, promise10, promise11, promise12, promise13, promise14).then(function() {
      //************************************************************************************
      clearAllData();

      //#1 kaitlyn
      //************************************************************************************
      if (kaitlynOnline == false) {

        if ($(window).width() > 800) {
          $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent1").append("<img src='" + kaitlynLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent1").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/kaitlyn' target='_blank'> kaitlyn</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent1").append(kaitlynStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent1").css("background-color", "#FF7B77");
        }
        $("#ourContent1").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent1").hide();
      }
      //*************************************************************************************

      //#2 freecodecamp
      //************************************************************************************
      if (freecodecampOnline == false) {

        if ($(window).width() > 800) {
          $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent2").append("<img src='" + freecodecampLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent2").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/freecodecamp' target='_blank'> freecodecamp</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent2").append(freecodecampStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent2").css("background-color", "#FF7B77");
        }
        $("#ourContent2").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent2").hide();
      }
      //*************************************************************************************

      //#3 thebuddha3
      //************************************************************************************
      // if (thebuddha3Online == false) {
      //
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='80' align='center'>");
      //   } else {
      //     $("#ourContent3").append("<img src='" + thebuddha3LogoLocation + "' class='img-circle' width='40' align='left'>");
      //   }
      //
      //   $("#ourContent3").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/thebuddha3' target='_blank'> thebuddha3</a> is offline </strong>");
      //
      //   if ($(window).width() > 800) {
      //     $("#ourContent3").append(thebuddha3Status).css("background-color", "#FF7B77");
      //   } else {
      //     $("#ourContent3").css("background-color", "#FF7B77");
      //   }
      //   $("#ourContent3").css("text-align", "center");
      // }
      // //hide element since user is online
      // else {
      //   $("#ourContent3").hide();
      // }
      //*************************************************************************************

      //#4 esl_sc2
      //************************************************************************************
      if (esl_sc2Online == false) {

        if ($(window).width() > 800) {
          $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent4").append("<img src='" + esl_sc2LogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent4").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/esl_sc2' target='_blank'> esl_sc2</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent4").append(esl_sc2Status).css("background-color", "#FF7B77");
        } else {
          $("#ourContent4").css("background-color", "#FF7B77");
        }
        $("#ourContent4").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent4").hide();
      }
      //*************************************************************************************

      //#5 cretetion
      //************************************************************************************
      if (cretetionOnline == false) {

        if ($(window).width() > 800) {
          $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent5").append("<img src='" + cretetionLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent5").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/cretetion' target='_blank'> cretetion</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent5").append(cretetionStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent5").css("background-color", "#FF7B77");
        }
        $("#ourContent5").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent5").hide();
      }
      //*************************************************************************************

      //#6 ogamingsc2
      //************************************************************************************
      if (ogamingsc2Online == false) {

        if ($(window).width() > 800) {
          $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent6").append("<img src='" + ogamingsc2LogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent6").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/ogamingsc2' target='_blank'> ogamingsc2</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent6").append(ogamingsc2Status).css("background-color", "#FF7B77");
        } else {
          $("#ourContent6").css("background-color", "#FF7B77");
        }
        $("#ourContent6").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent6").hide();
      }
      //*************************************************************************************

      //#7 tsm_dyrus
      //************************************************************************************
      if (tsm_dyrusOnline == false) {

        if ($(window).width() > 800) {
          $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='80' align='center'>");
        } else {
          $("#ourContent7").append("<img src='" + tsm_dyrusLogoLocation + "' class='img-circle' width='40' align='left'>");
        }

        $("#ourContent7").append("<strong>&nbsp; &nbsp;<a href='https://www.twitch.tv/tsm_dyrus' target='_blank'> tsm_dyrus</a> is offline </strong>");

        if ($(window).width() > 800) {
          $("#ourContent7").append(tsm_dyrusStatus).css("background-color", "#FF7B77");
        } else {
          $("#ourContent7").css("background-color", "#FF7B77");
        }
        $("#ourContent7").css("text-align", "center");
      }
      //hide element since user is online
      else {
        $("#ourContent7").hide();
      }
      //*************************************************************************************
    }); //end of .when
  } //end of onlyOfflineUsers()

}); //end of document.ready
