// JavaScript Document

$(document).ready (function(e){
	document.addEventListener("deviceready",function(){
	$('#beep').tap(function(){
					navigator.notification.beep(1);
	});//Tap del beep

	$('#vibrador').tap(function(){
					navigator.vibrate(1000);
	});//Tap del vibrar
	},false);//deviceready
});//ready