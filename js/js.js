// JavaScript Document
$(document).ready(function() {	
	$('.share').mouseenter(function(){
		$(this).animate({left:'0px'})
	})
	$('.share').mouseleave(function(){
		$(this).animate({left:'-100px'})
	})
		
	$('#li1').mouseenter(function(){
		$('.xiala1').slideToggle();
	})
	$('#li1').mouseleave(function(){
		$('.xiala1').slideToggle();
	})	
	
	$('#li2').mouseenter(function(){
		$('.xiala2').slideToggle();
	})
	$('#li2').mouseleave(function(){
		$('.xiala2').slideToggle();
	})
});