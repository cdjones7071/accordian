$(".section").on("click", function(){
	console.log("clicked")
  $(".section").removeClass("active")
  $(this).addClass("active")
  $(this).highlight("active")
})

$(".header").hover(function() {               
      $(this).addClass('highlight');  
   }, function() {  
      $(this).removeClass('highlight');  
   });  

