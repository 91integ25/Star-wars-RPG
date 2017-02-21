var obi = 120,
	darthSidious = 180,
	darthMaul = 150,
	luke = 100;
	
$(document).ready(function () {

	function choosePlayer() {
		
	
	$("#fighter1").on("click", function () {
		$("#opponents").append($("#content2, #content3, #content4"));
		$("#content4, #content3, #content2").css("background-color", "red");
	})

	$("#fighter2").on("click", function () {
		$("#opponents").append($("#content1, #content3, #content4"));
		$("#content4, #content3, #content1").css("background-color", "red");
	})

	$("#fighter3").on("click", function () {
		$("#opponents").append($("#content2, #content1, #content4"));
		$("#content4, #content1, #content2").css("background-color", "red");
	})

	$("#fighter4").on("click", function () {
		$("#opponents").append($("#content2, #content3, #content1"));
		$("#content1, #content3, #content2").css("background-color", "red");

	})
}

choosePlayer();

function chooseOpponent() {
	$("#fighter1").on("click", function () {
		$("#currentFighter").append($("#content2, #content3, #content4"));
		$("#content4, #content3, #content2").css("background-color", "red");
	})

	$("#fighter2").on("click", function () {
		$("#currentFighter").append($("#content1, #content3, #content4"));
		$("#content4, #content3, #content1").css("background-color", "red");
	})

	$("#fighter3").on("click", function () {
		$("#currentFighter").append($("#content2, #content1, #content4"));
		$("#content4, #content1, #content2").css("background-color", "red");
	})

	$("#fighter4").on("click", function () {
		$("#currentFighter").append($("#content2, #content3, #content1"));
		$("#content1, #content3, #content2").css("background-color", "red");
	})
}



})
