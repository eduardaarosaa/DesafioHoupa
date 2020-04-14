function slide1() {
  document.getElementById('id').src = "assets/banner.png";
  setTimeout("slide2()", 2000)
}

function slide2() {
  document.getElementById('id').src = "assets/banner-02.png";
  setTimeout("slide3()", 2000)
}

function slide3() {
  document.getElementById('id').src = "assets/banner-03.png";
  setTimeout("slide1()", 2000)
}

function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}