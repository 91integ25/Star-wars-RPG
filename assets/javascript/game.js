var starwars ={ 
	obi:120,
	darthSidious: 180,
	darthMaul: 150,
	luke: 100
}
var obi = {
	name:'obi',
	attack:0,
	HP:120
}
var DarthM = {
	name:'obi',
	attack:25,
	HP:180
}
var darthS = {
	name:'obi',
	attack:20,
	HP:150
}
var luke = {
	name:'obi',
	attack:5,
	HP:100
}
	
	
$(document).ready(function () {
var lean = true
$('.description').on('click', function(){
	if(lean){
		lean = false;
		var fighters = $('.description');
		console.log($(this));
		$('#opponents').append(fighters);
		$('.position').append($(this));
		
	}
	else if($('#currentOpp').is(':parent')){
		console.log('attack fighter');
	}
	else{
		$('#currentOpp').append($(this));
	}

});

$('.attack').on('click', function() {
 	if($('#currentOpp').is(':empty')){
 		console.log('chooseOpp');
 	}
 	else{
 			console.log($('.description'));
 			console.log($('#currentOpp'));
 	}
});


});
