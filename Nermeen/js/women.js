$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#gotop').fadeIn();
        }
        else{
            $('#gotop').fadeOut();
        }
    });
    $('#gotop').click(function(){
       $('html,body').animate({
           scrollTop : 0,
       },1000) 
    });
    $('#btn1').click(function(){
        $('#figcaption1').slideToggle(1000);
    })
    $('#btn2').click(function(){
        $('#figcaption2').slideToggle(1000);
    })
    $('#btn3').click(function(){
        $('#figcaption3').slideToggle(1000);
    })
    $('#btn4').click(function(){
        $('#figcaption4').slideToggle(1000);
    })
	$(".imgg").click(function(){
	  var x=prompt("what is your opinion");

		
	})

});


