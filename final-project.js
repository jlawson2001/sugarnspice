
$(document).ready(function() {
  $(".submit_button").on("click", function () {
    $(document).href("thankyou_forsigningup.html")
      });

var favorites = [" " , " " , " "];

  $(".favorites_button").on("click", function () {
    $(this).addClass("added_to_favorites");
    $(this).html("added to favorites!");
    var item = document.createTextNode(this.getAttribute("id"));
    console.log(item);
    $("favorites").append("item");
    console.log(favorites);

    });

  $(".added_to_favorites").on("click" , function () {
    $(this).removeClass("added_to_favorites");
    $(this).addClass("remove_from_favorites");
    $(this).html("add to favorites");

    });
  $(".submitted_comment").on("click" , function () {
    $(".unsubmitted_comment").html("thank you! an admin will review your comment and post it soon.");
    });
});
