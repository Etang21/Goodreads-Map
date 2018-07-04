console.log("The JS is running!")
$(function() {
  $(".demographics").each( function (index, element) {
    console.log(element.type)
    console.log("Finding demographics for " + element.id);
    $.ajax({
      url: "/demographics?author_id=" + element.id,
      cache: false,
      success: function(html){
        element.append(html);
      }
    })
  })
})
