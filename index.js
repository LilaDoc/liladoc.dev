

$( ".Article" ).on( "mouseover", function() {
    $(this).find(".ArticleContent").removeClass("hidden");
    

  } );

$(".Article").on("mouseleave", function() {
    $(this).find(".ArticleContent").addClass("hidden");
});   