$(document).ready(function () {
    function makeTimer() {
  
                   var endTime = new Date("29 September 2024 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        var now = new Date();
        now = (Date.parse(now) / 1000);
  
        var timeLeft = endTime - now;
  
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#days").html(days + "<span>days</span>");
        $("#hours").html(hours + "<span>hours</span>");
        $("#minutes").html(minutes + "<span>minutes</span>");
        $("#seconds").html(seconds + "<span>seconds</span>");		
  
    }
  
    setInterval(function() { makeTimer(); }, 1000);
  });
  

  $(document).ready(function(){
    let scroll_link = $('.scroll');
   
     //smooth scrolling -----------------------
     scroll_link.click(function(e){
         e.preventDefault();
         let url = $('body').find($(this).attr('href')).offset().top;
         $('html, body').animate({
           scrollTop : url
         },700);
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active');
         return false;	
      });
   });