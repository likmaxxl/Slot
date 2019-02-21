var dugme = document.getElementsByClassName('dugme')[0].getElementsByTagName('input')[0];
var credit = document.getElementsByClassName('credit')[0].getElementsByTagName('input')[0];
var uplati = document.getElementsByClassName('uplati')[0];
var unesiKr = document.getElementById('uplata');
var wrap = document.getElementById('wrap');
var ulogTrenutni = document.getElementsByClassName('ullll')[0].getElementsByTagName('input')[3];
var u5 = document.getElementsByClassName('ullll')[0].getElementsByTagName('input')[0];
var u10 = document.getElementsByClassName('ullll')[0].getElementsByTagName('input')[1];
var u15 = document.getElementsByClassName('ullll')[0].getElementsByTagName('input')[2];
var body = document.getElementsByTagName('body')[0];
var wrap = document.getElementById('wrap');
var pocetna = document.getElementById('wrp'); //pocetna
var win = document.getElementsByClassName('win')[0].getElementsByTagName('input')[0];
var slika0 = document.getElementsByClassName('slx')[0].getElementsByTagName('img')[0];
var pic1 = document.getElementsByClassName('slx')[0];
var pic2 = document.getElementsByClassName('slx')[1];
var pic3 = document.getElementsByClassName('slx')[2];
var slots = document.getElementById('slots1');

//pocetna UPLATI
uplati.addEventListener('click', function(e) {
  if (unesiKr.value <= 200 && unesiKr.value >= 15) {
    unesiKr.value;
    credit.value = unesiKr.value;
    wrap.style.display = "block";
    wrp.style.display = "none";
  } else {
    alert('Minimalna uplata je 100$ a maksimalna 15$');
  }

});


//ULOG 5, 10, 15
function ulgg(u) {
  ulogTrenutni.value = u.value;

}





//SPIN BUTTON--------------------------
dugme.addEventListener('click', clc);

function clc() {
  if (dugme) {
    dugme.disabled = true;
    u5.disabled = true;
    u10.disabled = true;
    u15.disabled = true;
    ulogTrenutni.disabled = true;
  }



  slots.classList.remove("slots111");
  win.classList.remove("wn1");
  win.value = "";
  if (credit.value < 15 || credit.value < 10 || credit.value < 5) {
    ulogTrenutni.value = credit.value;

  }
  credit.value -= ulogTrenutni.value;
/*okretanje slotova,odnosno menjanje cetiri slike u intervalu*/
  function runX() {

    ulogTrenutni.disabled = true;
    var x = Math.floor(Math.random() * 4) + 1;
    var y = Math.floor(Math.random() * 4) + 1;
    var z = Math.floor(Math.random() * 4) + 1;
    var w = Math.floor(Math.random() * 4) + 1;
    var img = '<img src="images/' + x + '.gif" alt="">';
    var img1 = '<img src="images/' + y + '.gif" alt="">';
    var img2 = '<img src="images/' + z + '.gif" alt="">';
    var img3 = '<img src="images/' + w + '.gif" alt="">';

    var pc1 = pic1.innerHTML = img;
    var pc2 = pic2.innerHTML = img1;
    var pc3 = pic3.innerHTML = img2;

    x++;
    y++;
    z++;
    if (x > 3) {
      x = 1;
    }
    if (y > 3) {
      y = 1;
    }
    if (z > 3) {
      z = 1;
    }
  }

  var inter = setInterval(runX, 100);
  /*Nako zavrsetka intervala,odnosno menjanja slotova,dugmad za ulog su aktivna,racunanje dobitka*/
  setTimeout(clr, 2000);

  function clr() {
    clearInterval(inter);
    u5.disabled = false;
    u10.disabled = false;
    u15.disabled = false;
    dugme.disabled = false;
    if (inter) {
      if (pic1.innerHTML == pic2.innerHTML || pic2.innerHTML == pic3.innerHTML) {//ako su prva i duga i druga i treca slika iste
        credit.value = credit.value * 1 + ulogTrenutni.value * 2;
        win.className += ' wn1';
        win.value = "WIN " + ulogTrenutni.value * 2 + "$";

      }
      if (pic1.innerHTML == pic2.innerHTML && pic2.innerHTML == pic3.innerHTML) {//ako su sve tri slike iste
        credit.value = credit.value * 1 + ulogTrenutni.value * 4;
        win.className += ' wn1';
        win.value = "WIN " + ulogTrenutni.value * 4 + "$";
        slots.className += ' slots111';
      }
    }

/*ako je kredit 0 ceo slot ide levo,zatim se ukljucuje pozadina GAME OVER i nako toga
location reload odnosno pocetna strana*/


    if (credit.value <= 0 || credit.value == "") {
      dugme.disabled = true;

    }

    if (credit.value <= 0) {
      setTimeout(function() {
        pocetna.style.display = 'none';
  var left=0;
setInterval(function() {

  if(left<=0){
    left-=20;

  }
  wrap.style.position = "relative";
  wrap.style.left = left+'px';
},10);
  body.classList.add('body1');
}, 2000);
      setTimeout(function() {
        location.reload();
      }, 9000);
    }

  }




}
