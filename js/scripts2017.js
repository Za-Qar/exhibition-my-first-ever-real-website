
/* 
	Das hier schreibt man, damit sicher gestellt ist, das jQuery komplett geladen wurde
	und alle PlugIns für jQuery vorhanden sind. Sonst könnte es sein, dass man einen
	Befehl aufruft, der noch gar nicht geladen wurde!
*/


$(function () {
	
	/* Beispiel für die Aktivierung des Bootstrap Tooltip */
	
	setTimeout(function(){
		$(".test").addClass("open");
	}, 1500);

	setTimeout(function(){
		$(".Strenge").addClass("open");
	}, 4000);

	setTimeout(function(){
	$(".Strenge01").addClass("open");
	}, 4000);



	setTimeout(function(){
		$(".test02").addClass("open");
	}, 1000);

	setTimeout(function(){
		$(".Drang").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".Drang01").addClass("open");
	}, 4000);




	setTimeout(function(){
		$(".test03").addClass("open");
	}, 2000);

	setTimeout(function(){
		$(".Muse").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".Muse01").addClass("open");
	}, 4000);



	setTimeout(function(){
		$(".date").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".opening").addClass("open");
	}, 4000);















	setTimeout(function(){
		$(".testbig").addClass("open");
	}, 1500);

	setTimeout(function(){
		$(".Strengebig").addClass("open");
	}, 4000);

	setTimeout(function(){
	$(".Strenge01big").addClass("open");
	}, 4000);



	setTimeout(function(){
		$(".test02big").addClass("open");
	}, 1000);

	setTimeout(function(){
		$(".Drangbig").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".Drang01big").addClass("open");
	}, 4000);




	setTimeout(function(){
		$(".test03big").addClass("open");
	}, 2000);

	setTimeout(function(){
		$(".Musebig").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".Muse01big").addClass("open");
	}, 4000);



	setTimeout(function(){
		$(".datebig").addClass("open");
	}, 4000);

	setTimeout(function(){
		$(".openingbig").addClass("open");
	}, 4000);

});








function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}