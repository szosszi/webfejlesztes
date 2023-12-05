function menuOnClick() {
    document.getElementById("menu-ikon").classList.toggle("valtozas");
    document.getElementById("nav").classList.toggle("valtozas");
    document.getElementById("menu-hatter").classList.toggle("valtozas-hatter");
    /*ezek a 3 sor a hamburger menühöz kell, így tudjuk, hogy mikor van nyitva vagy csukva*/
    document.getElementById("header").classList.toggle("nem_latszik_a_menutol_a_logo");
    /*ez azért kell, mert szerettem volna ha a logó akkor is látszik, ha ki van nyitva a menü (a telefonos nézetet kivéve)*/
  }
  
function csapolas(){
    document.getElementById("a_kerdes").style.fontSize = "initial";
    const gombom = document.getElementById("bier_gomb");
    gombom.setAttribute("class", "nemlatszik_gomb");
   
    
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/2.svg";
      
    }, 1000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/3.svg";
      
    }, 2000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/4.svg";
      
    }, 3000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/5.svg";
      
    }, 4000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/6.svg";
      
    }, 5000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/7.svg";
      
    }, 6000);
    setTimeout(function(){
      document.getElementById("trinken_gomb").setAttribute("class", "button");
    }, 6500);
  }


  function huzora(){
    const gombom2 = document.getElementById("trinken_gomb");
    gombom2.setAttribute("class", "nemlatszik_gomb");
    
    document.getElementById("bier_kep").src = "bier/5.svg";
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/4.svg";
      
    }, 1000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/3.svg";
      
    }, 2000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/2.svg";
      
    }, 3000);
    setTimeout(function(){
      document.getElementById("bier_kep").src = "bier/1.svg";
      
    }, 4000);
    setTimeout(function(){
      let kerdez = document.getElementById("a_kerdes").innerText;
      
        
      if (kerdez == "Lust auf lecker Bierchen?"){
        kerdez = "Noch ein?";
        document.getElementById("a_kerdes").innerText = kerdez;
      }
      else{
        if(kerdez == "Noch ein?"){
          kerdez = "3. Bierchen?"
          document.getElementById("a_kerdes").innerText = kerdez;
        }
        else{
          let valtozo_szam = parseInt(kerdez.substring(0,1));
          valtozo_szam = valtozo_szam+1;
          kerdez = valtozo_szam +". Bierchen?";
          document.getElementById("a_kerdes").innerText = kerdez;
      }}
      
      document.getElementById("a_kerdes").style.fontSize = "xx-large";
    }, 4500);
    setTimeout(function(){
      
      document.getElementById("bier_gomb").removeAttribute("class");
      document.getElementById("bier_gomb").setAttribute("class", "button");
      
      
    }, 4000);
  }
  

