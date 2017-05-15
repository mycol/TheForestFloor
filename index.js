$(document).ready(function() {
  var interval = 1;
  var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  var newHTML = "";
  var logoArray = $("#ascii-logo").html().split("");
  for (var i = 0; i < logoArray.length; i++) {
    newHTML += "<span class='ascii-logo-cell'>" + logoArray[i] + "</span>";
  }

  $("#ascii-logo").html(newHTML);

  setInterval(function() {
    var randomCharIdx = Math.floor(Math.random() * ($("#ascii-logo > span.ascii-logo-cell").length));
    var randomColor = colors[Math.floor(Math.random() * (colors.length))];

    $($("#ascii-logo > span.ascii-logo-cell")[randomCharIdx])
      .css("color", randomColor)
      .css("font-weight", "bold");

  }, interval);
});
