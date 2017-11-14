$(document).ready(function(){
	$(".btn").mouseenter(function(){
		$("button a").css({'color':'#EEC643'});
	});
	$(".btn").mouseleave(function(){
		$("button a").css({'color':'#141414'});
	});

	$(".h-btn").mouseenter(function(){
		$(this).css({'color':'#EEC643'});
	});
	$(".h-btn").mouseleave(function(){
		$(this).css({'color':'#141414'});
	});
});


higherBtn.onclick = function showChords() {
	var a = document.getElementById('firstChord').value;
	var b = document.getElementById('secondChord').value;
	var c = document.getElementById('thirdChord').value;
	var d = document.getElementById('fourthChord').value;
	var e = document.getElementById('fifthChord').value;
	var f = document.getElementById('sixtChord').value;
	var g = document.getElementById('seventhChord').value;
	var h = document.getElementById('eightChord').value;
	chordsShow.innerHTML = a+' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+' '+h;
	chordsShow.style.textAlign = 'center';

}