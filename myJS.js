function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    /*ezek a 3 sor a hamburger menühöz kell, így tudjuk, hogy mikor van nyitva vagy csukva*/
    document.getElementById("header").classList.toggle("nem_latszik_a_menutol_a_logo");
    /*ez azért kell, mert szerettem volna ha a logó akkor is látszik, ha ki van nyitva a menü (a telefonos nézetet kivéve)*/
  }
  function csapolas(){
    let alapallapot = 10
    let akt_kep = 1;
    let osszeskep = new Array();
    for(i=1; i<6; i++){
      document.getElementById("bierchen").src = bier[akt_kep].src;
	        ++kepszam;
	        if (kepszam > 5) kepszam = 1;
	        document.getElementById("kep").src == bier[akt_kep].src;
    }
  }
  document.getElementById("bier_gomb").addEventListener("click", csapolas())