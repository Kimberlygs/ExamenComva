$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

	$("li.hide").css("display","none");
	$(".menuClick").on("click",function(e){
		$("li.hide").slideToggle();
		e.preventDefault();
	});


	$('.grap').hover(function () {
        this.src = 'images/grapHover.png';
    }, function () {
        this.src = 'images/grap.png';
    });

    $('.code').hover(function () {
        this.src = 'images/codeHover.png';
    }, function () {
        this.src = 'images/code.png';
    });

     $('.mob').hover(function () {
        this.src = 'images/mobHover.png';
    }, function () {
        this.src = 'images/mob.png';
    });
});