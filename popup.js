// remeber to add <script src="https://code.jquery.com/jquery-3.1.1.js"></script>

$(function() {
  $("#opennews").click(function() {
    $("#newspopup").removeClass("display");
    $("#closenews").removeClass("display");
    $("#opennews").addClass("display");
    $("#newstext").addClass("display");
  });
});
$(function() {
  $("#closenews").click(function() {
    $("#newspopup").addClass("display");
    $("#closenews").addClass("display");
    $("#opennews").removeClass("display");
    $("#newstext").removeClass("display");
  });
});
