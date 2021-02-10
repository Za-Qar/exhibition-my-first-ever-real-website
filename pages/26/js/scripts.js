
/* 
	Das hier schreibt man, damit sicher gestellt ist, das jQuery komplett geladen wurde
	und alle PlugIns für jQuery vorhanden sind. Sonst könnte es sein, dass man einen
	Befehl aufruft, der noch gar nicht geladen wurde!
*/


$(function () {
	
	/* Beispiel für die Aktivierung des Bootstrap Tooltip */
	
	$('[data-toggle="tooltip"]').tooltip();
	
});

/* 
	Das hier schreibt man, damit sicher gestellt ist, das jQuery komplett geladen wurde
	und alle PlugIns für jQuery vorhanden sind. Sonst könnte es sein, dass man einen
	Befehl aufruft, der noch gar nicht geladen wurde!
*/


$(function () {
	
	/* Beispiel für die Aktivierung des Bootstrap Tooltip */
	
	
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